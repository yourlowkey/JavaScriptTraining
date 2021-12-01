function notify() {
var date = new Date().getFullYear() ;
alert("Welcome master ! Let's begin the show");
document.getElementById("name").innerHTML = prompt("Master cho xin quy danh");
var getage = prompt("Hãy nhập năm sinh của bạn");
while (getage === "" || getage == null || getage.length == 0) {
getage = prompt("Hãy nhập năm sinh của bạn");
}
while (getage >= date) {
getage = prompt("Hãy nhập lại năm sinh");
}
document.getElementById("age").innerHTML = date - getage ;
document.getElementById("address").innerHTML = prompt ("Master cho xin dia chi");
document.getElementById("contact").innerHTML = prompt("Master cho xin sdt");
document.getElementById("content").style.display = ("block");
}

