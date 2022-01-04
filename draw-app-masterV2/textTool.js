function TextTool(){
    this.icon = "assets/text.png";
    this.name = "Text";
    
    this.draw = function(){
        //loadPixels();
        updatePixels();
        textAlign(CENTER);
        textSize(this.textSizeSlider.value());
        text(this.inputedText.value(),400,70);
//        updatePixels();
        }
    this.unselectTool = function() {
        //updatePixels();
		select("#sizeOfControl").html("");
    }
    this.populateOptions = function() {
        this.textSizeText = createDiv('Text size: ');
        this.textSizeText.parent("#sizeOfControl");
        this.textSizeSlider = createSlider(15,60,25);
        this.textSizeSlider.parent("#sizeOfControl");
        this.textInputText = createDiv('Input your Text: ');
        this.textInputText.parent("#sizeOfControl");
        this.inputedText = createInput("");
        this.inputedText.parent("#sizeOfControl");
    }
}