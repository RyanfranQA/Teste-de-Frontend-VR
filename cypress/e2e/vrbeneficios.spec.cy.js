//// <reference types="Cypress" />

describe('Teste VR Beneficios', () => {
  it('visitar o site da VR Beneficios e validar o mapa', () => {
    // Primeiramente foi validado o acesso ao site da VR Beneficios
    cy.visit('https://www.vr.com.br/')

  // Em seguida foi copiado o GET  para entrar no "Pra Você"
    cy.get(':nth-child(3) > .vr-quick-navigation__link').click()

    // Em seguida foi clicado "Onde usar meu cartão VR"
    cy.get('.vr-hero__actions > .vr-button--negative').click()

    // Como validação do mapa foi utilizado os campos de pesquisa de uma cidade, tipo de cartão e em seguida buscando as informações.
    cy.get('#endereco').type('Carapicuiba')

    cy.get('[data-place-id="ChIJL1QpbEoAz5QRv0wC_G_Q14k"]').click()

    cy.get('#buttonFiltrar').click()

    cy.get('.lum-first').click()

    cy.get(':nth-child(1) > .vr-map__card--title').click()

    cy.get('#buttonFiltrarCards').click()

    cy.get('#buscarResultados').click()

    // Após preencher os campos foi realizado uma busca e retornado no mapa os locais onde era aceito o cartão solicitado.

  })
})