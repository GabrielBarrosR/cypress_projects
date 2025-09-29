import utils from '../pages/utils/index.js'
import profile from '../pages/profile/index.js'

describe('Profile', () => {
  beforeEach(() => {
    utils.openPage()
    cy.get('.hamburger').click()
    cy.get('[href="/profile"] > .menu-item-small').click()
    cy.get('.button').click()
  })

  it('Deve permitir salvar o perfil com todos os dados válidos', () => {
    profile.fillForm(
      'Teste',
      'Testando',
      'Rua tal',
      'Numero Tal',
      'Teresópolis',
      'MN',
      '55401',
      '11999999999'
    )
    cy.get('.inverted').click()
    cy.get('.success').should('be.visible')
  })

  it('Deve exibir um erro ao tentar salvar o perfil com dados inválidos', () => {
    profile.fillForm(
      'T',
      'T',
      'R',
      'N',
      'T',
      'M',
      '5',
      'b'
    )
    cy.get('.inverted').click()
    cy.get('.success').should('not.be.visible')
  })

    const scenarios = [
    { field: 'Nome', values: ['', 'Silva', 'Rua A', 'Apto 1', 'São Paulo', 'AZ', '12345-678', '11999999999'] },
    { field: 'Sobrenome', values: ['João', '', 'Rua A', 'Apto 1', 'São Paulo', 'AZ', '12345-678', '11999999999'] },
    { field: 'Endereço1', values: ['João', 'Silva', '', 'Apto 1', 'São Paulo', 'AZ', '12345-678', '11999999999'] },
    { field: 'Cidade', values: ['João', 'Silva', 'Rua A', 'Apto 1', '', 'AZ', '12345-678', '11999999999'] },
    { field: 'CEP', values: ['João', 'Silva', 'Rua A', 'Apto 1', 'São Paulo', 'AZ', '', '11999999999'] },
    { field: 'Telefone', values: ['João', 'Silva', 'Rua A', 'Apto 1', 'São Paulo', 'AZ', '12345-678', ''] }
    ]

  scenarios.forEach(({ field, values }) => {
    it(`Deve exigir o campo ${field}`, () => {
      profile.fillForm(...values)
      cy.get('.inverted').click()
      cy.get('.input-group.error > .error').should('be.visible')
    })
  })

  it('Não deve permitir preencher o campo com espaço como valor', () => {
    profile.fillForm(
      ' ',
      ' ',
      ' ',
      ' ',
      ' ',
      'MN',
      ' ',
      ' '
    )   
    cy.get('.inverted').click()
    cy.get('.success').should('not.be.visible')
  })
})
