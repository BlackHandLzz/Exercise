window.onload = function () {
    function getTime() {
        var date = new Date();
        //console.log(date, 111);
        var YY = date.getFullYear();
        var MM = date.getMonth() + 1;
        var DD = date.getDate();
        var hh = date.getHours();
        var mm = date.getMinutes();
        var ss = date.getSeconds();

        var weeks = [
            '星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'
        ];
        var week = weeks[date.getDay() - 1];
        return YY + '-' + addZero(MM) + '-' + addZero(DD) + '-' + addZero(hh) + '-' + addZero(mm) + '-' + addZero(ss) + ' ' + week
        //console.log(YY + '-' + MM + '-' + DD + '-' + hh + '-' + mm + '-' + ss + '-' + week);
    }
    function addZero(date) {
        if (date < 10) {
            return '0' + date;
        }
        return date
    };
    var timer = document.querySelector('#time');
    //console.log(timer);
    setInterval(function () {
        var time = getTime();
        timer.innerHTML = '时间:' + time
    }, 1000)

}