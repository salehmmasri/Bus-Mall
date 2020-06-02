/* eslint-disable indent */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable eol-last */
'use strict';
//array with Pic Name
// console.log('welcome');
var itemArr = [];
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
    // "wine-glass.jpg",
    // "usb.gif",
    // "shark.jpg",
    // "dragon.jpg",
    // "sweep.png",
    // "tauntaun.jpg",
    // "unicorn.jpg",
    // "water-can.jpg",
    // "pen.jpg",
    // "dog-duck.jpg",
    "pet-sweep.jpg"

];

var leftItem, centerItem, rightItem;
function SaveTheData() {
    var prodactArray = JSON.stringify(itemArr);
    localStorage.setItem('prodactInLocal', prodactArray);
}
function getSavedData() {
    var getProdactArray = localStorage.getItem('prodactInLocal');
    if (getProdactArray) {
        //console.log('vvv');
        //console.log(getProdactArray);
        itemArr = JSON.parse(getProdactArray);
        // renderImages();
        //console.log(itemArr.views);


    }

}
var leftImg = document.getElementById("leftImage");
var centerImg = document.getElementById("centerImage");
var rightImg = document.getElementById("rightImage");
var imagesSection = document.getElementById('imagesSection');
var totalClickNumber = 0;
var x = 0;
//Constractor
function Items(name) {
    this.itemName = name;
    this.imagePath = `assets/${name}`;
    this.clickNumber = 0;
    this.views = 0;
    itemArr.push(this);

    // eslint-disable-next-line new-cap
}
// create objects based on the Prodact array
for (var i = 0; i < prodact.length; i++) {
    new Items(prodact[i]);

}

var NumberEvenOrod = 0;
var arrayOfItems2 = [];
var arrayOfItems = [];

//display random images

var iterationNumber = 0;
function renderImages() {
    leftItem = itemArr[randomNumber(0, itemArr.length - 1)];
    centerItem = itemArr[randomNumber(0, itemArr.length - 1)];
    rightItem = itemArr[randomNumber(0, itemArr.length - 1)];
    //check if we have the same pic
    //************************************ this one for only 3 whitout sequantal/
    // while (leftItem === centerItem || leftItem === rightItem || rightItem === centerItem) {
    //     rightItem = itemArr[randomNumber(0, itemArr.length - 1)];
    //     centerItem = itemArr[randomNumber(0, itemArr.length - 1)];
    //     leftItem = itemArr[randomNumber(0, itemArr.length - 1)];
    // }

    if (NumberEvenOrod % 2 === 0) {
        arrayOfItems = [];
        arrayOfItems.push(leftItem);
        arrayOfItems.push(centerItem);
        arrayOfItems.push(rightItem);
        if (iterationNumber === 0) {
            console.log("p");
        }
        else {
            for (var i = 0; i < arrayOfItems2.length; i++) {
                for (var j = 0; j < arrayOfItems.length; j++) {
                    if (arrayOfItems2[i] === arrayOfItems[j] || leftItem === centerItem || leftItem === rightItem || rightItem === centerItem) {
                        arrayOfItems = [];
                        i = 0;
                        j = 0;
                        rightItem = itemArr[randomNumber(0, itemArr.length - 1)];
                        centerItem = itemArr[randomNumber(0, itemArr.length - 1)];
                        leftItem = itemArr[randomNumber(0, itemArr.length - 1)];
                        arrayOfItems.push(leftItem);
                        arrayOfItems.push(centerItem);
                        arrayOfItems.push(rightItem);

                    }
                }

            }
        }
        console.log(`the items in array one ${iterationNumber}`, arrayOfItems);

    }
    else {
        arrayOfItems2 = [];
        arrayOfItems2.push(leftItem);
        arrayOfItems2.push(centerItem);
        arrayOfItems2.push(rightItem);
        for (let i = 0; i < arrayOfItems.length; i++) {
            for (let j = 0; j < arrayOfItems2.length; j++) {
                if (arrayOfItems[i] === arrayOfItems2[j] || leftItem === centerItem || leftItem === rightItem || rightItem === centerItem) {
                    arrayOfItems2 = [];
                    i = 0;
                    j = 0;
                    rightItem = itemArr[randomNumber(0, itemArr.length - 1)];
                    centerItem = itemArr[randomNumber(0, itemArr.length - 1)];
                    leftItem = itemArr[randomNumber(0, itemArr.length - 1)];
                    arrayOfItems2.push(leftItem);
                    arrayOfItems2.push(centerItem);
                    arrayOfItems2.push(rightItem);

                }
            }

        }
        console.log(`the items in ${iterationNumber}`, arrayOfItems2);

    }
    NumberEvenOrod++;

    //        console.log('iteration ', iterationNumber);
    iterationNumber++;


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

    // eslint-disable-next-line new-cap
    //SaveTheData();

}
//Invoke the function to display img
renderImages();

imagesSection = addEventListener('click', actionClick);

function actionClick(event) {
    if (totalClickNumber < 5) {
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
            //arrayOfItems=[];
        }
    }
    else {
        if (x === 0) {
            x++;
            printResultofClicksandViews();
            viewChart();

        }
    }

}

function printResultofClicksandViews() {
    var ulE1 = document.getElementById('finalResult');
    for (var i = 0; i < itemArr.length; i++) {
        var li = document.createElement('li');
        li.textContent = `${itemArr[i].itemName.split(".", 1)} has ${itemArr[i].clickNumber} clicks and ${itemArr[i].views} views`;
        ulE1.append(li);
    }
}






// generate random #
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}










function viewChart() {

    var prodactName = [];
    var viewsOnChart = [];
    var clickOnChart = [];
    for (var i = 0; i < itemArr.length; i++) {
        var storeName = itemArr[i].itemName.split(".", 1);
        prodactName.push(storeName);

        var storeViews = itemArr[i].views;
        viewsOnChart.push(storeViews);

        var storeClick = itemArr[i].clickNumber;
        clickOnChart.push(storeClick);
    }

    // chart js code
    var ctx = document.getElementById('myChart').getContext('2d');
    // eslint-disable-next-line no-undef
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: prodactName,
            datasets: [
                {
                    label: '# of clicks',
                    data: clickOnChart,
                    backgroundColor: [
                        'rgba(135, 75, 108,1)',
                        'rgba(135, 75, 108,1)',
                        'rgba(135, 75, 108,1)',
                        'rgba(135, 75, 108,1)',
                        'rgba(135, 75, 108,1)',
                        'rgba(135, 75, 108,1)',
                        'rgba(135, 75, 108,1)',
                        'rgba(135, 75, 108,1)',
                        'rgba(135, 75, 108,1)',
                        'rgba(135, 75, 108,1)',
                        'rgba(135, 75, 108,1)',
                        'rgba(135, 75, 108,1)',
                        'rgba(135, 75, 108,1)',
                        'rgba(135, 75, 108,1)',
                        'rgba(135, 75, 108,1)',
                        'rgba(135, 75, 108,1)',
                        'rgba(135, 75, 108,1)',
                        'rgba(135, 75, 108,1)',
                        'rgba(135, 75, 108,1)',
                        'rgba(135, 75, 108,1)',
                        'rgba(135, 75, 108,1)',
                        'rgba(135, 75, 108,1)',
                        'rgba(135, 75, 108,1)',
                        'rgba(135, 75, 108,1)',
                        'rgba(135, 75, 108,1)'
                    ],
                    borderWidth: 1
                },
                {
                    label: '# of views',
                    data: viewsOnChart,
                    backgroundColor: [
                        'rgba(255, 87, 115,1)',
                        'rgba(255, 87, 115,1)',
                        'rgba(255, 87, 115,1)',
                        'rgba(255, 87, 115,1)',
                        'rgba(255, 87, 115,1)',
                        'rgba(255, 87, 115,1)',
                        'rgba(255, 87, 115,1)',
                        'rgba(255, 87, 115,1)',
                        'rgba(255, 87, 115,1)',
                        'rgba(255, 87, 115,1)',
                        'rgba(255, 87, 115,1)',
                        'rgba(255, 87, 115,1)',
                        'rgba(255, 87, 115,1)',
                        'rgba(255, 87, 115,1)',
                        'rgba(255, 87, 115,1)',
                        'rgba(255, 87, 115,1)',
                        'rgba(255, 87, 115,1)',
                        'rgba(255, 87, 115,1)',
                        'rgba(255, 87, 115,1)',
                        'rgba(255, 87, 115,1)',
                        'rgba(255, 87, 115,1)',
                        'rgba(255, 87, 115,1)',
                        'rgba(255, 87, 115,1)',
                        'rgba(255, 87, 115,1)',
                        'rgba(255, 87, 115,1)'
                    ],

                    borderWidth: 1
                }
            ]
        },
        options: {
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true
                        }
                    }
                ]
            }
        }
    });
}
//getSavedData();