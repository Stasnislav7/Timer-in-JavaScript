# Timer Project

A simple countdown timer implemented in JavaScript. This project allows users to set a time, start the countdown, pause it, and reset it.

## Features

- Set a countdown timer.
- Start, pause, and reset functionality.
- Visual feedback on button hover.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/timer-project.git
   ```

2. Open the project directory:

   ```bash
   cd timer-project
   ```

3. Open the `index.html` file in your browser to use the timer.

## Usage

1. **Input**: Enter the time in seconds in the input field.
2. **Start**: Press the "Start" button to begin the countdown.
3. **Pause**: Press the "Pause" button to temporarily stop the countdown.
4. **Reset**: Press the "Reset" button to set the timer back to zero.

## Code Overview

Here's a brief explanation of the main functionality:

```javascript
const input = document.querySelector("#timeInput");
const buttonStart = document.querySelector("#startButton");
const buttonPause = document.querySelector("#pauseButton");
const resetButton = document.querySelector("#resetButton");
const text = document.querySelector("#timeDisplay");
let timer;

buttonStart.onclick = () => {
    if (!timer && input.value > 0) {
        timer = setInterval(function () {
            if (input.value > 0) {
                input.value--;
                text.innerHTML = input.value;
            } else {
                clearInterval(timer);
                timer = null;
                alert("Time is out");
                input.value = null;
            }
        }, 1000);
    }
};

buttonPause.onclick = () => {
    buttonStart.innerHTML = "continue";
    clearInterval(timer);
    timer = null;
}

resetButton.onclick = () => {
    buttonStart.innerHTML = "Start";
    clearInterval(timer);
    timer = null;
    input.value = null;
    text.innerHTML = 0;
}
```

## Visual Feedback
![Timer Animation](img/gif.36.02.gif)
Buttons change appearance on mouseover:

- **Start Button**: Changes color and background.
- **Pause Button**: Scales up and changes color.
- **Reset Button**: Rotates and changes color.

## Contributing

If you have ideas for improvement or features, please feel free to submit a pull request.
