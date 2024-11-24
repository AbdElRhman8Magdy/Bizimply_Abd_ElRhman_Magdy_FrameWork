import LoginPage from "../Pages/LoginPage"

it("Navigate to Profile Page", () => {
    
        cy.get('@user').then((user)=>{
    new LoginPage()
    .load()
    .login(user.email,user.password)
    .userIDFromPageURL(user.userid)
    .NavigateToProfilePage()
    
    
        })    
    
  })