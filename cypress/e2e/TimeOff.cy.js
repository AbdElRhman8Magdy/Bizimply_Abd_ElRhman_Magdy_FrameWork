import { faker } from '@faker-js/faker';
import LoginPage from "../Pages/LoginPage"

describe('Profile TestCases', () => {

    const dayjs = require('dayjs')
    const todaysDate = dayjs().format('DD/MM/YYYY')
    const daydate2 = dayjs().add(2, 'day').format('DD/MM/YYYY')
    const daydate7 = dayjs().add(7, 'day').format('DD/MM/YYYY')
    const desc = faker.lorem.sentence(5)
    const Fname = faker.person.firstName()

    Cypress.dayjs = dayjs
    it("Navigate to Timee-Off Page", () => {

        cy.get('@user').then((user) => {
            new LoginPage()
                .load_Login(user.email, user.password)
                .userIDFromPageURL(user.userid)
                .NavigateToTimeOf()
                .getUserID(user.userid)
        })
    })
    it.only("REquest New Timee-Off Page", () => {
        cy.fixture("testdata").as('user')
        cy.get('@user').then((user) => {
            new LoginPage()
                .load_Login(user.email, user.password)
                .userIDFromPageURL(user.userid)
                .NavigateToTimeOf()
                //.getUserID(user.userid) // TO ASSERT  PAGE TITILE 
                .AsserrtPageTitle(user.TimeOffTilte)
                .GoToTimeOffRequest()
                .AssertTimeOffReqPage()
                .TimeOffType(user.timeOffType)
                //.TimeOffMessage(user.timeTypeMessage)
                .HollyStrtOn2nd(daydate2)
                .HollyEndOn7nd(daydate7)
                .HollyDesc(desc)
                .FileUpload()
                .SelectFileUpload(user.file)
                .CheckAddedFile(user.file)
                .Submit()
                .SubmitMSG(user.timeOffMSG)
                .ConfirmSubmitMSG()
                .ConfirmSubmitAlert()
                .ConfirmAddedDesc(desc)
        })
    })
    // it("E2E REquest Timee-Off Page", () => {

    //     cy.get('@user').then((user) => {
    //         new LoginPage()
    //             .load_Login(user.email, user.password)
    //             .NavigateToUnavailability()
    //             .E2Eunavailability(user.userid, user.timeOffType, user.timeTypeMessage, daydate2, daydate7, user.file, user.timeOffMSG, desc)

    //     })
    // })

    it("E2E REquest Timee-Off Page", () => {

        cy.get('@user').then((user) => {
            new LoginPage()
                .load_Login(user.email, user.password)
                .NavigateToTimeOf()
                .E2ETimeOff(user.userid, user.timeOffType, user.timeTypeMessage, daydate2, daydate7, desc, user.file, user.timeOffMSG, user.TimeAlertMsg, desc)
        })
    })
})
