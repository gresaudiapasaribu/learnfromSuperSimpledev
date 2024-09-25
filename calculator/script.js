const display = document.getElementById('display');

function input(nilai){
    display.value += nilai
}
function bersihkan(nilai){
    display.value = '';
}
function hasil(nilai){
    display.value = eval(display.value);
}
function hapus(nilai){
    display.value = display.value.toString().slice(0,-1);
}