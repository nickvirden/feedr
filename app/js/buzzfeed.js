$(function() {
    
    $.get('https://accesscontrolalloworiginall.herokuapp.com/http://www.buzzfeed.com/api/v2/feeds/news', function(data) {
        
        console.log(data);
        
        var buzzes = data.buzzes;
        
        console.log(buzzes);
        
    });
        
});