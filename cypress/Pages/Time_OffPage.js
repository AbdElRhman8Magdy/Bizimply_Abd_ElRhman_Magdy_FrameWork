class TimeOffPage {
    get user_ID() {
        return cy.url()
    }
    get addTimeOffBTN() {
        return cy.get('#new_time_off_button')
    }
    get backToTimeOffBTN() {
        return cy.get('#employee_time_off_button')
    }
    get timeOffType() {
        return cy.get('.from_new')
    }
    get timeOffOther() {
        return cy.get('.other_choice_msg')
    }
    get holStrtOn() {
        return cy.get('#employee_time_off_request_start_date')
    }
    get holEndOn() {
        return cy.get('#employee_time_off_request_end_date')
    }
    get holDesc() {
        return cy.get('#employee_time_off_request_reason')
    }
    get fileUpload() {
        return cy.get('#time-off-fileupload-btn')
    }
    get selectFileUpload() {
        return cy.get('input[type=file]')
    }
    get addedFileName() {
        return cy.get('#document_1_filename')
    }
    get submitBTN() {
        return cy.get('.approve')
    }
    get submitMSG() {
        return cy.get('#ui-id-1')
    }
    get confrimSubmitMSG() {
        return cy.get('#ok-button-time-off')
    }
    get confrimSubmitAlert() {
        return cy.get('.alert')
    }
    get addedTimeDesc() {
        return cy
    }
    getUserID(userID) {
        this.user_ID.should('contain', userID)
        this.user_ID.should('contain', 'time_off_requests')
        return this
    }
    GoToTimeOffRequest() {
        this.addTimeOffBTN.click()
        return this
    }
    AssertTimeOffReqPage() {
        this.backToTimeOffBTN.should('contain.text', 'Back to Time Off')
        return this
    }
    TimeOffType(Type) {
        this.timeOffType.select(Type)
        return this
    }
    TimeOffMessage(TypeMessage) {
        this.timeOffOther.should('contain.text', TypeMessage)
        return this
    }
    HollyStrtOn2nd(day) {
        this.holStrtOn.type(day)
        return this
    }
    HollyEndOn7nd(day) {
        this.holEndOn.type(day)
        return this
    }
    HollyDesc(text) {
        this.holDesc.type(text)
        return this
    }
    FileUpload() {
        this.fileUpload.click()
        return this
    }
    SelectFileUpload(file) {
        this.selectFileUpload.selectFile(file, { force: true })
        return this
    }
    CheckAddedFile(file) {
        this.addedFileName.should('contain.text', file)
        return this
    }
    Submit() {
        this.submitBTN.click()
        return this
    }
    SubmitMSG(TimeOffMSG) {
        this.submitMSG.should('contain.text', TimeOffMSG)
        return this
    }
    ConfirmSubmitMSG() {
        this.confrimSubmitMSG.click()
        return this
    }
    ConfirmSubmitAlert() {
        this.confrimSubmitAlert.click()
        return this
    }
    ConfirmAddedDesc(text) {
        this.addedTimeDesc.contains(text)
        return this
    }
    E2ETimeOff(userID, Type, TypeMessage, day, text, file, TimeOffMSG) {
        this.user_ID.should('contain', userID)
        this.user_ID.should('contain', 'time_off_requests')
        this.addTimeOffBTN.click()
        this.backToTimeOffBTN.should('contain.text', 'Back to Time Off')
        this.timeOffType.select(Type)
        this.timeOffOther.should('contain.text', TypeMessage)
        this.holStrtOn.type(day)
        this.holEndOn.type(day)
        this.holDesc.type(text)
        this.fileUpload.click()
        this.selectFileUpload.selectFile(file, { force: true })
        this.addedFileName.should('contain.text', file)
        this.submitBTN.click()
        this.submitMSG.should('contain.text', TimeOffMSG)
        this.confrimSubmitMSG.click()
        this.confrimSubmitAlert.click()
        this.addedTimeDesc.contains(text)
        return this
    }
}
export default TimeOffPage