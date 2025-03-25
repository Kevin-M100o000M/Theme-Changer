const button = document.querySelector('#themeButton');
const background = document.querySelector('body');
const circles = document.querySelector('.background');
const counter = document.querySelector('.counter');

const greenTheme = {
    background: 'green',
    circlesColor: 'darkgreen',
    buttonColor: 'darkgreen',
    image: 'images/beta_gman.webp'
}

const redTheme = {
    background: 'red',
    circlesColor: 'darkred',
    buttonColor: 'darkred',
    image: 'images/gman1.webp'
}

const blueTheme = {
    background: 'blue',
    circlesColor: 'darkblue',
    buttonColor: 'darkblue',
    image: 'images/gman2.webp'
}
const yellowTheme = {
    background: 'yellow',
    circlesColor: 'gold',
    buttonColor: 'gold',
    image: 'images/gman_a.webp'
}
const blackTheme = {
    background: 'black',
    // color: 'black',
    circlesColor: 'white',
    buttonColor: 'white',
    image: 'images/gmod_gman.webp'
}
const whiteTheme = {
    background: 'white',
    circlesColor: 'black',
    buttonColor: 'black',
    image: 'images/gmod_gman2.webp'
}

const themes = [greenTheme, redTheme, blueTheme, yellowTheme, blackTheme, whiteTheme];
let currentIndex = 0;

button.addEventListener('click', () => {
   // currentIndex++
  //  if(currentIndex >= themes.length){
  //      currentIndex = 0;
  //  }

    currentIndex = (currentIndex + 1) % themes.length;
    //modulo:
    //0 + 1 = 1 | 1 % 3 = 1
    //1 + 1 = 2 | 2 % 3 = 2
    //2 + 1 = 3 | 3 % 3 = 0

    let currentTheme = themes[currentIndex];
    counter.innerHTML = currentIndex;
    setTheme(currentTheme);
});

function setTheme(theme){
    background.style.backgroundColor = theme.background;
    circles.style.setProperty('--ball-color', theme.circlesColor);
    button.style.backgroundColor = theme.buttonColor;
    document.body.style.backgroundImage = `url(${theme.image})`;
    document.body.classList.add('background-image');
    if(currentIndex == 4){
    document.getElementById("themeButton").style.color = "black";
    document.getElementsByClassName("counter")[0].style.color = "white";
    }
    if(currentIndex == 5){
    document.getElementsByClassName("themeLabel")[0].style.color = "black";
    document.getElementsByClassName("counter")[0].style.color = "black";
    document.getElementById("themeButton").style.color = "white";
    }
    else{
    document.getElementsByClassName("themeLabel")[0].style.color = "white";
    document.getElementsByClassName("counter")[0].style.color = "white";
    }
}

setTheme(themes[currentIndex]);
