import userData from "../fixtures/userData.json"
import LoginPage from "../pages/loginPage"
import DashboardPage from "../pages/dashboardPage"
import MenuPage from "../pages/menuPage"
import MyInfoPage from "../pages/myInfoPage"

var Chance = require('chance')

var chance = new Chance();
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
    myinfoPage.fillPersonalDetails(chance.first(), chance.last(), chance.last())
    myinfoPage.fillEmployeeDetails(chance.string({ length: 5 }), chance.string({ length: 5 }), chance.integer())
    myinfoPage.fillStatusDetails()
    myinfoPage.saveForm()
  })

})