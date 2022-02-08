let k_key = 'money';
function setStorage(key, value) {
    if (key) {
        console.log(key, value);
        localStorage[key] = value;
    } 
}
function getStorage(key) {
    return localStorage[key];
}
function update(){
    let result = getStorage(k_key);
    console.log(result);
    if (!result){
        console.log(result);
        result = 1000;
        setStorage(k_key, result);
    }
    else {
        console.log(result, k_key);
        setStorage(k_key, ++result);
    }
    console.log(result);
}
update();