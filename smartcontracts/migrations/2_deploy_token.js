const CoolToken = artifacts.require("./CoolToken.sol");

async function doDeploy(deployer, network, accounts) {

    await deployer.deploy(CoolToken, web3.utils.toWei('1000000000'));
    let token = await CoolToken.deployed();
    console.log('CoolToken deployed:', token.address);
}

module.exports = function(deployer, network, accounts) {
    deployer.then(async () => {
        await doDeploy(deployer, network, accounts);
    });
};