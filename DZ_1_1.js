// ДЗ 1, часть 1

let enterNumber1 = prompt("Введите первое число", "");
if (Number(enterNumber1)) {
    let enterNumber2 = prompt("Ведите второе число", "");
    if (Number(enterNumber2)) {
        enterNumber1 = +enterNumber1; enterNumber2 = +enterNumber2;
        console.log( enterNumber1.toString(enterNumber2) );
    }
    else alert("Некорректный ввод!"); 
}
else alert("Некорректный ввод!");  
