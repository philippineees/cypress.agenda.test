

class ConsultaHistorico {
    operacaoInclusao(){
        cy.get(':nth-child(2) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').should('be.visible').click()
        cy.get('#mat-option-0').click()
    }
    statusConcluido(){
        cy.get('#mat-select-1 > .mat-select-trigger > .mat-select-arrow-wrapper').click()
        cy.get('#mat-option-3').click()
    }
    realizaConsulta(){
        cy.get('.example-header > .mat-raised-button').click()
    }

    selecionaEvento(){
        const numeroDoEvento = ['2200', '1010', '1200'];
        numeroDoEvento.forEach((numero) => {
            cy.get('#mat-input-2').type(numero);
            this.realizaConsulta()
            cy.get(':nth-child(2) > .cdk-column-codigo').should('be.visible')
            cy.get('#mat-input-2').clear()
    });
    }
}


export default new ConsultaHistorico