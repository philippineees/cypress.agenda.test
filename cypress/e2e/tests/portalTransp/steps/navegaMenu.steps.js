import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import loginPage from "../pages/login/login.page"
import navegaMenuPage from "../pages/menu/navegaMenu.page"

Given('O usuário está logado no portal transparência', () => {
    loginPage.navegaURL()
    loginPage.logar()
    loginPage.PaginaInicial()
})
    
When('clica em Parametro Gerais', () => {
    navegaMenuPage.parametroGeral()
}) 

Then('clica em configurações de rodapé e acessa a pagina', () => {
    navegaMenuPage.configuraRodape()
}) 

