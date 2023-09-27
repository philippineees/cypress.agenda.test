

class LoginPage{
    navegaURL(){
        cy.visit('/')
    }

    logar(){
        cy.get('#mat-input-0').click().type('1740')
        cy.get('#mat-input-1').click().type('cefda5')
        cy.get('.mat-button-wrapper').click()
    }
    
    selecionaBaseDados(){
        cy.get('#mat-dialog-0').should('be.visible')
        cy.get('#mat-select-4 > .mat-select-trigger > .mat-select-value > .mat-select-placeholder').click()
        cy.get('#mat-option-17').should('be.visible').click()
        cy.contains('Confirmar').click() 
    }
}
export default new LoginPage()

