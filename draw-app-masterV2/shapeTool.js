function ShapeTool(){
	this.icon = "assets/shape.png";
	this.name = "Shape";

	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;

	//draws the shapes to the screen 
	this.draw = function(){

		//only draw when mouse is clicked
        strokeWeight(this.strokeSizeSlider.value());
        if (this.selectionToolForFill.selected()=='NoFill'){
            noFill();
        }
        else{
            var c = colourP.selectedColour;
            fill(c);
        }
		if(mouseIsPressed){
			//if it's the start of drawing a new shape
			if(startMouseX == -1){
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
				//save the current pixel Array
				loadPixels();
			}

			else{
				//update the screen with the saved pixels to hide any previous
				//line between mouse pressed and released
				updatePixels();
				//draw the shape
				if(this.selectionToolForOptions.selected()=='rect'){
                    rect(startMouseX, startMouseY, mouseX-startMouseX, mouseY-startMouseY);
                }
                else if(this.selectionToolForOptions.selected()=='ellipse'){
				    ellipse(startMouseX, startMouseY, mouseX-startMouseX, mouseY-startMouseY);
                }
                else if(this.selectionToolForOptions.selected()=='circle'){
				    ellipse(startMouseX, startMouseY, mouseX-startMouseX);
			    }
			}

		}

		else if(drawing){
			//save the pixels with the most recent shape and reset the
			//drawing bool and start locations
			loadPixels();
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};
    this.unselectTool = function() {
		select("#sizeOfControl").html("");
    }
    this.populateOptions = function() {
        this.strokeSizeText = createDiv('Stroke size: ');
        this.strokeSizeText.parent("#sizeOfControl");
        this.strokeSizeSlider = createSlider(1,20,1);
        this.strokeSizeSlider.parent("#sizeOfControl");
        this.optionTextProperty = createDiv('Shape options: ');
        this.optionTextProperty.parent("#sizeOfControl");
        this.selectionToolForOptions = createSelect();
        this.selectionToolForOptions.parent("#sizeOfControl");
        var shapes = ['rect','ellipse','circle'];
        for (var i=0; i<shapes.length;i++)
            {
                this.selectionToolForOptions.option(shapes[i]);
            }
        this.fillTypeSelectionText = createDiv('Fill type: ');
        this.fillTypeSelectionText.parent('#sizeOfControl');
        this.selectionToolForFill = createSelect();
        this.selectionToolForFill.parent('#sizeOfControl');
        var fillType = ['Fill', 'NoFill'];
        for (var i=0; i<fillType.length;i++){
            this.selectionToolForFill.option(fillType[i]);
        }
    }
}