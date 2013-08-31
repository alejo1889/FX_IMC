  //Funcion para calcular el IMC
    function calcular()
        {
        var p = document.getElementById("peso").value;
        var h = document.getElementById("alt").value;
        
        if(p==0 || h==0)
        {
            alert("Los valores introducidos no son validos");
        } else{
         h = h/100;
         var r = p/[h*h];
         r = r.toFixed(1);
         var estado="Su estado nutricional es ";
         if (r<18.5){
            estado=estado+"bajo de peso";
         }else if (18.5<=r && r<=24.9){
            estado=estado+"normal";
         }else if (25<=r && r<=29.9){
            estado=estado+"sobrepeso";
         }else if (30<=r && r<=34.9){
            estado=estado+"obesidad tipo I";
         }else if (35<=r && r<=39.9){
            estado=estado+"obesidad tipo II";
         }else if (40<=r){
            estado=estado+"obesidad tipo III";
         }
        document.getElementById("respuesta").innerHTML="<br>Su IMC es : "+r+"<br>"+estado;
        }}
        
//Funcion para limpiar el formulario
    function limpiar()
        {
        document.getElementById("peso").value="";
        document.getElementById("alt").value="";
        document.getElementById("respuesta").innerHTML="<br>Su IMC es : ";
        }
