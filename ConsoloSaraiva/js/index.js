$('.myImg').click(function(){
    $(".modal").css("display","block");
    $("#img01").attr("src", $(this).prop("src"));
});

// When the user clicks on <span> (x), close the modal
$(".close").click(function() {
	$(".modal").css("display","none");
});

// Function to close modal with outside click
$(".modal").click(function(){
	$(this).css("display","none");
});