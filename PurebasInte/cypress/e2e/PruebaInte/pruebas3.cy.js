describe('Pruebas de navegación en el navbar', () => {
    beforeEach(() => {
      cy.visit('http://localhost:4200/reportes');  // Asegúrate de que esta URL sea la correcta en tu proyecto
    });
  
    
    it('Debería navegar a la página de usuarios', () => {
      cy.get('a.nav-link').contains('Usuarios').click();  // Encuentra el enlace "Usuarios" y haz clic en él
      cy.url().should('include', '/personas');  // Verifica que la URL sea la correcta
    });
  
  });
  