const Money = artifacts.require("./Money.sol");

contract("Money tests", async accounts => {

    it("1. User should deposit ethers into the smartcontract", async () => {
        const contract = await Money.deployed();
       
        await contract.deposit({from: accounts[1], value: web3.utils.toWei('2')});
        await contract.deposit({from: accounts[2], value: web3.utils.toWei('2')});

        const balance = await web3.eth.getBalance(contract.address);
    
        assert.equal(balance, web3.utils.toWei('4'));
    });

    it("2. User should withdraw ethers from the smartcontract", async () => {
        const contract = await Money.deployed();

        await contract.withdraw(web3.utils.toWei('1'),{from: accounts[1]});

        const balance = await web3.eth.getBalance(contract.address);

        assert.equal(balance, web3.utils.toWei('3'));
    });

    it("3. Contract owner should withdraw all ethers from the smartcontract", async () => {
        const contract = await Money.deployed();

        const tx = await contract.withdrawAll({from: accounts[0]});

        assert.equal(tx.receipt.status, true);
    });

    it("4. User can't withdraw all ethers from the smartcontract", async () => {
        const contract = await Money.deployed();
        let tx = null;
        try {
            tx = await contract.withdrawAll({from: accounts[2]});
            console.log(tx);
        } catch(err) {
            console.log('Error:', err.reason);
        }

        assert.equal(tx, null);
    });
});
