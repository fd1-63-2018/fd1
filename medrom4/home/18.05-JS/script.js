var age = prompt("Выборы-2018. Сколько вам лет ?", "18");
if (age < 18 && age > 0) {
    alert("Вы слишком молоды для выборов!");
}
else if (age > 17 && age < 19) {
    alert("Вы можете учавствовать в выборах Республики Беларусь!");
}
else if (age > 19 && age < 35) {
    alert("Вы можете выдвигаться в кандидаты депутатов местных советов Республики Беларусь!");
}
else if (age >= 35 && age < 135) {
    alert("Вы можете выдвигаться в кондидаты на должность Президента Республики Беларусь!");
}
else if (age > 135) {
    alert("Столько не живут! А если живут, то крепкого здоровья Вам!");
}
else {
    alert("Пишите правильный возраст!!");
}
