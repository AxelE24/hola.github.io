

//ESCRIBIR LO QUE PASARA EN CASO DE QUE SÍ
yesBtn.addEventListener('click', function(){
    alert('ya sabia 👻👻'); //Puedes mandar los mensajes que quieras
    location.href = 'https://www.youtube.com/watch?v=VSCOvHsPCxY'; //Cambiar el URL en YouTube de la canción que quieras 
});

const noBtn = document.querySelector('#noBtn');

//NO MOVER NADA AQUÍ
noBtn.addEventListener('mouseover', function(){
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);

    noBtn.style.setProperty('top', randomY+'%');
    noBtn.style.setProperty('left', randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
});