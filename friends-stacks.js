function loadTables(){
    let htmlTableIDs = ["one", "two","three","four","five","six"];
    let tabels = [];
    const tablesText = localStorage.getItem('tables');
    if(tablesText){
        tabels = JSON.parse(tablesText);
    }

    if(tabels.length){
        for(const [i, table] of tabels.entries()){
            const tableBody = document.getElementById(htmlTableIDs[i]);
            for(let j = 0; j < table.habits.length; j++){
                let row = document.createElement('tr');
                let cell1 = document.createElement('td');
                let cell2 = document.createElement('td');
                let cell3 = document.createElement('td');
                cell1.textContent = table.habits[j];
                cell2.textContent = table.times[j];
                cell3.textContent = table.completion[j];
                row.appendChild(cell1);
                row.appendChild(cell2);
                row.appendChild(cell3);
                tableBody.appendChild(row);
            }
        }
    }
}

loadTables();