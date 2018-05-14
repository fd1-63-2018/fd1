jQuery('document').ready(function() {
    jQuery('body').append('<a href="http://google.com">Переходим все в Google!</a>');
    
    jQuery('hr').remove();
    
    var p_clon;
    p_clon=jQuery('p').clone();
    jQuery('body').append(p_clon);      
    
    var katet1, katet2;
    katet1=2;
    katet2=3;
    
    alert(Math.ceil(Math.sqrt((katet1*katet1)+(katet2*katet2))));    
    
});
