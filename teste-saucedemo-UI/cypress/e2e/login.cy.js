import Login from '../pages/login'

describe('Login', () => {

    beforeEach(() => {
        Login.openPage()
    })

    it ('Realizar Login com sucesso', () =>{
        Login.insertdados('standard_user', 'secret_sauce')
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    })

    it('Realizar login informando credenciiais inválidas', () =>{
            Login.insertdados('locked_out_user', 'secret_sauce')
            cy.get('[data-test="error"]').should('contain', 'Epic sadface: Sorry, this user has been locked out.')
            cy.url().should('eq', 'https://www.saucedemo.com/')
    })
})