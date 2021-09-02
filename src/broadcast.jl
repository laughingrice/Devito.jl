using Revise, Devito

# DevitoMPIArray broadcasting implementation 
struct DevitoMPIArrayStyle{N} <: Broadcast.AbstractArrayStyle{N} end

Base.BroadcastStyle(::Type{<:DevitoMPIArray}) = DevitoMPIArrayStyle()

DevitoMPIArrayStyle(::Val{N}) where N = DevitoMPIArrayStyle()

function Base.similar(bc::Broadcast.Broadcasted{DevitoMPIArrayStyle}, ::Type{T}) where {T}
    A = find_DevitoMPIArray(bc)
    similar(A)
end

find_DevitoMPIArray(bc::Broadcast.Broadcasted) = find_DevitoMPIArray(bc.args)
find_DevitoMPIArray(args::Tuple) = find_DevitoMPIArray(find_DevitoMPIArray(args[1]), Base.tail(args))
find_DevitoMPIArray(x) = x
find_DevitoMPIArray(a::DevitoMPIArray, rest) = a
find_DevitoMPIArray(::Any, rest) = find_DevitoMPIArray(rest)

DistributedArrays.localpart(bc::Broadcast.Broadcasted{DevitoMPIArrayStyle}) = 
    Broadcast.Broadcasted{Jets.BlockArrayStyle}(bc.f, map(arg->localpart(arg), bc.args))

function DevitoMPIArray_local_copyto!(dest, bc)
    copyto!(localpart(dest), localpart(bc))
    nothing
end

function Base.copyto!(dest::DevitoMPIArray, bc::Broadcast.Broadcasted{DevitoMPIArrayStyle})
    @sync for pid in procs(dest)
        @async remotecall_fetch(DevitoMPIArray_local_copyto!, pid, dest, bc)
    end
    dest
end

