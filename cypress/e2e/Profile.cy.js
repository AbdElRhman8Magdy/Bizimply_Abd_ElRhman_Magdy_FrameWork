import LoginPage from "../Pages/LoginPage"
describe('Profile TestCases', () => {
    it("Navigate to Profile Page", () => {

        cy.get('@user').then((user) => {
            new LoginPage()
                .load()
                .login(user.email, user.password)
                .userIDFromPageURL(user.userid)
                .NavigateToProfilePage()
                .getUserID(user.userid)
        })
    })

    it("Navigate to Profile Page", () => {

        cy.get('@user').then((user) => {
            new LoginPage()
                .load()
                .login(user.email, user.password)
                .NavigateToProfilePage()
        })
    })
    it("Update Profile chaining", () => {

        cy.get('@user').then((user) => {
            new LoginPage()
                .load_Login(user.email, user.password)
                .NavigateToProfilePage()
                .updateTitle(user.title)
                .updatePhoneNo(user.phone)
                .updateBirthDate(user.birthDate)
                .clickEmpty()
                .updateEthnic(user.ethnic)
                .updatePassport(user.passport)
                .updateCountry(user.country)
                .getPassportStatus(user.passportColor)
                .getSuccessMessage()
        })
    })
    it("E2E", () => {

        cy.get('@user').then((user) => {
            new LoginPage()
                .load_Login(user.email, user.password)
                .NavigateToProfilePage()
                .E2E(user.userid, user.title, user.phone, user.birthDate, user.ethnic, user.passport, user.country, user.passportColor)
        })
    })
})

