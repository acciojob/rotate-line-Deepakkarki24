let line = document.getElementById("line");

let angle = 0;
setInterval(() => {
  angle += 2;
  line.style.cssText = `background-color: black; width: 200px; height: 2px;position: absolute;top: 50%;left: 50%; transform: rotate(${angle}deg)`;
}, 20);
