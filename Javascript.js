
/*
1) Operaciones unitarias (con un solo operando): 
1.1) x^2 (nÃºmero elevado al cuadrado)
1.2) 1/x (inverso del nÃºmero)
1.3) sqrt(x) (raiz cuadrada del nÃºmero)
1.4) parte_entera(x) (parte entera de x: si x es positivo devuelve Math.floor(x) y si es negativo devuelve -Math.ceil(x))

2) Operaciones binarias (con dos operandos):
2.1) +. -. *, / (suma, resta, multiplicaciÃ³n y divisiÃ³n)
2.2) x^y (x elevado a y)

*/

window.onload = function(){ //Inicializar 
result=document.getElementById("ResultScreen"); 
memory=document.getElementById("num");
sal=document.getElementById("Saludo");
sal.innerText= "Buenos dÃ­as, bienvenido a la calculadora de Javier Salinas Marzo";//Saludo


}


//DECLARACION VARIABLES
x="0"; //guardar nÃºmero en pantalla
xi=1; //iniciar nÃºmero en pantalla: 1=si; 0=no;
coma=0; //0=entero sin decimal 1=entero con decimal
acc=0; //Guarda numero
op="no"; //operacion a realizar



function Clear(){ //Limpia las variables

	x="0"; 
	xi=1; 
	coma=0; 
	ni=0; 
	op="no"; 
	result.innerHTML=0;
	memory.innerHTML= "";
	

}





function number(xx) { 

         if (x=="0" || xi==1  ) { // inicializar un nÃºmero, 

            result.innerHTML=xx; //mostrar en pantalla
            x=xx; //guardar nÃºmero

         if (xx==".") { //si escribimos una coma al principio del nÃºmero

               result.innerHTML="0."; //escribimos 0.
               x=xx; //guardar nÃºmero
               coma=1; //cambiar estado de la coma

               }
           }
           else { //continuar escribiendo un nÃºmero

           if (xx=="." && coma==0) { //si escribimos una coma decimal pÃ²r primera vez

                   result.innerHTML+=xx;
                   x+=xx;
                   coma=1; //cambiar el estado de la coma  
               }
              //si intentamos escribir una segunda coma decimal no realiza ninguna acciÃ³n.

            else if (xx=="." && coma==1) {} 
                
            else {

                   result.innerHTML+=xx;
                   x+=xx
               }
            }
            xi=0 //el nÃºmero estÃ¡ iniciado y podemos ampliarlo.
         }

function OneNumber($operat){

	switch($operat){

		case 10://Cuadrado

			x = x*x;
			result.innerHTML = x;
			break;
			
		case 20: //Inverso	
			
			x = 1/x;
			result.innerHTML = x;
			break;

		case 30://Raiz

			x = Math.sqrt(x);
			result.innerHTML = x;
			break;
		
		case 40: //Parte entera

			if (x>=0){

				x=Math.floor(x);
				result.innerHTML = x;
				break;

			}else{

				x=-Math.ceil(x);
				result.innerHTML = x;
				break;
			}

			
		case 50:

			x = Math.PI.toFixed(3);
			result.innerHTML = x;
			break;

		}

		}

function operation(s) {

         	acc=x; //Guardamos numero
         	op=s; //guardamos tipo de operaciÃ³n.
         	xi=1; //inicializar pantalla.
         	memory.innerHTML= acc + op;
         	result.innerHTML= 0;
        	
     	}

function match() {
         if (op=="no") { //sin operacion mostramos x
            result.innerHTML=x;	
            }

         else if(op=='^'){

         	x=Math.pow(acc, x);
         	result.innerHTML=x; 
         	op="no";
         }
         else{
            sl=acc+op+x; 

            sol=eval(sl); 

            result.innerHTML=sol; 
            x=sol; //guardamos la soluciÃ³n
            op="no"; //ya no hay operaciones pendientes
            xi=1; //se puede reiniciar la pantalla.
            }
        }