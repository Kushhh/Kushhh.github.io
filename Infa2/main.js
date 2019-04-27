function test() {  // Проверка на число
    var namber = prompt("Число ?",0);
    var re = /^[0-9]+$/g;

    if (re.test(namber)){
        sum(namber); //Если все ок, то выполнение функции sum
    }else {
        alert("Только Цифры") //error
    }
}

function sum(n) {
   var result = 0;
   var str = '';
   for(var i=1; i<= n;i++){
    result += i**2;
    str += i + '^2 + ';
   }
   alert(str.substring(0, str.length -2) + ' = ' + result);
}

test();
