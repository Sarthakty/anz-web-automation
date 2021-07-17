import { expect } from 'chai';

class CalculatorPage {

    anzUrl : string = 'https://www.anz.com.au/personal/home-loans/calculators-tools/much-borrow/#';
    singleApplicationTypeOption : string = '#application_type_single';
    numberOfDependents : string = '//select[@title="Number of dependants"]';
    homeToLiveIn : string = '#borrow_type_home';
    income : string = '//label[contains(text(),"Your income (before tax)")]/../div/input';
    otherIncome : string = '//label[contains(text(),"Your other income")]/../div/input';
    livingExpenses : string = '//label[contains(text(),"Living expenses")]/../div/input';
    currentHomeLoanRepayment : string = '//label[contains(text(),"Current home loan repayments")]/../div/input';
    otherLoanRepayment : string = '#otherloans';
    otherCommitments : string = '//label[contains(text(),"Other commitments")]/../div/input';
    totalCreditCardLimits : string = '//label[contains(text(),"Total credit card limits")]/../div/input';
    borrowCalculatorButton : string = '#btnBorrowCalculater';
    borrowingEstimateText : string = '//span[@id="borrowResultTextAmount"]';
    startOverButton: string = '//button[text()="Start over"]';
    borrowErrorText: string = '.borrow__error__text';


    open(): void {
        browser.url(this.anzUrl);
        expect(browser.getTitle()).contains("ANZ","Title not found")
    }

    selectSingleAsApplicationType(): void {
        browser.element(this.singleApplicationTypeOption).click();
    }

    selectZeroNumberOfDependents(): void {
        browser.element(this.numberOfDependents).selectByVisibleText("0");
    }

    selectHomeToLiveIn(): void {
        browser.element(this.homeToLiveIn).click();
    }

    enterIncome(incomeAmount): void {
        browser.element(this.income).setValue(incomeAmount);
    }

    enterOtherIncome(otherIncomeAmount): void {
        browser.element(this.otherIncome).setValue(otherIncomeAmount);
    }

    enterLivingExpenses(livingExpensesAmount): void {
        browser.element(this.livingExpenses).setValue(livingExpensesAmount);
    }

    enterHomeLoanRepayment(homeLoanRepaymentAmount): void {
        browser.element(this.currentHomeLoanRepayment).setValue(homeLoanRepaymentAmount);
    }

    enterOtherLoanRepayment(otherLoanRepaymentAmount): void {
        browser.element(this.otherLoanRepayment).setValue(otherLoanRepaymentAmount);
    }

    enterOtherCommitment(otherCommitmentAmount): void {
        browser.element(this.otherCommitments).setValue(otherCommitmentAmount);
    }

    enterTotalCreditCardLimits(creditCardLimitsAmount): void {
        browser.element(this.totalCreditCardLimits).setValue(creditCardLimitsAmount);
    }

    clickOnHowMuchICouldBorrow(): void {
        browser.element(this.borrowCalculatorButton).click();
    }

    estimateBorrowing(): string {
        return browser.element(this.borrowingEstimateText).getText();
    }

    selectStartOverButton(): void {
        browser.element(this.startOverButton).click();
    }

    getIncomeValue(): string {
        return browser.element(this.income).getValue();
    }

    getOtherIncomeValue(): string {
        return browser.element(this.otherIncome).getValue();
    }

    getLivingExpensesValue(): string {
        return browser.element(this.livingExpenses).getValue();
    }

    getCurrentHomeLoanRepaymentValue(): string {
        return browser.element(this.currentHomeLoanRepayment).getValue();
    }

    getOtherLoanRepaymentValue(): string {
        return browser.element(this.otherLoanRepayment).getValue();
    }

    getOtherCommitmentValue(): string {
        return browser.element(this.otherCommitments).getValue();
    }

    getTotalCreditCardsLimitValue(): string {
        return browser.element(this.totalCreditCardLimits).getValue();
    }

    getBorrowErrorMessageText(): string {
        return browser.element(this.borrowErrorText).getText();
    }

}
const  calculatorPage = new CalculatorPage();
export default calculatorPage;