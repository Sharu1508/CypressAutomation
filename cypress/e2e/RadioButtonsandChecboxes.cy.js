describe("Check UI Elements" , () =>{

   /* it("Check Radio buttons", ()=>{

        cy.visit("https://testautomationpractice.blogspot.com/")

        //visibility of radio buttons
        cy.get('#male').should('be.visible')
        cy.get('#female').should('be.visible')

        //selecting radio buttons

        cy.get('#male').check().should('be.checked')
        cy.get('#female').should('not.be.checked')

        cy.get('#female').check().should('be.checked')
        cy.get('#male').should('not.be.checked')
    })*/

        it("Check checkboxes", ()=>{

        cy.visit("https://testautomationpractice.blogspot.com/")

        //Visibility of the element
        cy.get('input#sunday').should('be.visible')
        
        //Selecting single checkbox - Sunday
        cy.get('input#sunday').check().should('be.checked')

        //Unselecting checkbox - SUnday
        cy.get('input#sunday').uncheck().should('not.be.checked')

        //Selecting all checkboxes

        cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')
        cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')

        cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked')
        cy.get("input.form-check-input[type='checkbox']").last().check().should('be.checked')
    })
})