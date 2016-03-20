# Import file "Scroll"
psd = Framer.Importer.load("imported/Scroll@1x")

scroll = ScrollComponent.wrap(psd.List)
scroll.scrollHorizontal = false
psd.Screen.bringToFront()

psd.new.states.add
	show:
		opacity: 1.0
	hide:
		opacity: 0.0
psd.new.states.switch("hide", time: 0)
   	        
scroll.on Events.ScrollStart, (event) ->
	psd.new.states.switch("show", time: 0)

scroll.on Events.ScrollEnd, (event) ->
	psd.new.states.switch("hide", delay: 0.5)