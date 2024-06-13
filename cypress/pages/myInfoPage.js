class MyInfoPage {

    selectorsList() {
        const selectors = {
            firstNameField : "[name='firstName']",
            middleNameField : "[name='middleName']",
            lastNameField : "[name='lastName']",
            genericField : ".oxd-input--active",
            calendarGrid : ".oxd-calendar-dates-grid",
            selectField: ".oxd-select-text",
            genericDropdown : ".oxd-select-dropdown",
            submitButton : "[type='submit']",
            myinfoSaveConfirm: ".oxd-toast-close"
        }
        return selectors
    }

    myInfoFillAndSave(firstName, middleName, lastName, nickName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().middleNameField).clear().type(middleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
        cy.get(this.selectorsList().genericField).eq(3).clear().type(nickName)
        cy.get(this.selectorsList().genericField).eq(4).clear().type("01")
        cy.get(this.selectorsList().genericField).eq(5).clear().type("02")
        cy.get(this.selectorsList().genericField).eq(6).click()
        cy.get(this.selectorsList().calendarGrid).contains("15").click()
        cy.get(this.selectorsList().selectField).eq(0).click()
        cy.get(this.selectorsList().genericDropdown).click()
        cy.get(this.selectorsList().selectField).eq(1).click()
        cy.get(this.selectorsList().genericDropdown).click()
        cy.get(this.selectorsList().genericField).eq(7).click()
        cy.get(this.selectorsList().calendarGrid).contains("10").click()
        cy.get(this.selectorsList().submitButton).eq(0).click()
        cy.get(this.selectorsList().myinfoSaveConfirm)
    }
}

export default MyInfoPage