var str = prompt("Введите предпологаемый палиндром:");

str.split(",").join("") //Убираем все элементы, которые могут быть в строке, предложении
    .split("!").join("")
    .split("?").join("")
    .split(".").join("")
    .split(":").join("")
    .split("-").join("")
    .split(";").join("")
    .split(" ").join("")
    .split("_").join("")
    .split("-").join("")
    .split("=").join("")
    .split("%").join("")
    .split("#").join("")
    .split("@").join("")
    .split("*").join("")
    .split("(").join("")
    .split(")").join("")
    .split("[").join("")
    .split("[").join("")
    .split("{").join("")
    .split("}").join("")
    .split("<").join("")
    .split(">").join("")
    .split("\"").join("")
    .split("'").join("");

str = str.toLowerCase().split("");

if (str.join("") === str.reverse().join("")) {
    alert("Congratulations у Вас палиндром!!");
}
else {
    alert("Увы, но нет, это не палиндром.")
}
