


describe('CSSLocators',() => {
    it("csslocators", () =>{
        cy.visit("http://www.automationpractice.pl/index.php")

        cy.get("#search_query_top").type("T-shirts") //we used id. Tag is optional here.

        cy.get("[name='submit_search']").click() //we used attribute
        //cy.get('.lighter', { timeout: 10000 }).should('contain', 'T-shirts'); //

        cy.get(".lighter").contains("T-shirts") //Used Class
        
    })
})