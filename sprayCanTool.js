function SprayCanTool(){
	
	this.name = "sprayCanTool";
	this.icon = "assets/sprayCan.jpg";

	var points = 13;
	// var spread = 10;

	this.draw = function(){
		strokeWeight(this.strokeSizeSlider.value());
		var spread = this.spreadSizeSlider.value();
		var r = random(5,10);
		if(mouseIsPressed){
			for(var i = 0; i < points; i++){
				point(random(mouseX-spread, mouseX + spread), random(mouseY-spread, mouseY+spread));
			}
		}
	}
	this.unselectTool = function() {
		select("#sizeOfControl").html("");
    }
    this.populateOptions = function() {
        this.strokeSizeText = createDiv('Stroke size: ');
        this.strokeSizeText.parent("#sizeOfControl");
        this.strokeSizeSlider = createSlider(1,20,1);
        this.strokeSizeSlider.parent("#sizeOfControl");
		this.spreadSizeText = createDiv('spread size: ');
        this.spreadSizeText.parent("#sizeOfControl");
        this.spreadSizeSlider = createSlider(1,20,10);
        this.spreadSizeSlider.parent("#sizeOfControl");
    }
}