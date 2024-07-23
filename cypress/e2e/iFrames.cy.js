import 'cypress-iframe'

describe("handling iframes", ()=>{

    it("Approach1", ()=>{

        cy.visit("https://the-internet.herokuapp.com/tinymce")
        const iframe =  cy.get("#mce_0_ifr")
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);

        iframe.clear().type("Welcome {cmd+a}")
        cy.get("[aria-label='Bold']").click()
    })

    it("Approach2 - by using custom commands", ()=>{

        cy.visit("https://the-internet.herokuapp.com/tinymce")
        cy.getIframe("#mce_0_ifr").clear().type("Welcome {cmd+a}")  //getIframe() - calling the custom command that is created in commands.js
        cy.get("[aria-label='Bold']").click()
    })

    it.only("Approach3 - cypress-iframe plugin", ()=>{

        cy.visit("https://the-internet.herokuapp.com/tinymce")
        cy.frameLoaded('#mce_0_ifr') // This will load the frame

        cy.iframe("#mce_0_ifr").clear().type("welcome {cmd+a}")

    })
})