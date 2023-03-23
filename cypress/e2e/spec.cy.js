describe('Software Seni Site Test', () => {
  it('Visits the Software Seni site and performs some basic checks', () => {
    // Visit the Software Seni site
    cy.visit('https://www.softwareseni.co.id/')

    // Check the page title
    cy.title().should('contain', 'Softwareseni')

    // Search for "Angkasa Pura - SSO" content on the page
    cy.contains('Angkasa Pura - SSO')

    // cy.get('[class=rv-button-text-with-icon]').click()

    // cy.get('a[href*="angkasa-pura-sso"]').click()

    cy.visit('https://www.softwareseni.co.id/our-works/angkasa-pura-sso')
    // Check the title of the new page
    cy.title().should('contain', 'Angkasa Pura - SSO')

    // Scroll down until the footer is visible
    cy.get('[class=rv-footer-address]').scrollIntoView()

    // Go back to the main page by clicking the "Softwareseni" logo
    cy.get('[class=rv-main-navbar-nav]').click()

    // Open the search menu in the header and search for "Tim Kami"
    // Can't find the search bar at the header
  })
})
