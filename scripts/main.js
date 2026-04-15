const myImage =document.querySelector('img');

myImage.onclick = () => {
    const mySrc = myImage.getAttribute('src');
    if(mySrc === './images/001.jpg') {
      myImage.setAttribute('src','./images/西湖墨意.jpg');
    } else {
      myImage.setAttribute('src','./images/001.jpg');
    }
}

let myButton =document.querySelector('button');
let myHeading =document.querySelector('h1');

let OwerName = "Karai";

function setUserName() {
  let myName = prompt('输入你的名字吧');
  if(!myName) {
    localStorage.setItem('name', OwerName);
  }else {
    localStorage.setItem('name', myName);
  }
  myHeading.textContent = '欢迎你，' + localStorage.getItem('name');;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  const storedName = localStorage.getItem('name');
  myHeading.textContent = '欢迎你，' + storedName;
}

myButton.onclick = () => {
  setUserName();
}