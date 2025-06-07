const apikey = Cypress.env('token')
const baseurl = Cypress.env('url')
const email = Cypress.env('email')
const password = Cypress.env('password')

describe ('Teste de API - Login', () => {
    it ('Se autenticar com um usuário válido', () => {
        cy.request({
            method: 'POST',
            url: `${baseurl}api/login`,
            headers: {
                'x-api-key': apikey
            },
            body: {
                email: email,
                password: password
            }
        }).then((response) =>{
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('token')
        })
    })
    it ('Se autenticar com um usuário inválido', () => {
        cy.request({
            method: 'POST',
            url: `${baseurl}api/login`,
            headers:{
                'x-api-key': apikey
            },
            failOnStatusCode: false,
            body: {
                email: "teste",
                password: "teste"
            }
        }).then((response) => {
            expect(response.body).to.have.property("error")
        })
    })
})