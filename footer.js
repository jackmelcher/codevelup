var div = document.createElement("div");
var a1 = document.createElement("a");
var a2 = document.createElement("a");
var a3 = document.createElement("p");

div.className = "footer";
a1.href = "about.html";
a1.innerHTML = "About";
div.appendChild(a1);
a2.href = "suggestion.html";
a2.innerHTML = "Make a Suggestion";
div.appendChild(a2);
var br = document.createElement("br");
div.appendChild(br);
a3.innerHTML =
  "© 2020 GameDevelop.io All rights reserved. All trademarks and registered trademarks are the property of their respective owners.";
div.appendChild(a3);
document.querySelector(".sectionlimited").appendChild(div);
