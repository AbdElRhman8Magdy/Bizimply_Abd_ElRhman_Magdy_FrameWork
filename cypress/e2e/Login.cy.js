/// <reference types="cypress" />
import LoginPage from "../Pages/LoginPage"
let cookieValue
it("should be able to Login Successfully", () => {

    cy.get('@user').then((user) => {
        new LoginPage()
            .load()
            .login(user.email, user.password)
            .userIDFromPageURL(user.userid)

    })
})