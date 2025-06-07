class confirm{
    verifyvalue() {
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
    }
}

export default new confirm ()