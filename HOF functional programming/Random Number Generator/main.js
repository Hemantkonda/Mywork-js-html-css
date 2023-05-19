

function generateRandomNumber() {
    // count-timer initial from 3
    let delay = 3;
    // seleting our html tags
    let countDown = document.getElementById("countdown");
    let result = document.getElementById("result");

    countDown.innerHTML = `time-left: ${delay} sec..`

    // creating random number with setinterval
    let countDownInterval = setInterval(()=>{
        delay--;
        countDown.innerText = `time-left: ${delay} sec..`;

        if (delay === 0) {
            clearInterval(countDownInterval);

            let randomNumber = Math.floor(Math.random() * 100);
            result.innerHTML = randomNumber;
        }
    }, 1000);
   
}
