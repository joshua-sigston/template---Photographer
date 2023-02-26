const chevron = document.querySelector('.chevron')
const chooseType = document.querySelector('.choose_type')

chevron.addEventListener('pointerdown', () => {
    chooseType.classList.toggle('inactive')
} )