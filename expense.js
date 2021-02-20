function addRow(){
    var table = document.getElementById('myTableData');
    var row = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var date = new Date();
    td1.innerHTML = document.getElementById('name').value;
   // td2.innerHTML = document.getElementById('date').value;
    td3.innerHTML = document.getElementById('amount').value;
    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    table.children[0].appendChild(row);
}
console.log(addRow())