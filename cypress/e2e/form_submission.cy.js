import { GoogleDoc } from "./GoogleDoc"

const googledoc = new GoogleDoc()
describe('Submit the Google Form', () => {
    var name = 'Test'
    beforeEach(() => {
        cy.visit('https://docs.google.com/forms/d/e/1FAIpQLScPfEbpaoUu3WVwSDM9wIFX5uo1XQ1xpuHNtP7cF_rkR-o8Zg/viewform')
    })

    it('Submit Form', () => {
        cy.get('.F9yp7e').should('have.text','Health Survey')
        googledoc.enterName(name);
        googledoc.selectAge();
        googledoc.selectExercise();
        googledoc.submitForm();
        googledoc.verifySubmit();
    })

    it('Submit Form Without name', () => {
        googledoc.selectAge();
        googledoc.selectExercise()
        googledoc.submitForm()
        googledoc.verifySubmit();
    })

    it('Submit Form Without age', () => {
        googledoc.enterName(name)
        googledoc.selectExercise()
        googledoc.submitForm()
        googledoc.verifyErrorMsg()
    })

    it('Submit Form Without exercise', () => {
        googledoc.enterName(name)
        googledoc.selectAge()
        googledoc.submitForm()
        googledoc.verifyErrorMsg()
    })

    it('Clear Form', () => {
        googledoc.enterName(name)
        cy.get('.whsOnd').should('have.value', name)
        googledoc.clearForm()
        cy.get('.whsOnd').should('have.value', '')
    })
})
