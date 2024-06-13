import userData from "../fixtures/userData.json"
import LoginPage from "../pages/loginPage"
import DashboardPage from "../pages/dashboardPage"
import MenuPage from "../pages/menuPage"
import MyInfoPage from "../pages/myInfoPage"

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myinfoPage = new MyInfoPage()

describe('My Info - Orange HRM Tests', () => {

  it('My info page - success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithCredentials(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.dashboardConfirm()
    menuPage.clickOnMyInfo()
    myinfoPage.myInfoFillAndSave('testName', 'testMName', 'testLName', 'testNick')
  })

})