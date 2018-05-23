var checkAge = true;

do {
    var age = prompt('введите Ваш возраст', '');

    switch (true) {
        case age >= 18 && age < 21:
            alert('Вы можете голосовать');
            checkAge = false;
            break;
        case age >= 21 && age < 31:
            alert('Вы можете стать депутатом');
            checkAge = false;
            break;
        case age >= 31 && age < 135:
            alert('Вы можете стать президентом');
            checkAge = false;
            break;
        case age >= 135:
            alert('столько не живут');
            break;
        case age < 18 && age > 0:
            alert('Вы слишком молоды');
            checkAge = false;
            break;
        default:
            alert('invalid input');

    } 
} while (checkAge);
