describe('AssertionDemo',() => {


    it("Implicit assertions", () =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        //should //and keywords are used
        //way 1

        //cy.url().should('include','orangehrmlive.com')
        //cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //cy.url().should('contain','orangehrmlive.com')
        
        //way 2
        /* cy.url().should('include','orangehrmlive.com')
        .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .should('contain','orangehrmlive.com')*/

        //way 3
         cy.url().should('include','orangehrmlive.com')
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain','orangehrmlive.com')
        //.and('not.contain','orangehrmlive.com') //Negative Assertion

        cy.title().should('include','Orange')
        .and('eq',"OrangeHRM")
        .and('contain',"HRM")

        cy.get('.orangehrm-login-branding > img').should('be.visible')
        .and('exist')

        cy.xpath("//a").should('have.length','5')  //returns all the links that are present in the webpage

        //cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input') //chained css path
        cy.get("input[placeholder='Username']").type("Admin") 
        cy.get("input[placeholder='Username']").should('have.value','Admin')
        
        /*implicit assertions keyword: Should And.
        options:eq, contain, include exist, have.length, have.value etc., */

    })
    
    /*Explicit Assertions are not built in cypress. These are user defined functions.
    expect - BDD
    assert - TDD*/
    
    it("Explicit assertions", () =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get("input[placeholder='Username']").type("Admin") 
        cy.get("input[placeholder='Password']").type("admin123") 
        cy.get("button[type='submit']").click()

        let expName = 'Maria Landa';
        cy.get(".oxd-userdropdown-name").then((x)=>{  //writing an arrow function
            let actName=x.text()

            //BDD Style

           // expect(actName).to.not.equal(expName)
            expect(actName).to.equal(expName)

            //TDD Style
            assert.equal(actName,expName)
            assert.notequal(actName,expName)
        })

    })
    

    })