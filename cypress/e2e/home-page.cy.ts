describe('template spec', () => {
    it('should render homepage with elements', () => {
        /*
            It's not an e2e test, but it's a good example of how to use Cypress.
            It's a good practice to have at least one test per page to check if
            the page is rendered correctly.
            Also, as we have two different frameworks for the same page, it's a
            good test to check if the page is rendered semantically same.
         */
        cy.visit('/');

        // Check for the app bar
        cy.get('header').should('exist');
        cy.get('header').should('contain', 'Github Users | PressPage Assignment');
        cy.get('header img').should('exist');
        cy.get('header a').should('have.attr', 'href', '/');

        // Check for the content
        cy.get('h4').should('exist');
        cy.get('h4').should('contain', 'Welcome to PP co. Dashboard');
        cy.get('h5').should('exist');
        cy.get('h5').should('contain', 'For accessing a list of the users, please click on the below button.');

        // Check for the call to action button
        cy.get('a[href="/users"]').should('exist');
        cy.get('a[href="/users"]').invoke('text').should('eq', 'View Users');
    });

    it('should go to users page', () => {
        cy.visit('/');
        cy.get('a').contains('View Users').click();
        cy.location('href').should('eq', `${Cypress.config().baseUrl}/users`);
    });
});
