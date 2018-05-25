var inputText = prompt("Введите строку");

if (inputText == null) {
    console.log("Вы не ввели текст");
} else {

var processedText = inputText.replace(/\s/g, '').toLowerCase();
    
    if (processedText.endsWith('.')) {
        processedText = processedText.replace('.', '');
    }
    
    if (checkText(processedText)) {
        console.log("Строка " + processedText + " является палиндромом");
    }
     else {
         console.log("Строка " + processedText + " не является палиндромом")
     }
}

function checkText(text) {
    
    for (var i = 0; i < text.length/2; i++) {
        if (text[i] != text[text.length - i - 1]) {
            break;
            return false;
        }
        
        else {
            return true;
        }
    }
}