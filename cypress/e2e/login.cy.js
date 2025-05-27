describe('Login', () => {
    it ('Realizar Login com sucesso', () =>{
        // arrange
        cy.visit("https://www.saucedemo.com/")
        // act
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[id="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        //assert
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    })
})

it('Realizar login informando credenciiais inválidas', () =>{
        // arrange
        cy.visit("https://www.saucedemo.com/")
        // act
        cy.get('[data-test="username"]').type('locked_out_user')
        cy.get('[id="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        //assert
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Sorry, this user has been locked out.')
        cy.url().should('eq', 'https://www.saucedemo.com/')
})

it('Deve adicionar o produto ao carrinho corretamente', () => {
    //arrange
        cy.visit("https://www.saucedemo.com/")
    //act
    cy.get('[id="user-name"]').type('standard_user')
    cy.get('[id="password"]').type('secret_sauce')
    cy.get('[id="login-button"]').click()

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    
    cy.get('[data-test="shopping-cart-badge"]').should('be.visible').and('have.text', '1')
})