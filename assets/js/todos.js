// Check Off specific Todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
})

//Click on x to delete to do

$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
})

$("input[type='text']").keypress(function(event){
    if(event.which === 13) {
        var toDoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span>X </span>"+ toDoText + "</li>")
        
    }
})