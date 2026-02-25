const getTimeRemaining = (endTime) => {
    const total = endTime - new Date();

    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return { total, days, hours, minutes, seconds };
};

const format = (value) => String(value).padStart(2, "0");

const initializeClock = (endTime) => {
    const daysEl = document.querySelector(".days");
    const hoursEl = document.querySelector(".hours");
    const minutesEl = document.querySelector(".minutes");
    const secondsEl = document.querySelector(".seconds");

    const updateClock = () => {
        const t = getTimeRemaining(endTime);

        if (t.total <= 0) {
            clearInterval(interval);
            daysEl.textContent = "0";
            hoursEl.textContent = "00";
            minutesEl.textContent = "00";
            secondsEl.textContent = "00";
            return;
        }

        daysEl.textContent = t.days;
        hoursEl.textContent = format(t.hours);
        minutesEl.textContent = format(t.minutes);
        secondsEl.textContent = format(t.seconds);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
};

const deadline = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

initializeClock(deadline);