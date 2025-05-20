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
    // Si el formulario requiere fecha o blog, puedes agregar:
    // cy.get('[data-cy="date"]').type('2025-05-20T12:00');
    // cy.get('[data-cy="blog"]').select(1); // Selecciona el primer blog disponible
    cy.get('[data-cy="entityCreateSaveButton"]').click();
    cy.contains('Post de prueba').should('exist');
  });
});
