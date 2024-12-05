describe('Prueba de búsqueda en la página de reportes', () => {
    beforeEach(() => {
      cy.visit('http://localhost:4200/reportes');  // Asegúrate de que esta URL sea la correcta
    });
  
    it('Debería escribir un término en el campo de búsqueda y filtrar los reportes', () => {
      cy.get('#buscarNombre')  // Encuentra el campo de búsqueda por su id
        .type('Bicicleta MTB')  // Escribe un término en el campo de búsqueda
        .should('have.value', 'Bicicleta MTB');  // Verifica que el valor esté correcto
  
      cy.get('table tbody tr')  // Verifica que los resultados en la tabla hayan sido filtrados
        .should('have.length', 1);  // Verifica que solo haya 1 fila (asumido que hay solo un reporte que coincide)
        
      cy.get('table tbody tr').first()  // Verifica que el primer reporte tenga el título correcto
        .contains('Bicicleta MTB');
    });
  
    it('Debería mostrar un mensaje si no se encuentran reportes', () => {
      cy.get('#buscarNombre')  // Escribe un término que no tenga resultados
        .type('Reporte No Existente');
        
      cy.get('.alert-warning')  // Verifica que el mensaje de advertencia esté visible
        .should('be.visible')
        .and('contain.text', 'No se encontraron reportes');
    });
  });
  