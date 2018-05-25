var generator =[
    ["песни", "гвозди", "трамвай"],
    ["созвездия", "болезней", "бездарей"],
    ["гончих псов", "бешеных белок", "летающих ложек"]
]
// песни-созвездия-гончих псов, песни-болезней-бешенных белок, песни-бездарей-летающих ложек
alert(generator[0][0]+" "+generator[1][0]+" "+generator[2][0]);
alert(generator[0][0]+" "+generator[1][1]+" "+generator[2][1]);
alert(generator[0][0]+" "+generator[1][2]+" "+generator[2][2]);

//гвозди-созвездия-гончих псов, гвозди-болезней-бешенных белок, гвозди-бездарей-летающих ложек

alert(generator[0][1]+" "+generator[1][0]+" "+generator[2][0]);
alert(generator[0][1]+" "+generator[1][1]+" "+generator[2][1]);
alert(generator[0][1]+" "+generator[1][2]+" "+generator[2][2]);

//трамвай-созвездия-гончих псов, трамвай-болезней-бешенных белок, трамвай-бездарей-летающих ложек

alert(generator[0][2]+" "+generator[1][0]+" "+generator[2][0]);
alert(generator[0][2]+" "+generator[1][1]+" "+generator[2][1]);
alert(generator[0][2]+" "+generator[1][2]+" "+generator[2][2]);

//созвездия-песни-гончих псов, созвездия-гвозди-бешеных белок, созвездия-трамвай-летающих ложек

alert(generator[1][0]+" "+generator[0][0]+" "+generator[2][0]);
alert(generator[1][0]+" "+generator[0][1]+" "+generator[2][1]);
alert(generator[1][0]+" "+generator[0][2]+" "+generator[2][2]);

//болезней-песни-гончих псов, болезней-гвозди-бешеных белок, болезней-трамвай-летающих ложек

alert(generator[1][1]+" "+generator[0][0]+" "+generator[2][0]);
alert(generator[1][1]+" "+generator[0][1]+" "+generator[2][1]);
alert(generator[1][1]+" "+generator[0][2]+" "+generator[2][2]);

//бездарей-песни-гончих псов, бездарей-гвозди-бешеных белок, бездарей-трамвай-летающих ложек

alert(generator[1][2]+" "+generator[0][0]+" "+generator[2][0]);
alert(generator[1][2]+" "+generator[0][1]+" "+generator[2][1]);
alert(generator[1][2]+" "+generator[0][2]+" "+generator[2][2]);

//гончих псов-песни-созвездия, гончих псов-болезней-гвозди, гончих псов-бездарей-трамвай

alert(generator[2][0]+" "+generator[0][0]+" "+generator[1][0]);
alert(generator[2][0]+" "+generator[0][1]+" "+generator[1][1]);
alert(generator[2][0]+" "+generator[0][2]+" "+generator[1][2]);

//бешеных белок-песни-созвездия, бешеных белок-болезней-гвозди, бешеных белок-бездарей-трамвай

alert(generator[2][1]+" "+generator[0][0]+" "+generator[1][0]);
alert(generator[2][1]+" "+generator[0][1]+" "+generator[1][1]);
alert(generator[2][1]+" "+generator[0][2]+" "+generator[1][2]);

//летающих ложек-песни-созвездия, летающих ложек-болезней-гвозди, летающих ложек-бездарей-трамвай

alert(generator[2][2]+" "+generator[0][0]+" "+generator[1][0]);
alert(generator[2][2]+" "+generator[0][1]+" "+generator[1][1]);
alert(generator[2][2]+" "+generator[0][2]+" "+generator[1][2]);

// for (var i=0; i<=10; i++){
//     console.log(i);
// }

// for (var i=0; i<=10;){
//     console.log(++i);
// }

// for (var i=0; i<=10;){
//     console.log(i++);
// }