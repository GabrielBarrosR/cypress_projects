import checkout from '../pages/checkout/index.js'
import login from '../pages/login/index.js'
import cart from '../pages/cart/index.js'
import header from '../pages/header/index.js'


describe('Testando a tela de checkout', () => {
    
    beforeEach(() =>{
        login.openPage()
        login.insertdados('standard_user', 'secret_sauce')
        cart.addtocart('sauce labs bike light')
        header.clickoncart()
        cy.get('[data-test="checkout"]').click()
    })

    it('Realizar o checkout com sucesso', () => {
        checkout.insertcheckoutdados('Gabriel', 'Rodrigues', '1234' )
        cy.url().should('eq','https://www.saucedemo.com/checkout-step-two.html')

    })

    it('Deve faltar o campo Last Name', () =>{
        checkout.insertcheckoutdados('Gabriel', null, 'Rodrigues' )
        cy.contains('Error: Last Name is required').should('be.visible')
    })

    it('Deve faltar o campo Postal Code', () =>{
        checkout.insertcheckoutdados('Gabriel', 'Rodrigues', null)
        cy.contains('Error: Postal Code is required').should('be.visible')
    })
})