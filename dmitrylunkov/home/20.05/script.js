var personAge = prompt("Введите Ваш возраст");

processAge(personAge);

function processAge(personAge) {
    var textMessage;
    
    if (personAge == null) {
    textMessage = "Вы не ввели число";
}
    
    if (isNaN(personAge) || personAge < 0) {
    textMessage = "Вы ввели некорректное число";
}

if (personAge > 0 && personAge < 18) {
    textMessage = "Вы не можете голосовать.";
}

if (personAge >= 18 && personAge < 21) {
    textMessage = "Вы можете голосовать, но депутатом быть рановато.";
}

if (personAge >= 21 && personAge < 31) {
    textMessage = "Вы можете голосовать, быть депутатом, но до президента не дотягиваете.";
}

if (personAge >= 31 && personAge < 135) {
    textMessage = "Поздравляем!!! Вы можете быть президентом.";
}

if (personAge > 135) {
    textMessage = "Столько не живут.";
}
    
if (personAge != null && !(isNaN(personAge)) && personAge > 0) {    
 document.getElementById("ageString").innerHTML = "Ваш возраст: " + personAge;  
    }
 
 document.getElementById("resultMessage").innerHTML = textMessage;   

}


