//const HelloBlockchain = artifacts.require("HelloBlockchain");
//const DoubleMyContract = artifacts.require("DoubleMyContract");
const ReceiveMoneyContract = artifacts.require("ReceiveMoneyContract");
const MyToken2 = artifacts.require("MyToken2");

module.exports = function (deployer) {
  //deployer.deploy(HelloBlockchain, "Hello Blockchain");
  //deployer.deploy(ReceiveMoneyContract, "ReceiveMoneyContract");
  deployer.deploy(MyToken2, "MTK2");
};