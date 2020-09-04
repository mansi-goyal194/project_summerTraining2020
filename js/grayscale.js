var canvas;
var newCanva;
var image;
var img;
function upload(){
    canvas = document.getElementById("d1");
    img = document.getElementById("f");
    image = new SimpleImage(img);
    image.drawTo(canvas);
  }
  function isImageLoaded(aImage) {
    if(aImage==null || !aImage.complete()) {
      alert("You need to load image first!");
      return false;
    }
    else {
      return true;
    }
  }
  function greyScale(){
    if(isImageLoaded(image)){
      for(var pix of image.values()){
      var avg = (pix.getGreen() + pix.getRed() + pix.getBlue() )/ 3;
      pix.setRed(avg);
      pix.setBlue(avg);
      pix.setGreen(avg);
    }
     newCanva = document.getElementById("can");
     image.drawTo(newCanva);
     }
   }
   function reset(){
    if(isImageLoaded(image)){
      var can = document.getElementById("can");
      var img = document.getElementById("f");
      var im = new SimpleImage(img);
      im.drawTo(can);
    }
  }