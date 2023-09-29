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
        cy.contains('Acessar').click({multiple: true, force: true})

        //foi averiguado que o sisprevweb está apresentando erro de login
    }
    
    selecionaBaseDados(){
        return true 
    }
}
export default new LoginPage()

