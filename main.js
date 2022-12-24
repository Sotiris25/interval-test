let interval;

let condition = prompt('Set an interval? Ye / no');

if (['yes', 'ye', 'yas', 'ya'].includes(condition.toLowerCase())) {
    let intervalTime = prompt('Enter seconds to repeat loop');
    intervalTime = JSON.parse(intervalTime); // unstrigify

    if (typeof(intervalTime) == 'number') {
        alert('Press ESC key to remove the interval!');
        window.addEventListener('keydown', (event) => {
            if (event.keyCode == 27) {
                clearInterval(interval);
                alert('Interval cleared!');
            }
        });
        interval = setInterval(() => {
            console.log('interval is running!');
        }, intervalTime * 1e3);
    }

    else {
        alert('NUMBER NOT STRING BRO');
    }
}

else if (['no', 'nah', 'naw'].includes(condition.toLowerCase())) {
    alert('Oh ok sorry');
}

else alert('You not gonna answer? OK.');
