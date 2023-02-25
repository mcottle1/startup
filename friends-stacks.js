function loadTables(){
    let tabels = [];
    const tablesText = localStorage.getItem('tables');
    if(tablesText){
        tabels = JSON.parse(tablesText);
    }

    if(tabels.length){
        for(const [i, table] of tabels.entries()){
            const tableBody = document.createElement('')
        }
    }
}