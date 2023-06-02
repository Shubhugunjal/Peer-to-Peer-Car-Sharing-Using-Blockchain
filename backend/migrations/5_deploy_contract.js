var user = artifacts.require("./user.sol");

module.exports = function(deployer) {
  deployer.deploy(user);
};