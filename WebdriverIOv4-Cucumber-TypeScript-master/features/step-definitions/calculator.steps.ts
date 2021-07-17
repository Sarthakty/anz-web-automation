import { Given, When, Then, And } from 'cucumber';
import calculatorPage from './../pages/CalculatorPage';
import { expect } from 'chai';

Given('I am on the calculator page', function() {
    calculatorPage.open();
});

When('I select application type as single', function() {
    calculatorPage.selectSingleAsApplicationType();
});

When('I select number of dependents as zero', function() {
    calculatorPage.selectZeroNumberOfDependents();
});

When('I select property type as home to live in', function() {
    calculatorPage.selectHomeToLiveIn();
});

When('I enter {int} $ as the income before tax', function(income) {
    calculatorPage.enterIncome(income);
});

When('I enter {int} $ as the other income', function(otherIncome) {
    calculatorPage.enterOtherIncome(otherIncome);
});

When('I enter {int} $ as the living expenses', function(livingExpenses) {
    calculatorPage.enterLivingExpenses(livingExpenses);
});

When('I enter {int} $ as the home loan repayment', function(homeLoanRepay) {
    calculatorPage.enterHomeLoanRepayment(homeLoanRepay);
});

When('I enter {int} $ as the other loan repayment', function(otherLoanRepay) {
    calculatorPage.enterOtherLoanRepayment(otherLoanRepay);
});

When('I enter {int} $ as the other commitment', function(otherCommitment) {
    calculatorPage.enterOtherCommitment(otherCommitment);
});

When('I enter {int} $ as the total credit card limits', function(creditCardLimit) {
    calculatorPage.enterTotalCreditCardLimits(creditCardLimit);
});

When('I select workout how much i could borrow button', function() {
    calculatorPage.clickOnHowMuchICouldBorrow();
});

Then('I should see the correct estimated borrow amount', function() {
    expect("$479,000").equals(calculatorPage.estimateBorrowing(),"estimate not matched")
});

When('I click on start over button', function() {
    calculatorPage.selectStartOverButton();
});

Then('I should see the form is cleared', function() {
    expect("0").equals(calculatorPage.getIncomeValue(),"income filed not cleared");
    expect("0").equals(calculatorPage.getOtherIncomeValue(),"other income filed not cleared");
    expect("0").equals(calculatorPage.getLivingExpensesValue(),"living expenses filed not cleared");
    expect("0").equals(calculatorPage.getCurrentHomeLoanRepaymentValue(),"current home loan repay filed not cleared");
    expect("0").equals(calculatorPage.getOtherLoanRepaymentValue(),"other loan repay filed not cleared");
    expect("0").equals(calculatorPage.getOtherCommitmentValue(),"other commitment filed not cleared");
    expect("0").equals(calculatorPage.getTotalCreditCardsLimitValue(),"credit cards limit filed not cleared");
});

Then('I should see the proper borrow error message', function() {
    const BORROW_ERROR_MESSAGE = "Based on the details you've entered, we're unable to give you an estimate of your borrowing power with this calculator. For questions, call us on 1800 035 500."
    expect(BORROW_ERROR_MESSAGE).equals(calculatorPage.getBorrowErrorMessageText(),"Borrow error message not matched")
});