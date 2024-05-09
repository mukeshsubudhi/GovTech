export class GoogleDoc {

    enter_name = '.whsOnd'
    select_age = '#i12 > .vd3tt > .AB7Lab'
    dropdown = '.KKjvXb'
    select_yes = "div[data-value='Yes'][role='option']"
    submit_form = '.lRwqcd > .uArJ5e > .l4V7wb'
    confirm_msg = '.vHW8K'
    error_msg = '.RHiWt'
    clear_form = '.nYdzXd > .uArJ5e > .l4V7wb > .NPEfkd'

    enterName(name) {
        cy.get(this.enter_name).type(name)
    }

    selectAge() {
        cy.get(this.select_age).click()
    }

    selectExercise() {
        cy.get(this.dropdown).click()
        cy.wait(2000)
        cy.get(this.select_yes).click()
    }

    submitForm() {
        cy.get(this.submit_form).click()
    }

    verifySubmit() {
        cy.get(this.confirm_msg).should('contain', 'Your response has been recorded.')
        cy.url().should('contain', 'formResponse')
    }

    verifyErrorMsg() {
        cy.get(this.error_msg).should('contain', 'This is a required question')
    }

    clearForm() {
        cy.get(this.clear_form).click()
        cy.get('.OE6hId > [data-id="EBS5u"] > .l4V7wb > .NPEfkd').click()
        cy.wait(10000)
    }
}