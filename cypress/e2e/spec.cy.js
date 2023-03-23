describe('Software Seni Site Test', () => {
  it('Visits the Software Seni site and performs some basic checks', () => {
    // Visit the Software Seni site
    cy.visit('https://www.softwareseni.co.id/')

    // Check the page title
    cy.title().should('contain', 'Softwareseni')

    // Search for "Angkasa Pura - SSO" content on the page
    cy.contains('Angkasa Pura - SSO')

    // cy.get('[class=rv-button-text-with-icon]').click()

    cy.get('a[href*="angkasa-pura-sso"]').click()

    // Check the title of the new page
    cy.title().should('contain', 'Angkasa Pura - SSO')

    // Scroll down until the footer is visible
    cy.get('footer').scrollIntoView()

    // Go back to the main page by clicking the "Softwareseni" logo
    cy.get('.navbar-brand').click()

    // Open the search menu in the header and search for "Tim Kami"
    cy.get('.search-bar__icon').click()
    cy.get('#search-input').type('Tim Kami').type('{enter}')

    // Access the page displayed on the search result page
    cy.get('.search-result__title a').first().click()

    // Check the title of the new page
    cy.title().should('contain', 'Tim Kami')
  })
})
