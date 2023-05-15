describe('template spec', () => {
    it('should render users page with elements', () => {
        /*
            It's not an e2e test, but it's a good example of how to use Cypress.
            It's a good practice to have at least one test per page to check if
            the page is rendered correctly.
            Also, as we have two different frameworks for the same page, it's a
            good test to check if the page is rendered semantically same.
         */
        cy.visit('/users');

        // Check for the content
        cy.get('h4').should('exist');
        cy.get('h4').should('contain', 'List of the users');

        // Check for the user cards
        /*
            For e2e test, it's preferred to not use data-test-id attributes to select,
            but as we have two frameworks to render the same page, it's a good practice
            to use data-test-id attributes to select elements.
         */
        cy.get('[data-testid="cards-container"] > div').should('have.length', 10);
        cy.get('[data-testid="cards-container"] > div').eq(0).find('img').should('exist');
        cy.get('[data-testid="cards-container"] > div').eq(0).find('a').should('exist');
        cy.get('[data-testid="cards-container"] > div').eq(0).find('button').should('exist');
    });

    it('should remove the user after clicking on the trash button', async () => {
        cy.visit('/users');
        cy.get('[data-testid="cards-container"] > div').eq(0).find('button').click();
        cy.get('[data-testid="cards-container"] > div').should('have.length', 9);
    });
});
