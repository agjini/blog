const fullscreen = (e) =>
  document.fullscreenElement
    ? document.exitFullscreen()
    : e.currentTarget.parentNode.requestFullscreen();
