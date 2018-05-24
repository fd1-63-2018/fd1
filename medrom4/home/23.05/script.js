function Palindrome_Go(palindrom) {
    var strLen = palindrom.length;
    var result = "";
    for (var i = 0; i < strLen; i++) {
        if (palindrom[i] === palindrom[strLen - 1 - i]) { //Сравниваем все элементы от начала строки со всеми элементами с конца строки
            result = "yes";
        }
        else {
            result = "no";
            return result;
        }
    }
    return result;
}

test = Palindrome_Go("арозаупаланалапуазора");
test2 = Palindrome_Go("аргентинаманитнегра");

console.log(test);
console.log(test2);
document.write("result: " + "palindrom№1 - " + test + " palindrom№2 - " + test2);
