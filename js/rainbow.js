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
function makeRainbow(){
    if(isImageLoaded(image)){
      var section = image.getHeight()/7;
      for(var pix of image.values()){
        var avg = (pix.getGreen() + pix.getRed() + pix.getBlue() )/ 3;
        if(pix.getY()<section){
          if(avg<128){
            pix.setRed(2*avg);
            pix.setGreen(0);
            pix.setBlue(0);
          }
          else{
            pix.setRed(255);
            pix.setGreen(2*avg - 255);
            pix.setBlue(2*avg -255);
          }
        }
        else if(pix.getY()<2*section){
          if(avg<128){
            pix.setRed(2*avg);
            pix.setGreen(0.8*avg);
            pix.setBlue(0);
          }
          else{
            pix.setRed(255);
            pix.setGreen(1.2*avg - 51);
            pix.setBlue(2*avg -255);
          }
        }
        else if(pix.getY()<3*section){
          if(avg<128){
            pix.setRed(2*avg);
            pix.setGreen(2*avg);
            pix.setBlue(0);
          }
          else{
            pix.setRed(255);
            pix.setGreen(255);
            pix.setBlue(2*avg -255);
          }
        }
        else if(pix.getY()<4*section){
          if(avg<128){
            pix.setRed(0);
            pix.setGreen(2*avg);
            pix.setBlue(0);
          }
          else{
            pix.setRed(2*avg-255);
            pix.setGreen(255);
            pix.setBlue(2*avg -255);
          }
        }
        else if(pix.getY()<5*section){
          if(avg<128){
            pix.setRed(0);
            pix.setGreen(0);
            pix.setBlue(2*avg);
          }
          else{
            pix.setRed(2*avg-255);
            pix.setGreen(2*avg - 255);
            pix.setBlue(255);
          }
        }
        else if(pix.getY()<6*section){
          if(avg<128){
            pix.setRed(0.8*avg);
            pix.setGreen(0);
            pix.setBlue(2*avg);
          }
          else{
            pix.setRed(1.2*avg-251);
            pix.setGreen(2*avg - 255);
            pix.setBlue(255);
          }
        }
        else{
          if(avg<128){
            pix.setRed(1.6*avg);
            pix.setGreen(0);
            pix.setBlue(1.6*avg);
          }
          else{
            pix.setRed(0.4*avg + 153);
            pix.setGreen(2*avg - 255);
            pix.setBlue(0.4*avg + 153);
          }
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