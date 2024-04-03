function insert_Row(){
    var table = document.getElementById("sampleTable");
    var row = table.insert_Row(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "NEW CELL 1";
    cell2.innerHTML = "NEW CELL 2";
}