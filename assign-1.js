
function addRowTop(){
    
    let table = document.getElementById("tableID");
    let tr = table.insertRow(1);
    let tc1 = tr.insertCell(0);
    tc1.innerHTML = 1;
    let tc2 = tr.insertCell(1);
    tc2.innerHTML ="Rupali";
    let tc3 = tr.insertCell(2);
    tc3.innerHTML = "Pingale";
    let tc4 = tr.insertCell(3);
    tc4.innerHTML = "Pune";
    let tc5 = tr.insertCell(4);
    tc5.innerHTML = "India";
   for(let i =2; i<=table.rows.length; i++){
    table.rows[i].cells[0].innerHTML = i;
   }
}
function addRowBottom(){  
    let table = document.getElementById("tableID");
    let tableLength= table.rows.length;
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    td1.innerHTML = tableLength;
    td2.innerHTML = "Rupali";
    td3.innerHTML = "Pingale";
    td4.innerHTML = "Pune";
    td5.innerHTML = "India";
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    table.appendChild(tr);
}