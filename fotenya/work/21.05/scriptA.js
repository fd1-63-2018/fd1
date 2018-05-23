var povtor = true;

while (povtor) {
  
var age=prompt("Введите ваш возраст");

switch (true){
    
 case (age > 0 && age < 18) :
     
 alert("Вы не можете голосовать");
     
 break;

case (age >= 18 && age < 21) :
    
  alert ("Вы можете голосовать");
  
 break;

case (age >= 21 && age < 35) :
    
  alert ("Вы можете баллотироваться в депутаты");
  
  break;

case (age >= 35 && age < 135) :
    
  alert ("Вы можете баллотироваться в президенты");

break;

case (age >= 135) :
    
  alert ("Столько не живут!Долгих лет жизни!");
  
  break;

case ("typeof age !== number"):
    
  alert ("Введены недопустимые символы");
  
  break;
  
  default:
  
  alert ("Не корректный ввод");
  
 break;
 
}
}