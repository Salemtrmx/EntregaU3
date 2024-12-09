describe('Pruebas del formulario de inicio de sesión', () => {
    beforeEach(() => {
      // Reemplaza esta URL con la ruta correcta de tu proyecto donde se encuentra este HTML.
      cy.visit('http://localhost:4200/inicio'); 
    });
  
    it('Debería permitir ingresar correo y contraseña y hacer clic en "Iniciar sesión"', () => {
      // Localiza el campo de correo y escribe un email
      cy.get('input[name="email"]').type('oscar@example.com');
      
      // Localiza el campo de contraseña y escribe la contraseña
      cy.get('input[name="password"]').type('123456');
      
      // Haz clic en el botón "Iniciar sesión"
      cy.get('button[type="submit"]').click();
      
      
    });
  });
  