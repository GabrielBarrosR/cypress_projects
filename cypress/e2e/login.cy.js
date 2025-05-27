describe('Login', () => {

    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/")
    })

    it ('Realizar Login com sucesso', () =>{

        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[id="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()

        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    })

    it('Realizar login informando credenciiais inválidas', () =>{

            cy.get('[data-test="username"]').type('locked_out_user')
            cy.get('[id="password"]').type('secret_sauce')
            cy.get('[data-test="login-button"]').click()

            cy.get('[data-test="error"]').should('contain', 'Epic sadface: Sorry, this user has been locked out.')
            cy.url().should('eq', 'https://www.saucedemo.com/')
    })
})