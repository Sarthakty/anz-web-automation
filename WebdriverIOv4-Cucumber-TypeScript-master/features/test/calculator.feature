Feature: Verify Borrow calculator functionality

  As a user on the calculator page
  I provide all the necessary inputs
  I want to see the estimated borrow amount
  I click on start over
  I want to see the form cleared
  I provide only living expense field and other fields empty
  I want to see the borrow error message

  Background:
    Given I am on the calculator page

  Scenario Outline: Performing an estimate borrow operation with the help of calculator

    When  I select application type as single
    When  I select number of dependents as zero
    When  I select property type as home to live in
    When  I enter <income> $ as the income before tax
    When  I enter <otherIncome> $ as the other income
    When  I enter <livingExpenses> $ as the living expenses
    When  I enter <homeLoanRepay> $ as the home loan repayment
    When  I enter <otherLoanRepay> $ as the other loan repayment
    When  I enter <otherCommitment> $ as the other commitment
    When  I enter <totalCreditCardLimits> $ as the total credit card limits
    When  I select workout how much i could borrow button
    Then  I should see the correct estimated borrow amount

    Examples:
      |income| |otherIncome| |livingExpenses| |homeLoanRepay| |otherLoanRepay| |otherCommitment| |totalCreditCardLimits|
      |80000|  |10000|       |500         |   |0        |     |100            | |0              ||10000                     |

  Scenario Outline: Performing a start over operation after estimating borrow

    When  I select application type as single
    When  I select number of dependents as zero
    When  I select property type as home to live in
    When  I enter <income> $ as the income before tax
    When  I enter <otherIncome> $ as the other income
    When  I enter <livingExpenses> $ as the living expenses
    When  I enter <homeLoanRepay> $ as the home loan repayment
    When  I enter <otherLoanRepay> $ as the other loan repayment
    When  I enter <otherCommitment> $ as the other commitment
    When  I enter <totalCreditCardLimits> $ as the total credit card limits
    When  I select workout how much i could borrow button
    When  I click on start over button
    Then  I should see the form is cleared

    Examples:
      |income| |otherIncome| |livingExpenses| |homeLoanRepay| |otherLoanRepay| |otherCommitment| |totalCreditCardLimits|
      |80000|  |10000|       |500         |   |0        |     |100            | |0              ||10000                     |

  Scenario Outline: Performing an estimate borrow operation with insufficient data
    When  I enter <livingExpenses> $ as the living expenses
    When  I select workout how much i could borrow button
    Then  I should see the proper borrow error message

    Examples:
    |livingExpenses|
    |1              |


