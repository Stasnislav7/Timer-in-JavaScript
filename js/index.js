const input = document.querySelector("#timeInput");
const buttonStart = document.querySelector("#startButton");
const buttonPause = document.querySelector("#pauseButton");
const resetButton = document.querySelector("#resetButton");
const text= document.querySelector("#timeDisplay");
let timer;

buttonStart.onclick = () => {
    if (!timer && input.value > 0 ) {
        timer = setInterval(function () {
            if(input.value > 0) {
                input.value--;
                text.innerHTML = input.value;
            }else {
                clearInterval(timer);
                timer = null;
                alert("Time is out")
                input.value = null;
                }
        }, 1000);
    }
};

buttonPause.onclick = () => {
    buttonStart.innerHTML = "continue"
    clearInterval(timer);
    timer = null;
}

resetButton.onclick = () =>{
    buttonStart.innerHTML = "Start"
    clearInterval(timer)
    timer = null;
    input.value = null;
    text.innerHTML = 0;
}

buttonStart.onmouseover = () => {
    buttonStart.style.color = "#fff";
    buttonStart.style.backgroundColor ="rgba(0,0,0,0.0)"
    buttonStart.style.transition = "ease 0.5s"
}
buttonStart.onmouseout = () => {
    buttonStart.style.color = "#333";
    buttonStart.style.backgroundColor ="#fff"
}

buttonPause.onmouseover = () => {
    buttonPause.style.transform = "scale(1.5) translateX(5px)";
    buttonPause.style.transition = "transform ease 2s"
    buttonPause.style.color = "yellow"
}

buttonPause.onmouseout = () => {
    buttonPause.style.transform = "scale(1) translateX(10px)";
    buttonPause.style.transition = "transform ease 2s"
    buttonPause.style.color = "white"
}

resetButton.onmouseover = () => {
   resetButton.style.transform = "rotate(180deg) ";
    resetButton.style.transition = "transform ease 2s"
    resetButton.style.color = "red"
}

resetButton.onmouseout = () => {
    resetButton.style.transform = "rotate(-180deg) ";
    resetButton.style.color = "#fff"
    resetButton.style.transition = "transform ease 2s"

}
