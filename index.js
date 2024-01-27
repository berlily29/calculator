var inputs = document.querySelectorAll('.numbers');

var out = document.getElementById('out');
var display = document.getElementById('display');
var expression ="";
var output;


inputs.forEach((e) => {

    e.addEventListener('click',()=>{
        console.log(e);
        
       try {
    
        if (e.innerHTML != '=' && e.innerHTML != 'C' && e.innerHTML != '←' && e.innerHTML != 'x' && e.innerHTML != '÷') {

            expression += e.innerHTML;
            display.innerHTML = expression;
            console.log(display.innerHTML);
            out.innerHTML = eval(expression);
            out.style.fontSize = '1em';
            display.style.fontSize = '2em';
            out.style.color = 'rgb(129, 121, 121)';
            display.style.color = 'white';
            }

        else if (e.innerHTML == 'C') {
            expression = '';
            display.innerHTML = '';
            out.innerHTML = '';
            out.style.fontSize = '1em';
            display.style.fontSize = '2em';
            out.style.color = 'rgb(129, 121, 121)';
            display.style.color = 'white';

            }

        else if (e.innerHTML == '←') {
            let slice = expression.slice(0,-1);
            expression = slice;
            out.innerHTML = eval(expression);
            display.innerHTML = expression;
            out.style.fontSize = '1em';
            display.style.fontSize = '2em';
            out.style.color = 'rgb(129, 121, 121)';
            display.style.color = 'white';

        } 
        else if (e.innerHTML == '=') {
            if (eval(expression)) {
                expression = '';
                output = out.innerHTML;
                expression += output;
                out.style.fontSize = '2em';
                out.style.color = 'white';
                display.style.fontSize = '1em';
                display.style.color = 'rgb(129, 121, 121)';
                }
            else {
                return;
            }
        }

        else if(e.innerHTML == 'x') {
            expression += '*';
            display.innerHTML = expression;
            out.innerHTML = eval(expression);
            out.style.fontSize = '1em';
            display.style.fontSize = '2em';
            out.style.color = 'rgb(129, 121, 121)';
            display.style.color = 'white';

        }

        else if(e.innerHTML == '÷') {
            expression += '/';
            display.innerHTML = expression;
            out.innerHTML = eval(expression);
            out.style.fontSize = '1em';
            display.style.fontSize = '2em';
            out.style.color = 'rgb(129, 121, 121)';
            display.style.color = 'white';


        }

        if (out.innerHTML == "undefined") {
            out.innerHTML = "";
        }

    }

    catch(e) {
            out.style.fontSize = '1em';
            display.style.fontSize = '2em';
            out.style.color = 'rgb(129, 121, 121)';
            display.style.color = 'white';
            display.innerHTML = expression;
            out.innerHTML = '';
            return;
    }
    

            
    });
})