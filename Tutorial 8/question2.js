function insert_Row(){
    let table = document.getElementById("sampleTable");
    let row = table.insertRow(0);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    cell1.innerHTML = "NEW CELL 1";
    cell2.innerHTML = "NEW CELL 2";
}