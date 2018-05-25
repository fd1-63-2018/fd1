var status = true;
var regexp = /^\d{1,3}$/;
while(status){
	var age = prompt('Сколько Вам лет?', '');
  if(regexp.test(age)){
       if (age <= 18) {
        	alert('Вы слишком юн, мой друг!');
       }
       else if (age > 18 && age < 35) {
        	alert('Вы можете принять участие в выборах!');
       }
       else if (age >= 35 && age <= 135) {
        	alert('Вы можете баллотироваться в президенты и депутаты!');
       }
       else {
        	alert('Столько не живут, дорогой друг!');
       }
   } else{
   		alert("Неверный формат");
   }
   status = confirm('continue?');
}
