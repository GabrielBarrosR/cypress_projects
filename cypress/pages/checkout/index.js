import { elements as el } from './elements';

class checkout {
    insertcheckoutdados(firstname, lastname, postalcode) {
        if (firstname) {
            cy.get(el.optionfirstname).type(firstname);
        }
        if (lastname) {
            cy.get(el.optionlastname).type(lastname);
        }
        if (postalcode) {
            cy.get(el.optionpostalcode).type(postalcode);
        }
        cy.get(el.buttoncontinue).click();
    }
}

export default new checkout();