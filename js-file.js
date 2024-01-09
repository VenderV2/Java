// your JavaScript file
load();

const container = document.querySelector('#container');
const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);
container.add


const subContent = document.createElement('div');
// subContent.classList.add("button");
subContent.textContent = "Hey i'm red";
subContent.style.color = "red";
container.appendChild(subContent);


const popup = document.querySelector("#popup");
popup.addEventListener("click", popUp); //function does require () to be called, putting () would call it as soon as it is referenced

const button = document.querySelector("#btn")
btn.addEventListener("click", function(e){
    e.target.style.padding = "200px";
}    );

const button1 = document.querySelector(".button")
button1.addEventListener("click", popUp);




function popUp() {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.backgroundColor = "pink";
    box.style.border = "5px solid black";
    container.appendChild(box);
    box.style.display = "flex";
    box.style.height = "100px";
    box.style.flexDirection = "column";
    box.style.padding = "20px";

    const boxText = document.createElement("h1");
    boxText.textContent = "I'm blue";
    boxText.style.color = "blue";
    boxText.style.flex = "1 1 auto";
    box.appendChild(boxText);

    const boxText2 = document.createElement("p");
    box.appendChild(boxText2);
    boxText2.textContent = "Me too";
    boxText2.style.flex = "1 1 auto";
    boxText2.style.marginTop = "-20px";
}







function load() {
    // const container = document.querySelector('#container');
    // const content = document.createElement('div');
    // content.classList.add('content');
    // content.textContent = 'This is the glorious text-content!';
    // container.appendChild(content);

    // const subContent = document.createElement('p');
    // subContent.classList.add("button");
    // subContent.textContent = "Hey i'm red";
    // subContent.style.color = "red";
    // container.appendChild(subContent);

    // const box = document.createElement("div");
    // box.classList.add("box");
    // box.style.backgroundColor = "pink";
    // box.style.border = "5px solid black";
    // container.appendChild(box);
    // box.style.display = "flex";
    // box.style.height = "100px";
    // box.style.flexDirection = "column";
    // box.style.padding = "20px";

    // const boxText = document.createElement("h1");
    // boxText.textContent = "I'm blue";
    // boxText.style.color = "blue";
    // boxText.style.flex = "1 1 auto";
    // box.appendChild(boxText);

    // const boxText2 = document.createElement("p");
    // box.appendChild(boxText2);
    // boxText2.textContent = "Me too";
    // boxText2.style.flex = "1 1 auto";
    // boxText2.style.marginTop = "-20px";
}