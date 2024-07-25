
describe('mysuite',()=>{

    it('capture screenshot and videos',()=>{
        cy.visit("https://www.zoho.com/commerce/free-demo.html")
        //cy.screenshot("homepage")
        cy.wait(5000)
        //cy.get('.zgh-brand > a').screenshot('Logo')
        
        //automatically capture screenshot and video on failiure - only when you execute through Ci tool
        cy.get('.zw-product-header > .content-wrap > .product-nav-links > .menu > .leaf > a').click()
        cy.get('.field-price-heading').should('have.text', "Complicated")

    })


})