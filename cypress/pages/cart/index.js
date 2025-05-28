import {elements as el} from './elements'

class cart {
    login(){
        cy.visit("https://www.saucedemo.com/")
        cy.get('[id="user-name"]').type('standard_user')
        cy.get('[id="password"]').type('secret_sauce')
        cy.get('[id="login-button"]').click()        
    }

    addtocart(name){
        cy.get(el.product(name)).click()

    }
}

export default new cart()