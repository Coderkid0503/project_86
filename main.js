var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

 #myCanvas{
    border-width:10px;
    background-color: white;
    border-style:ridge;
    border-color:blue;
 }

function new_image()
{
	fabric.Image.fromURL('BirthdayImage.jpg',function(img) {
        block_image_object = img

        block_image_object.scaleToWidth(710);
        block_image_object.scaleToHeight(510);
        block_image_object.set({
            top:0,
            left:0
        })
        canvas.add(block_image_object)
    })
}

function playSound(){
    x.play();
	
}
