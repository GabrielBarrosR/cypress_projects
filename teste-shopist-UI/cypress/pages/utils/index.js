class utils {
    openPage (){
        cy.visit('https://shopist.io/')
    }
}

export default new utils();