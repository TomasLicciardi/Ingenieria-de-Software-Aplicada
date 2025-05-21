// Test E2E: Crear un Post desde la UI

describe('Crear Post', () => {
  beforeEach(() => {
    cy.login('admin', 'admin');
  });

  it('debería crear un nuevo Post', () => {
    cy.visit('/post');
    cy.get('[data-cy="entityCreateButton"]').click();
    cy.get('[data-cy="title"]').type('Post de prueba');
    cy.get('[data-cy="content"]').type('Contenido de prueba');
    cy.get('[data-cy="entityCreateSaveButton"]').click();
    cy.contains('Post de prueba').should('exist');
  });
});
