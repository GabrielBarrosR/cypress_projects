describe('Teste completo', () => {

    it('Deve efetuar a compra com sucesso', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()

        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')

        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('[data-test="shopping-cart-link"]').click()

        cy.get('[data-test="inventory-item"]').should('exist')
        
        cy.get('[data-test="checkout"]').click()

        cy.get('[data-test="firstName"]').type('Gabriel')
        cy.get('[data-test="lastName"]').type('Rodrigues')
        cy.get('[data-test="postalCode"]').type('2134456')
        cy.get('[data-test="continue"]').click()

        cy.contains('Sauce Labs Bike Light').should('be.visible')

        cy.get('[data-test="inventory-item-price"]').then(($price) => {
            const price = parseFloat($price.text().replace('$', ''))

            cy.get('[data-test="tax-label"]').then(($tax) => {
                const tax = parseFloat($tax.text().replace('Tax: $', ''))

                const expectedTotal = price + tax
                const expectedTotalFormatted = parseFloat(expectedTotal.toFixed(2))

                cy.get('[data-test="total-label"]').then(($total) => {
                    const total = parseFloat($total.text().replace('Total: $', ''))

                    expect(total).to.equal(expectedTotalFormatted)

                    cy.get('[data-test="finish"]').click()

                    cy.contains('Thank you for your order!').should('be.visible')
                })
            })
        })
    })
})
