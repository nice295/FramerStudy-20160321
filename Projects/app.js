(function() {
  var device, psd, scroll;

  device = new Framer.DeviceView();

  device.setupContext();

  device.deviceType = "samsung-galaxy-note-5-gold";

  device.contentScale = 1;

  psd = Framer.Importer.load("imported/Scroll");

  scroll = ScrollComponent.wrap(psd.List);

  scroll.scrollHorizontal = false;

  psd.Screen.bringToFront();

  psd["new"].states.add({
    show: {
      opacity: 1.0
    },
    hide: {
      opacity: 0.0
    }
  });

  psd["new"].states["switch"]("hide", {
    time: 0
  });

  scroll.on(Events.ScrollStart, function(event) {
    return psd["new"].states["switch"]("show", {
      time: 0
    });
  });

  scroll.on(Events.ScrollEnd, function(event) {
    return psd["new"].states["switch"]("hide", {
      delay: 0.5
    });
  });

}).call(this);
