var documenterSearchIndex = {"docs":
[{"location":"Shapes/","page":"Shapes","title":"Shapes","text":"Circle\nEllipse\nLine\nPolygon\nRect\nShapeStim","category":"page"},{"location":"Shapes/#PsychoJL.Circle","page":"Shapes","title":"PsychoJL.Circle","text":"Circle()\n\nConstructor for an Circle object\n\nInputs:\n\nwin::Window \npos::Vector{Int64}   \nrad::Int64 ......radius \nlineWidth::Int64\t\t\t\t\nlineColor::Vector{Int64}\nfillColor::Vector{Int64}\nfill::Bool ......fill or not\n\nOutputs: None Methods: draw()\n\n\n\n\n\n","category":"type"},{"location":"Shapes/#PsychoJL.Ellipse","page":"Shapes","title":"PsychoJL.Ellipse","text":"Ellipse()\n\nConstructor for an Ellipse object\n\nInputs:\n\nwin::Window \npos::Vector{Int64}   \nrx::Int64 ......horizontal radius  \nry::Int64 ......vertical radius\nlineWidth::Int64\t\t\t\t\nlineColor::Vector{Int64}\nfillColor::Vector{Int64}\nfill::Bool ......fill or not\n\nOutputs: None Methods: draw()\n\n\n\n\n\n","category":"type"},{"location":"Shapes/#PsychoJL.Line","page":"Shapes","title":"PsychoJL.Line","text":"Line()\n\nConstructor for a Line object\n\nConstructor inputs:\n\nwin::Window\nstartPoint::Vector{Int64}\nendPoint::Vector{Int64}\nwidth::Int64\t\t\t\t\nlineColor::Vector{Int64}\n\nOutputs: None\n\nMethods: draw()\n\n\n\n\n\n","category":"type"},{"location":"Shapes/#PsychoJL.Polygon","page":"Shapes","title":"PsychoJL.Polygon","text":"Polygon()\n\nConstructor for a regular Polygon object, such as a pentagon or hexagon.\n\nConstructor inputs:  \n\nwin::Window,\npos::Vector{Int64}......[x,y] coordinates of center\nrad::Int64......radius\nsides::Int64\n\nOptional constructor inputs:\n\nunits::String......(default is \"pixel\"\nlineWidth::Int64......(default is 1)\nlineColor::Vector{Int64}......default is (128, 128, 128)\n\nFull list of fields\n\nwin::Window,\npos::Vector{Int64}\nrad::Int64......radius\nsides::Int64\nunits::String\nlineWidth::Int64\t\t\t\t\t\nlineColor::Vector{Int64}\t\t\n\nMethods: draw()\n\n\n\n\n\n","category":"type"},{"location":"Shapes/#PsychoJL.Rect","page":"Shapes","title":"PsychoJL.Rect","text":"Rect()\n\nConstructor for a Rect object\n\nConstructor inputs:  \n\nwin::Window,\nwidth::Int64 \nheight::Int64 \npos::Vector{Int64}\tposition\n\nOptional constructor inputs:\n\nunits::String......(default is \"pixel\"\nlineWidth::Int64......(default is 1)\nlineColor::Vector{Int64}......default is (128, 128, 128)\nfillColor::Vector{Int64}......default is (128, 128, 128)\nori::Float64 = 0.0......(orientation in degrees)\t\t\nopacity::Int64......(default is 255)\n\nFull list of fields\n\nwin::Window\nwidth::Int64\t\t\t\t\t\t\t\nheight::Int64\npos::Vector{Int64}\nunits::String\nlineWidth::Int64\t\t\t\t\t\nlineColor::Vector{Int64}\t\t\nfillColor::Vector{Int64}\t\t\t\nori::Float64\t\t\t\t\t\t\t\nopacity::Int64\t\t\t\t\t\t\t\nSDLRect::SDL_Rect\n\nMethods: draw()\n\n\n\n\n\n","category":"type"},{"location":"Shapes/#PsychoJL.ShapeStim","page":"Shapes","title":"PsychoJL.ShapeStim","text":"ShapeStim()\n\nConstructor for a ShapeStim object, which is a polygon defined by vertices.\n\nConstructor inputs:  \n\nwin::Window,\nvertices::Vector{Vector{Int64}} \n\nOptional constructor inputs:\n\nunits::String......(default is \"pixel\"\nlineWidth::Int64......(default is 1)\nlineColor::Vector{Int64}......default is (128, 128, 128)\n\nFull list of fields\n\nwin::Window\nvertices::Vector{Vector{Int64}} \n\nExample: [ [300, 10], [400, 5], [410,150], [320, 100] ,[290, 20] ]\n\nunits::String\nlineWidth::Int64\t\t\t\t\t\nlineColor::Vector{Int64}\t\t\n\nMethods: draw()\n\n\n\n\n\n","category":"type"},{"location":"Shapes/#draw(various-shape-types)-Method","page":"Shapes","title":"draw(various shape types) - Method","text":"","category":"section"},{"location":"Shapes/","page":"Shapes","title":"Shapes","text":"Draws the shape (Line, Rect, Ellipse, TextStim, etc.) into the back buffer.","category":"page"},{"location":"Shapes/","page":"Shapes","title":"Shapes","text":"Example:","category":"page"},{"location":"Shapes/","page":"Shapes","title":"Shapes","text":"\n\tnewRect = Rect(myWin, \n\t\t\t100,\t\t\t# width\n\t\t\t100, \t\t\t# height\n\t\t\t[200,200],\t\t# position\n\t\t\tlineColor = [255,0,0], \n\t\t\tfillColor = [255,128,128] \n\t\t\t)\n\tdraw(newRect) \t\t# in PsychoPy this would have been newRect.draw()","category":"page"},{"location":"Shapes/","page":"Shapes","title":"Shapes","text":"\"\"\"","category":"page"},{"location":"TextStim/","page":"Text","title":"Text","text":"TextStim","category":"page"},{"location":"TextStim/#PsychoJL.TextStim","page":"Text","title":"PsychoJL.TextStim","text":"TextStim()\n\nConstructor for a TextStim object\n\nConstructor inputs:\n\nwin::Window\ntextMessage::String.........default = \"future text\"\npos::Vector{Int64}........position: default  = [10,10]\n\nOptional constructor inputs:\n\ncolor::Vector{Int64}.........default = (128, 128, 128)\nfontName::String = \"\",\nfontSize::Int64 = 12,.........default = 12\nscale::Float64 = 1.0,.........not the same as font size\nfont::Any.........default is taken from Window\nhorizAlignment::Int64.........default = 1, 0 = center, -1 = right\nvertAlignment::Int64 = 1.........default = 1, 0 = center, -1 = bottom\nstyle::String.........default = \"normal\", options include \"bold\" and \"italic\"\norientation.........orientation in degrees\n\nMethods:\n\ndraw()\n\nNotes: Using different font sizes requires loading them as different fonts.  For now it is easier to load a large version of a font and using scale to scale the size of the resulting image.\n\n\n\n\n\n","category":"type"},{"location":"TextStim/#draw(various-shape-types)-Method","page":"Text","title":"draw(various shape types) - Method","text":"","category":"section"},{"location":"TextStim/","page":"Text","title":"Text","text":"Draws the shape (Line, Rect, Ellipse, TextStim, etc.) into the back buffer.","category":"page"},{"location":"TextStim/","page":"Text","title":"Text","text":"Example:","category":"page"},{"location":"TextStim/","page":"Text","title":"Text","text":"\n\tnewRect = Rect(myWin, \n\t\t\t100,\t\t\t# width\n\t\t\t100, \t\t\t# height\n\t\t\t[200,200],\t\t# position\n\t\t\tlineColor = [255,0,0], \n\t\t\tfillColor = [255,128,128] \n\t\t\t)\n\tdraw(newRect) \t\t# in PsychoPy this would have been newRect.draw()","category":"page"},{"location":"TextStim/","page":"Text","title":"Text","text":"\"\"\"","category":"page"},{"location":"Timings/","page":"Timing","title":"Timing","text":"startTimer(win::Window)\nstopTimer(win::Window)","category":"page"},{"location":"Timings/#PsychoJL.startTimer-Tuple{Window}","page":"Timing","title":"PsychoJL.startTimer","text":"startTimer(win::Window)\n\nStarts a timer.  Only one timer can run at a time. If you need more than tha one timer, use Julia's time() function.\n\nInputs:\n\nwin::Window\nwaitTime::Float64  default is milliseconds\n\nOutputs: nothing\n\n\n\n\n\n","category":"method"},{"location":"Timings/#PsychoJL.stopTimer-Tuple{Window}","page":"Timing","title":"PsychoJL.stopTimer","text":"stopTimer(win::Window)\n\nStops the global timer and returns the time taken. If you need more than one timer, use Julia's time() function.\n\nInputs:\n\nwin::Window\n\nOutputs:  \tThe time in [default] milliseconds.\n\n\n\n\n\n","category":"method"},{"location":"Timings/#Alternative-approach","page":"Timing","title":"Alternative approach","text":"","category":"section"},{"location":"Timings/","page":"Timing","title":"Timing","text":"An alterntiave to calling these functions is to use Julia's built-in time() function, which returns the current time in seconds.","category":"page"},{"location":"Timings/","page":"Timing","title":"Timing","text":"Example:","category":"page"},{"location":"Timings/","page":"Timing","title":"Timing","text":"\t...\n\tdraw(myStim)\t\t\t\t\t# draw stimulus\n\tflip(win)\t\t\t\t\t# flip the window onto the screen\n\tstartTime = time()\t\t\t\t# get the current time\n\tkeypressed = getKey(win)\t\t\t# wait for a keypress\n\tstopTime = time()\t\t\t\t# get the current time \n\ttimeTaken = stopTime - startTime\n\tprintln(\"It took \", timeTaken * 1000,\" milliseconds for a keypress.\")","category":"page"},{"location":"Timings/","page":"Timing","title":"Timing","text":"\"\"\"","category":"page"},{"location":"ImageStim/","page":"Images","title":"Images","text":"ImageStim\ndraw(theImageStim::ImageStim; magnification::Float64)","category":"page"},{"location":"ImageStim/#PsychoJL.ImageStim","page":"Images","title":"PsychoJL.ImageStim","text":"ImageStim()\n\nConstructor for an ImageStim object\n\nConstructor inputs:\n\nwin::Window\nimageName::String.......includes path\npos::Vector{Int64}\n\nOptional constructor inputs:\n\nimage::Ptr{SDL_Texture}\nwidth::Int64\nheight::Int64\n\nMethods:\n\ndraw()\n\nNotes: width and height are automatically calculated during ImageStim construction.\n\n\n\n\n\n","category":"type"},{"location":"ImageStim/#PsychoJL.draw-Tuple{ImageStim}","page":"Images","title":"PsychoJL.draw","text":"draw(theImageStim::ImageStim; magnification::Float64)\n\nDraws an ImageStim to the back buffer.\n\nInputs:\n\ntheImageStim::ImageStim\n\nOptional Inputs:\n\nmagnification::Float64\n\n\n\n\n\n","category":"method"},{"location":"InputEvents/","page":"Input Events","title":"Input Events","text":"getKey(win::Window)\nwaitKeys(win::Window, waitTime::Float64)","category":"page"},{"location":"InputEvents/#PsychoJL.getKey-Tuple{Window}","page":"Input Events","title":"PsychoJL.getKey","text":"getKey(win::Window)\n\nWaits until a key is pressed.\n\nInputs:\n\nwin::Window\n\nOutputs: returns the character that was pressed\n\nLimitations: currently only returns character keys. Arrow keys, tab, return, etc. do not work.\n\n\n\n\n\n","category":"method"},{"location":"InputEvents/#PsychoJL.waitKeys-Tuple{Window, Float64}","page":"Input Events","title":"PsychoJL.waitKeys","text":"waitKeys(win::Window, waitTime::Float64)\n\nWaits for a predetermined time for a keypress. Returns immediately when a key is pressed or the timer runs out.\n\nInputs:\n\nwin::Window\nwaitTime::Float64  default is milliseconds\n\nOutputs: returns the character that was pressed\n\nLimitations: currently only returns character keys. Arrow keys, tab, return, etc. do not work.\n\n\n\n\n\n","category":"method"},{"location":"Windows/","page":"Windows","title":"Windows","text":"Window\ncloseAndQuitPsychoJL(win::Window)\ncloseWinOnly(win::Window)\nflip(win::Window)\ngetPos(win::Window)\ngetSize(win::Window)\nhideWindow(win::Window)\nmouseVisible(visibility::Bool)\nsetFullScreen(win::Window, mode::Bool)","category":"page"},{"location":"Windows/#PsychoJL.Window","page":"Windows","title":"PsychoJL.Window","text":"Window()\n\nConstructor for a Window object\n\nConstructor inputs:\n\nsize::MVector{2, Int64}\nfullScreen::Bool\n\nOptional constructor inputs:\n\ncolor::MVector{3, Int64}\ncolorSpace::String  .......Future.  Not implemented yet\npos::MVector{2, Float64}\t......position\ntimeScale::String\t.......default = \"milliseconds\"\ntitle::String\t......default = \"Window\"\n\nFull list of fields\n\nwin::Ptr{SDL_Window}\nsize::MVector{2, Int64}\t\t\npos::MVector{2, Int64}\t......position\ncolor::MVector{3, Int64}\t\t\t\ncolorSpace::String\t\t\t\t\nrenderer::Ptr{SDL_Renderer}\nfont::Ptr{SimpleDirectMediaLayer.LibSDL2.TTFFont}\nboldFont::Ptr{SimpleDirectMediaLayer.LibSDL2.TTFFont}\nitalicFont::Ptr{SimpleDirectMediaLayer.LibSDL2.TTFFont}\nevent::Base.RefValue{SDL_Event} \t\t\nfullScreen::Bool\ntimeScale::String .......defaults is milliseconds.  Other option is seconds\ntitle::String\nstartTime::Float64 .......global proximy for startTime() and stopTime()\n\nMethods:\n\ncloseAndQuitPsychoJL()\ncloseWinOnly()\nflip()\ngetPos()\ngetSize()\nhideWindow()\nmouseVisible()\nsetFullScreen()\n\n\n\n\n\n","category":"type"},{"location":"Windows/#PsychoJL.closeAndQuitPsychoJL-Tuple{Window}","page":"Windows","title":"PsychoJL.closeAndQuitPsychoJL","text":"closeAndQuitPsychoJL(win::Window)\n\nAttempts to close a PsychoJL Window and quit SDL.\n\n\n\n\n\n","category":"method"},{"location":"Windows/#PsychoJL.closeWinOnly-Tuple{Window}","page":"Windows","title":"PsychoJL.closeWinOnly","text":"closeWinOnly(win::Window)\n\nAttempts to close a PsychoJL Window without quiting SDL.\n\n\n\n\n\n","category":"method"},{"location":"Windows/#PsychoJL.flip-Tuple{Window}","page":"Windows","title":"PsychoJL.flip","text":"flip(win::Window)\n\nFlips the offscreen buffer on screen.  In other words, all of the visual objects that you have drawn offscreen prior to the flip will now become visible.\n\n\n\n\n\n","category":"method"},{"location":"Windows/#PsychoJL.getPos-Tuple{Window}","page":"Windows","title":"PsychoJL.getPos","text":"getPos(win::Window)\n\nReturns the center of the window. This, as well as the dimensions, can chage when going to full screen\n\n\n\n\n\n","category":"method"},{"location":"Windows/#PsychoJL.getSize-Tuple{Window}","page":"Windows","title":"PsychoJL.getSize","text":"getSize(win::Window)\n\nReturns the width and height of the window. Dimensions can chage when going to full screen.\n\n\n\n\n\n","category":"method"},{"location":"Windows/#PsychoJL.hideWindow-Tuple{Window}","page":"Windows","title":"PsychoJL.hideWindow","text":"hideWindow(win::Window)\n\nAttempts to hide a PsychoJL Window.\n\n\n\n\n\n","category":"method"},{"location":"Windows/#PsychoJL.mouseVisible-Tuple{Bool}","page":"Windows","title":"PsychoJL.mouseVisible","text":"mouseVisible(mode::Bool)\n\nHides or shows the cursor\n\n\n\n\n\n","category":"method"},{"location":"Windows/#PsychoJL.setFullScreen-Tuple{Window, Bool}","page":"Windows","title":"PsychoJL.setFullScreen","text":"setFullScreen(win::Window, mode::Bool)\n\nAllows you to flip between windowed and full-screen mode.\n\n\n\n\n\n","category":"method"},{"location":"GUI/","page":"GUI","title":"GUI","text":"displayMessage( message::String)\nDlgFromDict(dlgDict::Dict)","category":"page"},{"location":"GUI/#PsychoJL.displayMessage-Tuple{String}","page":"GUI","title":"PsychoJL.displayMessage","text":"displayMessage( message::String)\n\nDisplays a message along with an \"OK\" button.  Use before opening the main window or after closing the main window.  Useful for displaying errors or experiment completion messages.\n\nInputs: PsychoJL Window, String\n\nOutputs: Nothing\n\n(Image: \"picture of a displayMessage dialog\")\n\n\n\n\n\n","category":"method"},{"location":"GUI/#PsychoJL.DlgFromDict-Tuple{Dict}","page":"GUI","title":"PsychoJL.DlgFromDict","text":"DlgFromDict(dlgDict::Dict)\n\nDisplays a dialog box constructed from a dictionary.\n\nInputs: Dictionary defining the input fields (keys) and pre-filled values (values) for the user dialog\n\nIf the value is a string, that indicates a text input box with a default value. If the value is a tuple, it indicates that the widget should be pop-up menu populated by the choices listed in the tuple\n\nOutputs: Dictionary of responses.  Keys are from the input dictionary.\n\nExample:\n\n\texp_info = Dict(\"subject_nr\"=>0, \"age\"=>0, \"handedness\"=>(\"right\",\"left\",\"ambi\"), \n            \"gender\"=>(\"male\",\"female\",\"other\",\"prefer not to say\"))\n\n\n\tnew_info = DlgFromDict(exp_info)\n\n(Image: alternative text)\n\n\n\n\n\n","category":"method"},{"location":"#Introduction-to-PsychoJL","page":"Home","title":"Introduction to PsychoJL","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"PsychoJL is a module for writing psychology and psychophysics experiments.  The general framework  and style is inspired by PsychoPy, but there has been no collaboration with the authors of PsychoPy.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Matt Peterson, 2023-2024","category":"page"},{"location":"#Manual-Outline","page":"Home","title":"Manual Outline","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"#Overview","page":"Home","title":"Overview","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"PsychoJL is a module for writing psychology experiments.  Typically, before a trial begins,  stimuli are drawn offscreen into the video buffer.  When it is time to present the stimuli, the flip() function is called and the offscreen image is displayed.","category":"page"},{"location":"#Differences-between-PsychoPy-and-PsychoJL","page":"Home","title":"Differences between PsychoPy and PsychoJL","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The main difference between the two involves how objects are called in Julia.  For example, to  make and draw a TextStim, you would write something like this in PsychoPy:","category":"page"},{"location":"","page":"Home","title":"Home","text":"stim = visual.TextStim(win, \n                    \t'Hello World!',\n                    \tpos=(0.0, 0.0),\t\t# center of the screen\n                    \tcolor=(1, 0, 0), \n                    \tcolorSpace='rgb')\nTextStim.draw()","category":"page"},{"location":"","page":"Home","title":"Home","text":"In Julia, it would look like this:","category":"page"},{"location":"","page":"Home","title":"Home","text":"stim = TextStim(win, \n                \"Hello World!\",\n                [300, 100], \t\t# position\n                color=(255, 0, 0))\ndraw(stim)","category":"page"},{"location":"","page":"Home","title":"Home","text":"Notice that Julia does not use the Object.method() syntax of Python.  Instead, the stimulus is passed to the draw() function.","category":"page"},{"location":"","page":"Home","title":"Home","text":"In addition, Julia objects are really structures (data) with a constructor function of the same name.  For example, I can make a new TextStim using the TextStim() constructor function, and latter change one of its properties using dot notation.","category":"page"},{"location":"","page":"Home","title":"Home","text":"stim = TextStim(win, \n                \"Hello World!\",\n                [300, 100], \t\t# position\n                color=(255, 0, 0))\nstim.textMessage = \"Goodbye, world!\"","category":"page"},{"location":"#Performance-Tips","page":"Home","title":"Performance Tips","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Julia can be many orders of magnitude faster than Python. My biggest performance tip is, despite their similarities, do not write Julia programs like you would write a Python program.","category":"page"},{"location":"#Global-Variables","page":"Home","title":"Global Variables","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"For example, although Julia can use global variables, the use of global variables (global constants are OK) prevents the optimizing compiler from optimizing. Instead, pass around structs containing what would have been written as global variables in a Python program. The VisualSearchMain.jl example experiment shows this in action. It uses a struct called ExperimentalDesign. Although the struct definition is in the global scope, an instance of this structure is created in the  function makeExperimentalDesign() and passed around from function-to-function.","category":"page"},{"location":"","page":"Home","title":"Home","text":"mutable struct ExperimentDesign\t \t# we'll pass this around instead of globals\n\tnumTrials::Int64\n\ttrialSS::Vector{Int64}\t\t  \t# this holds the combination of SetSize control \n\ttrialTP::Vector{Int64}\t\t  \t# Target Presence\n\trandomOrder::Vector{Int64}\t  \t# this will hold the random order in which the trials will be displayed.\nend","category":"page"},{"location":"","page":"Home","title":"Home","text":"PsychoJL also makes use of this through the Window instance you create.  You may have noticed that most PsychoJL functions require a window to be passed as one of their parameters.  For example, startTimer() and stopTimer() require a Window to be  passed as one of their arguments. What in the world does timing have to do with a graphical window?  Nothing. However, PsychoJL uses it as a struct that can hold what would have otherwise been a global variable in another language.  Calling startTimer() causes it to store the  starting time in the Window you passsed to it.  Likewise, stopTimer() uses the information stored in the Window structure to calculate the elapsed time.","category":"page"},{"location":"#Variable-Typing","page":"Home","title":"Variable Typing","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Like Python, Julia can infer variables types. However, Julia can be faster when it does not need to infer types.  For example, the parameter for this function is perfectly legal (from a syntactic point of view):","category":"page"},{"location":"","page":"Home","title":"Home","text":"function fancyMath(myArray)\n\tanswer = doSomeStuff(myArray)\n\treturn answer\nend","category":"page"},{"location":"","page":"Home","title":"Home","text":"But, is even better, because it explicitely states the parameter's type:","category":"page"},{"location":"","page":"Home","title":"Home","text":"function fancyMath(myArray::Vector{Float64})\n\tanswer = doSomeStuff(myArray)\n\treturn answer\nend","category":"page"},{"location":"","page":"Home","title":"Home","text":"As you might have noticed by the documentation, PsychoJL is strongly typed.  Future versions, through multiple-dispatch (i.e. overloading) will be less strict with their types. For example, for the startPoint and endPoint, Line() requires a vector of two integers.  In the future, it will allow vectors of floats.","category":"page"},{"location":"","page":"Home","title":"Home","text":"When dividing variables that should remain integers, Julia's integer division operand ÷ (not /!) is  extremely useful. Dividing integers using the standard division operand \\ can return a float. For example:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> x = 255 ÷ 2\n127","category":"page"},{"location":"","page":"Home","title":"Home","text":"vs","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> x = 255 / 2\n127.5","category":"page"},{"location":"","page":"Home","title":"Home","text":"Integer division truncates.  In other situations round(Int64, x) might make more sense.","category":"page"},{"location":"#Integer-Division","page":"Home","title":"Integer Division","text":"","category":"section"},{"location":"#Usage-Rules","page":"Home","title":"Usage Rules","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The function InitPsychoJL() just be called before any PsychoJL functions are called.\nThe Window() constructor for the main window should be called before using any PsychoJL functions, other than GUI calls.\nGUI dialog windows should be called before the main Window has been made.\nGUI dialog windows can be callled after the main Window has been closed.\nDo not taunt Happy Fun Ball.","category":"page"},{"location":"#Example","page":"Home","title":"Example","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The function ","category":"page"},{"location":"","page":"Home","title":"Home","text":"using PsychoJL\n\nfunction DemoWindow()\n\tInitPsychoJL()\n\tmyWin = Window( [1000,1000], false)\t# dimensions, fullscreen = false\n\n\tnewRect = Rect(myWin, \n\t\t\t100,\t\t\t# width\n\t\t\t100, \t\t\t# height\n\t\t\t[200,200],\t\t# position\n\t\t\tlineColor = [255,0,0], \n\t\t\tfillColor = [255,128,128] \n\t\t\t)\n\tdraw(newRect) \t\t# in PsychoPy this would have been newRect.draw()\n\n\tmyText = TextStim(myWin,  \t\t# window\n\t\t\t\"Using a textStim\", \t# text\n\t\t\t[300, 100], \t\t# position\n\t\t\tcolor = [255, 255, 128]\n\t\t\t)\n\tdraw(myText) \t\t# in PsychoPy this would have been myText.draw()\n\tflip(myWin)\n\twait(2000)\t\t# core.wait in Psychopy.  Default timeScale (see Window) is in milliseconds.\nend\n#------\nDemoWindow()","category":"page"},{"location":"#Missing-Functionality","page":"Home","title":"Missing Functionality","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"mouse events\\n timers (timing can be done by using Julia's time() function)\\n pie-wedges\\n","category":"page"},{"location":"#Known-issues","page":"Home","title":"Known issues","text":"","category":"section"},{"location":"#Color","page":"Home","title":"Color","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Currently, color is r,g,b, alpha, with values from 0-255.  Planned color spaces include:","category":"page"},{"location":"","page":"Home","title":"Home","text":"• 0.0 ... 1.0: (Float64)","category":"page"},{"location":"","page":"Home","title":"Home","text":"• -1.0 ... +1.0: (Float64) PsychoPy style color","category":"page"},{"location":"","page":"Home","title":"Home","text":"• Strings: \"red\", \"brown\", \"gray\", etc.","category":"page"},{"location":"#Coordinate-system","page":"Home","title":"Coordinate system","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Currently, the origin is in the top-left and measurements are in pixels. Planned coordinate systems include:","category":"page"},{"location":"","page":"Home","title":"Home","text":"• Percentage of height: origin is in the top left, and x and y coordinates are a percentage of screen height. \tOn a 2560 x 1440, the bottom right coordinate would be ( 1.78, 1.0)","category":"page"},{"location":"","page":"Home","title":"Home","text":"• Psychopy \"height\": origin is in the center of the screen.  Negative y-values are below the origin, and positive are above the origin. \tOn a 2560 x 1440, the top left coordinate would be (-0.89,+0.50), and the bottom right coordinate would be (+0.89,-0.50)","category":"page"},{"location":"#Timescales","page":"Home","title":"Timescales","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The default timescale is milliseconds, but seconds is also an option. The timescale used for your experiment is set by passing milliseconds or seconds as one of the optional  parameters when creating a main window.","category":"page"},{"location":"#Monitors","page":"Home","title":"Monitors","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"There are some issues that need to be worked out when using high-resolution displays suchs Retina displays.  Currently, fullscreen mode draws correctly, but when fullscreen = false,  the image is smaller than expected.","category":"page"},{"location":"#Technology","page":"Home","title":"Technology","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"All graphics and input are handled by SDL.jl.  I translated parts of SDL2_gfxPrimitives from C to Julia, with some code replaced with more efficient algorithms.","category":"page"},{"location":"InitializationAndTiming/","page":"Initialization and Timing","title":"Initialization and Timing","text":"InitPsychoJL()\nwaitTime(win::Window, time::Float64)","category":"page"},{"location":"InitializationAndTiming/#PsychoJL.InitPsychoJL-Tuple{}","page":"Initialization and Timing","title":"PsychoJL.InitPsychoJL","text":"InitPsychoJL()\n\nInitializes PsychoJL module.\n\nInputs: None\n\nOutputs: None\n\n\n\n\n\n","category":"method"},{"location":"InitializationAndTiming/#PsychoJL.waitTime-Tuple{Window, Float64}","page":"Initialization and Timing","title":"PsychoJL.waitTime","text":"waitTime(win::Window, time::Float64)\n\nPauses for a set amount of time. Time scale (second or milliseconds) is set when making the Window.\n\nInputs: PsychoJL Window, 64-bit float\n\nOutputs: Nothing\n\n\n\n\n\n","category":"method"}]
}
