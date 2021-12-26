class Timer extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    const shadow = this.attachShadow({ mode: "open" });
    const divEl = document.createElement("div");
    const FULL_DASH_ARRAY = 283;

    const seconds = this.getAttribute("seconds");
    divEl.textContent = `${seconds}`;
    let TIME_LIMIT = parseInt(seconds);
    let timePassed = 0;
    let timeLeft = TIME_LIMIT;
    let timerInterval = null;

    const warning = this.getAttribute("warning");
    const alert = this.getAttribute("alert");
    divEl.textContent = `${warning}`;
    divEl.textContent = `${alert}`;
    let WARNING_THRESHOLD = parseInt(warning);
    let ALERT_THRESHOLD = parseInt(alert);

    const COLOR_CODES = {
      info: {
        color: "green",
      },
      warning: {
        color: "orange",
        threshold: WARNING_THRESHOLD,
      },
      alert: {
        color: "red",
        threshold: ALERT_THRESHOLD,
      },
    };
    let remainingPathColor = COLOR_CODES.info.color;

    //WARNING_THRESHOLD = parseInt(warning);
    //ALERT_THRESHOLD = parseInt(alert);
    //TIME_LIMIT = parseInt(seconds);
    divEl.classList.add("base-timer");
    const style = document.createElement("style");

    divEl.innerHTML = `
    <div class="base-timer">
    <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <g class="base-timer__circle">
        <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
        <path
          id="base-timer-path-remaining"
          stroke-dasharray="283"
          class="base-timer__path-remaining ${remainingPathColor}"
          d="
            M 50, 50
            m -45, 0
            a 45,45 0 1,0 90,0
            a 45,45 0 1,0 -90,0
          "
        ></path>
      </g>
    </svg>
    <span id="base-timer-label" class="base-timer__label">${formatTimeLeft(
      timeLeft
    )}</span>
  </div>
  <style>
      .base-timer {
        position: relative;
        height:250px;
        width:250px;
      }
      @media (min-width: 768px) {
        .base-timer {
          height: 300px;
          width: 300px;
        }
      }

      .base-timer__circle {
        fill:none;
        stroke:none;
      }
      .base-timer__path-elapsed {
        stroke-width:7px;
        stroke:black;
      }
      .base-timer__label {
        position: absolute;
        width:250px;
        height:250px;
        top:0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size:100px;
        font-family: 'Odibee Sans', cursive;
        color:#E0DFB2;
      }
      @media (min-width: 768px) {
        .base-timer__label {
          width:300px;
          height:300px;
        }
      }

      .base-timer__path-remaining {
        stroke-width:7px;
        stroke-linecap:round;
        transform: rotate(90deg);
        transform-origin: center;
        transition: 1s linear all;
        stroke:currentColor;
      }
      .base-timer__svg{
        transform:scalex(-1);
      }
      .base-timer__path-remaining.green {
        color: rgb(65, 184, 131);
      }
      
      .base-timer__path-remaining.orange {
        color: orange;
      }
      
      .base-timer__path-remaining.red {
        color: red;
      }
      </style>
    `;

    startTimer();
    function onTimesUp() {
      clearInterval(timerInterval);
    }
    function startTimer() {
      timerInterval = setInterval(() => {
        timePassed = timePassed += 1;
        timeLeft = TIME_LIMIT - timePassed;
        shadow.getElementById("base-timer-label").innerHTML =
          formatTimeLeft(timeLeft);
        setCircleDasharray();
        setRemainingPathColor(timeLeft);

        if (timeLeft === 0) {
          onTimesUp();
        }
      }, 1000);
    }

    function formatTimeLeft(time) {
      // los segundos son los remanentes del tiempo dividido por 60
      let seconds = time % 60;
      // si los segundos son menores de 10, le agregamos un 0
      if (seconds < 10) {
        seconds = 0 + seconds;
      }
      return `${seconds}`;
    }
    function setRemainingPathColor(timeLeft) {
      const { alert, warning, info } = COLOR_CODES;
      if (timeLeft <= alert.threshold) {
        shadow
          .getElementById("base-timer-path-remaining")
          .classList.remove(warning.color);
        shadow
          .getElementById("base-timer-path-remaining")
          .classList.add(alert.color);
      } else if (timeLeft <= warning.threshold) {
        shadow
          .getElementById("base-timer-path-remaining")
          .classList.remove(info.color);
        shadow
          .getElementById("base-timer-path-remaining")
          .classList.add(warning.color);
      }
    }

    //Divide el tiempo restante por el límite de tiempo definido
    function calculateTimeFraction() {
      const rawTimeFraction = timeLeft / TIME_LIMIT;
      return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
    }
    // Actualiza el valor de dasharray a medida que pasa el tiempo, comenzando con 283
    function setCircleDasharray() {
      const circleDasharray = `${(
        calculateTimeFraction() * FULL_DASH_ARRAY
      ).toFixed(0)} 283`;
      shadow
        .getElementById("base-timer-path-remaining")
        .setAttribute("stroke-dasharray", circleDasharray);
    }
    shadow.appendChild(style);
    shadow.appendChild(divEl);
  }
}
customElements.define("timer-component", Timer);
