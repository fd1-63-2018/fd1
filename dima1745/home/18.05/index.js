var age = prompt("Введите ваш возраст");
if (age > 0 && age < 18) {
    alert("Вы пока ничего не можете");
}
else if (age >= 18 && age < 21) {
    alert("Вы можете голосовать");
}
else if (age >= 21 && age < 35) {
    alert("Вы можете стать депутатом");
}
else if (age >= 35 && age <= 135) {
    alert("Вы можете стать президентом");
}
else if (age > 135) {
    alert("Столко не живут");
}
else {
    alert("Не верные данные");
}
