var age = 0;
while (isNaN(age) || age <= 0){
   age = parseInt(prompt('введите Ваш возраст', ''), 10); 
}

switch (true) {
    case age < 18:
        alert('Вы слишком молоды');
        break;
    case age < 21:
        alert('Вы можете голосовать');
        break;
    case age < 31:
        alert("Вы можите стать депутатом");
        break;
    case age < 135:
        alert("Вы можите стать президентом");
        break;
    case age >= 135:
        alert('Столько не живут');
        break;
}
