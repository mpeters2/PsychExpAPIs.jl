export textStim, draw, TextStim

#-================================================================================================================
# TextStim

# Ptr{SimpleDirectMediaLayer.LibSDL2._TTF_Font}

mutable struct TextStim	#{T}
	win::Window
	textMessage::String							# this will need to change to floats for Psychopy height coordiantes
	pos::Vector{Int64}	
	color::Vector{Int64}					# these will need to change to floats to handle Psychopy colors
	fontName::String						
	fontSize::Int64
	font::Ptr{TTF_Font}
	horizAlignment::Int64					# -1 for left, 0 for center, +1 for right
	vertAlignment::Int64					# -1 aligns at top, 0 for center, +1 aligns at bottom
	style::String							# bold, italic, etc.
end

#----------
function textStim(win::Window,				
				textMessage::String =  "future text",
				pos::Vector{Int64} = [10,10];
				color::Vector{Int64} = fill(128, (3)),			# these will need to change to floats to handle Psychopy colors
				fontName::String = "",
				fontSize::Int64 = 12,
				font::Any = nothing,											# font is for internal use and is a pointer to a TTF
				horizAlignment::Int64 = 1,
				vertAlignment::Int64 = 1,
				style::String = "normal"
				)
	if fontName == ""
		font = win.font
	else
		println("*** Notice: have not implemented loading from system fonts yet")
	end


	textStruct = TextStim(win, 
				textMessage ,
				pos,
				color,
				fontName,
				fontSize,
				font,				# these will need to change to floats to handle Psychopy colors
				horizAlignment,
				vertAlignment,
				style
				)
	return textStruct
end
#----------
function draw(text::TextStim)
	if length(text.color) == 4
		color = SDL_Color(text.color[1], text.color[2] , text.color[3], text.color[4])
	elseif length(text.color) == 3
		color = SDL_Color(text.color[1], text.color[2] , text.color[3], 255)
	else
		println("Error in draw(textStim): colors too short, should have length of 3 or 4")
		println("Length = ", length(text.color))
		println("Values = ", text.color)
	end
	# as TTF_RenderText_Solid could only be used on
	# SDL_Surface then you have to create the surface first+
	#=
	if text.style == "normal"
		TTF_SetFontStyle(text.font, TTF_STYLE_NORMAL)
	elseif text.style == "italic"
		TTF_SetFontStyle(text.font, TTF_STYLE_ITALIC)
	elseif text.style == "bold"
		TTF_SetFontStyle(text.font, TTF_STYLE_BOLD)
	elseif text.style == "underline"
		TTF_SetFontStyle(text.font, TTF_STYLE_UNDERLINE)
	else
		error("Unrecognized font style. 'normal', 'italic', 'bold', and 'underline' are recognized.")
	end
	=#
	if text.style == "normal"
		text.font = text.win.font
	elseif text.style == "italic"
		text.font = text.win.italicFont
	elseif text.style == "bold"
		text.font = text.win.boldFont
	else
		error("Unrecognized font style. 'normal', 'italic', 'bold', and 'underline' are recognized.")
	end

	
	#---------
	surfaceMessage = TTF_RenderUTF8_Blended(text.font, text.textMessage, color)		# text.win.font
#	surfaceMessage = TTF_RenderText_Blended(text.font, text.textMessage, color)		# text.win.font

	# now you can convert it into a texture
	Message = SDL_CreateTextureFromSurface(text.win.renderer, surfaceMessage);

#@engineerX you can get dimensions of rendered text with TTF_SizeText(TTF_Font *font, const char *text, int *w, int *h)

	w = Ref{Cint}()
	h = Ref{Cint}()
	TTF_SizeText(text.font, text.textMessage, w::Ref{Cint}, h::Ref{Cint})		# Ref is used if Julia controls the memory
	#println("w: ", w,", value = ", w[] )

	if text.vertAlignment == -1											# top anchored
		y = text.pos[2]
	elseif text.vertAlignment == 0											# center anchored
		y = text.pos[2] - round(Int64, h[]/2)
	elseif text.vertAlignment == +1										# bottom anchored
		y = text.pos[2] - h[]
	else
		error("invalid text vertical text alignment parameter")
	end
	#---------
	if text.horizAlignment == -1											# left anchored
		x = text.pos[1]
	elseif text.horizAlignment == 0											# center justification
		x = text.pos[1] - round(Int64, w[]/2)
	elseif text.horizAlignment == +1										# right anchored
		x = text.pos[1] - w[]
	else
		error("invalid text horizontal text alignment parameter")
	end
	#---------

	Message_rect = SDL_Rect(x, y, w[], h[])

	SDL_RenderCopy(text.win.renderer, Message, C_NULL, Ref{SDL_Rect}(Message_rect) );		# &Message_rect)

	# Don't forget to free your surface and texture
	SDL_FreeSurface(surfaceMessage);
	SDL_DestroyTexture(Message);
end