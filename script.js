let timer;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let running = false;

function updateDisplay() {
    document.getElementById("display").innerText =
        String(minutes).padStart(2, '0') + ":" +
        String(seconds).padStart(2, '0') + ":" +
        String(milliseconds).padStart(2, '0');
}

function start() {
    if (!running) {
        running = true;
        timer = setInterval(() => {
            milliseconds++;

            if (milliseconds === 100) {
                milliseconds = 0;
                seconds++;
            }

            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }

            updateDisplay();
        }, 10); 
    }
}

function pause() {
    running = false;
    clearInterval(timer);
}

function reset() {
    running = false;
    clearInterval(timer);

    milliseconds = 0;
    seconds = 0;
    minutes = 0;

    updateDisplay();
    document.getElementById("laps").innerHTML = "";
}

function lap() {
    if (running) {
        let lapTime = document.getElementById("display").innerText;
        let li = document.createElement("li");
        li.innerText = "Lap: " + lapTime;
        document.getElementById("laps").appendChild(li);
    }
}