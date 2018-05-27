var str = prompt('enter smth', '')
    .toLowerCase()
    .replace(/\s+/g, '')
    .replace(/[^\w]+/g, '');

for (var i = 0; i < str.length / 2; i++) {

}

if (str[i] !== str[str.length - 1 - i]) {

    alert('not palindrome');

}
else { alert('palindrome'); }