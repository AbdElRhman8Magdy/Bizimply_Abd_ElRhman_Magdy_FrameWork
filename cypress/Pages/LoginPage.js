import { th } from "@faker-js/faker"
import HomePage from "./HomePage"


class LoginPage {
    // locators / elements

    get emailInput() {
        return cy.get('#user_user_name')
    }

    get passwordInput() {
        return cy.get('#user_password')
    }
    get rememberMe() {
        return cy.get('#user_remember_me')
    }
    get submitBtn() {
        return cy.get('#sign-in-button')
    }




    //Method

    load() {
        cy.visit('/')
        return this
    }

    login(email, password) {

        this.emailInput.type(email)
        this.passwordInput.type(password)
        this.rememberMe.click()
        this.submitBtn.click()
        return new HomePage()
    }
    load_Login(email, password) {
        cy.visit('/')
        this.emailInput.type(email)
        this.passwordInput.type(password)
        this.rememberMe.click()
        this.submitBtn.click()
        return new HomePage()
    }
}

export default LoginPage