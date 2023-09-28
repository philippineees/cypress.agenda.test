class LoginPage{
    navegaURL(){
        cy.visit('/')
    }

    logar(){
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false})
        cy.get('#txtUSER').click().type('1740')
        cy.get('#txtPassWord').click().type('cefda5')
        cy.get('#btnLogin').click()
    }
    
    selecionaBaseDados(){
        cy.get('#mat-dialog-0').should('be.visible')
        cy.get('#mat-select-4 > .mat-select-trigger > .mat-select-value > .mat-select-placeholder').click()
        cy.get('#mat-option-17').should('be.visible').click()
        cy.contains('Confirmar').click() 
    }
}
export default new LoginPage()

