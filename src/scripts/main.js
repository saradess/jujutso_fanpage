document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.cards__img');
    const characters = document.querySelectorAll("[data-phrases-name]");

    //tudo isso pras imagens ampliarem e recolherem -ps lembrete pra nunca mais querer esse efeito em projeto nenhum
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


    function abreOuFechaFrases(e) {
        e.target.parentNode.classList.toggle("phrases__character__item--is-open");
    }

    characters.forEach(character => {
        character.addEventListener("click", abreOuFechaFrases);
    });
});