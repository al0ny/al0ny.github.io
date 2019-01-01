var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/table.jpg') {
      myImage.setAttribute ('src','images/snoopi-dinner.jpg');
    } else {
      myImage.setAttribute ('src','images/table.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name')
    localStorage.setItem('name', myName)
    myHeading.textContent = 'SBM is cool, ' + myName
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'SBM is cool, ' + storedName
}

myButton.onclick = function() {
    setUserName();
}