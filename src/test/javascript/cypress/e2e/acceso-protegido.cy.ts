describe('Acceso protegido', () => {
  it('no debería mostrar contenido de /blog si no está autenticado', () => {
    cy.visit('/blog');
    cy.wait(500); // Espera para que cargue la página
    cy.contains('Blogs').should('not.exist');
  });

  it('debería acceder a /blog si está autenticado', () => {
    cy.login('admin', 'admin');
    cy.wait(500); // Espera después del login
    cy.visit('/blog');
    cy.wait(500); // Espera para que cargue la página
    cy.contains('Blogs').should('exist');
  });
});
