// Test E2E: Crear un Blog desde la UI

describe('Crear Blog', () => {
  beforeEach(() => {
    cy.login('admin', 'admin'); // Login usando helper de JHipster
  });

  it('debería crear un nuevo Blog', () => {
    cy.visit('/blog');
    cy.wait(500); // Espera para que cargue la página y el botón
    cy.get('[data-cy="entityCreateButton"]').click();
    cy.wait(500); // Espera para que cargue el formulario
    cy.get('[data-cy="name"]').type('Blog de prueba');
    cy.get('[data-cy="handle"]').type('prueba');
    cy.get('[data-cy="entityCreateSaveButton"]').click();
    cy.wait(500); // Espera para que se guarde y aparezca en la lista
    cy.contains('Blog de prueba').should('exist');
  });
});
