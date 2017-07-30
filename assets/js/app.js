/**
 * Created by jpmllr89 on 6/16/17.
 */

var randomColorGen = function(){
    var hexadec = "#"+Math.floor(Math.random()*16777215).toString(16);
    return hexadec;
};

var root = 'https://jsonplaceholder.typicode.com';
$(document)
    .ready(function(){
        var color = randomColorGen();
        $('i').css({
            "color": color
        });

        $('h1').css({
            "color": color
        });
    })
    .delegate('#changeBtn', 'click', function(){
        var newColor = randomColorGen();
    $('i').fadeOut(500, function(){
        $('i').css({
            'color' : newColor
        }).fadeIn(500);
    });

    $('h1').fadeOut(500, function(){
        $.ajax({
            url: root + '/comments/'+Math.floor(Math.random()*100).toString(),
            method: 'GET'
        }).then(function(data) {
            $('h1').text(data.body);
        $('h1').css({
            'color' : newColor
        }).fadeIn(500)
    });
    });
});

