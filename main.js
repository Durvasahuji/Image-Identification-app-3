  Webcam.set
({
    width:320,
    height:300,
    image_format: 'png',
    png_quality:90,
    
});

camera=document.getElementById("camera");
Webcam.attach('#camera'); 

functiion take_snapshot()
{
   save('myphoto.png');
}