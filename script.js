//your JS code here. If required.
let line = document.getElementById("line");

let angle = 0;
setInterval(() => {
  angle += 2;
	line.style.position = 'absolute'
  line.style.transform = `rotate(${angle}deg)`;
}, 20);
