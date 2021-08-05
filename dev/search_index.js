var documenterSearchIndex = {"docs":
[{"location":"reference/#Reference","page":"Reference","title":"Reference","text":"","category":"section"},{"location":"reference/","page":"Reference","title":"Reference","text":"Modules = [Devito]\nOrder   = [:function, :type]","category":"page"},{"location":"reference/#Base.getindex-Tuple{Union{Devito.Function, TimeFunction},Vararg{Any,N} where N}","page":"Reference","title":"Base.getindex","text":"Get symbolic representation for function index object\n\n\n\n\n\n","category":"method"},{"location":"reference/#Base.ndims-Union{Tuple{DiscreteFunction{T,N,M} where M}, Tuple{N}, Tuple{T}} where N where T","page":"Reference","title":"Base.ndims","text":"ndims(x::DiscreteFunction)\n\nReturn the number of dimensions corresponding to the discrete function x.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Base.size-Union{Tuple{DiscreteFunction{T,N,M} where M}, Tuple{N}, Tuple{T}} where N where T","page":"Reference","title":"Base.size","text":"size(x::DiscreteFunction)\n\nReturn the shape of the grid for the discrete function x.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Devito.Max","page":"Reference","title":"Devito.Max","text":"Max(args...)\n\nCan be used in a Devito.Eq to return the minimum of a collection of arguments Example:\n\n    eqmax = Eq(f,Max(g,1))\n\nIs equivalent to f = Max(g,1) for Devito functions f,g\n\n\n\n\n\n","category":"function"},{"location":"reference/#Devito.Min","page":"Reference","title":"Devito.Min","text":"Min(args...)\n\nCan be used in a Devito.Eq to return the minimum of a collection of arguments Example:\n\n    eqmin = Eq(f,Min(g,1))\n\nIs equivalent to f = Min(g,1) for Devito functions f,g\n\n\n\n\n\n","category":"function"},{"location":"reference/#Devito.apply-Tuple{Operator,Vararg{Any,N} where N}","page":"Reference","title":"Devito.apply","text":"apply(operator::Operator; kwargs...)\n\nExecute the Devito operator, Operator.\n\nSee: https://www.devitoproject.org/devito/operator.html?highlight=apply#devito.operator.operator.Operator.apply\n\nNote that this returns a summary::Dict of the action of applying the operator.  This contains information such as the number of floating point operations executed per second.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Devito.backward-Tuple{TimeFunction}","page":"Reference","title":"Devito.backward","text":"backward(x::TimeFunction)\n\nReturns the symbol for the time-backward state of the TimeFunction.\n\nSee: https://www.devitoproject.org/devito/timefunction.html?highlight=forward#devito.types.TimeFunction.backward\n\n\n\n\n\n","category":"method"},{"location":"reference/#Devito.configuration!-Tuple{Any,Any}","page":"Reference","title":"Devito.configuration!","text":"configuration!(key, value)\n\nConfigure Devito.  Examples include\n\nconfiguration!(\"log-level\", \"DEBUG\")\nconfiguration!(\"language\", \"openmp\")\nconfiguration!(\"mpi\", false)\n\n\n\n\n\n","category":"method"},{"location":"reference/#Devito.data-Union{Tuple{DiscreteFunction{T,N,Devito.DevitoMPIFalse}}, Tuple{N}, Tuple{T}} where N where T","page":"Reference","title":"Devito.data","text":"data(x::DiscreteFunction)\n\nReturn the data associated with the grid that corresponds to the discrete function x.  This is the portion of the grid that excludes the halo.  In the case of non-MPI Devito, this returns an array of type DevitoArray.  In the case of the MPI Devito, this returns an array of type DevitoMPIArray.\n\nThe data can be converted to an Array via convert(Array, data(x)).  In the case where data(x)::DevitoMPIArray, this also collects the data onto MPI rank 0.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Devito.data_allocated-Union{Tuple{DiscreteFunction{T,N,Devito.DevitoMPIFalse}}, Tuple{N}, Tuple{T}} where N where T","page":"Reference","title":"Devito.data_allocated","text":"data_allocated(x::DiscreteFunction)\n\nReturn the data associated with the grid that corresponds to the discrete function x.  This is the portion of the grid that includes the inner halo and includes the outer halo.  We expect this to be equivalent to data_with_inhalo.\n\nThe data can be converted to an Array via convert(Array, data(x)).  In the case where data(x)::DevitoMPIArray, this also collects the data onto MPI rank 0.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Devito.data_with_halo-Union{Tuple{DiscreteFunction{T,N,Devito.DevitoMPIFalse}}, Tuple{N}, Tuple{T}} where N where T","page":"Reference","title":"Devito.data_with_halo","text":"data_with_halo(x::DiscreteFunction)\n\nReturn the data associated with the grid that corresponds to the discrete function x.  This is the portion of the grid that excludes the inner halo and includes the outer halo.  In the case of non-MPI Devito, this returns an array of type DevitoArray.  In the case of the MPI Devito, this returns an array of type DevitoMPIArray.\n\nThe data can be converted to an Array via convert(Array, data(x)).  In the case where data(x)::DevitoMPIArray, this also collects the data onto MPI rank 0.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Devito.data_with_inhalo-Union{Tuple{DiscreteFunction{T,N,Devito.DevitoMPIFalse}}, Tuple{N}, Tuple{T}} where N where T","page":"Reference","title":"Devito.data_with_inhalo","text":"data_with_inhalo(x::DiscreteFunction)\n\nReturn the data associated with the grid that corresponds to the discrete function x.  This is the portion of the grid that includes the inner halo and includes the outer halo.  In the case of non-MPI Devito, this returns an array of type DevitoArray.  In the case of the MPI Devito, this returns an array of type DevitoMPIArray.\n\nThe data can be converted to an Array via convert(Array, data(x)).  In the case where data(x)::DevitoMPIArray, this also collects the data onto MPI rank 0.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Devito.dimensions-Union{Tuple{Union{Grid{T,N}, SubDomain{N}, DiscreteFunction{T,N,M} where M}}, Tuple{N}, Tuple{T}} where N where T","page":"Reference","title":"Devito.dimensions","text":"dimensions(x::Union{Grid,DiscreteFunction})\n\nReturns a tuple with the dimensions associated with the Devito grid.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Devito.dx-Tuple{Union{PyCall.PyObject, DiscreteFunction},Vararg{Any,N} where N}","page":"Reference","title":"Devito.dx","text":"dx(f::DiscreteFunction)\n\nReturns the symbol for the first derivative with respect to x.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Devito.dy-Tuple{Union{PyCall.PyObject, DiscreteFunction},Vararg{Any,N} where N}","page":"Reference","title":"Devito.dy","text":"dy(f::DiscreteFunction)\n\nReturns the symbol for the first derivative with respect to y.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Devito.dz-Tuple{Union{PyCall.PyObject, DiscreteFunction},Vararg{Any,N} where N}","page":"Reference","title":"Devito.dz","text":"dz(f::DiscreteFunction)\n\nReturns the symbol for the first derivative with respect to z.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Devito.forward-Tuple{TimeFunction}","page":"Reference","title":"Devito.forward","text":"forward(x::TimeFunction)\n\nReturns the symbol for the time-forward state of the TimeFunction.\n\nSee: https://www.devitoproject.org/devito/timefunction.html?highlight=forward#devito.types.TimeFunction.forward\n\n\n\n\n\n","category":"method"},{"location":"reference/#Devito.grid-Union{Tuple{Devito.Function{T,N,M} where M}, Tuple{N}, Tuple{T}} where N where T","page":"Reference","title":"Devito.grid","text":"grid(f::DiscreteFunction)\n\nReturn the grid corresponding to the discrete function f.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Devito.halo-Union{Tuple{DiscreteFunction{T,N,M} where M}, Tuple{N}, Tuple{T}} where N where T","page":"Reference","title":"Devito.halo","text":"halo(x::DiscreteFunction)\n\nReturn the Devito \"outer\" halo size corresponding to the discrete function f.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Devito.inhalo-Union{Tuple{DiscreteFunction{T,N,M} where M}, Tuple{N}, Tuple{T}} where N where T","page":"Reference","title":"Devito.inhalo","text":"inhalo(x::DiscreteFunction)\n\nReturn the Devito \"inner\" halo size used for domain decomposition, and corresponding to the discrete function f.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Devito.inject-Tuple{SparseTimeFunction,Vararg{Any,N} where N}","page":"Reference","title":"Devito.inject","text":"inject(x::SparseTimeFunction; kwargs...)\n\nGenerate equations injecting an arbitrary expression into a field.\n\nSee: Generate equations injecting an arbitrary expression into a field.\n\nExample\n\nx = SpaceDimension(name=\"x\", spacing=Constant(name=\"h_x\", value=5.0))\nz = SpaceDimension(name=\"z\", spacing=Constant(name=\"h_z\", value=5.0))\ngrid = Grid(\n    dimensions = (x,z),\n    shape = (251,501), # assume x is first, z is second (i.e. z is fast in python)\n    origin = (0.0,0.0),\n    extent = (1250.0,2500.0),\n    dtype = Float32)\n\ntime_range = 0.0f0:0.5f0:1000.0f0\nsrc = SparseTimeFunction(name=\"src\", grid=grid, npoint=1, nt=length(time_range))\nsrc_term = inject(src; field=forward(p), expr=2*src)\n\n\n\n\n\n","category":"method"},{"location":"reference/#Devito.interpolate-Tuple{SparseTimeFunction}","page":"Reference","title":"Devito.interpolate","text":"interpolate(x::SparseTimeFunction; kwargs...)\n\nGenerate equations interpolating an arbitrary expression into self.\n\nSee: https://www.devitoproject.org/devito/sparsetimefunction.html#devito.types.SparseTimeFunction.interpolate\n\nExample\n\nx = SpaceDimension(name=\"x\", spacing=Constant(name=\"h_x\", value=5.0))\nz = SpaceDimension(name=\"z\", spacing=Constant(name=\"h_z\", value=5.0))\ngrid = Grid(\n    dimensions = (x,z),\n    shape = (251,501), # assume x is first, z is second (i.e. z is fast in python)\n    origin = (0.0,0.0),\n    extent = (1250.0,2500.0),\n    dtype = Float32)\n\np = TimeFunction(name=\"p\", grid=grid, time_order=2, space_order=8)\n\ntime_range = 0.0f0:0.5f0:1000.0f0\nnz,nx,δz,δx = size(grid)...,spacing(grid)...\nrec = SparseTimeFunction(name=\"rec\", grid=grid, npoint=nx, nt=length(time_range))\nrec_coords = coordinates(rec)\nrec_coords[1,:] .= δx*(0:nx-1)\nrec_coords[2,:] .= 10.0\n\nrec_term = interpolate(rec, expr=p)\n\n\n\n\n\n","category":"method"},{"location":"reference/#Devito.is_Derived","page":"Reference","title":"Devito.is_Derived","text":"is_Derived(x::Dimension)\n\nReturns true when dimension is derived, false when it is not\n\n\n\n\n\n","category":"function"},{"location":"reference/#Devito.name-Tuple{SubDomain}","page":"Reference","title":"Devito.name","text":"name(subdomain)\n\nreturns the name of the subdomain\n\n\n\n\n\n","category":"method"},{"location":"reference/#Devito.size_with_halo-Union{Tuple{DiscreteFunction{T,N,M} where M}, Tuple{N}, Tuple{T}} where N where T","page":"Reference","title":"Devito.size_with_halo","text":"size_with_halo(x::DiscreteFunction)\n\nReturn the size of the grid associated with x, inclusive of the Devito \"outer\" halo.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Devito.size_with_inhalo-Union{Tuple{DiscreteFunction{T,N,M} where M}, Tuple{N}, Tuple{T}} where N where T","page":"Reference","title":"Devito.size_with_inhalo","text":"size_with_inhalo(x::DiscreteFunction)\n\nReturn the size of the grid associated with z, inclusive the the Devito \"inner\" and \"outer\" halos.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Devito.spacing","page":"Reference","title":"Devito.spacing","text":"spacing(x::Dimension)\n\nSymbol representing the physical spacing along the Dimension.\n\n\n\n\n\n","category":"function"},{"location":"reference/#Devito.subdomains-Union{Tuple{Grid{T,N}}, Tuple{N}, Tuple{T}} where N where T","page":"Reference","title":"Devito.subdomains","text":"subdomains(grid)\n\nreturns subdomains associated with a Devito grid\n\n\n\n\n\n","category":"method"},{"location":"reference/#Devito.symbolic_max","page":"Reference","title":"Devito.symbolic_max","text":"symbolic_max(x::Dimension)\n\nSymbol defining the maximum point of the Dimension\n\n\n\n\n\n","category":"function"},{"location":"reference/#Devito.symbolic_min","page":"Reference","title":"Devito.symbolic_min","text":"symbolic_min(x::Dimension)\n\nSymbol defining the minimum point of the Dimension\n\n\n\n\n\n","category":"function"},{"location":"reference/#Devito.symbolic_size","page":"Reference","title":"Devito.symbolic_size","text":"symbolic_size(x::Dimension)\n\nSymbol defining the size of the Dimension\n\n\n\n\n\n","category":"function"},{"location":"reference/#Devito.Function-Tuple","page":"Reference","title":"Devito.Function","text":"Devito.Function(; kwargs...)\n\nTensor symbol representing a discrete function in symbolic equations.\n\nSee: https://www.devitoproject.org/devito/function.html?highlight=function#devito.types.Function\n\nExample\n\nx = SpaceDimension(name=\"x\", spacing=Constant(name=\"h_x\", value=5.0))\nz = SpaceDimension(name=\"z\", spacing=Constant(name=\"h_z\", value=5.0))\ngrid = Grid(\n    dimensions = (x,z),\n    shape = (251,501), # assume x is first, z is second (i.e. z is fast in python)\n    origin = (0.0,0.0),\n    extent = (1250.0,2500.0),\n    dtype = Float32)\n\nb = Devito.Function(name=\"b\", grid=grid, space_order=8)\n\n\n\n\n\n","category":"method"},{"location":"reference/#Devito.Grid-Tuple","page":"Reference","title":"Devito.Grid","text":"Grid(; shape[, optional key-word arguments...])\n\nConstruct a grid that can be used in the construction of a Devito Functions.\n\nSee: https://www.devitoproject.org/devito/grid.html?highlight=grid#devito.types.Grid\n\nExample\n\nx = SpaceDimension(name=\"x\", spacing=Constant(name=\"h_x\", value=5.0))\nz = SpaceDimension(name=\"z\", spacing=Constant(name=\"h_z\", value=5.0))\ngrid = Grid(\n    dimensions = (x,z), # z is fast (row-major)\n    shape = (251,501),\n    origin = (0.0,0.0),\n    extent = (1250.0,2500.0),\n    dtype = Float32)\n\n\n\n\n\n","category":"method"},{"location":"reference/#Devito.SparseTimeFunction-Tuple","page":"Reference","title":"Devito.SparseTimeFunction","text":"SparseTimeFunction(; kwargs...)\n\nTensor symbol representing a space- and time-varying sparse array in symbolic equations.\n\nSee: https://www.devitoproject.org/devito/sparsetimefunction.html?highlight=sparsetimefunction\n\nExample\n\nx = SpaceDimension(name=\"x\", spacing=Constant(name=\"h_x\", value=5.0))\nz = SpaceDimension(name=\"z\", spacing=Constant(name=\"h_z\", value=5.0))\ngrid = Grid(\n    dimensions = (x,z),\n    shape = (251,501), # assume x is first, z is second (i.e. z is fast in python)\n    origin = (0.0,0.0),\n    extent = (1250.0,2500.0),\n    dtype = Float32)\n\ntime_range = 0.0f0:0.5f0:1000.0f0\nsrc = SparseTimeFunction(name=\"src\", grid=grid, npoint=1, nt=length(time_range))\n\n\n\n\n\n","category":"method"},{"location":"reference/#Devito.SubDomain-Tuple{String,Array{T,1} where T}","page":"Reference","title":"Devito.SubDomain","text":"SubDomain(name, instructions)\n\nCreate a subdomain by passing a list of instructions for each dimension. Using an instruction with (nothing,) implies that the whole dimension should be used for that subdomain, as will (\"middle\",0,0)\n\nExamples:\n\ninstructions = (\"left\",2),(\"middle\",3,3)\nSubDomain(\"subdomain_name\",instructions)\n\nor \n\ninstructions = [(\"right\",4),(\"middle\",1,2)]\nSubDomain(\"subdomain_name\",instructions)\n\nor\n\nSubDomain(\"subdomain_name\",(\"right\",2),(\"left\",1))\n\n\n\n\n\n","category":"method"},{"location":"reference/#Devito.TimeFunction-Tuple","page":"Reference","title":"Devito.TimeFunction","text":"TimeFunction(; kwargs...)\n\nTensor symbol representing a discrete function in symbolic equations.\n\nSee https://www.devitoproject.org/devito/timefunction.html?highlight=timefunction#devito.types.TimeFunction.\n\nExample\n\nx = SpaceDimension(name=\"x\", spacing=Constant(name=\"h_x\", value=5.0))\nz = SpaceDimension(name=\"z\", spacing=Constant(name=\"h_z\", value=5.0))\ngrid = Grid(\n    dimensions = (x,z),\n    shape = (251,501), # assume x is first, z is second (i.e. z is fast in python)\n    origin = (0.0,0.0),\n    extent = (1250.0,2500.0),\n    dtype = Float32)\n\np = TimeFunction(name=\"p\", grid=grid, time_order=2, space_order=8)\n\n\n\n\n\n","category":"method"},{"location":"#Devito.jl","page":"Devito.jl","title":"Devito.jl","text":"","category":"section"},{"location":"","page":"Devito.jl","title":"Devito.jl","text":"This is a Julia API for Devito.  it provides a Julia API's for a sub-set of Devito, supporting Grid's, Function's, TimeFunction's and SparseTimeFunction's for both their serial and domain decomposed MPI variants.","category":"page"},{"location":"#Construction-of-a-Devito-stencil","page":"Devito.jl","title":"Construction of a Devito stencil","text":"","category":"section"},{"location":"","page":"Devito.jl","title":"Devito.jl","text":"The procedure for constructing a stencil operator consists of five parts:","category":"page"},{"location":"","page":"Devito.jl","title":"Devito.jl","text":"Construction of a Grid object containing grid size and spacing information on which the stencil will operate\nConstruction of TimeFunction or Function objects that hold the actual arrays on which the stencil will operate\nConstruction of SparseTimeFunction objects that hold source and receiver data for injection and retrieval during the stencil operation\nConstruction of Eqn objects (equation objects) that specify the equations that the stencil operator will carry out\nConstruction of the operator object which generates the low level C code fo rthe stencil operator","category":"page"},{"location":"","page":"Devito.jl","title":"Devito.jl","text":"Following this the operator may be executed. An example of these five steps is detailed below","category":"page"},{"location":"","page":"Devito.jl","title":"Devito.jl","text":"1. Definition of the Grid object","category":"page"},{"location":"","page":"Devito.jl","title":"Devito.jl","text":"The Grid object is specified by initializing extent, spacing, and origin tuples in the constructor. Dimension objects contain the  abstract spacing variables used by SymPy in specifying abstract equations in the stencil definition","category":"page"},{"location":"","page":"Devito.jl","title":"Devito.jl","text":"dt=1.\nshpe=(20,20)\nspacing=(5.,5.)\norigin=(0.,0.)\nextent=(shpe.-1).*spacing\nspacet=Constant(name=\"h_t\", dt) \nt=TimeDimension(name=\"t\",spacing=spacet)\nspacex=Constant(name=\"h_x\", spacing[1]) \nx=SpaceDimension(name=\"x\",spacing=spacex)\nspacez=Constant(name=\"h_z\", spacing[2])\nz=SpaceDimension(name=\"z\",spacing=spacez)\ngrid=Grid(extent=extent, shape=shpe, origin=origin, dimensions=(x,z), time_dimension=t)","category":"page"},{"location":"","page":"Devito.jl","title":"Devito.jl","text":"Note that unlike with the Devito Python implementation, which is column-major, all tuples involving dimensions are passed in row-major ordering. This row-major ordering convention is consistent throughout Devito.jl","category":"page"},{"location":"","page":"Devito.jl","title":"Devito.jl","text":"2. Construction of time and space functions","category":"page"},{"location":"","page":"Devito.jl","title":"Devito.jl","text":"Parameters on the grid are specified using Function objects, while time dependent fields are specified using TimeFunction objects,  as in this 2D elastic example:","category":"page"},{"location":"","page":"Devito.jl","title":"Devito.jl","text":"so=4\nbx=Devito.Function(name= \"bx\" ,grid=grid, staggered=x,     space_order=so)\nbz=Devito.Function(name= \"bz\" ,grid=grid, staggered=z,     space_order=so)\nc11=Devito.Function(name=\"c11\",grid=grid, space_order=so)\nc33=Devito.Function(name=\"c33\",grid=grid, space_order=so)\nc55=Devito.Function(name=\"c55\",grid=grid, staggered=(x,z), space_order=so)\nc13=Devito.Function(name=\"c13\",grid=grid, space_order=so)\ndata(bx).=mp[:,:,1]\ndata(bz).=mp[:,:,2]\ndata(c11).=mp[:,:,3]\ndata(c33).=mu[:,:,2]\ndata(c55).=mp[:,:,4]\ndata(c13).=mp[:,:,5]\nvx=TimeFunction(name=\"vx\",      grid=grid,space_order=so, staggered=x, time_order=1)\nvz=TimeFunction(name=\"vz\",      grid=grid,space_order=so, staggered=z, time_order=1)\ntauxx=TimeFunction(name=\"tauxx\",grid=grid,space_order=so,                  time_order=1)\ntauzz=TimeFunction(name=\"tauzz\",grid=grid,space_order=so,                  time_order=1)\ntauxz=TimeFunction(name=\"tauxz\",grid=grid,space_order=so, staggered=(x,z), time_order=1)","category":"page"},{"location":"","page":"Devito.jl","title":"Devito.jl","text":"In this example, the data() function returns a view to the Function's internal data, which is then initialized from an externally defined arrays mp and mu.","category":"page"},{"location":"","page":"Devito.jl","title":"Devito.jl","text":"3. Construction of  SparseTimeFunctions","category":"page"},{"location":"","page":"Devito.jl","title":"Devito.jl","text":"SparseTimeFunctions are used to inject source and retrieve receiver information during the stencil operations","category":"page"},{"location":"","page":"Devito.jl","title":"Devito.jl","text":"src = SparseTimeFunction(name=\"src\", grid=grid, npoint=1, nt=nt)\nsrc_coords = coordinates(src)\nsrc_coords .= [625.0; 5.0]\nsrc_data = data(src)\nsrc_data.= ricker(nt,dt,f0)\nsrc_term = inject(src; field=forward(tauxx), expr=src)","category":"page"},{"location":"","page":"Devito.jl","title":"Devito.jl","text":"In this example, the source is created with an external function ricker(), which is then used to initialize the SparseTimeFunction data that will be injected into the time function forward(tauxx)","category":"page"},{"location":"","page":"Devito.jl","title":"Devito.jl","text":"4. Construction of  stencil equations","category":"page"},{"location":"","page":"Devito.jl","title":"Devito.jl","text":"Stencil equations are created using the Eqn constructor ","category":"page"},{"location":"","page":"Devito.jl","title":"Devito.jl","text":"eqvx = Eq(forward(vx), vx + dt*bx*dx(tauxx) + dt*bx*dz(tauxz, x0=z) - dt*damp*vx)\neqvz = Eq(forward(vz), vz + dt*bz*dx(tauxz, x0=x) + dt*bz*dz(tauzz) - dt*damp*vz)","category":"page"},{"location":"","page":"Devito.jl","title":"Devito.jl","text":"In this particular fragment from an elastic 2D example, damp is an externally defined array for damping at the boundaries, vx and vz are particle velocities, and the tau variables are the stresses ","category":"page"},{"location":"","page":"Devito.jl","title":"Devito.jl","text":"5. Construction of the operator","category":"page"},{"location":"","page":"Devito.jl","title":"Devito.jl","text":"Construction of the operator requires a list containing all objects created using the inject(), interpolate(), and Eq() functions:","category":"page"},{"location":"","page":"Devito.jl","title":"Devito.jl","text":"op=Operator(op_list, subs=spacing_map(grid))\napply(op)","category":"page"},{"location":"","page":"Devito.jl","title":"Devito.jl","text":"where op_list contains the objects comprising the stencil.","category":"page"},{"location":"#Data-access","page":"Devito.jl","title":"Data access","text":"","category":"section"},{"location":"","page":"Devito.jl","title":"Devito.jl","text":"Devito.jl provides a Julia array interface for convenient and fast (copy-free) access to the Devito numpy arrays.  For example,","category":"page"},{"location":"","page":"Devito.jl","title":"Devito.jl","text":"using Devito\n\nconfiguration!(\"language\", \"openmpi\")\nconfiguration!(\"mpi\", false)\n\nconfiguration() # show the Devito configuration\n\ng = Grid(shape=(10,20,30))\nf = Devito.Function(name=\"f\", grid=g, space_order=8)\nd = data(f)\nd_with_halo = data_with_halo(f)\nd_with_inhalo = data_with_inhalo(f)","category":"page"},{"location":"","page":"Devito.jl","title":"Devito.jl","text":"In the above code listing:","category":"page"},{"location":"","page":"Devito.jl","title":"Devito.jl","text":"d is a view of the underlying numpy array that excludes Devito's exterior and interior halo padding\nd_with_halo is a view that includes Devito's exterior halo padding, but excludes its interior halo padding\nd_with_inhalo is a view that includes Divito's exterior and interior halo padding","category":"page"},{"location":"","page":"Devito.jl","title":"Devito.jl","text":"If we are running with MPI turned on, then the data, data_with_halo and data_with_inhalo methods return a view to an MPI domain distributed array.  This array can be gathered to the rank 0 MPI rank with the convert method:","category":"page"},{"location":"","page":"Devito.jl","title":"Devito.jl","text":"using Devito\n\nconfiguration!(\"language\", \"openmpi\")\nconfiguration!(\"mpi\", true)\n\ng = Grid(shape=(10,20,30))\nf = Devito.Function(name=\"f\", grid=g, space_order=8)\nd = data(f)\np = parent(d) # array local to this MPI rank\n_d = convert(Array, d) # _d is an Array on MPI rank 0 gathered from `d` which is decomposed accross all MPI ranks","category":"page"},{"location":"","page":"Devito.jl","title":"Devito.jl","text":"Please see the demo folder in this package for more details.","category":"page"},{"location":"","page":"Devito.jl","title":"Devito.jl","text":"In general, the wrapping of Devito functionality uses the same function and argument names as in the original Python implementation, with  python class members being accessed in Julia through functions having the same name as the member, and taking the class object as the first argument. For more details, please refer to the Devito website https://github.com/devitocodes/devito.","category":"page"}]
}
