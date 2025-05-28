import {elements as el} from './elements'


class Login{ 
    openPage () {
        cy.visit("https://www.saucedemo.com/")
    }

    insertdados (name, password){
        cy.get(el.username).type(name)
        cy.get(el.password).type(password)
        cy.get(el.buttonLogin).click()
    }

}

export default new Login()