var age = prompt('Введите ваш возраст', '');
if (age < 18 && age > 0) {
    alert('Вы еще слишком молоды и не имеете право голосовать на выборах, баллотироваться в депутаты, баллотироваться в президенты');
}
else if (age >= 18 && age < 21) {
    alert('Вы имеете право голосовать на выборах');
}
else if (age >= 21 && age < 35) {
    alert('Вы имеете право баллотироваться в депутаты и голосовать на выборах');
}
else if (age >= 35 && age <= 135) {
    alert('Вы имеете право голосовать на выборах, баллотироваться в депутаты и баллотироваться в президенты');
}
else if (age > 135) {
    alert('Столько не живут');
}
else if (age < 0) {
    alert('ошиибка! Вы еще не родились')
}
else {
    alert('Ошибка!');
}
