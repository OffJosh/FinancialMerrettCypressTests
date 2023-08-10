/// <reference types="Cypress" />

describe('Navigation bar top level tests', () => {
  beforeEach( () =>{
    cy.visit('/');
  });

  it('should go to the home page', () => {
    cy.get('[role="menubar"]').contains('Home').click();
    cy.location('pathname').should('equal', '/');
  });

  it('should go to the about page', () => {
    cy.get('[role="menubar"]').contains('About us').click();
    cy.location('pathname').should('equal', '/about');
  });

  it('should go to the about sjp page', () => {
    cy.get('[role="menubar"]').contains('About SJP').click();
    cy.location('pathname').should('equal', '/about-sjp');
  });

  it('should go to the advice-and-services page', () => {
    cy.get('[role="menubar"]').contains('Advice and Services').click();
    cy.location('pathname').should('equal', '/advice-and-services');
  });

  it('should go to the contact page', () => {
    cy.get('[role="menubar"]').contains('Contact').click();
    cy.location('pathname').should('equal', '/contact');
  });

});