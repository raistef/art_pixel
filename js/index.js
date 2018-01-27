
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

///// https://github.com/Syknapse/Pixel-art-maker/blob/master/designs.js - source for the following block of code ///

	var color=document.getElementById("colorPicker").value;
    let mouseIsDown = true;
    let clicks = $(this).data('clicks');
    $('table').on('mouseleave', 'td', function(){
		color=document.getElementById("colorPicker").value;
        if (mouseIsDown){
            if (!clicks){
                // Change background color of cell
                $(this).css('background-color', color);
            } else {
                // On second click return color to default (erase)
                $(this).css('background-color', '');
            }
            // Fire `if` event on odd clicks
            $(this).data('clicks', !clicks);
        }
    })
    $('table').on('mousedown', 'td', function(){
        event.preventDefault();
        mouseIsDown = true;
    })
    $('table').on('mouseup', 'td', function(){
        mouseIsDown = false;
    });
    $('table').on('mouseleave', function(){
        mouseIsDown = false;
    });


/////////////////////////////////////////////////////

}







