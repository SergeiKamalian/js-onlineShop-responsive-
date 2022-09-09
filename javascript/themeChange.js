let themeChange = document.querySelector('.themeChange')
let themeIcon = themeChange.children[0];

let lightColors = {
    bg: 'white',
    gray: '#434242',
    light: 'white',
    themeBg: 'white',
    footerColor: '#F5F5F5'
}
let darkColors = {
    bg: '#121212',
    gray: 'white',
    light: '#121212',
    themeBg: '#121212',
    footerColor: 'linear-gradient(180deg, #FF5454 0%, #CD4848 100%)'
}

themeChange.addEventListener('click', () => {
    if (themeIcon.classList.contains('bxs-moon')) {
        // активация тёмной тем
        themeIcon.classList.remove('bxs-moon')
        themeIcon.classList.add('bxs-sun')

        document.documentElement.style.setProperty("--bg", darkColors.bg)
        document.documentElement.style.setProperty("--gray", darkColors.gray)
        document.documentElement.style.setProperty('--light', darkColors.light)
        document.documentElement.style.setProperty('--themeBg', lightColors.themeBg)
        document.documentElement.style.setProperty('--footerColor', darkColors.footerColor)
    } else {
        themeIcon.classList.add('bxs-moon')
        themeIcon.classList.remove('bxs-sun')

        document.documentElement.style.setProperty("--bg", lightColors.bg)
        document.documentElement.style.setProperty("--gray", lightColors.gray)
        document.documentElement.style.setProperty('--light', lightColors.light)
        document.documentElement.style.setProperty('--themeBg', darkColors.themeBg)
        document.documentElement.style.setProperty('--footerColor', lightColors.footerColor)
    }
})

