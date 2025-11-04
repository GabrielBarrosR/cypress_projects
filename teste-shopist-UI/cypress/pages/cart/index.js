class Cart {

  addProductToCart(numberProduct, haveStock ) {
  let info = ''

  if (haveStock) {
    info = 'a >'
  }
    cy.get(':nth-child(3) > .jumbotron-box > :nth-child(3)').click()
    cy.get(`:nth-child(${numberProduct}) > :nth-child(1) > ${info} .product-card > img`).click()
  }

  purchase(){
    cy.get('.purchase-button').click()
  }

  openCart() {
    cy.visit('https://shopist.io/cart')
  }
}
export default new Cart()

