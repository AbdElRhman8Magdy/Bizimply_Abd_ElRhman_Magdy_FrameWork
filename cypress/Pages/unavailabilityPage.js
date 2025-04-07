class UnavailabilityPage {
    get UnavaBTN() {
        return cy.get('.btn')
    }
    get BackFromReq() {
        return cy.contains('Back to Unavailabilities')
    }
    get PrtDayBox() {
        return cy.get('#employee_unavailability_all_day_false')
    }
    get startFrom() {
        return cy.get('#employee_unavailability_start_time_before_conversion')
    }
    get endAt() {
        return cy.get('#employee_unavailability_end_time_before_conversion')
    }
    get KindSel() {
        return cy.get('#employee_unavailability_kind')
    }
    get daySatBox() {
        return cy.get('#employee_unavailability_work_week_attributes_saturday')
    }
    get dayMonBox() {
        return cy.get('#employee_unavailability_work_week_attributes_monday')
    }
    get dayFriBox() {
        return cy.get('#employee_unavailability_work_week_attributes_friday')
    }
    get dayWedBox() {
        return cy.get('#employee_unavailability_work_week_attributes_wednesday')
    }
    get strsOnDate() {
        return cy.get('#employee_unavailability_start_date_before_conversion')
    }
    get endsOnDateBox() {
        return cy.get('#employee_unavailability_open_ended_true')
    }
    get endOnDate() {
        return cy.get('#employee_unavailability_end_date_before_conversion')
    }
    get note() {
        return cy.get('#employee_unavailability_note')
    }
    get subBTN() {
        return cy.get('[type="submit"]')
    }
    get alertMSG() {
        return cy.get('.alert')
    }
    get addedDesc() {
        return cy
    }
    get SubmitMsg() {
        return cy.get('#ui-id-1')
    }
    get conBTN() {
        return cy.get('#ok-button-unavailability')
    }
    CreateUnavReq() {
        this.UnavaBTN.contains('Add Unavailability').click() //.debug().pause()
        return this
    }
    CheckPartDay() {
        this.PrtDayBox.check({ force: true })
        return this
    }
    AddStartTime(time) {
        this.startFrom.clear()
        this.startFrom.type(time)
        return this
    }
    AddEndTime(time) {
        this.endAt.clear()
        this.endAt.type(time)
        return this
    }
    CheckBackBTN() {
        this.BackFromReq.should('be.visible')
        return this
    }
    SelKind(Kind) {
        this.KindSel.select(Kind)
        return this
    }
    DayCheck() {
        this.dayFriBox.check()
        this.dayMonBox.check()
        this.dayWedBox.check()
        this.daySatBox.check()
        return this
    }
    AddStartDate(todayDate) {
        this.strsOnDate.clear()
        this.strsOnDate.type(todayDate).blur()
        return this
    }
    AddEndtDate(day) {
        this.endsOnDateBox.check({ force: true })
        this.endOnDate.clear()
        this.endOnDate.type(day).blur()
        
        return this
    }
    SetPartDay(time, time2) {
        // this.PrtDayBox.check({ force: true })   // as by ading blur on callender past step
        this.startFrom.clear({ force: true })
        this.startFrom.type(time)
        this.endAt.clear({ force: true })
        this.endAt.type(time2)
        return this
    }
    AddDesc(describe) {
        this.note.type(describe)
        return this
    }
    ClieckSubmit(text) {
        this.subBTN.click()
        this.SubmitMsg.contains(text)
        this.conBTN.click()
        return this
    }
    CheckAddedReq(desc) {
        this.alertMSG.should('be.visible') //.pause()
        this.addedDesc.contains(desc)
        return this
    }
    E2Eunavailability(time, time1, Kind, todayDate, day, time3, time2, describe, conMSg, desc) {
        this.UnavaBTN.contains('Add Unavailability').click()
        this.PrtDayBox.check({ force: true })
        this.startFrom.clear()
        this.startFrom.type(time)
        this.endAt.clear()
        this.endAt.type(time1)
        this.BackFromReq.should('be.visible')
        cy.screenshot
        this.KindSel.select(Kind)
        this.dayFriBox.check()
        this.dayMonBox.check()
        this.dayWedBox.check()
        this.daySatBox.check()
        this.strsOnDate.clear()
        this.strsOnDate.type(todayDate)
        this.endsOnDateBox.check({ force: true })
        this.endOnDate.clear()
        this.endOnDate.type(day)
        this.PrtDayBox.check({ force: true })
        this.startFrom.clear({ force: true })
        this.startFrom.type(time3)
        this.endAt.clear({ force: true })
        this.endAt.type(time2)
        this.note.type(describe)
        cy.screenshot
        this.subBTN.click()
        this.SubmitMsg.contains(conMSg)
        this.conBTN.click()
        this.alertMSG.should('be.visible')
        cy.screenshot
        this.addedDesc.contains(desc)
        return this
    }
}
export default UnavailabilityPage