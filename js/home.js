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
function makeRed(){
  if(isImageLoaded(image)){
    for(var pix of image.values()){
      var avg = (pix.getGreen() + pix.getRed() + pix.getBlue() )/ 3;
      if(avg<128){
        pix.setRed(2*avg);
        pix.setBlue(0);
        pix.setGreen(0);
      }
      else{
        pix.setRed(255);
        pix.setBlue(2*avg-255);
        pix.setGreen(2*avg - 255);
      }
    }
    newCanva = document.getElementById("can");
    image.drawTo(newCanva);
  }
}
function makeBlur(){
  if(isImageLoaded(image)){
    var nImage = new SimpleImage(image.getWidth(),image.getHeight());
    for(var pix of image.values()){
      var npix = nImage.getPixel(pix.getX(),pix.getY());
      if(Math.random()>0.5){
        npix.setRed(pix.getRed());
        npix.setGreen(pix.getGreen());
        npix.setBlue(pix.getBlue());
      }
      else{
         var spixel = randPixel(pix,image);
        /*while(isValid(spixel,nimage)==false){
          spixel = randPixel(npixel);
        }*/
        npix.setRed(spixel.getRed());
        npix.setGreen(spixel.getGreen());
        npix.setBlue(spixel.getBlue());
      }
    }
    var canva = document.getElementById("can");
    nImage.drawTo(canva);
  }
}
function randPixel(pixel,image){
  var check=false;
  while(check==false){
    var xshift = Math.round(Math.random()*10);
    if (Math.random()<0.5){
      xshift=xshift*-1;
    }
    var x = pixel.getX()+xshift;

    var yshift = Math.round(Math.random()*10);
    if (Math.random()<0.5){
      yshift=yshift*-1;
    }
    var y = pixel.getY()+yshift;
    if (x>=0 && x<image.getWidth() && y>=0 && y<image.getHeight()){
      check=true;
    }
  }
  var spixel = image.getPixel(x, y);
  return spixel;
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
function wframe(){
  if(isImageLoaded(image)){
    var h = image.getHeight()/20;
    var w = image.getWidth()/20;
    for(var pix of image.values()){
      if(pix.getX()<=w || (pix.getX()<=20*w && pix.getX()>19*w)){
        pix.setRed(255);
        pix.setGreen(255);
        pix.setBlue(255);
      }
      else if(pix.getY()<=h || (pix.getY()<=20*h && pix.getY()>19*h)){
        pix.setRed(255);
        pix.setGreen(255);
        pix.setBlue(255);
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