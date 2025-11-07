// Inicialización global del sistema
document.addEventListener('DOMContentLoaded', function() {
    // Navigation between sections
    const navItems = document.querySelectorAll('.nav-item');
    const contentSections = document.querySelectorAll('.content-section');
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const targetSection = this.getAttribute('data-section');
            
            // Update active nav item
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            
            // Show target section
            contentSections.forEach(section => {
                section.classList.remove('active');
                if (section.id === targetSection) {
                    section.classList.add('active');
                }
            });
        });
    });
    
    // Inicializar todos los módulos
    inicializarEstudiantes();
    inicializarAsistencia();
    inicializarCurso();
    inicializarResumen();
    
    // Initialize with first section active
    if (navItems.length > 0) {
        navItems[0].click();
    }
});