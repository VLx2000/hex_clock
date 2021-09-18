setInterval(function colorClock() {

    let clock = new Date()
    let hr = clock.getHours()
    let min = clock.getMinutes()
    let sec = clock.getSeconds()

    if (sec < 10) {
        sec = '0' + sec
    }
    if (min < 10) {
        min = '0' + min
    }
    if (hr < 10) {
        hr = '0' + hr
    }

    let hex = '#' + hr + min + sec
    let comp_hex = complementary_color(hex.replace('#',''))

    document.getElementById('clock').textContent = hr + ' ' + min + ' ' + sec
    document.getElementById('hexColor').textContent = hex
    document.getElementById('compColor').textContent = comp_hex

    document.body.style.background = hex
    document.getElementById('f1').style.color = comp_hex
    
},1000)

function complementary_color(hex) {
    let hex_comp = (parseInt('FFFFFF', 16) - parseInt(hex, 16)).toString(16)
    while (hex_comp.length < 6) {
        hex_comp = '0' + hex_comp
    }
    return '#' + hex_comp
}