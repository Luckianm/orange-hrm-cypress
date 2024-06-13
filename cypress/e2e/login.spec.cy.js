import userData from "../fixtures/userData.json"
import LoginPage from "../pages/loginPage"
import DashboardPage from "../pages/dashboardPage"
import MenuPage from "../pages/menuPage"
import MyInfoPage from "../pages/myInfoPage"

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myinfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {

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

  it('My info page - success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithCredentials(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.dashboardConfirm()
    menuPage.clickOnMyInfo()
    myinfoPage.myInfoFillAndSave()
  })

})