class Cart {

  addProductToCart(numberProduct) {
    cy.visit('https://shopist.io/department/chairs')
    cy.get(`:nth-child(${numberProduct}) > :nth-child(1) > a > .product-card > img`).click()
  }

  purchase(){
    cy.get('.purchase-button').click()
  }

  openCart() {
    cy.visit('https://shopist.io/cart')
  }
}
export default new Cart()
