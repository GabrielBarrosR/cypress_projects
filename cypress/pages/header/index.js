import {elements as el} from './elements'

class header {
    numbercartvalidation (number) {
        cy.get(el.cartinheader).should('be.visible').and('have.text', number)
    }
    clickoncart (){
        cy.get(el.cartinheader).click()
    }
}


export default new header ()