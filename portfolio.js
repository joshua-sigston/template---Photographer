const imgObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.remove('hide')
        } else {
            entry.target.classList.add('hide')
        }
    })
})

const portfolioImg = document.querySelectorAll('.img_container')
portfolioImg.forEach( (img) => {imgObserver.observe(img)})
