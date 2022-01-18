function notify() {
var date = new Date().getFullYear() ;// lấy năm hiện tại
alert("Welcome master ! Let's begin the show");
document.getElementById("name").innerHTML = prompt("Master cho xin quy danh");
var getage = prompt("Master cho xin nam sinh");
while (getage === "" || getage == null || getage.length == 0) {
    getage = prompt("Master cho xin nam sinh");
} // gửi lại prompt nếu để giá trị trống
while (getage >= date) {
    getage = prompt("Master vui long nhap nam sinh");
} // gửi lại prompt năm sinh nếu năm sinh lớn hơn năm hiện tại
var age = date - getage;
if ( age >= 18 ){
    document.getElementById("seemore").style.display = ("block");// nếu tuổi lớn hơn 18 sẽ hiện button tương tự "bước tiếp theo "
}
document.getElementById("age").innerHTML = age;
document.getElementById("address").innerHTML = prompt ("Master cho xin dia chi");
document.getElementById("contact").innerHTML = prompt("Master cho xin sdt");
document.getElementById("content").style.display = ("block"); // hiện text sau khi nhập liệu hết các prompt
}
