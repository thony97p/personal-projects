(function lights() {
  // On place un écouteur sur l'interrupteur
  var btn = document.querySelector(".allume i");
  btn.addEventListener("click", function () {
    if (this.classList.contains("fa-toggle-off")) {
      //Pour allumer
      this.classList.remove("fa-toggle-off");
      this.classList.add("fa-toggle-on");
      this.nextElementSibling.innerHTML = "Allumé";
      document.querySelector(".date a").classList.add("animate");
      els = document.querySelectorAll(".cadran");
      for (var i = 0; i < els.length; i++) {
        els[i].classList.add("animate");
      }
    } else {
      // Pour éteindre
      let trash = [];
      this.classList.remove("fa-toggle-on");
      this.classList.add("fa-toggle-off");
      this.nextElementSibling.innerHTML = "Éteint";
      document.querySelector(".date a").classList.remove("animate");

      window.requestAnimationFrame(() => {
        document.querySelector(".date a").classList.add("fade");
      });

      trash.push(document.querySelector(".date a"));
      els = document.querySelectorAll(".cadran");
      for (var i = 0; i < els.length; i++) {
        els[i].classList.remove("animate");
        els[i].classList.add("fade");
        trash.push(els[i]);
      }
      setTimeout(() => {
        for (var i = 0; i < trash.length; i++) {
          trash[i].classList.remove("fade");
        }
      }, 2000);
    }
  });
  refresh();
})();

function refresh() {
  let hours = document.querySelectorAll(".a")[0].textContent.slice(0, 2);
  hours = parseInt(hours, 10);
  let minutes = document.querySelectorAll(".a")[1].textContent.slice(0, 2);
  minutes = parseInt(minutes, 10);
  let seconds = document.querySelectorAll(".a")[2].textContent.slice(0, 2);
  seconds = parseInt(seconds, 10);
  let date = document.querySelector(".date a");

  clockhands(hours, minutes, seconds);
  if (document.querySelector(".analog-clock").classList.contains("animate")) {
    return false;
  } else {
    document.querySelector(".analog-clock").classList.add("animate");
  }
}

function transformDay(day) {
  let semaine = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ];
  day = semaine[day];
  return day;
}

function transformMonth(month) {
  let annee = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];
  month = annee[month];
  return month;
}

function clockhands(hrs, mins, secs) {
  hrs = ((hrs * 30) % 360) + mins / 2;
  let hours = document.querySelector(".analog-clock > .hour-hand");
  hours.style.transform = "rotate(" + hrs + "deg)";

  mins = mins * 6 + secs / 10;
  let minutes = document.querySelector(".analog-clock > .minute-hand");
  minutes.style.transform = "rotate(" + mins + "deg)";

  secs = secs * 6;
  let seconds = document.querySelector(".analog-clock > .second-hand");
  seconds.style.transform = "rotate(" + secs + "deg)";
}
