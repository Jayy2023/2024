document.addEventListener('DOMContentLoaded', () => {

    let counter = 0;
    const btn = document.querySelector('button');
    const heading = document.querySelector('h1');
    
    
    function count(){
        counter++; 

        heading.innerHTML = counter;
        if(counter % 10 === 0){
           alert(`The person you are talking about is a ${counter}`); 
        }
      
    }
    btn.onclick = count;

    /*setInterval(count, 1000); */ 
})