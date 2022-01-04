function EditableShapeButton(){
    this.name = "EditableShape";
    this.icon = "assets/editableShape.png";

    // var editButton;
    // var finishButton;
    var editMode = false;
    var currentShape = [];
    
    noFill();
    loadPixels();

    var c= document.getElementById("defaultCanvas0");  

    this.draw = function(){
        updatePixels();
        if (this.mousePressOnCanvas(c) && mouseIsPressed){
            if (!editMode){
                currentShape.push({
                    x: mouseX,
                    y: mouseY
                })
            }
            else{
                for (var i=0; i<currentShape.length;i++){
                    if (dist(currentShape[i].x, currentShape[i].y,mouseX,mouseY) < 15){
                        currentShape[i].x = mouseX;
                        currentShape[i].y = mouseY;
                    }
                }
            }
        }
        beginShape();
        for (var i=0; i<currentShape.length; i++){
            vertex(currentShape[i].x,currentShape[i].y);
            if (editMode){
                fill("magenta");
                ellipse(currentShape[i].x,currentShape[i].y,10);
                noFill();
            }
        }
        endShape();
    }


    this.mousePressOnCanvas = function(canvas) {
        // console.log(canvas.offsetLeft,canvas.offsetTop+canvas.height,mouseY);
        if (mouseX > canvas.offsetLeft && mouseX < (canvas.offsetLeft + canvas.width) && mouseY > canvas.offsetTop && mouseY < (canvas.offsetTop + canvas.height - 40)){
            return true;
        }
        return false;
    }

    this.unselectTool = function() {
		select("#sizeOfControl").html("");
	};


    this.populateOptions = function() {
        var self =this;
        this.editButton = createButton ('Edit Shape');
        this.editButton.parent("#sizeOfControl");
        this.finishButton = createButton ('Finish Button');
        this.finishButton.parent("#sizeOfControl");
        this.finishButton.mousePressed(function(){
            editMode = false;
            self.editButton.elt.innerText = "Edit Shape";
            loadPixels();
            currentShape = [];
        })
        console.log(this.editButton);
        this.editButton.mousePressed(function(){
            if(editMode){
                editMode = false;
                self.editButton.elt.innerText = "Edit Shape";
            }
            else{
                editMode = true;
                self.editButton.elt.innerText = "Add Vertices";
            }
        })
    }
}
