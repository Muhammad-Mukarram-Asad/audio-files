function myFunction() {
var audio_div = document.getElementById('audio_div');

  var x = document.createElement("AUDIO");

  // if (x.canPlayType("audio/mpeg")) {
  //   x.setAttribute("src","Ertugrul 3.mp3");
  // } else {
  //   x.setAttribute("src","Kurulus Osman ! Kurulus Osman ! Osman Ghazi.mp3");
  // }

  x.setAttribute("src", "Kurulus Osman ! Kurulus Osman ! Osman Ghazi.mp3");
  

  x.setAttribute("controls", "controls");
  audio_div.appendChild(x);
}
