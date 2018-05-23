 var age=prompt("Введите Ваш возраст"); 
 
 if (0 < age < 18) {
 console.log("Вы не можете голосовать");
}
else if (age >= 18 && age <= 21) {
  console.log ("Вы можете голосовать");
}
else if (age >= 30 && age < 35) {
  console.log ("Вы можете баллотироваться в депутаты");
}
else if (age >= 35 && age < 135) {
  console.log ("Вы можете баллотироваться в президенты");
}
else if (age >= 135) {
  console.log ("Столько не живут!Долгих лет жизни!");
}
else if ("typeof age !== number") {
  console.log ("Введены недопустимые символы");
}
else { //не корректный ввод
};
