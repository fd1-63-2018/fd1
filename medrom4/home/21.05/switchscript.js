var povtor = true;
while (povtor) {
    var age = prompt("Выборы-2018. Сколько вам лет ?", "18");
    switch (true) {
        case age > 0 && age < 18:
            alert("Вы слишком молоды для выборов!");
            povtor = false;
            break;
        case age >= 18 && age < 21:
            alert("Вы можете учавствовать в выборах Республики Беларусь!");
            povtor = false;
            break;
        case age >= 21 && age < 35:
            alert("Вы можете выдвигаться в кандидаты депутатов национального собрания Республики Беларусь!");
            povtor = false;
            break;
        case age >= 35 && age < 135:
            alert("Вы можете выдвигаться в кондидаты на должность Президента Республики Беларусь!");
            povtor = false;
            break;
        case age >= 135:
            alert("Столько не живут! А если живут, то крепкого здоровья Вам!");
            break;
        default:
            alert("Пишите правильный возраст!!");
    }
}
