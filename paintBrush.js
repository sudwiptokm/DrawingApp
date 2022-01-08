function paintBrush(){
	//set an icon and a name for the object
	this.icon = "assets/paintBrush.png";
	this.name = "paintBrush";

    // Variables
	var previousMouseX = -1;
	var previousMouseY = -1;
    var lastX, lastY;

	this.draw = function(){
        // Get Stroke Weight From the Slider
        strokeWeight(this.strokeSizeSlider.value());   
        // adding the alpha value
        var c = colourP.selectedColour;
        var alp = this.opacitySlider.value();
        let c1 = color(c);
        c1._array[3] = alp/255;
        stroke(c1);
		if(mouseIsPressed){
			//check if they previousX and Y are -1. set them to the current
			//mouse X and Y if they are.
			if (previousMouseX == -1){
				previousMouseX = mouseX;
				previousMouseY = mouseY;
			}
			//if we already have values for previousX and Y we can draw a line from 
			//there to the current mouse location
			else{
                // Brush Type 1
                if(this.selectionToolForOptions.selected()=='Type 1'){
				    line(previousMouseX, previousMouseY, mouseX, mouseY);
                }
                // Brush Type 2
                else if(this.selectionToolForOptions.selected()=='Type 2'){
                    for (var i = 0; i< this.strokeSizeSlider.value(); i++) {
                        var thisX= mouseX + random(-i, i); 
                        var thisY= mouseY + random(-i, i); 
                        noStroke();
                        fill(c1);
                        beginShape();
                        vertex(mouseX, mouseY);
                        bezierVertex(lastX, lastY, thisX, thisY, thisX, thisY);
                        bezierVertex(mouseX, mouseY, mouseX, mouseY, mouseX, mouseY);
                        lastX = thisX;
                        lastY = thisY;
                        endShape();
                    }
                }
                // Brush Type 3
                else if(this.selectionToolForOptions.selected()=='Type 3'){
                    colorMode(HSB);
                    noStroke();
                    stroke((5*frameCount) % 360, 40, 100);
                    fill((5*frameCount) % 360, 100, 100);
                    strokeWeight(20);
                    line(previousMouseX, previousMouseY, mouseX, mouseY);
                }
				previousMouseX = mouseX;
				previousMouseY = mouseY;
			}
		}
		//if the user has released the mouse we want to set the previousMouse values back to -1.
		else{
			previousMouseX = -1;
			previousMouseY = -1;
		}
	};
    this.unselectTool = function() {
		select("#sizeOfControl").html("");
    }
    this.populateOptions = function() {
        this.strokeSizeText = createDiv('Stroke size: ');
        this.strokeSizeText.parent("#sizeOfControl");
        this.strokeSizeSlider = createSlider(1,30,10);
        this.strokeSizeSlider.parent("#sizeOfControl");
        this.opacityText = createDiv('Opacity: ');
        this.opacityText.parent("#sizeOfControl");
        this.opacitySlider = createSlider(0,255,50);
        this.opacitySlider.parent("#sizeOfControl");
        this.optionTextProperty = createDiv('Shape options: ');
        this.optionTextProperty.parent("#sizeOfControl");
        this.selectionToolForOptions = createSelect();
        this.selectionToolForOptions.parent("#sizeOfControl");
        var shapes = ['Type 1','Type 2','Type 3'];
        for (var i=0; i<shapes.length;i++)
            {
                this.selectionToolForOptions.option(shapes[i]);
            }
    }
}