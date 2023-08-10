/// <reference types="Cypress" />

describe('Navigation bar about us tests', () => {
  beforeEach( () =>{
    cy.visit('/');
  });

  it('should go to the about us page', () => {
    cy.get('[role="menubar"]').contains('About us').trigger('mouseover');
    cy.get('[role="menu"]').contains('About us').click();
    cy.location('pathname').should('equal', '/about');
  });

  it('should go to the meet the team page', () => {
    cy.get('[role="menubar"]').contains('About us').trigger('mouseover');
    cy.get('[role="menu"]').contains('Meet the team').click();
    cy.location('pathname').should('equal', '/about/meet-the-team/listing');
  });

  it('should go to the testimonials page', () => {
    cy.get('[role="menubar"]').contains('About us').trigger('mouseover');
    cy.get('[role="menu"]').contains('Testimonials').click();
    cy.location('pathname').should('equal', '/about/testimonials');
  });

});