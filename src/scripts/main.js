document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.cards__img');
    const characters = document.querySelectorAll("[data-phrases-name]");

    const heroSection = document.querySelector('.hero'); // ajuste para o seletor correto
    const alturaHero = heroSection.clientHeight;

    //para ocultar a header
    window.addEventListener('scroll', function(){
        const posicaoAtual = window.scrollY;

        if (posicaoAtual > alturaHero) {
            ocultaElementosDoHeader ();
        } else {
            exibeElementosDoHeader();
        }
        }
    )

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

    function ocultaElementosDoHeader () {
        const header = document.querySelector('header');
        header.classList.add('header--is-hidden');
    }
    
    function exibeElementosDoHeader () {
        const header = document.querySelector('header');
        header.classList.remove('header--is-hidden');
    }

    function abreOuFechaFrases(e) {
        e.target.parentNode.classList.toggle("phrases__character__item--is-open");
    }

    characters.forEach(character => {
        character.addEventListener("click", abreOuFechaFrases);
    });
});