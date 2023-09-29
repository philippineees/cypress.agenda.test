

class navegaMenu {
    parametroGeral(){
        cy.get('.list > :nth-child(2) > .menu-toggle').click()
    }

    configuraRodape(){
        cy.get('.list > :nth-child(2) > .ml-menu > :nth-child(3) > .waves-effect').click()
        cy.contains('Parâmetros do Rodape').should('be.visible')
    }


}

export default new navegaMenu