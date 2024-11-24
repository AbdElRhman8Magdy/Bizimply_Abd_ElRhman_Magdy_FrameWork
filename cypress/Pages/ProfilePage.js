class ProfilePage{
  get user_ID(){
      return cy.url()
  }
  get title(){
    return cy.get('#select2-employee_title-container')
  }
  get titleSearch(){
    return cy.get('.select2-search__field')
  }
  get phoneNo(){
    return cy.get('#employee_phone_number')
  }
  get birthDate(){
    return cy.get('#employee_date_of_birth')
  }
  get empty(){
    return cy.get('.navbar')
  }
  get Ethinic(){
    return cy.get('#select2-employee_ethnicity-container')
  }
  get passport(){
    return cy.get('#employee_passport_expiry')
  }
  get country(){
    return cy.get('#employee_address_record_attributes_country-button')
  }
  get PassportStatus(){
    return cy.get('.passport-status')
  }
  get alert(){
    return cy.get('.alert')

  }
  
  getUserID(userID){
      this.user_ID.should('contain',userID)
      this.user_ID.should('contain','personal')
      return this
  }
  
  

  updateTitle(Title){
    this.title.click()
    this.titleSearch.clear()
    this.titleSearch.type(Title).type('{enter}')
    return this
  }
  updatePhoneNo(Phone){
    this.phoneNo.clear()
    this.phoneNo.type(Phone)
    return this
  }
  updateBirthDate(Birth){
    this.birthDate.clear()
    this.birthDate.type(Birth)
    return this
  }
  clickEmpty(){
    this.empty.click()
    return this
  }
  
  updateEthnic(Ethinic){
    this.Ethinic.click({force:true}).type('{selectall}{del}').type(Ethinic+'{downArrow}{enter}')
    return this
  } 
  updatePassport(Passport){
    this.passport.type('{selectall}{del}').type(Passport+'{enter}')
    return this
  }  
  updateCountry(Country){
    this.country.click().type('{selectall}{del}').type(Country+'{downArrow}{enter}')
    return this
  } 
  getPassportStatus(_passportColor){
    this.PassportStatus.should('be.visible').should('have.css',
        'background-color',
        _passportColor)
    return this
  }

  getSuccessMessage(){
    this.alert.should('contain.text','Your profile')
    return this
  }

  E2E(userID,Title,Phone,Birth,Ethinic,Passport,Country,_passportColor){
    this.user_ID.should('contain',userID)
    this.user_ID.should('contain','personal')
    this.title.click()
    this.titleSearch.clear()
    this.titleSearch.type(Title).type('{enter}')
    this.phoneNo.clear()
    this.phoneNo.type(Phone)
    this.birthDate.clear()
    this.birthDate.type(Birth)
    this.Ethinic.click({force:true}).type('{selectall}{del}').type(Ethinic+'{downArrow}{enter}')
    this.passport.type('{selectall}{del}').type(Passport+'{enter}')
    this.country.click().type('{selectall}{del}').type(Country+'{downArrow}{enter}')
    this.PassportStatus.should('be.visible').should('have.css',
        'background-color',
        _passportColor)
    this.alert.should('contain.text','Your profile')
    return this
  }
  
  
  }
  export default ProfilePage