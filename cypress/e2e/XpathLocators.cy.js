describe('XpathLocators', () =>{
    it('Find no of products',() => {
        cy.visit("http://www.automationpractice.pl/index.php")
        cy.xpath("//ul[@id='homefeatured']/li").should('have.length',7)

    })

    it('chained xpath',() => {
        cy.visit("http://www.automationpractice.pl/index.php")
        cy.xpath("//ul[@id='homefeatured']").xpath("./li").should('have.length',7)
        
    })
})