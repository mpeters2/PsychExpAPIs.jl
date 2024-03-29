using Documenter, PsychExpAPIs
using Dates


println("------------------ NEW MAKE ------------------")
println("----- ", now())
makedocs(	modules = [PsychExpAPIs],
			sitename="PsychExpAPIs.jl",
			checkdocs=:none,

			pages = [
				"Home" => "index.md",
				"Tutorial: Spatial Stroop" => [
					"Tutorial_SpatialStroop.md",
					"Tutorial_SpatialStroop_constants.md",
					"Tutorial_SpatialStroop_main.md",
					"Tutorial_SpatialStroop_ExpDesign.md",
					"Tutorial_SpatialStroop_SubjInfo.md",
					"Tutorial_SpatialStroop_ShowInstructions.md"
					],
				"Initialization and Timing" => "InitializationAndTiming.md",
				"Windows" => "Windows.md",
				"Colors" => "Colors.md",
				"Coordinates Systems" => "Coordinates.md",
				"GUI" => "GUI.md",
				"Images" => "ImageStim.md",			
				"Input Events" => "InputEvents.md",
				"Setter Functions" => "SetterFunctions.md",
				"Shapes" => "Shapes.md",
				"Sound" => "SoundStim.md",
				"Text" => "TextStim.md",
				"Timing" => "Timings.md"

				#=	"Getting Started" => "start.md",
				"Concepts" => "concepts.md",
				"Library" => Any[
					"Agents" => Any[
						"library/Agents/index.md",
						"library/Agents/stationary.md",
						"library/Agents/nonstationary.md"
					],
					"Arms" => Any[
						"library/Arms/index.md",
						"library/Arms/stationary.md",
						"library/Arms/nonstationary.md"
					]
				],
				"Manual" => Any[
					"contributing.md",
					"ack.md"
				]
			=#
			],

		)
deploydocs(
    repo    = "github.com/mpeters2/PsychExpAPIs.jl.git",
    target  = "build",
    deps    = nothing,
    make    = nothing
)

#=
Order   = [:function, :type]

deploydocs(
    repo    = "https://github.com/mpeters2/PsychoJL.jl",
    target  = "build",
    deps    = nothing,
    make    = nothing
)
=#
#=
```@docs
InitPsychoJL()
wait(win::Window, time::Float64)
MakeInt8Color(r,g,b,a)

```

- link to [..core.jl](@ref)
- link to [`InitPsychoJL()`](@ref)

```
@autodocs
Modules = [PsychoJL, core]
Private = false
Order   = [:function, :type]
```

```
checkdocs=:exports
```

```@docs
InitPsychoJL()
waitTime()
```


=#

#=
## Random Auto-generated list of functions and objects.

```@autodocs
Modules = [PsychoJL]
Private = false
Order   = [:function, :type]
```


=#


#=
chapters
		Initialization and timing
	Window
	input
	GUI
	Shapes
	Text
	Images


=#