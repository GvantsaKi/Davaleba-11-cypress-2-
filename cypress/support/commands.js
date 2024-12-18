// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('Registration',(testData) =>{
    cy.get('#customer_menu_top > li > a').click()
    cy.get('#accountFrm_accountregister').should("be.checked")
    cy.get('#accountFrm > fieldset > .btn').click()
    cy.get('#AccountFrm_firstname').type(testData)
    cy.get('#AccountFrm_lastname').type(testData)
    cy.get('#AccountFrm_email').type(testData + "@gmail.com")
    cy.get('#AccountFrm_telephone').type(3454656)
    cy.get('#AccountFrm_fax').type(345)
    cy.get('#AccountFrm_company').type(testData)
    cy.get('#AccountFrm_address_1').type(testData)
    cy.get('#AccountFrm_city').type(testData)
    cy.get('#AccountFrm_postcode').type(2341)
    cy.get('#AccountFrm_country_id').select("Angola")
    cy.get('#AccountFrm_zone_id').select("131")
    cy.get('#AccountFrm_loginname').type(testData)
    cy.get('#AccountFrm_password').type(testData)
    cy.get('#AccountFrm_confirm').type(testData)
    cy.get('#AccountFrm_newsletter1').click()
    cy.get('#AccountFrm_agree').check()
    cy.get('.btn').contains('Continue').click()
})

Cypress.Commands.add('Logging', (testData) =>{
    cy.get('#customer_menu_top > li > a').click()
    cy.get('#loginFrm_loginname').type("newusername1122345")
    cy.get('#loginFrm_password').type("newusername1122345")
    cy.get('#loginFrm > fieldset > .btn').click()
})