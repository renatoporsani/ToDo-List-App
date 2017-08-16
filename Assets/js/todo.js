// check off specific Todos By clicking

$("ul").on("click", "li", function(){
 $(this).toggleClass("completed");
});


// click on X to delete todos
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
     $(this).remove();
	});
	event.stopPropagation();
});


// Creating new todos
$("input[type='text'] ").on("keypress", function(event){
if (event.which === 13){
	// grabbing new todo from input
	var todoText = $(this).val();
	$(this).val("");
	// create a new LI and add to UL
	$("ul").append("<li><span><i class='fa fa-trash' ></i> </span>" + todoText + "</li>");

}

});

// toggle form

$(".fa-plus").click(function (){
$("input[type='text'] ").fadeToggle();


});