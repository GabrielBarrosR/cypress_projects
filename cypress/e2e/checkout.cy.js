describe('Testando a tela de checkout', () => {
    
    beforeEach(() =>{
        cy.visit("https://www.saucedemo.com/")
        cy.get('[id="user-name"]').type('standard_user')
        cy.get('[id="password"]').type('secret_sauce')
        cy.get('[id="login-button"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="checkout"]').click()
    })

    it('Realizar o checkout com sucesso', () => {
        cy.get('[data-test="firstName"]').type('Gabriel')
        cy.get('[data-test="lastName"]').type('Rodrigues')
        cy.get('[data-test="postalCode"]').type('1234')
        cy.get('[data-test="continue"]').click()
        cy.url().should('eq','https://www.saucedemo.com/checkout-step-two.html')

    })

    it('Deve faltar o campo Last Name', () =>{
        cy.get('[data-test="firstName"]').type('Gabriel')
        cy.get('[data-test="postalCode"]').type('1234')
        cy.get('[data-test="continue"]').click()
        cy.contains('Error: Last Name is required').should('be.visible')
    })

    it('Deve faltar o campo Postal Code', () =>{
        cy.get('[data-test="firstName"]').type('Gabriel')
        cy.get('[data-test="lastName"]').type('Rodrigues')
        cy.get('[data-test="continue"]').click()
        cy.contains('Error: Postal Code is required').should('be.visible')
    })
})