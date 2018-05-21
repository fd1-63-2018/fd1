var age = prompt('введите Ваш возраст', '');


if (age >= 18 && age < 21) {
    alert('Вы можете голосовать');
}
else if (age >= 21 && age < 31) {
    alert('Вы можете стать депутатом');
}
else if (age >= 31 && age < 135) {
    alert('Вы можете стать президентом');
}
else if (age >= 135) {
    alert('столько не живут');
}
else if (age < 18 && age > 0) {
    alert('Вы слишком молоды');
} 
else { alert('invalid input');
    
}  


// else if (typeof age !== 'number') {
//     alert('invalid input');
// } 