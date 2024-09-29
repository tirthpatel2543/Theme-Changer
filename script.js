const button = document.querySelectorAll('.box');
const body = document.querySelector('body')

button.forEach(function(button){
    console.log(button);
    button.addEventListener("click",function(e){
        console.log(e);
        console.log(e.target);

        if( e.target.id === 'red'){
            body.style.backgroundColor='Red';
            body.style.color='black';
        }
        else if(e.target.id === 'white'){
            body.style.backgroundColor='White';
            body.style.color='black';
        }
        else if(e.target.id === 'black'){
            body.style.backgroundColor='black';
            body.style.color='white';
            button.style.border='2px solid white'
        }
        else if(e.target.id === 'yellow'){
            body.style.backgroundColor='yellow';
            body.style.color='black';
        }
    })
})