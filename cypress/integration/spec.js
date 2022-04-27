// https://docs.cypress.io/guides/getting-started/writing-your-first-test#Write-your-first-test
describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true);
  });
});

// https://docs.cypress.io/guides/getting-started/testing-your-app
describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:3000');
    cy.get('h1').should('contain', 'My Exercise');
  });
});

describe('It can add a box', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:3000');

    cy.get('.addBtn').click();
    cy.get('.addBtn').click();

    cy.get('.boxes > :nth-child(2)').contains('1');
  });
});
