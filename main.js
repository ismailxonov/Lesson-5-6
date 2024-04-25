
let style2 = prompt("Enter your background..")
let style = prompt("Enter your text color...");
const hello = document.createElement("h1");
const test = document.createTextNode("Hello world");
hello.appendChild(test);
const main = document.querySelector("body")
main.appendChild(hello);
hello.style.color = style;
main.style.background =  style2;
hello.style.marginLeft = "500px";
hello.style.marginTop = "250px";
