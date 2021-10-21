const SampleContract = artifacts.require('Sample');

module.exports = function (deployer) {
  deployer.deploy(SampleContract);
};
