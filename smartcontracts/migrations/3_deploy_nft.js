const CoolNFT = artifacts.require("./CoolNFT.sol");

async function doDeploy(deployer, network, accounts) {

    await deployer.deploy(CoolNFT, "ipfs://QmZ3SFBQUcQr6Z7iNWcnyS9KRcCka3Jmg3zR6uLV3oGHwH/");
    let nft = await CoolNFT.deployed();
    console.log('CoolNFT deployed:', nft.address);
}

module.exports = function(deployer, network, accounts) {
    deployer.then(async () => {
        await doDeploy(deployer, network, accounts);
    });
};