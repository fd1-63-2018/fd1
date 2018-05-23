var generator = [
    ["песни", "гвозди", "трамвай"],
    ["созвездия", "болезней", "бездарей"],
    ["гончих псов", "бешенных белок", "летающих тарелок"]
]
console.log(generator[0][0] + generator[1][0] + generator[2][1]);
console.log(generator[0][0] + generator[1][1] + generator[2][1]);
console.log(generator[0][0] + generator[1][2] + generator[2][1]); // песни созвездия гончих псов

console.log(generator[0][0] + generator[1][0] + generator[2][2]);
console.log(generator[0][0] + generator[1][1] + generator[2][2]);
console.log(generator[0][0] + generator[1][2] + generator[2][2]);

console.log(generator[0][1] + generator[1][0] + generator[2][0]);
console.log(generator[0][1] + generator[1][1] + generator[2][0]);
console.log(generator[0][1] + generator[1][2] + generator[2][0]);

console.log(generator[0][1] + generator[1][0] + generator[2][1]);
console.log(generator[0][1] + generator[1][1] + generator[2][1]);
console.log(generator[0][1] + generator[1][2] + generator[2][1]);

console.log(generator[0][1] + generator[1][0] + generator[2][2]);
console.log(generator[0][1] + generator[1][1] + generator[2][2]);
console.log(generator[0][1] + generator[1][2] + generator[2][2]);

console.log(generator[0][2] + generator[1][0] + generator[2][0]);
console.log(generator[0][2] + generator[1][1] + generator[2][0]);
console.log(generator[0][2] + generator[1][2] + generator[2][0]);

console.log(generator[0][2] + generator[1][0] + generator[2][0]);
console.log(generator[0][2] + generator[1][1] + generator[2][0]);
console.log(generator[0][2] + generator[1][2] + generator[2][0]);

console.log(generator[0][2] + generator[1][0] + generator[2][2]);
console.log(generator[0][2] + generator[1][1] + generator[2][2]);
console.log(generator[0][2] + generator[1][2] + generator[2][2]);

for(var index =startvalue; condition; iteration){
    for(var i=0; i<=10;){
            }
            console.log(i++)
}
for (var i=0; i<g[0].length; i++) {
	for (var j=0; j<g[1].length; j++) {
		for (var k=0; k<g[2].length; k++) {
			console.log(g[0][i] + ' ' + g[1][j] + ' ' + g[2][k], i+' '+j+' '+k);
		}
	}
}