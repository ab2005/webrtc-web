'use strict';

var video = document.querySelector('video');

navigator.getUserMedia = navigator.getUserMedia ||
    navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

var constraints = {
  audio: false,
  video: true
};
function onMediaStreamCreated(stream) {
  window.stream = stream; // stream available to console
  if (window.URL) {
    video.src = window.URL.createObjectURL(stream);
  } else {
    video.src = stream;
  }
  console.log('tracks', stream.getVideoTracks());
}
function errorCallback(error) {
  console.log('navigator.getUserMedia error: ', error);
}

// stopVideo(video)
function stopVideo(video) {
  video.stream.getVideoTracks()[0].stop();
}

navigator.getUserMedia(constraints, onMediaStreamCreated, errorCallback);
