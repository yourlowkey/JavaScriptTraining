var testScore = { 
    name: "duongphuc",
    math: 8,
    physical: 9,
    chemistry: 5
};

function nhapdiem() {
      addRow();
        document.getElementById("toan").value=testScore.math ;
        document.getElementById("hoten").value=testScore.name ;
        document.getElementById("ly").value=testScore.physical; ;
        document.getElementById("hoa").value=testScore.math ;
}
function addRow() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(1);
     row.insertCell(0);
     row.insertCell(1);
     row.insertCell(2);
     row.insertCell(3);
     row.insertCell(4);
     row.insertCell(5);
    
}
console.log(JSON.stringify(testScore));
