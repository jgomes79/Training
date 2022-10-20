const Variables = artifacts.require("./Variables.sol");
const Bucles = artifacts.require("./Bucles.sol");
const Money = artifacts.require("./Money.sol");

async function doDeploy(deployer, network, accounts) {

    await deployer.deploy(Variables);
    let variables = await Variables.deployed();
    console.log('Variables deployed:', variables.address);

    await deployer.deploy(Bucles);
    let bucles = await Bucles.deployed();
    console.log('Bucles deployed:', bucles.address);

    await deployer.deploy(Money);
    let money = await Money.deployed();
    console.log('Money deployed:', money.address);
}

module.exports = function(deployer, network, accounts) {
    deployer.then(async () => {
        await doDeploy(deployer, network, accounts);
    });
};