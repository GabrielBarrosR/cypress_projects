class form {
    fillForm(Firstname, Lastname, Address, Address2, city, state, Zipcode, phone_number){
        cy.get('#firstname').clear().type(Firstname)
        cy.get('#lastname').clear().type(Lastname)
        cy.get('#address1').clear().type(Address)
        cy.get('#address2').clear().type(Address2)
        cy.get('#addressCity').clear().type(city)
        cy.get('.multiselect__select').click();
        cy.get('.multiselect__content').contains(state).scrollIntoView().click();                
        cy.get('#addressZipcode').clear().type(Zipcode)
        cy.get('#phone').clear().type(phone_number)
    }
}

export default new form();
