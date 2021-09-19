setInterval(function colorClock() {

    let clock = new Date()
    let hr = clock.getHours()
    let min = clock.getMinutes()
    let sec = clock.getSeconds()
    let total_seconds = (hr * 3600) + (min * 60) + sec
    if (sec < 10) {
        sec = '0' + sec
    }
    if (min < 10) {
        min = '0' + min
    }
    if (hr < 10) {
        hr = '0' + hr
    }

    hex_hours = Math.floor(total_seconds / 5400)
    //console.log(hex_hours, 'hr')
    total_seconds = total_seconds % 5400
    hex_maximes = Math.floor(total_seconds / 337.5)
    //console.log(hex_maximes,'max')
    total_seconds = total_seconds % 337.5
    hex_minutes = Math.floor(total_seconds / 21.1)
    //console.log(hex_minutes,'min')
    total_seconds = total_seconds % 21.1
    hex_seconds = Math.floor(total_seconds / 1.32)

    let hex_time = (hex_hours.toString(16) + '_' + hex_maximes.toString(16) + hex_minutes.toString(16) + '_' + hex_seconds.toString(16)).toUpperCase()
    let hex = hex_time.replace(/_/g, '') + '00'
    let comp_hex = complementary_color(hex)

    document.getElementById('clock').textContent = hr + ' ' + min + ' ' + sec
    document.getElementById('hexTime').textContent = hex_time
    document.getElementById('hexColor').textContent = 'Hex Color: #' + hex
    document.getElementById('compColor').textContent = 'Complementary Color: ' + comp_hex

    document.body.style.background = '#' + hex
    document.getElementById('f1').style.color = comp_hex
    
},1000)

function complementary_color(hex) {
    let hex_comp = (parseInt('FFFFFF', 16) - parseInt(hex, 16)).toString(16)
    while (hex_comp.length < 4) {
        hex_comp = '0' + hex_comp
    }
    return '#' + hex_comp.toUpperCase()
}