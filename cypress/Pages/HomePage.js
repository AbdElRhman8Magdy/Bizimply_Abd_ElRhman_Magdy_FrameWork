import ProfilePage from "./ProfilePage"
import TimeOffPage from "./Time_OffPage"

class HomePage {
    get userIdFromURL() {
        return cy.url()
    }
    get profilePageIcon() {
        return cy.get('.mainnav')
            .children().contains("Your Profile")
    }
    get timeOffBTN() {
        return cy.get('.mainnav')
            .children().contains("Time Off")
    }


    userIDFromPageURL(userID) {
        this.userIdFromURL.should('contain', userID)
        return this
    }
    NavigateToProfilePage() {
        this.profilePageIcon.click()
        return new ProfilePage()
    }
    NavigateToTimeOf() {
        this.timeOffBTN.click()
        return new TimeOffPage()
    }
}
export default HomePage