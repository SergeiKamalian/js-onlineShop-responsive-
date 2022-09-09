// ========================= Slider PC============================
// Next Button
let sliderPc = document.querySelector('.slider_pc');
// let next = document.querySelectorAll(".btn_right")
let nextPc = sliderPc.querySelector(".btn_right");
//  Back Button
let backPc = sliderPc.querySelector(".btn_left")
// Scroll Images Div
let images = sliderPc.querySelector(".product_slider_img")
// All Images
let imagesCount = sliderPc.querySelectorAll(".img");
// Active Image
let activeImg = sliderPc.querySelector(".active_num ");
// Images Count
let allImg = sliderPc.querySelector(".noActive_num");
allImg.textContent = `/0${imagesCount.length}`
// Images Width
let offset = 0;
let num = 1;
nextPc.addEventListener('click', () => {
        offset += 300;
        num++;
        if(offset == (300*imagesCount.length)){
            num =1
            offset = 0;
        }
        activeImg.textContent = `0${num}`
        imagesCount.forEach(e =>{
            e.style.transform = `translateX(${-offset}px)`;
        })
   
    })
backPc.addEventListener("click", ()=>{
    offset -= 300;
    num -= 1;
    if(offset < 0){
        offset = (300*( imagesCount.length - 1));
        num = imagesCount.length;
    }
    activeImg.textContent = `0${num}`
    imagesCount.forEach(e =>{
        e.style.transform = `translateX(${-offset}px)`;
    })
})
// ========================= Slider Tablet============================

// Next Button
let sliderTablet = document.querySelector('.slider_tablet');
// let next = document.querySelectorAll(".btn_right")
let nextTablet = sliderTablet.querySelector(".btn_right");
//  Back Button
let backTablet = sliderTablet.querySelector(".btn_left")
// Scroll Images Div
let imagesTablet = sliderTablet.querySelector(".product_slider_img")
// All Images
let imagesCountTablet = sliderTablet.querySelectorAll(".img");
// Active Image
let activeImgTablet = sliderTablet.querySelector(".active_num");
// Images Count
let allImgTablet = sliderTablet.querySelector(".noActive_num");
console.log(allImgTablet);
allImgTablet.textContent = `/0${imagesCountTablet.length}`
console.log(nextTablet);
nextTablet.addEventListener('click', () => {
        offset += 300;
        num++;
        if(offset == (300*imagesCountTablet.length)){
            num =1
            offset = 0;
        }
        activeImgTablet.textContent = `0${num}`
        imagesCountTablet.forEach(e =>{
            e.style.transform = `translateX(${-offset}px)`;
        })
   
    })
backTablet.addEventListener("click", ()=>{
    offset -= 300;
    num -= 1;
    if(offset < 0){
        offset = (300*( imagesCountTablet.length - 1));
        num = imagesCountTablet.length;
    }
    activeImgTablet.textContent = `0${num}`
    imagesCountTablet.forEach(e =>{
        e.style.transform = `translateX(${-offset}px)`;
    })
})

// ========================= Slider Phone ============================
// Next Button
let sliderPhone = document.querySelector('.slider_phone');
// let next = document.querySelectorAll(".btn_right")
let nextPhone = sliderPhone.querySelector(".btn_right");
//  Back Button
let backPhone = sliderPhone.querySelector(".btn_left")
// Scroll Images Div
let imagesPhone = sliderPhone.querySelector(".product_slider_img")
// All Images
let imagesCountPhone = sliderPhone.querySelectorAll(".img");
nextPhone.addEventListener('click', () => {
        offset += 300;
        num++;
        if(offset == (300*imagesCountPhone.length)){
            num =1
            offset = 0;
        }
        imagesCountPhone.forEach(e =>{
            e.style.transform = `translateX(${-offset}px)`;
        })
   
    })
backPhone.addEventListener("click", ()=>{
    console.log(window.innerWidth);
        offset -= 300;
        num -= 1;
        if(offset < 0){
            offset = (300*( imagesCountPhone.length - 1));
            num = imagesCountPhone.length;
        }
        imagesCountPhone.forEach(e =>{
            e.style.transform = `translateX(${-offset}px)`;
        })
})
// ================================ Scroll =======================
let btnCatalog = document.querySelector(".btn_see");
let toObj = document.querySelector(".catalog")
let scrollTo = (target)=>{
    window.scrollTo({
        left: 0,
        top: target.offsetTop,
        behavior: "smooth",
    })
}
btnCatalog.addEventListener("click", ()=>{
    scrollTo(toObj);
})
// ============================================== Lang ======================
let lang = document.querySelector('.active_lang');
let allLang = document.querySelectorAll('.lang');
let langArr = Array.from(lang.parentElement.children[1].children)
console.log(langArr);
let dropDown = document.querySelector('.dropDownDiv')
lang.addEventListener('click', () => {
    if(dropDown.classList.contains("hidden")){
        lang.parentElement.children[0].children[1].classList.remove('bx')
        lang.parentElement.children[0].children[2].classList.add('bx')
        lang.parentElement.classList.add('t25');
        dropDown.classList.remove('hidden');
        dropDown.classList.add('selection_lang')
        langArr.unshift(lang.children[0])
    }
    else{
        lang.parentElement.children[0].children[1].classList.add('bx')
        lang.parentElement.children[0].children[2].classList.remove('bx')
        lang.parentElement.classList.remove('t25');
        dropDown.classList.add('hidden');
        dropDown.classList.remove('selection_lang')
    }
})
langArr.forEach(i => {
    i.addEventListener('click', () => {
        let z = langArr[0].textContent;
        langArr[0].textContent = i.textContent
        i.textContent = z;
        lang.parentElement.children[0].children[1].classList.add('bx')
        lang.parentElement.children[0].children[2].classList.remove('bx')
        lang.parentElement.classList.remove('t25')
        dropDown.classList.add('hidden');
        dropDown.classList.remove('selection_lang')
    })
})
// ======================= Burger Menu Open =======================
let btnBurger = document.querySelector('label');
let burgerMenu = document.querySelector('.burger_menu')
let body = document.querySelector('body')
btnBurger.addEventListener('change', () => {
    if (!(body.classList.contains('owerflow'))) {
        burgerMenu.classList.add('burger_menu_active')
        body.classList.add('owerflow')
        console.log(1);
    } else if (body.classList.contains('owerflow')) {
        burgerMenu.classList.remove('burger_menu_active')
        body.classList.remove('owerflow')
        console.log(2);
    }
})