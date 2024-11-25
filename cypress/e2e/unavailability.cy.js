import { faker } from '@faker-js/faker';
import LoginPage from "../Pages/LoginPage"

describe('Profile TestCases', () => {

    const dayjs = require('dayjs')
    const todaysDate = dayjs().format('DD/MM/YYYY')
    const daydate3 = dayjs().add(3, 'day').format('DD/MM/YYYY')
    const sTime = dayjs().format('HH:mm')
    const desc = faker.lorem.sentence(5)

    Cypress.dayjs = dayjs
    it("Navigate to unavailability ", () => {

        cy.get('@user').then((user) => {
            new LoginPage()
                .load_Login(user.email, user.password)
                .userIDFromPageURL(user.userid)
                .NavigateToUnavailability()
                .CreateUnavReq()
                .CheckPartDay()
                .AddStartTime(sTime)
        })
    })
    it("REquest New unavailability ", () => {

        cy.get('@user').then((user) => {
            new LoginPage()
                .load_Login(user.email, user.password)
                .userIDFromPageURL(user.userid)
                .NavigateToUnavailability()
                .CreateUnavReq()
                .CheckBackBTN()
                .CheckPartDay()
                .AddStartTime(sTime)
                .AddEndTime(sTime)
                .SelKind(user.Kind)
                .DayCheck()
                .AddStartDate(todaysDate)
                .AddEndtDate(daydate3)
                .SetPartDay(user.SartTime,user.EndTime)
                .AddDesc(desc)
                .ClieckSubmit(user.unavconf)
                .CheckAddedReq(desc)

        })
    })
    it("E2E REquest ", () => {

        cy.get('@user').then((user) => {
            new LoginPage()
                .load_Login(user.email, user.password)
                .NavigateToUnavailability()
                .E2Eunavailability(sTime,sTime,user.Kind,todaysDate,daydate3,user.SartTime,user.EndTime,desc,user.unavconf,desc)

        })
    })
})
