

class LoginPage{
    navegaURL(){
        cy.visit('/')
    }

    logar(){
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false})
        cy.get(':nth-child(2) > .form-line > .form-control').click().type('admin')
        cy.get(':nth-child(3) > .form-line > .form-control').click().type('123')
        cy.get('.btn').click()
    }
    
    PaginaInicial(){
        cy.contains('Bem vindo(a) ao novo Portal Transparência.').should('be.visible') 
    }
}
export default new LoginPage()

