var scene = document.querySelector("a-scene");

var environment = document.querySelector("a-entity");

var cube = document.createElement("a-box");
cube.setAttribute("color", "#dfbb71");
cube.setAttribute("position", "-3 5 -7");
cube.setAttribute("rotation", "0 45 0");

var sphere = document.createElement("a-sphere");
sphere.setAttribute("position", "1 2 -9");
sphere.setAttribute("radius", "1.25");
sphere.setAttribute("material", "src: /Augmented reality/creamy-texture.jpg", "roughness", "0.75", "metalness", "0");

scene.appendChild(cube);
scene.appendChild(sphere);

var rain = document.querySelector("a-rain");
rain.setAttribute("count", "7000");