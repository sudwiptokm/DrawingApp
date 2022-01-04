function Stamp(){
    
    this.name = "stamp";
    this.icon = "assets/star.png";
    
    this.star = loadImage("./assets/star.png");
    this.cloud = loadImage("./assets/cloud.png");
    
    var self= this;


    this.draw =function()
    {
        if(mouseIsPressed){
            var starSize = this.starSizeSlider.value();
            var starX= mouseX - starSize/2;
            var starY= mouseY - starSize/2;
            if (this.selectionToolForOptions.selected()=='star'){
              image(this.star, starX, starY, starSize, starSize); 
            }
            else if (this.selectionToolForOptions.selected()=='cloud'){
              image(this.cloud, starX, starY, starSize, starSize); 
            }
        }
    }
    this.unselectTool = function() {
		select("#sizeOfControl").html("");
	};
    this.populateOptions = function() {
        this.textProperty = createDiv('size: ');
        this.textProperty.parent("#sizeOfControl");
        this.starSizeSlider = createSlider(5,50,20);
        this.starSizeSlider.parent("#sizeOfControl");
        this.optionTextProperty = createDiv('options: ');
        this.optionTextProperty.parent("#sizeOfControl");
        this.selectionToolForOptions = createSelect();
        this.selectionToolForOptions.parent("#sizeOfControl");
        var stamps = ['star','cloud'];
        for (var i=0; i<stamps.length;i++)
            {
                this.selectionToolForOptions.option(stamps[i]);
            }
    }
}
