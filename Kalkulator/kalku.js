function tambah(){
    var bil1 = parseFloat(document.kalkulator.bil1.value);
    var bil2 = parseFloat(document.kalkulator.bil2.value);
    var hasil = bil1 + bil2;
    document.kalkulator.hasil.value = hasil;
}

function kurang(){
    var bil1 = parseFloat(document.kalkulator.bil1.value);
    var bil2 = parseFloat(document.kalkulator.bil2.value);
    var hasil = bil1 - bil2;
    document.kalkulator.hasil.value = hasil;
}

function bagi(){
    var bil1 = parseFloat(document.kalkulator.bil1.value);
    var bil2 = parseFloat(document.kalkulator.bil2.value);
    var hasil = bil1 / bil2;
    document.kalkulator.hasil.value = hasil;
}

function kali(){
    var bil1 = parseFloat(document.kalkulator.bil1.value);
    var bil2 = parseFloat(document.kalkulator.bil2.value);
    var hasil = bil1 * bil2;
    document.kalkulator.hasil.value = hasil;
}