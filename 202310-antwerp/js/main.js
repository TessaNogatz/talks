var api

document.addEventListener("DOMContentLoaded", function(event) {
  api = impress();
  api.init();

  document.getElementById("impress-help").style.display = "none";
});

// Wait for impress.js to be initialized
document.addEventListener( "impress:init", function(event) {
  api = event.detail.api;
  util = api.lib.util;
  root = event.target;
  var gc = api.lib.gc;
  var video = document.getElementById('video');

  var triggerEvent = function(el, eventName, detail) {
    var event = document.createEvent('CustomEvent');
    event.initCustomEvent(eventName, true, true, detail);
    el.dispatchEvent(event);
  }

  triggerEvent(document, 'impress:help:add', {
    command: 'O',
    text: 'Go to overview',
    row: 8
  });
  triggerEvent(document, 'impress:help:add', {
    command: 'N',
    text: 'Show notes as overlay',
    row: 11
  });
  triggerEvent(document, 'impress:help:add', {
    command: 'B',
    text: 'Blackout presentation',
    row: 12
  });

  document.addEventListener('impress:substep:enter', function (event) {
    if (event.detail && event.detail.substep == document.getElementById('playvideo')) {
      video.playbackRate = 1.0
      video.currentTime = 11.3
      video.play();
      setTimeout(function () {
        video.pause()
      }, 15000)
    }
  })
  document.addEventListener('impress:substep:leave', function (event) {
    if (event.detail && event.detail.substep == document.getElementById('playvideo')) {
      video.pause()
      video.currentTime = 11.3
    }
  })

  gc.addEventListener( document, "keydown", function( event ) {
    // Accept o is sent by presentation remote controllers
    if ( event.keyCode === 79) {
        event.preventDefault();
        api.goto('Overview')
    }
  }, false );

  gc.addEventListener( document, "keyup", function( event ) {
      // Accept o
      if ( event.keyCode === 79) {
          event.preventDefault();
      }
  }, false );

  gc.addEventListener( document, "keydown", function( event ) {
    // Accept n is sent by presentation remote controllers
    if ( event.keyCode === 78) {
        event.preventDefault();
        document.body.classList.toggle('impress-with-notes');
    }
  }, false );

  gc.addEventListener( document, "keyup", function( event ) {
      // Accept o
      if ( event.keyCode === 78) {
          event.preventDefault();
      }
  }, false );

  gc.addEventListener( document, "keydown", function( event ) {
      // ESC
      if ( event.keyCode === 27) {
          event.preventDefault();
          document.body.classList.remove('impress-with-notes')
      }
  }, false );

  var timeout = 3;
  gc.addEventListener( document.getElementById('impress-navigation-ui-select'), "focus", function () {
      if ( timeoutHandle ) {
          window.clearTimeout( timeoutHandle );
      }
      document.body.classList.remove( "impress-mouse-timeout" );
  });
  gc.addEventListener( document.getElementById('impress-navigation-ui-select'), "blur", function () {
      if ( timeoutHandle ) {
        window.clearTimeout( timeoutHandle );
      }
      timeoutHandle = window.setTimeout( function () {
        document.body.classList.add( "impress-mouse-timeout" );
      }, timeout * 1000 );
  });

}, false );
