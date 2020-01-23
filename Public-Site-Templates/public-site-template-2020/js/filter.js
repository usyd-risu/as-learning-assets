document.getElementById("FilterContainer").style.display = "none";

$("select.filterby").change(function(){
   //alert("The text has been changed.");
   var filters = $.map($("select.filterby").toArray(), function(e){
       return $(e).val();
   }).join(".");
   document.getElementById("FilterContainer").style.display = "block";
   $("div#FilterContainer").find("div").hide();
   $("div#FilterContainer").find("div." + filters).show();
});
