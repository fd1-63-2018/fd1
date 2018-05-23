// JavaScript File
var age = true;
while (age) {
    var age = prompt('Введите возраст:');

    switch (true) {
        case age > 0 && age < 18:
            alert('Ты слишком молод');
            age = false;
            break;

        case age >= 18 && age < 21:
            alert('Можешь голосовать');
            age = false;
            break;

        case age >= 21 && age < 35:
            alert('Можешь баллотироваться в депутаты');
            age = false;
            break;
        case age >= 35 && age < 135:
            alert('Можешь баллотироваться в президенты');
            age = false;
            break;

        case age >= 135:
            alert('Столько не живут');
            break;
        default:
            alert('Некорректное значение');

    }
}
