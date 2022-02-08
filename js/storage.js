function setStorage(key, value) {
    if (value != 1000 && key !== null)
        //  проверка на null у меня не работает
        localStorage[key] = value;
    return key;
}
function getStorage(key) {
    // Здесь надо получать по названию ключа, а не по числу статическому
    return localStorage.getItem(key);
}
function update(){
    // эта функция не должна обращаться к стору напрямую, а должна использовать вышестоящии функции.
    localStorage['2'] = Number(getStorage('2')) + 1;
    return getStorage('2');
}
// нет, надо обращаться к setStorage()
console.log(getStorage(setStorage('1', 'money')));
per = Number(getStorage(setStorage('2', 1000)));
// ну личтнер здесь лишний, просто вызывать update() и всё
// не знаю, как еще отловить событие F5
document.addEventListener("DOMContentLoaded", console.log(update()));
