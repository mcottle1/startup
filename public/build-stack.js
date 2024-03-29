const stackUpdatedEvent = 'stackUpdate;'

var arr = new Array();
var boxes = new Array();
var socket;
const loginInnerHTML = '<div class="padding-top--5 flex-flex"><div class="padding-bottom--24 flex-flex padding-bottom--0"></div><div class="formbg-outer"><div class="formbg"><div class="formbg-inner padding-horizontal--20"><span>Add Your Habits to Your Stack!<br><br></span><div class="field padding-bottom--24"><label for="habit">Habit</label><input type="habit" id="habit" placeholder="Enter Habit"/><label for="time">Time </label><input type="time" name="varTime" id="time"/></div><div class="padding-bottom--24"><button onclick="addRow()" class="btn btn-tertiary" >Add Habit</button><button onclick="removeRow()" class="btn btn-tertiary">Remove</button><button onclick="clearStack()" class="btn btn-tertiary">Clear</button><button onclick="checkBox()" class="btn btn-tertiary">Update</button></div></div></div></div></div>';

window.addEventListener('resize', function() {
    let builder = document.getElementById("movedBuilder");
    let ogbuilder = document.getElementById("ogBuilder");
    if (window.innerWidth < 1000) {
        ogbuilder.innerHTML = '';
        builder.innerHTML = loginInnerHTML;
    } else{
        builder.innerHTML = '';
        ogbuilder.innerHTML = loginInnerHTML;
    }
  });

  window.addEventListener('beforeunload', function(event) {
    let builder = document.getElementById("movedBuilder");
    let ogbuilder = document.getElementById("ogBuilder");
    if (window.innerWidth < 1000) {
        ogbuilder.innerHTML = '';
        builder.innerHTML = loginInnerHTML;
    } else{
        builder.innerHTML = '';
        ogbuilder.innerHTML = loginInnerHTML;
    }
  });

  document.addEventListener('DOMContentLoaded', function() {
    let builder = document.getElementById("movedBuilder");
    let ogbuilder = document.getElementById("ogBuilder");
    if (window.innerWidth < 1000) {
        ogbuilder.innerHTML = '';
        builder.innerHTML = loginInnerHTML;
    } else{
        builder.innerHTML = '';
        ogbuilder.innerHTML = loginInnerHTML;
    }
  });

  

function addRow() {
    getData();
    let table = document.getElementById("habitStack");
    if(table.rows.length < 10){
        arr.push({
            habit:document.getElementById("habit").value,
            time:document.getElementById("time").value,
        })
        boxes.push(false);
        localStorage.setItem('table' + localStorage.getItem('userName'), JSON.stringify(arr));
        localStorage.setItem('boxes' + getPlayerName(), JSON.stringify(boxes));
        showData();
        document.getElementById("habit").value = "";
        document.getElementById("time").value = "";
    }
 }

 function getData(){
    var str = localStorage.getItem('table' + localStorage.getItem('userName'));
    if(str != null){
        arr = JSON.parse(str);
    }
    var str2 = localStorage.getItem('boxes' + localStorage.getItem('userName'));
    if(str2 != null){
        boxes = JSON.parse(str2);
    }
 }

 function showData(){
    getData();
    let table = document.getElementById("habitStack");
    table.innerHTML = '';
    for(i = 0; i < arr.length; i++){
        let row = table.insertRow();
        let cell1 = row.insertCell();
        let cell2 = row.insertCell();
        cell2.setAttribute("class", "center");
        let cell3 = row.insertCell();
        cell1.innerHTML = arr[i].habit;
        cell2.innerHTML =  arr[i].time;
        if(boxes[i]){
            cell3.innerHTML = '<input type="checkbox" id="task" name="task1" value="task" checked><label for="task1"> Done for the day!</label>';
        }else{
            cell3.innerHTML = '<input type="checkbox" id="task" name="task1" value="task"><label for="task1"> Done for the day!</label>';
        }
    }
 }


function removeRow(){
    getData();
    arr.pop();
    boxes.pop();
    localStorage.setItem('table' + getPlayerName(), JSON.stringify(arr));
    localStorage.setItem('boxes' + getPlayerName(), JSON.stringify(boxes));
    showData();
}

function clearStack(){
    getData();
    arr = [];
    boxes = [];
    localStorage.setItem('boxes' + getPlayerName(), JSON.stringify(boxes));
    localStorage.setItem('table' + getPlayerName(), JSON.stringify(arr));
    showData();
}

function checkBox(){
    var table = document.getElementById("habitStack");
    var rowLength = table.rows.length;
    for(i = 0; i < rowLength; i++){
        if(table.rows[i].cells[2].children[0].checked){
            boxes[i] = true;
        }else{
            boxes[i] = false;
        }
    }
    localStorage.setItem('boxes' + getPlayerName(), JSON.stringify(boxes));
    this.saveTable();
    showData();
}

function loadinitial(){
    const builderNameElement = document.querySelector('#stackname');
    builderNameElement.textContent = '\xa0Welcome, ' + getPlayerName();
    getData();
    showData();
    configureWebSocket();
}

function getPlayerName() {
    return localStorage.getItem('userName') ?? 'Mystery player';
}

async function saveTable() {
    const userName = getPlayerName();
    const newTable = { name: userName, table: arr, boxes: boxes };
    try{
        const response = await fetch('/api/stack', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newTable),
      });

      const stacks = await response.json();
      localStorage.setItem('stacks', JSON.stringify(stacks));
    }catch{
        this.updateStacksLocal(newTable);
    }
    broadcastEvent(userName, stackUpdatedEvent, {});
}

function updateStacksLocal(newTable){
    let tables = [];
    const stacksText = localStorage.getItem('stacks');
    if(stacksText){
        tables = JSON.parse(stacksText);
    }
    tables.push(newTable);
    if(tables.length > 6){
        tables = tables.slice(1,6);
    }
    localStorage.setItem('stacks', JSON.stringify(tables));
}

 // Functionality for peer communication using WebSocket

 function configureWebSocket() {
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    this.socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
    this.socket.onopen = (event) => {
      this.displayMsg('system', 'builder', 'connected');
    };
    this.socket.onclose = (event) => {
      this.displayMsg('system', 'builder', 'disconnected');
    };
    this.socket.onmessage = async (event) => {
      const msg = JSON.parse(await event.data.text());
      if (msg.type === stackUpdatedEvent) {
        this.displayMsg('builder', msg.from, `updated their stack`);
      }
    };
  }

  function displayMsg(cls, from, msg) {
    const chatText = document.querySelector('#user-messages');
    if(chatText){
        chatText.innerHTML =
        `<div class="event"><span class="${cls}-event">${from}</span> ${msg}</div>` + chatText.innerHTML;
    }
  }

  function broadcastEvent(from, type, value) {
    const event = {
      from: from,
      type: type,
      value: value,
    };
    this.socket.send(JSON.stringify(event));
  }


loadinitial();

function delay(milliseconds) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, milliseconds);
    });
  }
