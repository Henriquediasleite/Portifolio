// Controle do header fixo com animação no scroll
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const headerContent = header.querySelector('.header-content');
    const menuIcon = header.querySelector('.menu-icon');
    let lastScrollTop = 0;
    let isScrolling = false;

    // Adiciona classes iniciais
    header.classList.add('header-fixed', 'header-transparent');
    
    // Adiciona classe ao conteúdo do header
    const headerInner = header.querySelector('div');
    if (headerInner) {
        headerInner.classList.add('header-content');
    }
    
    // Adiciona classe ao ícone do menu
    const menuIconElement = header.querySelector('#menu-icon');
    if (menuIconElement) {
        menuIconElement.classList.add('menu-icon');
    }

    // Função para controlar o header durante o scroll
    function handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Throttle do scroll para melhor performance
        if (!isScrolling) {
            window.requestAnimationFrame(function() {
                updateHeader(scrollTop);
                isScrolling = false;
            });
            isScrolling = true;
        }
    }

    function updateHeader(scrollTop) {
        // Se rolou mais de 50px, aplica o estilo "scrolled"
        if (scrollTop > 50) {
            header.classList.remove('header-transparent');
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
            header.classList.add('header-transparent');
        }

        // Efeito de hide/show baseado na direção do scroll
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down - esconde o header
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up - mostra o header
            header.style.transform = 'translateY(0)';
        }

        lastScrollTop = scrollTop;
    }

    // Event listener para o scroll
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Adiciona padding ao body para compensar o header fixo
    document.body.style.paddingTop = header.offsetHeight + 'px';
    
    // Ajusta o padding quando a janela é redimensionada
    window.addEventListener('resize', function() {
        document.body.style.paddingTop = header.offsetHeight + 'px';
    });
});

