describe('Pruebas de búsqueda en el campo de búsqueda', () => {
    beforeEach(() => {
      cy.visit('http://localhost:4200/reportes');  // Asegúrate de que esta URL sea la correcta
    });
  
    it('Debería mostrar un mensaje cuando no se encuentren reportes', () => {
      // Escribir un término que no coincida con ningún reporte
      cy.get('#buscarNombre').type('Reporte No Existente');
      cy.get('.alert-warning').should('be.visible');  // Verificar que el mensaje de advertencia es visible
    });
  });
  