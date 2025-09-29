import utils from '../pages/utils/index.js'
import Cart from '../pages/cart/index.js'

describe('cart', () => {

    beforeEach(() => {
        utils.openPage()
    })

    it('Deve adicionar produto no carrinho corretamente', () => {
        Cart.addProductToCart(1)

        cy.get('.description > :nth-child(1) > :nth-child(1)').then(($el) => {
            const productName = $el.text()
            cy.wrap(productName).as('ProductName')
        })

        Cart.purchase()
        Cart.openCart()

        
        cy.get('@ProductName').then((ProductName) => {
            cy.get('.product-description > :nth-child(1)').invoke('text').should('contain', ProductName)
        })
    })
})