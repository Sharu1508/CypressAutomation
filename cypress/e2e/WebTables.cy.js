
describe('Handle Tables' , () =>{

    beforeEach('Login',()=>{

        cy.visit("https://demo-opencart.com/admin/index.php?route=common/login")
        cy.get("#input-username").type("demo")
        cy.get("#input-password").type("demo")
        cy.get("button[type='submit']").click()
        cy.get(".btn-close").click

        //customers ->customers
        cy.get("#menu-customer>a").click() //customer main menu
        cy.get("#menu-customer>ul>li:first-child").click() // customer sub child
        

    })

    it('Check Number Rows & Columns' , () =>{
        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length','10')
        cy.get("table[class='table table-bordered table-hover']>thead>tr").should('have.length','7')

    })

    it.('Check specific number rows & columns' , () =>{
        cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(5)>td:nth-child(3)")
        .contains("prasad123@spine.co.in")
        
    })

    it('Read all the rows & columns data in the first page' , () =>{
        cy.get("table[class='table table-bordered table-hover']>tbody>tr")
           .each(($row, index, $rows)=>{
            cy.wrap($row).within(()=>{

                cy.get("td").each(($col, index,$cols)=>{

                    cy.log($col.text())
                })
            })

           })
        
    })

    it.only('Pagination' , () =>{

        cy.get(".col-sm-6.text-end").then((e)=>{

            let mytext=e.text() //Showing 1 to 10 of 558 (559 Pages)
            totalPages=mytext.substring(mytext.indexOf("(")+1,mytext.indexOf("Pages")-1)
            cy.log("Total number of pages in a table=====>"+totalPages)
        })
    })
})