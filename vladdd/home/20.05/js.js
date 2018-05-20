// JavaScript File
var a=prompt("Введите возраст");
var b=18;
var c=21;
var d=35;
var e=135;
var g=/[^[0-9]/
if (g.test(a)) {alert ("Некорректная запись");}
    else {if (a < b) {alert("Мал еще");} 
    else {if (a >= b && a < c) {alert("Можете голосовать");}  
    else {if (a >= c && a < d) {alert("Можете баллотироваться в депутаты");}  
    else {if (a >= d && a < e) {alert("Можете баллотироваться в президенты");}
    else {if (a >= e) {alert("Столько не живут");}}}}}}