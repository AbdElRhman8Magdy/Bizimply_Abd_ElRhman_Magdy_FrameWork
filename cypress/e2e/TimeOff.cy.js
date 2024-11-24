import { faker } from '@faker-js/faker';
import LoginPage from "../Pages/LoginPage"

describe('Profile TestCases', () => {

    const dayjs = require('dayjs')
    const todaysDate = dayjs().format('DD/MM/YYYY')
    const daydate2 = dayjs().add(2, 'day').format('DD/MM/YYYY')
    const daydate7 = dayjs().add(7, 'day').format('DD/MM/YYYY')
    const desc = faker.lorem.sentence(5)
    Cypress.dayjs = dayjs
    it("Navigate to Timee-Off Page", () => {

        cy.get('@user').then((user) => {
            new LoginPage()
                .load()
                .login(user.email, user.password)
                .userIDFromPageURL(user.userid)
                .NavigateToProfilePage()
                .getUserID(user.userid)
        })
    })
})
