describe('Pruebas de navegación en el navbar', () => {
    beforeEach(() => {
      cy.visit('http://localhost:4200/administrador');  // Asegúrate de que esta URL sea la correcta en tu proyecto
    });
  
    it('Debería navegar a la página de reportes', () => {
      cy.get('a.nav-link').contains('Reportes').click();  // Encuentra el enlace "Reportes" y haz clic en él
      cy.url().should('include', '/reportes');  // Verifica que la URL sea la correcta
    });
  
  });
  
