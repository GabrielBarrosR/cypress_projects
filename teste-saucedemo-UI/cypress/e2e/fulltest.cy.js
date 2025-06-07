import checkout from '../pages/checkout/index.js'
import login from '../pages/login/index.js'
import cart from '../pages/cart/index.js'
import header from '../pages/header/index.js'
import confirm from '../pages/confirmpage/index.js'

describe('Teste completo', () => {

    it('Deve efetuar a compra com sucesso', () => {
        const quantityproducts = 1
        
        login.openPage()
        login.insertdados('standard_user', 'secret_sauce')
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')

        cart.addtocart('sauce labs bike light')
        header.numbercartvalidation(quantityproducts)
        header.clickoncart()

        cy.get('[data-test="checkout"]').click()

        checkout.insertcheckoutdados('Gabriel', 'Rodrigues', '1234')

        cy.contains('Sauce Labs Bike Light').should('be.visible')

        confirm.verifyvalue()
    })
})        
