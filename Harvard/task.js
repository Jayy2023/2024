document.addEventListener("DOMContentLoaded", () => {

// Disabling the submit button
    document.querySelector('#submit').disabled = true;

    document.querySelector('#task').onkeyup = () => {
        document.querySelector('#submit').disabled = false;
    }

    document.querySelector('form').onsubmit = () => {
         const task = document.querySelector('#task').value;
         console.log(task);

         const li = document.createElement('li');
         li.innerHTML = task;

         document.querySelector('#tasks').appendChild(li);

         document.querySelector('#task').value = '';

         //Stop form from submitting
            return false;

    }
})