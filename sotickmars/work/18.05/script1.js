
var a;
a=prompt("Сколько вам лет ?");


if(a>=18 &&  a<=24){
alert("Вы можете принимать участие в выборах");
}

else if(a>24 && a<=35){
alert("Вы можете стать депутатом");
}

else if(a>35 && a<=135){
alert("Вы можете стать президентом РБ");
}
    
else if(a<18){
alert("Вы молодой одуван");
}

else if(a>135){
alert("Вы помятый куст");
}
