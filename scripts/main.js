
//buttons
const hideBtn = document.getElementById('hideBtn');

const handBtn = document.getElementById('sayHiBtn');

//divs
const emptyProjDiv = document.getElementById('emptyProject');

var emptyProjHidden = false;

var guiriName = null;

function hideProjDiv() {
  if (emptyProjDiv.className == "visible") {
    emptyProjDiv.className = "hidden";
    hideBtn.value = "Show";
  } else {
    emptyProjDiv.className = "visible";
    hideBtn.value = "Hide";
  }
}


function getName(){
	guiriName = document.getElementById("nameInput").value;
  
  if (!isNaN(guiriName)){
    guiriName = null;
  } else if (guiriName.length <= 1)
    guiriName = null;
  return guiriName;
}

let salutes = 1;
function greetings(){
	if (getName() != null){
  	if (salutes <= 1){
    	alert("Hii! nice to meet you " + guiriName);
  	} else {
  		alert("Greetings: "+salutes);
  }
  salutes++;
  } else {
  	alert("Introduce your name! :)")
  }
}

//Events listeners
hideBtn.addEventListener('click', hideProjDiv);
handBtn.addEventListener('click', greetings);