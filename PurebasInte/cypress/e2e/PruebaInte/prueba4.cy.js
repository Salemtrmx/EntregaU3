describe('Pruebas de navegación en el navbar', () => {
    beforeEach(() => {
      cy.visit('http://localhost:4200/reportes');  // Asegúrate de que esta URL sea la correcta en tu proyecto
    });
  
    it('Debería navegar a la página de registrar reporte', () => {
      cy.get('a.nav-link').contains('Registrar Reporte').click();  // Encuentra el enlace "Registrar Reporte" y haz clic en él
      cy.url().should('include', '/registrarR');  // Verifica que la URL sea la correcta
    });
  });
  