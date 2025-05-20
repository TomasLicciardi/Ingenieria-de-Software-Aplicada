// Test E2E: Crear un Blog desde la UI

describe('Crear Blog', () => {
  beforeEach(() => {
    cy.login('admin', 'admin'); // Login usando helper de JHipster
  });

  it('debería crear un nuevo Blog', () => {
    cy.visit('/blog');
    cy.get('[data-cy="entityCreateButton"]').click();
    cy.get('[data-cy="name"]').type('Blog de prueba');
    cy.get('[data-cy="handle"]').type('prueba');
    cy.get('[data-cy="entityCreateSaveButton"]').click();
    cy.contains('Blog de prueba').should('exist');
  });
});
