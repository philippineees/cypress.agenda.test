import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import loginPage from "../pages/login/login.page"
import logoutPage from "../pages/login/logout.page"

Given ('O usuário está logado no Esocial', () => {
    loginPage.navegaURL()
    loginPage.logar()
    loginPage.selecionaBaseDados()
})

When ('clica no nome do login', () => {
    logoutPage.opcoesUsuario()
}) 

Then ('clica no botão sair e é deslogado', () => {
    logoutPage.deslogar()
}) 
