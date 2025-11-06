document.addEventListener("DOMContentLoaded", function () {
    const menuCheckbox = document.getElementById("menu-toggle");
    const mobileToggle = document.querySelector(".mobile-header .mobile-nav-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");
    const mobileNavLinks = document.querySelectorAll(".mobile-menu a");

    if (!menuCheckbox || !mobileMenu) return;

    document.body.appendChild(mobileMenu);

    const closeButton = document.createElement('button');
    closeButton.innerHTML = '<i class="fa-solid fa-times"></i>';
    closeButton.style.cssText = `
        position: absolute;
        top: 20px;
        right: 20px;
        background: transparent;
        border: none;
        font-size: 28px;
        color: #333;
        cursor: pointer;
        padding: 5px;
        line-height: 1;
        z-index: 10000;
    `;
    closeButton.setAttribute('aria-label', 'Fechar menu');
    mobileMenu.insertBefore(closeButton, mobileMenu.firstChild);

    closeButton.addEventListener('click', fecharMenu);

    mobileMenu.style.cssText = `
        display: flex !important;
        flex-direction: column !important;
        position: fixed !important;
        top: 0 !important;
        left: -100% !important;
        width: 100% !important;
        max-width: 420px !important;
        height: 100vh !important;
        background: var(--primary-color) !important;
        padding: 20px !important;
        gap: 0.5rem !important;
        z-index: 9999 !important;
        overflow-y: auto !important;
        box-shadow: 2px 0 10px rgba(0, 0, 0, 0.3) !important;
        transition: left 0.3s ease !important;
    `;

    function abrirMenu() {
        if (!document.getElementById('menu-overlay')) {
            const overlay = document.createElement('div');
            overlay.id = 'menu-overlay';
            overlay.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.5);
                z-index: 9000;
                transition: opacity 0.3s ease;
            `;
            document.body.insertBefore(overlay, mobileMenu);
            
            overlay.addEventListener('click', fecharMenu);
        }
        
        mobileMenu.style.setProperty('left', '0px', 'important');
        document.body.style.overflow = 'hidden';
    }

    function fecharMenu() {
        mobileMenu.style.setProperty('left', '-100%', 'important');
        const overlay = document.getElementById('menu-overlay');
        if (overlay) {
            overlay.remove();
        }
        document.body.style.overflow = '';
        menuCheckbox.checked = false;
    }

    menuCheckbox.addEventListener("change", function() {
        if (this.checked) {
            abrirMenu();
        } else {
            fecharMenu();
        }
    });

    mobileNavLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            fecharMenu();
        });
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && menuCheckbox.checked) {
            fecharMenu();
        }
    });
});