var p = 0;
var idcode = [];
function progresscheck(codeid) {
  var c = 0;
  for (let i = 0; i < idcode.length; i++) {
    if (idcode[i] === codeid) c = 1;
  }
  if (c == 0) {
    p++;
    idcode.push(codeid);
    completionOnRefresh(p, idcode);
  }
}

function notDone(codeid) {
  var c = 0;
  for (let i = 0; i < idcode.length; i++) {
    if (idcode[i] === codeid) c = 1;
  }
  if (c == 1) {
    p--;
    idcode = idcode.filter(function (item) {
      return item !== codeid;
    });
    completionOnRefresh(p, idcode);
  }
}

function completionOnRefresh(percentage, arraycompletion) {
  localStorage.setItem("p", percentage);
  localStorage.setItem("idcode", JSON.stringify(arraycompletion));
  p = parseInt(localStorage.getItem("p"));
  idcode = JSON.parse(localStorage.getItem("idcode"));
  changeProgress(p);
}

window.onload = function () {
  if (localStorage.getItem("p") !== null) {
    p = localStorage.getItem("p");
    changeProgress(p);
  }
  if (localStorage.getItem("idcode") !== null) {
    idcode = JSON.parse(localStorage.getItem("idcode"));
  }
};

function changeProgress(no) {
  $("#example5").progress({
    percent: no * 25,
    text: {
      active: `Completed ${no} Topic out of 4 Topics! Carry On...You are doing Great!`,
      success: "All Topics Of Today Completed! Congratulations🥳",
    },
  });
}

function doneUpdate() {
  p = 0;
  idcode = [];
    localStorage.setItem("p", p);
    localStorage.setItem("idcode", JSON.stringify(idcode));
    changeProgress(p);
}
