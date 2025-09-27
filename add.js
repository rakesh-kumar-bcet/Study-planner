var phystopic = document.getElementById("phytopic");
var physchap = document.getElementById("phychap");
var chemitopic = document.getElementById("chemtopic");
var chemichap = document.getElementById("chemchap");
var bottopic = document.getElementById("botanytopic");
var botchap = document.getElementById("botanychap");
var zootopic = document.getElementById("zoologytopic");
var zoochap = document.getElementById("zoologychap");
var phystopic_Input = document.getElementById("phytopic_Input");
var physchap_Input = document.getElementById("phychap_Input");
var chemitopic_Input = document.getElementById("chemtopic_Input");
var chemichap_Input = document.getElementById("chemchap_Input");
var bottopic_Input = document.getElementById("botanytopic_Input");
var botchap_Input = document.getElementById("botanychap_Input");
var zootopic_Input = document.getElementById("zoologytopic_Input");
var zoochap_Input = document.getElementById("zoologychap_Input");

function autosave() {
  phystopic.innerHTML = localStorage.getItem("phytopic");
  physchap.innerHTML = localStorage.getItem("phychap");
  chemitopic.innerHTML = localStorage.getItem("chemtopic");
  chemichap.innerHTML = localStorage.getItem("chemchap");
  zootopic.innerHTML = localStorage.getItem("zootopic");
  zoochap.innerHTML = localStorage.getItem("zoochap");
  bottopic.innerHTML = localStorage.getItem("bottopic");
  botchap.innerHTML = localStorage.getItem("botchap");
}
autosave();

function savePhy() {
  var topicname = phystopic_Input.value;
  if (topicname != "") {
    phystopic.innerHTML = topicname;
    localStorage.setItem("phytopic", topicname);
  }
  var chaptername = physchap_Input.value;
  if (chaptername != "") {
    physchap.innerHTML = chaptername;
    localStorage.setItem("phychap", chaptername);
  }
  if (topicname != "" || chaptername != "") {
    notsavedsubjectsdisplay(1);
  }
}

function saveChem() {
  var topicname = chemitopic_Input.value;
  if (topicname != "") {
    chemitopic.innerHTML = topicname;
    localStorage.setItem("chemtopic", topicname);
  }
  var chaptername = chemichap_Input.value;
  if (chaptername != "") {
    chemichap.innerHTML = chaptername;
    localStorage.setItem("chemchap", chaptername);
  }
  if (topicname != "" || chaptername != "") {
    notsavedsubjectsdisplay(2);
  }
}

function saveZoo() {
  var topicname = zootopic_Input.value;
  if (topicname != "") {
    zootopic.innerHTML = topicname;
    localStorage.setItem("zootopic", topicname);
  }
  var chaptername = zoochap_Input.value;
  if (chaptername != "") {
    zoochap.innerHTML = chaptername;
    localStorage.setItem("zoochap", chaptername);
  }
  if (topicname != "" || chaptername != "") {
    notsavedsubjectsdisplay(3);
  }
}

function saveBot() {
  var topicname = bottopic_Input.value;
  if (topicname != "") {
    bottopic.innerHTML = topicname;
    localStorage.setItem("bottopic", topicname);
  }
  var chaptername = botchap_Input.value;
  if (chaptername != "") {
    botchap.innerHTML = chaptername;
    localStorage.setItem("botchap", chaptername);
  }
  if (topicname != "" || chaptername != "") {
    notsavedsubjectsdisplay(4);
  }
}

var subjects = ["Physics", "Chemistry", "Zoology", "Botany"];
var notificationStatus = "open";

function notsavedsubjectsdisplay(sub) {
  subjects[sub - 1] = null;
  localStorage.setItem("mysubjectList", JSON.stringify(subjects));
  if (subjects.every((subject) => subject === null)) {
    changeNotification("0");
    notificationStatus = "closed";
  } else {
    document.getElementById("not-saved-subjects").innerHTML = subjects
      .filter(Boolean)
      .join(". ");
  }
}

// window.onload = function () {
//   if (JSON.parse(localStorage.getItem("mysubjectList")) !== null) {
//     subjects = JSON.parse(localStorage.getItem("mysubjectList"));
//     document.getElementById("not-saved-subjects").innerHTML = subjects
//       .filter(Boolean)
//       .join(". ");
//   }
// };


