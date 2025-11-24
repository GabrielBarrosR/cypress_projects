import utils from '../pages/utils/index.js'
import Cart from '../pages/cart/index.js'
import cart from '../pages/cart/index.js'

describe('cart', () => {

    beforeEach(() => {
        utils.openPage()
    })
    it('Deve adicionar produto no carrinho corretamente', () => {
        Cart.addProductToCart(1, true)

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
    it ('Deve apresentar uma mensagem de erro ao tentar comprar um produto fora de estoque', () => {
        Cart.addProductToCart(4, false)
        cy.contains('Oops! This item is sold out').should('be.visible')
    })

    it('O produto deve ser removido do carrinho corretamente ao clicar em remover', () => {
        cart.addProductToCart(1, true)
        cart.purchase()
        cart.openCart()
        cy.get('.remove-button').click()
        cy.get('.no-products').should('be.visible')
    })

 it('Deve atualizar o valor total caso seja adicionado mais uma unidade do mesmo produto', () => {
        Cart.addProductToCart(1, true)
        Cart.purchase()
        Cart.openCart()
        cy.get('.lines > :nth-child(1) > :nth-child(2)').then(($el) => {
            const firstTotal = $el.text().replace('$', '')
            cy.wrap(firstTotal).as('FirstTotal')
        })
        cy.get('.product-counter > :nth-child(1) > :nth-child(3)').click()
        cy.get('@FirstTotal').then((FirstTotal) => {
            const expectedTotal = (FirstTotal * 2).toFixed(2)
            cy.get('.lines > :nth-child(1) > :nth-child(2)').invoke('text').should('equal', '$'+expectedTotal)
        })
    })

    it ('Deve mostrar cupom inválido ao inserir um cupom incorreto', () => {
        Cart.openCart()
        Cart.applyCoupon('INVALIDCOUPON')
        cy.contains('Coupon is invalid').should('be.visible')
    })
})