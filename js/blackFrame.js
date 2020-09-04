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
  function bframe(){
    if(isImageLoaded(image)){
      var h = image.getHeight()/20;
      var w = image.getWidth()/20;
      for(var pix of image.values()){
        if(pix.getX()<=w || (pix.getX()<=20*w && pix.getX()>19*w)){
          pix.setRed(0);
          pix.setGreen(0);
          pix.setBlue(0);
        }
        else if(pix.getY()<=h || (pix.getY()<=20*h && pix.getY()>19*h)){
          pix.setRed(0);
          pix.setGreen(0);
          pix.setBlue(0);
    }
      }
      var Canva = document.getElementById("can");
      image.drawTo(Canva);
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