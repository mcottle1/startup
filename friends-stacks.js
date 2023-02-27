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
                cell3.innerHTML = '<input type="checkbox" id="task1" name="task1" value="task"><label for="task1"> Done for the day!</label>';
            }
        }
    }
}

loadTables();