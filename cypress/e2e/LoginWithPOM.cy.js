import Login from "../PageObjects/LoginPage.js" //.js is optional extension
describe('pom',()=>{
    //using POM design pattern
    it('LoginTest',()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
       const ln=new Login()
       ln.setUserName("Admin")
       ln.setPassword("admin123")
       ln.clickSubmit()
       ln.verifyLogin()
      
    })

        //using POM with fixtures design pattern
    it.only('LoginTest',()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.fixture('orangeHRM.json').then((data)=>{
            const ln=new Login()
            ln.setUserName(data.username)
            ln.setPassword(data.password)
            ln.clickSubmit()
            ln.verifyLogin()
           
        })

    })
})