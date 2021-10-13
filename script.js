function colorClock() {

    let time = getTime()
    let total_seconds = (time.hr * 3600) + (time.min * 60) + time.sec

    hex_hours = Math.floor(total_seconds / 5400)

    total_seconds = total_seconds % 5400
    hex_maximes = Math.floor(total_seconds / 337.5)

    total_seconds = total_seconds % 337.5
    hex_minutes = Math.floor(total_seconds / 21.09375)

    let hex_time = (hex_hours.toString(16) + '_' + hex_maximes.toString(16) + hex_minutes.toString(16)).toUpperCase()
    let hex = hex_time.replace(/_/g, '')
    let comp_hex = complementary_color(hex)

    document.getElementById('hexTime').textContent = hex_time
    document.getElementById('compColor').textContent = 'Complementary Color: ' + comp_hex

    document.body.style.background = '#' + hex
    document.getElementById('flex1').style.color = comp_hex
    document.querySelector('a').style.color = comp_hex
}

function Clock24Hour() {
    let time = getTime()
    if (time.sec < 10) {
        time.sec = '0' + time.sec
    }
    if (time.min < 10) {
        time.min = '0' + time.min
    }
    if (time.hr < 10) {
        time.hr = '0' + time.hr
    }
    document.getElementById('clock').textContent = time.hr + ':' + time.min + ':' + time.sec
}

function getTime(){
    let clock = new Date()
    let hr = clock.getHours(), min = clock.getMinutes(), sec = clock.getSeconds()
    return { hr, min, sec }
}

function complementary_color(hex) {
    let hex_comp = (parseInt('FFF', 16) - parseInt(hex, 16)).toString(16)
    while (hex_comp.length < 3) {
        hex_comp = '0' + hex_comp
    }
    return '#' + hex_comp.toUpperCase()
}

Clock24Hour()
colorClock()
setInterval(Clock24Hour, 1000)
setInterval(colorClock, 21093.75)