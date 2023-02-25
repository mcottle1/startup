function addRow() {
    let table = document.getElementById("habitStack");
    let row = document.createElement("tr");
    let cell1 = document.createElement("td");
    let cell2 = document.createElement("td");
    cell2.setAttribute("class", "center");
    let cell3 = document.createElement("td");
    cell1.innerHTML = '<input type="text" id="text' + (table.rows.length-1).toString + '" name="varText" placeholder="text here" spellcheck required pattern="[Aa].*" />';
    row.appendChild(cell1);
    cell2.innerHTML = '<label for="time">Time: </label><input type="time" name="varTime" id="time' + (table.rows.length-1).toString + '" />';
    row.appendChild(cell2);
    cell3.innerHTML = '<input type="checkbox" id="task' + (table.rows.length-1).toString + '" name="task1" value="task"><label for="task1"> Done for the day!</label>';
    row.appendChild(cell3);
    if(table.rows.length < 10){
        table.appendChild(row);
    }
 }

function removeRow(){
    let table = document.getElementById("habitStackTable");
    var lastRow = table.rows.length - 1;
    if(lastRow > 1){
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
    for (let i = 1; i < table.rows.length; i++) {
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
        builderNameElement.textContent = 'Welcome, ' + this.getPlayerName();
    }
    getPlayerName() {
        return localStorage.getItem('userName') ?? 'Mystery player';
    }
}

const build = new Stack();
