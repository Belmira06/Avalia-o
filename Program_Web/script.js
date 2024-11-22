const container = document.getElementById("Wave-effect");

container.addEventListener("mousemove",
     function (event) {
    const wave = document.createElement("span");
    const timeStamp = document.createElement("span"); 

    wave.classList.add("wave");
    timeStamp.classList.add("time-stamp");

    wave.style.left = `${event.clientX}px`;
    wave.style.top = `${event.clientY}px`;

    container.appendChild(wave);
    container.appendChild(timeStamp);

    setTimeout(() => {
        wave.remove();
    }, 600);
});

function showCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const currentTime = `${hours}:${minutes}`;
    
    document.getElementById('time-display').innerText = `Hora : ${currentTime}`;
}

// Atualiza a hora a cada segundo
setInterval(showCurrentTime, 1000);

