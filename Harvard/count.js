document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('h1').innerHTML = localStorage.getItem('counter');

   if(localStorage.getItem('counter')){
    localStorage.setItem('counter',0);
   }
    const btn = document.querySelector('button');
    const heading = document.querySelector('h1');
    
    
    function count(){
        let counter = localStorage.getItem('counter');
        counter++; 

        heading.innerHTML = counter;
       localStorage.setItem('counter', counter);
      
    }
    btn.onclick = count;

   
})