var driver = artifacts.require("./DriverContract.sol");

module.exports = function(deployer) {
  deployer.deploy(driver);
};