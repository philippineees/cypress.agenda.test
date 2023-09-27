import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import loginPage from "../pages/login/login.page"
import consultahistoricoPage from "../pages/login/consultahistorico.page"

Given ('O usuário está na página de histórico de envios', () => {
    loginPage.navegaURL()
    loginPage.logar()
    loginPage.selecionaBaseDados()
}) 

When ('seleciona a operação de inclusão', () => {
    consultahistoricoPage.operacaoInclusao()
}) 

When ('seleciona o status de concluído', () => {
    consultahistoricoPage.statusConcluido()
}) 

Then('preenche o número dos eventos e realiza a consulta', () => {
    consultahistoricoPage.selecionaEvento()   
  });





