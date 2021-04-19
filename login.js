function login() {
var username = document.getElementById("username");
if (username.value == "") {
alert("請輸入關卡編號");
} else if(username.value == "A1"){
window.location.href="A1.html";
} else if(username.value == "A2"){
window.location.href="A2.html";
} else if(username.value == "B1"){
window.location.href="B1.html";
} else if(username.value == "B2"){
window.location.href="B2.html";
} else if(username.value == "C1"){
window.location.href="C1.html";
} else if(username.value == "C2"){
window.location.href="C2.html";
} else if(username.value == "D1"){
window.location.href="D1.html";
} else if(username.value == "D2"){
window.location.href="D2.html";
} else if(username.value == "D3"){
window.location.href="D3.html";
} else {
alert("請輸入正確的關卡編號！")
}
}
function find_npc() {alert("還沒做好啦QQ");}
function find_level() {alert("還沒做好啦QQ");}
function find_token() {alert("還沒做好啦QQ");}
