function loadTables(){
    let htmlTableIDs = ["one", "two","three","four","five","six"];
    let users = [];
    const usersText = localStorage.getItem('users');
    if(usersText){
        users = JSON.parse(usersText);
    }

    if(users.length){
        for(let i = 0; i < users.length; i++){
            const tableBody = document.getElementById(htmlTableIDs[i]);
            tableBody.innerHTML = '';
            let table = [];
            const tableText = localStorage.getItem('table' + users[i]);
            var str2 = localStorage.getItem('boxes' + users[i]);
            let boxes = [];
            if(str2 != null){
                boxes = JSON.parse(str2);
            }
            if(tableText){
                table = JSON.parse(tableText);
                if(table.length > 0){
                    const builderNameElement = document.getElementById('stackname' + htmlTableIDs[i]);
                    builderNameElement.textContent = users[i];
                    var header = tableBody.createTHead();
                    var row = header.insertRow(0);
                    var cell1H = row.insertCell(0);
                    var cell2H = row.insertCell(1);
                    var cell3H = row.insertCell(2);
                    cell1H.innerText = "Habit";
                    cell2H.innerText = "Time of Day";
                    cell3H.innerText = "Completion Status";
                }
            }
            for(let j = 0; j < table.length; j++){
                let row = tableBody.insertRow();
                let cell1 = row.insertCell();
                let cell2 = row.insertCell();
                cell2.setAttribute("class", "center");
                let cell3 = row.insertCell();
                cell1.innerHTML = table[j].habit;
                cell2.innerHTML =  table[j].time;
                if(boxes[j]){
                    cell3.innerHTML = '<input type="checkbox" id="task" name="task1" value="task" checked><label for="task1"> Done for the day!</label>';
                }else{
                    cell3.innerHTML = '<input type="checkbox" id="task" name="task1" value="task"><label for="task1"> Done for the day!</label>';
                }
            }
        }
    }
}

loadTables();