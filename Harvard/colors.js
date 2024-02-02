document.addEventListener('DOMContentLoaded', () => {

    //Change color to red
    document.querySelector('#red').onclick = () => {
        document.querySelector('#hello').style.color = 'red';
    }
    //Change color to blue
    document.querySelector('#blue').onclick = () => {
        document.querySelector('#hello').style.color = 'blue';
    }
    //Change color to green
    document.querySelector('#green').onclick = () => {
        document.querySelector('#hello').style.color = 'green';
    }
})