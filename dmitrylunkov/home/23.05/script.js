var personAge = prompt("Введите Ваш возраст");
var textMessage;


while(isNaN(personAge) || personAge < 0 || personAge == null) {
    alert("Вы не ввели данные или ввели некорректные данные");
    personAge = prompt("Введите Ваш возраст");
} 

document.getElementById("ageString").innerHTML = "Ваш возраст: " + personAge;

switch(true) {
    case personAge >= 0 && personAge < 18: 
        textMessage = "Вы не имеете права голосовать";
        break;
    case personAge >= 18 && personAge < 21:
        textMessage = "Вы имеете право голосовать";
        break;
    case personAge >=21 && personAge < 31:
        textMessage = "Вы имеете право голосовать и баллотироваться в депутаты Национального собрания";
        break;
    case personAge >= 31 && personAge < 135:
        textMessage = "Вы имеете право голосовать, баллотироваться в депутаты Национального собрания и президенты";
        break;
    case personAge >= 135:
        textMessage = "Столько не живут";    

}

document.getElementById("resultMessage").innerHTML = textMessage;





