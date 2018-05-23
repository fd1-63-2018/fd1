var checkAge = true;
while (checkAge) {
    var age = prompt('Введите ваш возраст');
    switch (true) {
        case (age > 0 && age < 18):
            alert('Вы еще слишком молоды и не имеете право голосовать на выборах, баллотироваться в депутаты, баллотироваться в президенты');
            checkAge = false;
            break;
        case (age >= 18 && age < 21):
            alert('Вы имеете право голосовать на выборах');
            checkAge = false;
            break;
        case (age >= 21 && age < 35):
            alert('Вы имеете право баллотироваться в депутаты и голосовать на выборах');
            checkAge = false;
            break;
        case (age >= 35 && age <= 135):
            alert('Вы имеете право баллотироваться в депутаты и голосовать на выборах');
            checkAge = false;
            break;
        case (age > 135):
            alert('Столько не живут');
            checkAge = false;
            break;
        case (typeof age !== 'number'):
            alert('Ошибка!');
            break;
        default:
            alert('Ошибка!');
            break;
    }
}
