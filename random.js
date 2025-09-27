var dayNo = document.getElementById("dayNo");
var dayIndex=22;

function dayIncrease() {
  dayNo.innerHTML = 22;
  if (localStorage.getItem("dateToday") == null) {
    localStorage.setItem("dateToday", "32");
  }
  if (localStorage.getItem("dateIndex") == null) {
    localStorage.setItem("dateIndex", "22");
  }
  if (parseInt(dt) != parseInt(localStorage.getItem("dateToday"))) {
    localStorage.setItem("dateToday", `${dt}`);
    notificationUpdate();
    doneUpdate();
    dayIndex = parseInt(localStorage.getItem("dateIndex"));
    dayIndex++;
    localStorage.setItem("dateIndex", `${dayIndex}`);
    dayNo.innerHTML = dayIndex;
  }
}
dayIncrease();

function notificationUpdate() {
  localStorage.setItem("PhySave", "unsaved"); p[0] = "unsaved";
  localStorage.setItem("ChemSave", "unsaved"); c[0] = "unsaved";
  localStorage.setItem("ZooSave", "unsaved"); z[0] = "unsaved";
  localStorage.setItem("BotSave", "unsaved"); b[0] = "unsaved";
  subjects = " Physics. Chemistry. Zoology. Botany.";
  document.getElementById("not-saved-subjects").innerHTML = subjects;
  if (notificationStatus == "close") {
    changeNotification("1");
  }
}

function changeNotification(n) {
  var notificationBox = document.getElementById("notcompletedsub");
  notificationBox.style.transform = `scale(${n})`;
}
