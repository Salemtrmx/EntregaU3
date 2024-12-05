describe('Pruebas de navegación en el navbar', () => {
    beforeEach(() => {
      cy.visit('http://localhost:4200/reportes');  // Asegúrate de que esta URL sea la correcta en tu proyecto
    });
  
    it('Debería navegar a la página de inicio', () => {
      cy.get('a.nav-link').contains('Inicio').click();  // Encuentra el enlace "Inicio" y haz clic en él
      cy.url().should('include', '/administrador');  // Verifica que la URL haya cambiado correctamente
    });
  
  });
  