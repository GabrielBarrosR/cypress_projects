const apikey = Cypress.env('token')
const baseurl = Cypress.env('url')


describe('Teste de API - Usuário', () => {
  it('Listar os usuários com token válido', () => {
    cy.request({
      method: 'GET',
      url: `${baseurl}api/users?page=2`,
      headers: {
        'x-api-key': apikey
      }
    }).then((response) => { 
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('data')
    })
  })
  it('Listas os usuários com token inválido', () => {
    cy.request({
        method: 'GET',
        url: `${baseurl}api/users?page=2`,
        headers: {
            'x-api-key': 'inválido123'
        },
        failOnStatusCode: false
    }).then((response) => {
        expect(response.status).to.be.oneOf([401, 403])
    })
  })
  it ('Listar um único usuário', () =>{
    cy.request({
        method: 'GET',
        url: `${baseurl}api/users/8`,
        headers: {
            'x-api-key': apikey
        }
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.data.id).to.eq(8)
            expect (response.body.data).to.have.property('email')
    })
  })
  it ('Criar um novo usuário', () => {
    cy.request({
        method: 'POST',
        url: `${baseurl}api/users`,
        headers: {
            'x-api-key': apikey
        },
        body: {
            "name": "Gabriel",
            "job": "Suporte Técinico"            
        }
    }).then((response) =>{
        expect(response.status).to.eq(201)
        expect(response.body).to.have.property('name', 'Gabriel')
    })
  })
})
