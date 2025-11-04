import cart from '../pages/cart/index.js'
import Login from '../pages/login/index.js'
import header from '../pages/header/index.js'

describe('Carrinho', () => {
    beforeEach(()=> {
        Login.openPage()

        const username = Cypress.env('username')
        const password = Cypress.env('password')

        Login.insertdados(username, password)
    }) 

    it('Deve adicionar o produto ao carrinho corretamente', () => {
        const quantityproducts = 1
        cart.addtocart('sauce labs bike light')
        header.numbercartvalidation(quantityproducts)
        header.clickoncart()
        cy.contains('Sauce Labs Bike Light').should('be.visible')
        cy.get('[data-test="checkout"]').click()
        cy.url().should('eq', 'https://www.saucedemo.com/checkout-step-one.html')
    })

    it('Deve remover o produto do carrinho com sucesso', () => {
        cart.addtocart('sauce labs bike light')
        header.clickoncart()
        cy.get('[data-test="remove-sauce-labs-bike-light"]').click()
        cy.get('[data-test="inventory-item-name"]').should('not.exist')  
    })
})
