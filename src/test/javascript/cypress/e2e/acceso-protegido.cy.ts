describe('Acceso protegido', () => {
  it('no debería mostrar contenido de /blog si no está autenticado', () => {
    cy.visit('/blog');
    cy.contains('Blogs').should('not.exist');
  });

  it('debería acceder a /blog si está autenticado', () => {
    cy.login('admin', 'admin');
    cy.visit('/blog');
    cy.contains('Blogs').should('exist');
  });
});
