import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import loginPage from "../pages/login/login.page"

Given("O usuário acessa o Esocial" , () => {
    loginPage.navegaURL()
}) 
When ("informa o usuário, senha e clica no botão acessar", () => {
    loginPage.logar()
}) 

Then ("usuário está autenticado" , () => {
    loginPage.selecionaBaseDados() 
}) 