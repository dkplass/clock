(function(){
    var hourHand = document.querySelector(".hour-hand");
    var minutehourHand = document.querySelector(".minute-hand");
    var secondHand = document.querySelector(".second-hand");

    function clock(){
        let nowTime = new Date;
        let hour = nowTime.getHours();
        let minute = nowTime.getMinutes();
        let second = nowTime.getSeconds();
                
        let hourDeg = hour * 30 + minute * (30 / 60);
        let minuteDeg = minute * 6 + second * (6 / 60);
        let secondDeg = second * 6;
        
        // 90度為圖片預設位置
        hourHand.style.transform = `rotate(${(hourDeg - 90)}deg)`; // 90度為圖片預設位置
        minutehourHand.style.transform = `rotate(${minuteDeg}deg)`;
        secondHand.style.transform = `rotate(${(secondDeg - 180)}deg)`; // 180度為圖片預設位置
    }

    setInterval(clock, 1000);
}());
