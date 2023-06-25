
const images=["0.jpg","1.jpg","2.jpg","3.jpg"];
const chosenImage=images[Math.floor(Math.random()*images.length)];
const bgImage=document.createElement("img");
bgImage.src=`img/${chosenImage}`;
bgImage.id='backgroundImage'
bgImage.width = window.innerWidth;
bgImage.height = window.innerHeight;
document.body.appendChild(bgImage);


