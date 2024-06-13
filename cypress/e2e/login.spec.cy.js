import userData from "../fixtures/userData.json"
import LoginPage from "../pages/loginPage"
import DashboardPage from "../pages/dashboardPage"

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()


describe('Login - Orange HRM Tests', () => {

  it('Login - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithCredentials(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.dashboardConfirm()
  })

  it('Login - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithCredentials(userData.userFail.username, userData.userFail.password)
    loginPage.wrongCredentialAlert()
  })

})