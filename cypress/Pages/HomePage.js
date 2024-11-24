import ProfilePage from "./ProfilePage"

class HomePage {
    get userIdFromURL() {
        return cy.url()
    }
    get profilePageIcon() {
        return cy.get('.mainnav')
            .children().contains("Your Profile")
    }

    userIDFromPageURL(userID) {
        this.userIdFromURL.should('contain', userID)
        return this
    }
    NavigateToProfilePage() {
        this.profilePageIcon.click()
        return new ProfilePage()
    }
}
export default HomePage