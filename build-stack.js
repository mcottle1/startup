var arr = new Array();
var boxes = new Array();
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
    showData();
}

function loadinitial(){
    const builderNameElement = document.querySelector('#stackname');
    builderNameElement.textContent = '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Welcome, ' + getPlayerName();
    getData();
    showData();
}

function getPlayerName() {
    return localStorage.getItem('userName') ?? 'Mystery player';
}

loadinitial();
