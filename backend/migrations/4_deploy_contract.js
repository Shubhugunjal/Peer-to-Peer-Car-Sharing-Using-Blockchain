var Transactions = artifacts.require("./Transaction.sol");

module.exports = function(deployer) {
  deployer.deploy(Transactions);
};