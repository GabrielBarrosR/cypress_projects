import utils from '../pages/utils/index.js'
import profile from '../pages/profile/index.js'

describe ('Profile', () => {
    beforeEach(() => {
        utils.openPage()
    })
    it ('Deve permitir salvar o perfil com todos os dados válidos', () => {
        cy.get('.hamburger').click()
        cy.get('[href="/profile"] > .menu-item-small').click()
        cy.get('.button').click()
        profile.fillForm(
            'Teste',           
            'Testando',            
            'Rua tal',    
            'Numero Tal',          
            'Teresópolis', 
            'MN',             
            '55401',          
            'b'      
        );
        cy.get('.inverted').click()
        cy.get('.success').should('be.visible')
    })
})