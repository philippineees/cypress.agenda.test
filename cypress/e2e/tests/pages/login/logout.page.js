

class LogoutPage{
    opcoesUsuario(){
        cy.get('cdk-user-menu > .toolbar-user-container > .toolbar-user-btn').click()
    }
    deslogar(){
        cy.get('cdk-user-menu > .toolbar-user-container > .dropdown > .content > .mat-nav-list > :nth-child(4) > .mat-list-item-content').click()
        cy.get('.mat-button-wrapper').should('be.visible')
    }
}

export default new LogoutPage()