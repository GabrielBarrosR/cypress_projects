import {elements as el} from './elements'

class cart {
    addtocart(name){
        cy.get(el.product(name)).click()
    }
}

export default new cart()