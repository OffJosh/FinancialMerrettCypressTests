/// <reference types="Cypress" />

describe('Navigation bar about sjp tests', () => {
  beforeEach( () =>{
    cy.visit('/');
  });

  it('should go to the about sjp page', () => {
    cy.get('[role="menubar"]').contains('About SJP').trigger('mouseover');
    cy.get('[role="menu"]').contains('About SJP').click();
    cy.location('pathname').should('equal', '/about-sjp');
  });

  it('should go to the IMA page', () => {
    cy.get('[role="menubar"]').contains('About SJP').trigger('mouseover');
    cy.get('[role="menu"]').contains('Investment Management Approach').click();
    cy.location('pathname').should('equal', '/about-sjp/investment-management-approach');
  });

  it('should go to the SJP Awards page', () => {
    cy.get('[role="menubar"]').contains('About SJP').trigger('mouseover');
    cy.get('[role="menu"]').contains('Awards').click();
    cy.location('pathname').should('equal', '/about-sjp/awards');
  });

  it('should go to the charitable page', () => {
    cy.get('[role="menubar"]').contains('About SJP').trigger('mouseover');
    cy.get('[role="menu"]').contains('Charitable Foundation').click();
    cy.location('pathname').should('equal', '/about-sjp/charitable-foundation');
  });

});