import userData from "../fixtures/userData.json"
import selectorsList from "../fixtures/selectorsList.json"

describe('Orange HRM Tests user', () => {

  it('Login - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type("firstName")
    cy.get(selectorsList.middleNameField).clear().type("middleName")
    cy.get(selectorsList.lastNameField).clear().type("lastName")
    cy.get(selectorsList.genericField).eq(3).clear().type("Nickname")
    cy.get(selectorsList.genericField).eq(4).clear().type("01")
    cy.get(selectorsList.genericField).eq(5).clear().type("02")
    cy.get(selectorsList.genericField).eq(6).click()
    cy.get(selectorsList.calendarGrid).contains("15").click()
    cy.get(selectorsList.selectField).eq(0).click()
    cy.get(selectorsList.genericDropdown).click()
    cy.get(selectorsList.selectField).eq(1).click()
    cy.get(selectorsList.genericDropdown).click()
    cy.get(selectorsList.genericField).eq(7).click()
    cy.get(selectorsList.calendarGrid).contains("10").click()
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('.oxd-toast-close')
  })
})