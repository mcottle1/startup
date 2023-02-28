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