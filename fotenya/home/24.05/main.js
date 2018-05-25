function is_pal(text)

{
   
    var text = text.replace(' ', '');
    
    var p1 = 0, p2 = text.length - 1;
   
    while (p1 > p2)
       
        if (text.charAt(p1++) != text.charAt(p2--)) return 'не является палиндромом';
   
    return 'палиндром';
}
