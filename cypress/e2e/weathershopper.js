

/// <reference types="cypress"/>

describe('Tooltip functionality verification', () => {
    beforeEach(() => {
        // launch the url
        cy.visit("https://weathershopper.pythonanywhere.com/");
    })
    it('should be able to display tooltip for weathershopper home page and able to verify tooltip text', () => {


        cy.contains('h2', 'Current temperature')

        // clicking on tooltip
        cy.get('span.octicon.octicon-info').invoke('show').click();

        //verifying the tooltip text
        cy.get('.popover-body').should('have.text','Shop for moisturizers if the weather is below 19 degrees. Shop for suncreens if the weather is above 34 degrees.')


    });
    it('should be able to display tooltip for moisturizers home page and able to verify tooltip text', () => {

        cy.contains('a', 'Buy moisturizers').should('be.visible').click();
        //clicking on tooltip
        cy.get('.octicon').invoke('show').click();
        //verifying the tooltip text
        cy.get('.popover-body').should('have.text','Add two moisturizers to your cart. First, select the least expensive mositurizer that contains Aloe. For your second moisturizer, select the least expensive moisturizer that contains almond. Click on cart when you are done.')
        cy.go('back');

    });
    it('should be able to display tooltip for sunscreen page and able to verify tooltip text', () => {

        cy.contains('a', 'Buy sunscreens').should('be.visible').click();
        // clicking on tooltip
        cy.get('.octicon').invoke('show').click();
        //verifying the tooltip text
        cy.get('.popover-body').should('have.text', 'Add two sunscreens to your cart. First, select the least expensive sunscreen that is SPF-50. For your second sunscreen, select the least expensive sunscreen that is SPF-30.  Click on the cart when you are done.')
        cy.go('back');
    });
});