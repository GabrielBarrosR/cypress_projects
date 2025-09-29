class Form {
  fillForm(Firstname, Lastname, Address, Address2, city, state, Zipcode, phone_number) {
    cy.get('#firstname').clear()
    if (Firstname) cy.get('#firstname').type(Firstname)

    cy.get('#lastname').clear()
    if (Lastname) cy.get('#lastname').type(Lastname)

    cy.get('#address1').clear()
    if (Address) cy.get('#address1').type(Address)

    cy.get('#address2').clear()
    if (Address2) cy.get('#address2').type(Address2)

    cy.get('#addressCity').clear()
    if (city) cy.get('#addressCity').type(city)

    if (state) {
      cy.get('.multiselect__select').click()
      cy.get('.multiselect__content').contains(state).scrollIntoView().click()
    }

    cy.get('#addressZipcode').clear()
    if (Zipcode) cy.get('#addressZipcode').type(Zipcode)

    cy.get('#phone').clear()
    if (phone_number) cy.get('#phone').type(phone_number)
  }
}

export default new Form()
