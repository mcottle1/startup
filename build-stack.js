let rowCounter = 0;
function addRow() {
    let table = document.getElementById("habitStack");
    let row = table.insertRow();
    let cell1 = row.insertCell();
    let cell2 = row.insertCell();
    cell2.setAttribute("class", "center");
    let cell3 = row.insertCell();
    cell1.innerHTML = document.getElementById("habit").value;
    row.appendChild(cell1);
    cell2.innerHTML =  document.getElementById("time").value;
    row.appendChild(cell2);
    cell3.innerHTML = '<input type="checkbox" id="task1" name="task1" value="task"><label for="task1"> Done for the day!</label>';
    row.appendChild(cell3);
    if(table.rows.length < 10){
        table.appendChild(row);
    }
    document.getElementById("habit").value = "";
    document.getElementById("time").value = "";
 }

function removeRow(){
    let table = document.getElementById("habitStackTable");
    var lastRow = table.rows.length - 1;
    if(lastRow > 0){
        table.deleteRow(lastRow);
    }
}

function submitStack(){
    // save contents to memory some how using json, to a disk or server or database
    saveTable();
    let selectButton = document.getElementById("submitButton");
    let clearButton = document.createElement("button");
    clearButton.setAttribute("class","btn btn-tertiary");
    clearButton.setAttribute("id","clear-button");
    clearButton.textContent = "Clear Stack";
    selectButton.insertAdjacentHTML("afterEnd",'<button onclick="clearStack()" class="btn btn-tertiary" id="clearButtony">Clear Stack</button>');
}

function clearStack(){
    rowCounter = 0;
    let clearButton = document.getElementById("clearButtony");
    clearButton.remove();
    let table = document.getElementById("habitStackTable");
    var lastRow = table.rows.length - 1;
    for(let i = 0; i < lastRow; i++){
      removeRow();
    }
    table.deleteRow(1);
    addRow();
}

function saveTable(){
    const userName = localStorage.getItem('userName') ?? 'Mystery user';
    let tabels = [];
    const tablesText = localStorage.getItem('tables');
    if(tablesText){
        tabels = JSON.parse(tablesText);
    }
     tabels = this.updateTables(userName, tabels);
     localStorage.setItem('tables', JSON.stringify(tabels));
}

function updateTables(userName, tables){
    const habits = [];
    const times = [];
    const completion = [];
    let table = document.getElementById("habitStackTable");
    for (let i = 0; i < table.rows.length; i++) {
        habits.push(document.getElementById("text" + i.toString).value);
        times.push(document.getElementById("time" + i.toString).value);
        completion.push(document.getElementById("task" + i.toString).value);  
    }
    const newTable = {name: userName, habits: habits, times: times, completion: completion};
    tables.push(newTable);
    if(tables.length > 6){
        tables.length = 6;
    }
    return tables;
}

class Stack{
    constructor(){
        const builderNameElement = document.querySelector('#stackname');
        builderNameElement.textContent = '\xa0\xa0\xa0\xa0\xa0\xa0Welcome, ' + this.getPlayerName();
    }
    getPlayerName() {
        return localStorage.getItem('userName') ?? 'Mystery player';
    }
}

const build = new Stack();
