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