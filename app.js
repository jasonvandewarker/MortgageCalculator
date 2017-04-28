(function() {
    'use strict';

    angular
        .module('app', []);
})();

(function() {
    'use strict';

    angular
        .module('app')
        .controller('MortgageController', MortgageController);

    MortgageController.$inject = [];

    /* @ngInject */
    function MortgageController() {
        var vm = this;
        vm.balance = 0;
        vm.apr = 0;
        vm.term = 0;
        //numbers from select menu = six;
        //numbers from select menu = twelve;

        function calculateMortgage() {
          let monthlyInterestRate = (apr / 100) / six || twelve;
          let numberOfPayments = term * six || twelve;
          let compoundedInterestRate = Math.pow((1 + monthlyInterestRate), numberOfPayments);
          let interestQuotient = (monthlyInterestRate * compoundedInterestRate) / (compoundedInterestRate - 1);
          let monthlyPayment = balance * interestQuotient;

        }
    }
})();
