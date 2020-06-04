$(document).ready(function(){
  $("#formOne").submit(function(event){
    const nameInput = $("input#name").val();
    const descriptionInput = $("input#description").val();
    const dateInput = $("#date").val();

   $(".name").text(nameInput);
   $(".date").text(dateInput);
   $(".description").text(dateInput);
   
   $("#appointment").show();
   event.preventDefault();
  });
});