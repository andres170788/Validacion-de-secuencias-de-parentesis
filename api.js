
var prueba="(([({})]))";

function validarSecuencia(secuencia){

    var cont_parentesis_apertura=0;
    var cont_parentesis_cierre=0;
    var cont_llaves_apertura=0;
    var cont_llaves_cierre=0;
    var cont_corchetes_apertura=0;
    var cont_corchetes_cierre=0;
    var primera_mitad="";
    var segunda_mitad="";
    var invalido=0; //si es mayor que 0 entonces es invalido   

    for(let i=0;i<secuencia.length;i++){
    
        if(secuencia.charAt(i)=="("){
            cont_parentesis_apertura+=1;
        }else if(secuencia.charAt(i)==")"){
            cont_parentesis_cierre+=1;
        }else if(secuencia.charAt(i)=="{"){
            cont_llaves_apertura+=1;
        }else if(secuencia.charAt(i)=="}"){
            cont_llaves_cierre+=1;
        }else if(secuencia.charAt(i)=="["){
            cont_corchetes_apertura+=1;
        }else if(secuencia.charAt(i)=="]"){
            cont_corchetes_cierre+=1;
        }
    
      
    }


    
    if(cont_parentesis_apertura!=cont_parentesis_cierre){
       // console.log("La secuencia es invalida porque esta desbalanceada en los parentesis")
        invalido+=1;
        
    }else if(cont_llaves_apertura!=cont_llaves_cierre){
        invalido+=1;
       // console.log("La secuencia es invalida porque esta desbalanceada en las llaves")
    }else if(cont_corchetes_apertura!=cont_corchetes_cierre){
        invalido+=1;
       // console.log("La secuencia es invalida porque esta desbalanceada en los corchetes")
       //en este punto ya hemos validado que la secuencia esta balanceada 
    }else{
    
        //si la secuencia esta balanceada, su longitud sera un numero par, por ejemplo ")("
        //entonces partimos la secuencia en dos mitades
        //primero validamos si tiene solo dos elementos y partimos la secuencia
        if(secuencia.length==2){
          primera_mitad=secuencia.charAt(0);
          segunda_mitad=secuencia.charAt(1);
          //entonces tiene al menos 4 elementos y partimos diferente
         // console.log("la primera mitad es:"+primera_mitad);
         // console.log("la segunda mitad es:"+segunda_mitad);           
        }else{
         primera_mitad= secuencia.slice(0,-(secuencia.length/2));
         segunda_mitad=secuencia.slice(secuencia.length/2);
         //console.log("la primera mitad es:"+primera_mitad);
         //console.log("la segunda mitad es:"+segunda_mitad);
         //ahora teniendo las dos mitades, lo recorremos y comparamos
         
         
        }

         
        let i=-1;
        let j=primera_mitad.length;

        while(i < primera_mitad.length  && j>0){

            i++;
            j--;
        
         //console.log("abre con: "+primera_mitad.charAt(i)+" cierra con: "+segunda_mitad.charAt(j));

         if(primera_mitad.charAt(i)==")"){
             invalido+=1;
           //  console.log("la secuencia es invalida porque tiene un cierre de parentesis al principio");
         }else if(primera_mitad.charAt(i)=="}"){
             invalido+=1;
             //console.log("la secuencia es invalida porque tiene un cierre de llaves al principio");
         }else if(primera_mitad.charAt(i)=="]"){
             invalido+=1;
             //console.log("la secuencia es invalida porque tiene un cierre de corchetes al principio");


         }

         if(primera_mitad.charAt(i)=="(" && segunda_mitad.charAt(j)!=")"){
              invalido+=1;
              
         }else if(primera_mitad.charAt(i)=="{" && segunda_mitad.charAt(j)!="}"){
             invalido+=1;
             
         }else if(primera_mitad.charAt(i)=="[" && segunda_mitad.charAt(j)!="]"){
             invalido+=1;
             

         }



      

        }



           

                
        
    }

    if(invalido>0){
        console.log("la Secuencia es invalida");
    }else{
        console.log("la secuencia es valida");
    }
   
console.log(invalido);

}

validarSecuencia(prueba);