"use strict";

const fixtures = [
    {
        "src": "img/1.png"
    },
    {
        "src": "img/2.png"
    },
    {
        "src": "img/3.png"
    },
    {
        "src": "img/4.png"
    },
    {
        "src": "img/5.png"
    },
    {
        "src": "img/6.png"
    },
    {
        "src": "img/7.png"
    },
    {
        "src": "img/8.png"
    },
    {
        "src": "img/9.png"
    },
    {
        "src": "img/10.png"
    },
    {
        "src": "img/11.png"
    },
    {
        "src": "img/12.png"
    }
];

const onDragImg = (evt) => {
    evt.dataTransfer.setData("text", evt.target.parentElement.id);
    evt.dataTransfer.dropEffect = "move";
};

const onDragoverImg = (evt) => {
    evt.preventDefault();
    evt.dataTransfer.dropEffect = "move";
};

const onDropImg = (evt) => {
    evt.preventDefault();
    const data = evt.dataTransfer.getData("text");
    const targetCol = evt.target.parentElement;
    const targetRow = targetCol.parentElement;
    targetRow.insertBefore(document.getElementById(data), targetCol);
};

// presumably this JSON array comes from an XHR but for this demo we"ll use static fixtures
const receiveImgArray = (imgArray) => {

  let mainDiv = document.getElementsByTagName("main")[0];
  for (let i = 0; i < imgArray.length; i++) {
      const newDiv = document.createElement("div");
      newDiv.setAttribute("ondrop", "onDropImg(event);");
      newDiv.setAttribute("ondragover", "onDragoverImg(event);");
      newDiv.setAttribute("id", "img" + i);
      const newImg = document.createElement("img");
      newImg.setAttribute("src", imgArray[i].src);
      newImg.setAttribute("draggable", "true");
      newImg.setAttribute("ondragstart", "onDragImg(event);");
      newDiv.appendChild(newImg);
      mainDiv.appendChild(newDiv);
  }
};

receiveImgArray(fixtures);