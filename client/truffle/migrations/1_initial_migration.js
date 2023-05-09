

const ArtGrowNFT = artifacts.require("ArtGrowNFT.sol");

module.exports = function(deployer) {
  deployer.deploy(ArtGrowNFT);
};