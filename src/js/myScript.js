"use strict"

window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 500);
}

(window).scroll(() => {
    let scrollDist = $(window).scrollTop();
    $(".section").each((i, el) => {
        if ($(el).offset().top - $("nav").outerHeight() <= scrollDist) {
            $("nav a").each((i, el) => {
                if ($(el).hasClass("active")) {
                    $(el).removeClass("active");
                }
            });
            $('nav li:eq(' + i + ')').find('a').addClass('active');
        }
    });
});



$('a[href^="#"]').click(function () {
    let varHref = $(this).attr("href");
    $('html, body').animate({
        scrollTop: $(valHref).offset().top - 20 + "px"
    });
});



/*
let inf = [];

while (true) {
    let siteType = prompt(`Тип сайта\n1-landing page\n2-сайт визитка\n3-корпоративный сайт`);
    if (siteType > 0 && siteType < 4) {
        inf.push(siteType);
        break;
    } else {
        alert("Данные введены неверно");
    }
};

while (true) {
    let design = prompt(`Дизайн\n1-шаблонный дизайн\n2-уникальный дизайн`);
    if (design > 0 && design < 3) {
        inf.push(design);
        break;
    } else {
        alert("Данные введены неверно");
    }
};
while (true) {
    let adaptability = prompt(`Адаптивность\n1-для всех устройств\n2-только для компьютров\n3-только для смартфонов`);
    if (adaptability > 0 && adaptability < 4) {
        inf.push(adaptability);
        break;
    } else {
        alert("Данные введены неверно");
    }
};


let price = [];
let terms = [];

if (inf[0] == 1) {
    price.push(1000);
    terms.push(1);
} 
else if (inf[0] == 2) {
    price.push(3000);
    terms.push(2);
} 
else {
    price.push(5000);
    terms.push(4);
}
if (inf[1] == 1) {
    price.push(1000);
    terms.push(2);
} 
else {
    price.push(3000);
    terms.push(4);
} 
if (inf[2] == 1) {
    price.push(5000);
    terms.push(4);
} 
else if (inf[2] == 2) {
    price.push(2000);
    terms.push(2);
} 
else {
    price.push(3000);
    terms.push(2);
}


let sumPrice;
function calcPrice(){
    sumPrice = price[0] + price[1] + price[2];
}
calcPrice(price[0], price[1], price[2]);

let sumTerms;
function calcTerms(){
    sumTerms = terms[0] +terms[1] + terms[2];
}
calcTerms(terms[0], terms[1], terms[2]);

alert(`Стоимость: `  + (sumPrice) + `\nСроки: ` + (sumTerms));
*/
