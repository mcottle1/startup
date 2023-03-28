async function loadTables(){
    let tables = [];
    try{
        const response = await fetch('/api/stacks');
        tables = await response.json();

        localStorage.setItem('stacks', JSON.stringify(tables));
    }catch{
        const stacksText = localStorage.getItem('stacks');
        if(stacksText){
            tables = JSON.parse(stacksText);
        }
    }
    displayStacks(tables);
}

function displayStacks(stacks){
    let htmlTableIDs = ["one", "two","three","four","five","six"];
    if(stacks.length){
        for (const [i, table] of stacks.entries()){
            const tableBody = document.getElementById(htmlTableIDs[i]);
            tableBody.innerHTML = '';
            if(table.table.length > 0){
                const builderNameElement = document.getElementById('stackname' + htmlTableIDs[i]);
                builderNameElement.textContent = table.name;
                var header = tableBody.createTHead();
                var row = header.insertRow(0);
                var cell1H = row.insertCell(0);
                var cell2H = row.insertCell(1);
                var cell3H = row.insertCell(2);
                cell1H.innerText = "Habit";
                cell2H.innerText = "Time of Day";
                cell3H.innerText = "Completion Status";
            }
            for(let j = 0; j < table.table.length; j++){
                let row = tableBody.insertRow();
                let cell1 = row.insertCell();
                let cell2 = row.insertCell();
                cell2.setAttribute("class", "center");
                let cell3 = row.insertCell();
                cell1.innerHTML = table.table[j].habit;
                cell2.innerHTML =  table.table[j].time;
                if(table.boxes[j]){
                    cell3.innerHTML = '<input type="checkbox" id="task" name="task1" value="task" checked><label for="task1"> Done for the day!</label>';
                }else{
                    cell3.innerHTML = '<input type="checkbox" id="task" name="task1" value="task"><label for="task1"> Done for the day!</label>';
                }
            }
        }
    }
}

loadTables();