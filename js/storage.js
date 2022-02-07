function setStorage(key, value) {
    if (value != 1000)
        localStorage[key] = value;
    return key;
}
function getStorage(key) {
    return localStorage.getItem('1');
}
function update(){
    localStorage['2'] = Number(localStorage.getItem('2')) + 1;
    return localStorage.getItem('2');
}
per = Number(localStorage.getItem('2'));
console.log(getStorage(setStorage('1', 'money')));
getStorage(setStorage('2', 1000));
document.addEventListener("DOMContentLoaded", console.log(update()));