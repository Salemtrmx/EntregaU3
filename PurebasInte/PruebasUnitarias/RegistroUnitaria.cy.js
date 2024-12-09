describe('Prueba de registro de reporte', () => {
  beforeEach(() => {
    // Asegúrate de que estás accediendo a la URL correcta donde está el formulario
    cy.visit('http://localhost:4200/registrarR');
  });

  it('Debería completar el formulario y registrar el reporte', () => {
    // Completar los campos del formulario
    cy.get('#titulo').type('Reporte de prueba');
    cy.get('#descripcion').type('Descripción del reporte de prueba');
    cy.get('#latitud').type('19.4326');
    cy.get('#longitud').type('-99.1332');

    // Hacer clic en el botón de "Registrar"
    cy.get('button[type="submit"]').click();

    // Verificar que el modal de "Registro Exitoso" se muestre
    cy.get('.modal').should('be.visible');
    cy.get('.modal-title').should('contain', 'Registro Exitoso');
  });
});
