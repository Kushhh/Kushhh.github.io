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
   for (const x of _.range(0, n+1)) {
     let suma = x**2;
     if (suma>n) break;
      alert(x + " " + suma);
  }
}

test();
