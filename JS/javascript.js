$(".addItem").on('click', function(event){
event.preventDefault();
var input = $('.inputField').val();
    $('.ulElements').append('<div class="liElements"> <li class = "shopping">' + input + ' <br><button class= "check"> Check </button> <button class= "delete"> Delete </button></li></div>');
    
    $('.inputField').val("");
});

// To check elements
$('.ulElements').on('click', '.check', function(event){
    event.preventDefault();
    var si = true;
    if (si == true){
        $(this).parent().css('text-decoration', 'line-through');
        si = false;
    }
    else{
        $(this).parent().css('text-decoration', '');
        si = true;
    }
    
    
});


//Delete
$('.ulElements').on('click', '.delete', function(event){
event.preventDefault();
    $(this).closest('li').remove();

});


