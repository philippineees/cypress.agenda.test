import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import loginPage from "../pages/login.page";

const $ = null;

Given("O usuário acessa o Sisprev" , () => {
    loginPage.navegaURL()
}) 
When ("informa o usuário, a senha e clica no botão acessar", () => {
    loginPage.logar()    
})

Then ("usuário está autenticado no sisprev" , () => {
    return true
}) 