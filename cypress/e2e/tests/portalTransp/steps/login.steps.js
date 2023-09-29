import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import loginPage from "../pages/login/login.page"

Given('O usuário acessa o Portal Transparência', () => {
    loginPage.navegaURL()
})

When('informa o usuário, senha e clica no botão continuar', () => {
    loginPage.logar()
}) 
    
Then('usuário está autenticado no portal transparência', () => {
    loginPage.PaginaInicial()
})  