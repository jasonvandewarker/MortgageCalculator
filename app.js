(function() {
    'use strict';

    angular
        .module('app', []);
})();

//Controller
(function() {
    'use strict';

    angular
        .module('app')
        .controller('MortgageController', MortgageController);

    MortgageController.$inject = [];
//This block sets the variables inputed by the user.
    function MortgageController() {
        var vm = this;
        vm.balance = 0;  //Represents the balance remaining on the loan.
        vm.apr = 0; // Loan interest rate.
        vm.term = 0; // How long the loan is for.

/* This is the math part of the function. The function starts with
a click event tied to the button. The final is returned to text on the
front page. */
        vm.calculateMortgage = function() {
          let monthlyInterestRate = (vm.apr / 100) / vm.select;
          let numberOfPayments = vm.term * vm.select;
          let compoundedInterestRate = Math.pow((1 + monthlyInterestRate), numberOfPayments);
          let interestQuotient = (monthlyInterestRate * compoundedInterestRate) / (compoundedInterestRate - 1);
          let monthlyPayment = vm.balance * interestQuotient;
          vm.result = "$" + monthlyPayment.toFixed(2) + " is your payment.";
        }
    }
})();
