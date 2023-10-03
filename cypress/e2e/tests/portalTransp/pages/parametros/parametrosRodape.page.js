

class parametroRodape {

    slcEstado(){
        cy.get('[data-id="EstadoId"]').click()
        cy.get('.col-md-3 > .btn-group > .open > .dropdown-menu > .selected > a').click() // alterar indice para selecionar estado
    }
    slcCidade(){
        cy.get('[data-id="dropCidades"]').click()
        cy.get('.col-md-9 > .btn-group > .open > .dropdown-menu > [data-original-index="37"] > a').click() // alterar indice para selecionar a cidade 
    }
    slcTipoCliente(){
        cy.get('[data-id="DdlTipoCliente"]').click()
        cy.get('[data-original-index="0"] > .waves-effect').click() // alterar indice para selecionar entre cidade e estado
    }
    btnConfirmar(){
        cy.get('.btn-primary').click()
    }

}
export default new parametroRodape