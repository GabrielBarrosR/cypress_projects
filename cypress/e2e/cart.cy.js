import cart from '../pages/cart/index.js'

describe('Carrinho', () => {
    beforeEach(()=> {
        cart.login()
    }) 

    it('Deve adicionar o produto ao carrinho corretamente', () => {
        cart.addtocart('sauce labs bike light')
        cy.get('[data-test="shopping-cart-badge"]').should('be.visible').and('have.text', '1')
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.contains('Sauce Labs Bike Light').should('be.visible')
        cy.get('[data-test="checkout"]').click()
        cy.url().should('eq', 'https://www.saucedemo.com/checkout-step-one.html')
    })

    it('Deve remover o produto do carrinho com sucesso', () => {
        cart.addtocart('sauce labs bike light')
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="remove-sauce-labs-bike-light"]').click()
        cy.get('[data-test="inventory-item-name"]').should('not.exist')  
    })
})
