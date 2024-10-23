document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.cards__img');

    images.forEach(image => {
        let isMobile = window.innerWidth <= 768;
    
        if (isMobile) {
            image.addEventListener('click', function () {
                if (this.classList.contains('expanded')) {
                    this.classList.remove('expanded');
                } else {
                    images.forEach(img => img.classList.remove('expanded'));
                    this.classList.add('expanded');
                }
            });
        } else {
            image.addEventListener('mouseover', function () {
                this.classList.add('expanded');
            });
    
            image.addEventListener('mouseout', function () {
                this.classList.remove('expanded');
            });
    
            image.addEventListener('click', function () {
                if (this.classList.contains('expanded')) {
                    this.classList.remove('expanded');
                }
            });
        }
    });
})