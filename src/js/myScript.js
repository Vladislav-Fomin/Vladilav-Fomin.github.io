"use strict"

let inf = [];

while (true) {
    let siteType = prompt(`Тип сайта\n1-landing page\n2-сайт визитка\n3-коропоративный сайт`);
    if (siteType > 0 && siteType < 4) {
        inf.push(siteType);
        break;
    } 
    else {
        alert("Данные введены неверно");
    }
};
while (true) {
    let design = prompt(`Дизайн\n1-шаблонный дизайн\n2-уникальный дизайн`);
    if (design > 0 && design < 3) {
        inf.push(design);
        break;
    } 
    else {
        alert("Данные введены неверно");
    }
};
while (true) {
    let adaptability = prompt(`Адаптивность\n1-для всех устройств\n2-только для компьютров\n3-только для смартфонов`);
    if (adaptability > 0 && adaptability < 4) {
        inf.push(adaptability);
        break;
    } 
    else {
        alert("Данные введены неверно");
    }
};

console.log(inf);

