import React, { useEffect, useState, useLayoutEffect } from "react";
import { BrowserRouter } from 'react-router-dom';

import { Body, Button, Header, Image, Link, Input } from "./components";
import useWeb3Modal from "./hooks/useWeb3Modal";
import { WalletButton } from './WalletButton';

import contracts from './contracts';

const Web3 = require("web3");

const App = () => {
  const [provider, loadWeb3Modal, logoutOfWeb3Modal, chainId, account] = useWeb3Modal();
  const web3 = new Web3(window.ethereum);
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    const checkStatus = async(chainId, account) => {

      if (!provider) {
        setStatusMessage("Metamask no connnected");
        return;
      }

      if ((contracts.addresses[chainId] === undefined) || (contracts.addresses[chainId].Money === "")) {
        setStatusMessage("You are connected to an invalid network. Connect your Metamask to Goerli network.");
      } else {
        setStatusMessage("Metamask connected!");
      }
    }

    checkStatus(chainId, account);
  },[provider, chainId, account]);

  const deposit = async () => {
    try {
      const moneyAddress = contracts.addresses[chainId].Money;
      let moneyContract = new web3.eth.Contract(contracts.Money, moneyAddress);
      const tx = await moneyContract.methods.deposit().send({from: window.ethereum.selectedAddress, value: web3.utils.toWei('0.02')});
      console.log(tx);
    } catch(e) {
      if (e.code !== undefined) {
        console.log(e);
        setStatusMessage(e.message);
      } else {
        setStatusMessage(e);
      }
    }
  }

  const withdraw = async () => {
    try {
      const moneyAddress = contracts.addresses[chainId].Money;
      let moneyContract = new web3.eth.Contract(contracts.Money, moneyAddress);
      const tx = await moneyContract.methods.withdrawAll().send({from: window.ethereum.selectedAddress});
      console.log(tx);
    } catch(e) {
      if (e.code !== undefined) {
        console.log(e);
        setStatusMessage(e.message);
      } else {
        setStatusMessage(e);
      }
    }
  }

  return (
    <>
    <BrowserRouter>
        <Header>
          <WalletButton provider={provider} loadWeb3Modal={loadWeb3Modal} logoutOfWeb3Modal={logoutOfWeb3Modal} />
        </Header>
        <Body>
          <p>
            {statusMessage}
          </p>
          <div>
            <p>Money contract</p>
            <Button onClick={() => deposit()}>
              Deposit
            </Button>
            <Button onClick={() => withdraw()}>
              Withdraw
            </Button>
          </div>
        </Body>
    </BrowserRouter>
    </>
  );
}

export default App;
