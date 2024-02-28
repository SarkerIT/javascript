console.log("Hello from JS Connected");

const para = document.createElement("h1");

const node = document.createTextNode("Hello From JS");

para.appendChild(node);

const element = document.getElementById("body");

element.appendChild(para);
