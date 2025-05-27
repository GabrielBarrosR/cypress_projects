it('Deve adicionar o produto ao carrinho corretamente', () => {
    //arrange
        cy.visit("https://www.saucedemo.com/")
    //act
    cy.get('[id="user-name"]').type('standard_user')
    cy.get('[id="password"]').type('secret_sauce')
    cy.get('[id="login-button"]').click()

    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    
    //assert
    cy.get('[data-test="shopping-cart-badge"]').should('be.visible').and('have.text', '1')
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.contains('Sauce Labs Bike Light').should('be.visible')
})
