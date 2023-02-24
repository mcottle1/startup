function addRow() {
    let table = document.getElementById("habitStack");
    let row = document.createElement("tr")
    let cell1 = document.createElement("td")
    let cell2 = document.createElement("td")
    cell2.setAttribute("class", "center");
    let cell3 = document.createElement("td")
    let input = document.createElement("input");
    cell1.innerHTML = '<input type="text" id="text" name="varText" placeholder="text here" spellcheck required pattern="[Aa].*" />';
    row.appendChild(cell1);
    cell2.innerHTML = '<label for="time">Time: </label><input type="time" name="varTime" id="time" />';
    row.appendChild(cell2);
    cell3.innerHTML = '<input type="checkbox" id="task1" name="task1" value="task"><label for="task1"> Done for the day!</label>';
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