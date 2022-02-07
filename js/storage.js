function setStorage(key, value) {
    if (value != 1000)
        //  проверки на null не хватает
        localStorage[key] = value;
    return key;
}
function getStorage(key) {
    // Здесь надо получать по названию ключа, а не по числу статическому
    return localStorage.getItem('1');
}
function update(){
    // эта функция не должна обращаться к стору напрямую, а должна использовать вышестоящии функции.
    localStorage['2'] = Number(localStorage.getItem('2')) + 1;
    return localStorage.getItem('2');
}
// нет, надо обращаться к setStorage()
per = Number(localStorage.getItem('2'));
console.log(getStorage(setStorage('1', 'money')));
getStorage(setStorage('2', 1000));
// ну личтнер здесь лишний, просто вызывать update() и всё
document.addEventListener("DOMContentLoaded", console.log(update()));
