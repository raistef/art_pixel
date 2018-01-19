// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

$("#sizePicker").submit(function(event) {
  //var height = $("#input_height");
  //console.log(height);
  makeGrid();
  event.preventDefault();
});



function makeGrid() {
  var height = document.getElementById("input_height").value;
  var width = document.getElementById("input_width").value;
  
  var h="";
  for (var i=0; i<height; i++) {
 h+="<tr>";
  for (var j=0; j<width; j++) {
    h+="<td></td>";
	
  }
  h+="</tr>";
}
  
	$("table").html(h);
	$("table").css("background-color", "white");
  
  
  $("#pixel_canvas tr td").click(function(){    
  var color=document.getElementById("colorPicker").value;
  $(this).css("background-color", color);
 
});
}





