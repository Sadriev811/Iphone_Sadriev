let doc = document
let btn1 = doc.querySelector('.bn1')
let btn2 = doc.querySelector('.bn2')
let btn3 = doc.querySelector('.bn3')
let btn4 = doc.querySelector('.bn4')
let btn5 = doc.querySelector('.bn5')
let btn6 = doc.querySelector('.bn6')
let colorText = doc.querySelector('#color_text')
let color2 = doc.querySelector('.color2')
let bd1 = doc.querySelector('#ip1')
let bd2 = doc.querySelector('#ip2')
let wrap_btn = doc.querySelector('.wrap_btn')
let wrap2 = doc.querySelector('.wrap2')
let plus = doc.querySelector('.plus')
let minus = doc.querySelector('.minus')
let changer = doc.querySelector('.wrap2_changer')
let iter_numb = 1 
let korzina = doc.querySelector('.korzina_changer')
let k = doc.querySelector('.korzina')
let menu = doc.querySelector('.all_menu')
let korzina_img = doc.querySelector('.first_korzina')

// 1 ФУНКЦИЯ - при наведение менять текст 
function colorOfText (btn, color) {
    btn.onmouseover = () => {
        colorText.innerHTML = `Color - ${color}`
    }
    btn.onmouseout = () => {
        colorText.innerHTML = `Color`
    }
}
colorOfText(btn1, 'Blue')
colorOfText(btn2, 'Pink')
colorOfText(btn3, 'Midnight')
colorOfText(btn4, 'StarLight')
colorOfText(btn5, 'Green')
colorOfText(btn6, '(PRODUCT)RED')


// 2 ФУНКЦИЯ - при нажатие менять текст
let colorChange = (bn1, bn2, bn3, bn4, bn5, bn6) => {
    bn1.classList.add("btn_bord")
    bn2.classList.remove("btn_bord")
    bn3.classList.remove("btn_bord")
    bn4.classList.remove("btn_bord")
    bn5.classList.remove("btn_bord")
    bn6.classList.remove("btn_bord")
    
}

btn1.onclick = () => {
    colorChange(btn1, btn2, btn3, btn4, btn5, btn6)
    color2.innerHTML = '(Blue)'
}
btn2.onclick = () => {
    colorChange(btn2, btn1, btn3, btn4, btn5, btn6)
    color2.innerHTML = '(Pink)'
}
btn3.onclick = () => {
    colorChange(btn3, btn2, btn1, btn4, btn5, btn6)
    color2.innerHTML = '(Midnight)'
}
btn4.onclick = () => {
    colorChange(btn4, btn2, btn3, btn1, btn5, btn6)
    color2.innerHTML = '(StarLight)'
}
btn5.onclick = () => {
    colorChange(btn5, btn2, btn3, btn4, btn1, btn6)
    color2.innerHTML = '(Green)'
}
btn6.onclick = () => {
    colorChange(btn6, btn2, btn3, btn4, btn5, btn1)
    color2.innerHTML = '(PRODUCT)RED'
}

// 3 ФУНКЦИЯ - добавление брдера на iphone - iphone plus

let activeAll = (b1, b2) => {
    b2.classList.remove('ip_block_active')
    b2.classList.add('ip_block_active')
    b1.classList.add('ip_block_active')
    b1.classList.remove('ip_block_active')
}
bd1.onclick = () => {
    activeAll(bd2, bd1)
}
bd2.onclick = () => {
    activeAll(bd1, bd2)
}

// ДЗ //  Счётчик 
function contetn (a) {
    a.textContent = iter_numb
}
plus.onclick = () => {
    iter_numb = iter_numb + 1
    contetn(changer)
    contetn(korzina)
}
minus.onclick = () => {
    if(iter_numb < 2) {
        wrap2.style.display = 'none'
        wrap_btn.style.display = 'inline'
        iter_numb = 2
        
    }
    iter_numb = iter_numb - 1
    contetn(changer)
    contetn(korzina)
}

// при добовление 
wrap_btn.onclick = () => {
    wrap_btn.style.display = 'none'
    wrap2.style.display = 'block'
    k.style.display = 'inline'
}

// вывод корзины
korzina_img.onclick = () => {
    menu.classList.toggle('block2')
}