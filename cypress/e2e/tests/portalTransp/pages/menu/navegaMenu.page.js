

class navegaMenu {
    parametroGeral(){
        cy.get('.list > :nth-child(2) > .menu-toggle').click()
    }

    configuraRodape(){
        cy.get('.list > :nth-child(2) > .ml-menu > :nth-child(3) > .waves-effect').click()
        cy.contains('Parâmetros do Rodape').should('be.visible')
    }

    CertifeDemons(){
        cy.get(':nth-child(21) > :nth-child(1)').click()
    }

    CRP (){
        cy.get('[style="display: block;"] > :nth-child(1) > .waves-effect').click()
    }

}

export default new navegaMenu