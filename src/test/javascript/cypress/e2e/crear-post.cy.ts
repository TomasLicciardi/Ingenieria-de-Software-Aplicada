// Test E2E: Crear un Post desde la UI

describe('Crear Post', () => {
  beforeEach(() => {
    cy.login('admin', 'admin');
  });

  it('debería crear un nuevo Post', () => {
    cy.visit('/post');
    cy.wait(500); // Espera para que cargue la página y el botón
    cy.get('[data-cy="entityCreateButton"]').click();
    cy.wait(500); // Espera para que cargue el formulario
    cy.get('[data-cy="title"]').type('Post de prueba');
    cy.get('[data-cy="content"]').type('Contenido de prueba');
    cy.get('[data-cy="entityCreateSaveButton"]').click();
    cy.wait(500); // Espera para que se guarde y aparezca en la lista
    cy.contains('Post de prueba').should('exist');
  });
});
