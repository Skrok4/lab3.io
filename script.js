function Check(){
  if ( document.getElementById("elMin").value == ""){
    alert ( "Будь ласка заповніть поле Min." );
    document.getElementById("elMin").style.border = "4px solid red";
}
else if ( document.getElementById("elMax").value == ""){
    alert ( "Будь ласка заповніть поле Max." );           
    document.getElementById("elMax").style.border = "4px solid red";
}
else if ( ( document.getElementById("elStep").value  == "") ){
    alert ( "Будь ласка заповніть поле step." );
    document.getElementById("elStep").style.border = "4px solid red";
}
  else 
{
  var elMin = 1*document.getElementById("elMin").value;
  var elMax = 1*document.getElementById("elMax").value;
  var elStep = 1*document.getElementById('elStep').value;
}

    var y = function(x) 
    {
      return Math.pow((4*x), 3) * Math.pow((Math.pow((x - 1),2)), 0.333);
    }
    var x =elMin + elStep;
	console.log("Табулювання функції Y(x):");
/*1) method using 'for'*/
  for (let x = elMin; x <= elMax; x += elStep)
  console.log(`Y(${x}): ${y(x)}`);
 
/*2) do-while
do{
    console.log(`Y(${x}): ${y(x)}`);
  x=x+elStep;
}
while(x<=elMax);*/

/*3) while
while(x<=elMax){
   console.log(`Y(${x}): ${y(x)}`);
  x=x+elStep;}*/
 
  var canvas = document.getElementById('cnvs'); 
  var ctx = canvas.getContext('2d'); 
  //Сетка
  const canvasWidth = canvas.clientWidth;
  const canvasHeight= canvas.clientHeight;
  //Отступы
  const scaleX = 200;
  const scaleY = 250;

  ctx.font = "30px Arial";
  ctx.textAlign = "left";

  ctx.beginPath();
  ctx.strokeStyle = "white";
  //Вертикальные линии
  for (let i = 0; i <= canvasWidth; i = i + scaleX){
  ctx.moveTo(i,0);
  ctx.lineTo(i,canvasHeight)
  }
  //Горизонтальные линии
  for (let i = 0; i <= canvasHeight; i = i + scaleY){
  ctx.moveTo(0,i);
  ctx.lineTo(canvasWidth,i)
  }
  ctx.stroke();
  ctx.closePath();
  //Главные оси
  const xMiddle = Math.round (canvasWidth/scaleX /2)* scaleX;
  const yMiddle = Math.round (canvasHeight/scaleY/2) * scaleY;
  ctx.beginPath();
  ctx.strokeStyle = "black";
  //y
  ctx.moveTo(xMiddle,0);
  ctx.lineTo(xMiddle,canvasHeight);
  ctx.fillText('y', xMiddle -25, 25);
  //x
  ctx.moveTo(0, yMiddle);
  ctx.lineTo(canvasWidth, yMiddle);
  ctx.fillText('x',canvasWidth -25, yMiddle -25);

  ctx.stroke();
  ctx.closePath();

  //График
  ctx.fillStyle = "red";
  for (let i = 0; i<=canvasWidth; i++)
  {
  const x = (i - xMiddle)/scaleX;

  const y =  Math.pow((4*x),3)*Math.pow(((x - 1)*(x - 1)),0.333);
  ctx.fillRect(x * scaleX + xMiddle, yMiddle - scaleY * y, 5, 5);
  }
}
