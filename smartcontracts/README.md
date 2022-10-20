# Deploy Frameit SmartContracts

Install Truffle framework
```
npm i -g truffle
```

Install Ganache-cli
```
npm i -g ganache-cli
```

Install plugins
```
npm i @ganache/console.log
npm i @openzeppelin/contracts
npm i truffle-plugin-verify
npm i @truffle/hdwallet-provider
```

To deploy in local network with ganache-cli
```
ganache-cli
```
Inside the program root (same level truffle-config.js)
```
truffle migrate --reset --f 1 --to 1
```

To deploy in a public network (testnet or mainnet)
Execute Truffle dashboard in a separated process
```
truffle dashboard
```
Open the address http://localhost:2402 in a browser
Inside the program root (same level truffle-config.js)
```
truffle migrate --reset --f 1 --to 1 --network dashboard
```
Run the tests (with Ganache-cli)
```
truffle test ./test/tests.js
```
