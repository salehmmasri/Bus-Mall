/* eslint-disable indent */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable eol-last */
'use strict';
//array with Pic Name
// console.log('welcome');
var prodact = [
    "bag.jpg",
    "banana.jpg",
    "bathroom.jpg",
    "boots.jpg",
    "breakfast.jpg",
    "bubblegum.jpg",
    "chair.jpg",
    "cthulhu.jpg",
    "scissors.jpg",
    "wine-glass.jpg",
    "usb.gif",
    "shark.jpg",
    "dragon.jpg",
    "sweep.png",
    "tauntaun.jpg",
    "unicorn.jpg",
    "water-can.jpg",
    "pen.jpg",
    "dog-duck.jpg",
    "pet-sweep.jpg"

];
var leftImg = document.getElementById("leftImage");
var centerImg = document.getElementById("centerImage");
var rightImg = document.getElementById("rightImage");
var imagesSection = document.getElementById('imagesSection');
var totalClickNumber = 0;
var x=0;
//Constractor
function Items(name) {
    this.itemName = name;
    this.imagePath = `assets/${name}`;
    this.clickNumber = 0;
    this.views=0;
    Items.all.push(this);
}
//array to contain all objects
Items.all = [];
// create objects based on the Prodact array

for (var i = 0; i < prodact.length; i++) {
    new Items(prodact[i]);

}

//  console.log(Items.all);

var leftItem, centerItem, rightItem;

//display random images


function renderImages() {
    leftItem = Items.all[randomNumber(0, Items.all.length - 1)];
    centerItem = Items.all[randomNumber(0, Items.all.length - 1)];
    rightItem = Items.all[randomNumber(0, Items.all.length - 1)];

    //check if we have the same pic

    while (leftItem.imagePath === centerItem.imagePath || leftItem.imagePath === rightItem.imagePath||rightItem.imagePath === centerItem.imagePath) {
        rightItem = Items.all[randomNumber(0, Items.all.length - 1)];
        leftItem = Items.all[randomNumber(0, Items.all.length - 1)];
    }

    //left Imge

    leftImg.src = leftItem.imagePath;
    leftImg.alt = leftItem.itemName;
    leftImg.title = leftItem.itemName;
    leftItem.views++;
    //mid Imge

    centerImg.src = centerItem.imagePath;
    centerImg.alt = centerItem.itemName;
    centerImg.title = centerItem.itemName;
    centerItem.views++;

    //Right Imge

    rightImg.src = rightItem.imagePath;
    rightImg.alt = rightItem.itemName;
    rightImg.title = rightItem.itemName;
    rightItem.views++;

}
//Invoke the function to display img
renderImages();

imagesSection = addEventListener('click', actionClick);

function actionClick(event) {
    if (totalClickNumber<20) {
    if (event.target.id === 'leftImage' || event.target.id === 'centerImage' || event.target.id === 'rightImage') {
        totalClickNumber++;

        if (event.target.id === 'leftImage') {
            //console.log("left");
            leftItem.clickNumber++;

        }
        if (event.target.id === 'centerImage') {
            //console.log("mid");
            centerItem.clickNumber++;

        }
        if (event.target.id === 'rightImage') {
            rightItem.clickNumber++;

        }


        //Invoke the  renderImages function to show new pic
        renderImages();
    }
}
else{
    if(x===0){
        x++;
    printResultofClicksandViews();
    }
}

}

function printResultofClicksandViews () {
    var ulE1 = document.getElementById('finalResult');
    for( var i =0; i<Items.all.length; i++) {
      var li = document.createElement('li');
      li.textContent = `${Items.all[i].itemName.split(".",1)} has ${Items.all[i].clickNumber} clicks and ${Items.all[i].views} views`;
      ulE1.append(li);
    }
  }






// generate random #
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var arrnam="google.com";

console.log(arrnam.split(".",1));