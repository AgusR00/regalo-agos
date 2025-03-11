

const startDate = new Date('04/07/2023');


function updateCounter() {
    const currentDate = new Date();
    const timeDifference = currentDate - startDate;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    document.getElementById('counter').innerHTML = `Estamos juntos hace:<br>
        ${years} año, ${months % 12} meses, ${days % 30} días, ${hours} horas y ${minutes} minutos.<br>
        Y espero que sea mucho tiempo más ❤️`;
}


setInterval(updateCounter, 1000);


updateCounter();
