describe('Pruebas de búsqueda en el campo de búsqueda', () => {
    beforeEach(() => {
      cy.visit('http://localhost:4200/reportes');  // Asegúrate de que esta URL sea la correcta
    });
  
    it('Debería escribir en el campo de búsqueda y filtrar reportes', () => {
      // Interactuar con el campo de búsqueda
      cy.get('#buscarNombre').type('Bicicleta MTB');  // Escribir en el campo de búsqueda
      cy.get('table tbody tr').should('have.length', 1);  // Verificar que la cantidad de filas es 1 (lo que indica que se ha filtrado correctamente)
      cy.get('table tbody tr').first().contains('Bicicleta MTB');  // Verificar que el primer reporte tiene el título correcto
    });
  
    
  });
  