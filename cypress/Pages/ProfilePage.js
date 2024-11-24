class ProfilePage{
  get userIdFromURL(){
      return cy.url()
  }
  
  getUserID(userID){
      this.userIdFromURL.should('contain',userID)
      return this
  }
  }
  export default ProfilePage