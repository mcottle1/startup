var arr = new Array();
function addRow() {
    getData();
    let table = document.getElementById("habitStack");
    if(table.rows.length < 10){
        arr.push({
            habit:document.getElementById("habit").value,
            time:document.getElementById("time").value
        })
        localStorage.setItem('table' + localStorage.getItem('userName'), JSON.stringify(arr));
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
 }

 function showData(){
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
        cell3.innerHTML = '<input type="checkbox" id="task1" name="task1" value="task"><label for="task1"> Done for the day!</label>';
    }
 }


function removeRow(){
    arr.pop();
    localStorage.setItem('table' + getPlayerName(), JSON.stringify(arr));
    showData();
}

function clearStack(){
    arr = [];
    localStorage.setItem('table' + getPlayerName(), JSON.stringify(arr));
    showData();
}

const interval = setInterval(function(){
    let table = document.getElementById("habitStack");
    
}, 5000)

function loadinitial(){
    const builderNameElement = document.querySelector('#stackname');
    builderNameElement.textContent = '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Welcome, ' + getPlayerName();
    let tableEl = document.getElementById("habitStack");
    const tableText = localStorage.getItem('table' + getPlayerName());
    if(tableText){
        arr = JSON.parse(tableText);
    }
    for(let j = 0; j < arr.length; j++){
        let row = tableEl.insertRow();
        let cell1 = row.insertCell();
        let cell2 = row.insertCell();
        cell2.setAttribute("class", "center");
        let cell3 = row.insertCell();
        cell1.innerHTML = arr[j].habit;
        cell2.innerHTML =  arr[j].time;
        cell3.innerHTML = '<input type="checkbox" id="task1" name="task1" value="task"><label for="task1"> Done for the day!</label>';
    }
}

function getPlayerName() {
    return localStorage.getItem('userName') ?? 'Mystery player';
}

loadinitial();

// class Stack{
//     constructor(){
//         const builderNameElement = document.querySelector('#stackname');
//         builderNameElement.textContent = '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Welcome, ' + this.getPlayerName();
//         let table = document.getElementById("habitStack");
//         table.innerHTML = '';
//         const tableText = localStorage.getItem('table' + users[i]);
//         if(tableText){
//             arr = JSON.parse(tableText);
//         }
    
//         for(i = 0; i < arr.length; i++){
//             let row = table.insertRow();
//             let cell1 = row.insertCell();
//             let cell2 = row.insertCell();
//             cell2.setAttribute("class", "center");
//             let cell3 = row.insertCell();
//             cell1.innerHTML = arr[i].habit;
//             cell2.innerHTML =  arr[i].time;
//             cell3.innerHTML = '<input type="checkbox" id="task1" name="task1" value="task"><label for="task1"> Done for the day!</label>';
//         }
//     }
//     getPlayerName() {
//         return localStorage.getItem('userName') ?? 'Mystery player';
//     }
// }

// const build = new Stack();
