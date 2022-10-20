import React, { useEffect, useState } from "react";
import { Button } from "./components";

export function WalletButton({ provider, loadWeb3Modal, logoutOfWeb3Modal }) {
    const [account, setAccount] = useState("");
    const [rendered, setRendered] = useState("");
  
    useEffect(() => {
      async function fetchAccount() {
        try {
          if (!provider) {
            return;
          }
  
          const accounts = await provider.listAccounts();
          setAccount(accounts[0]);
          setRendered(account.substring(0, 6) + "..." + account.substring(36));
        } catch (err) {
          setAccount("");
          setRendered("");
          console.error(err);
        }
      }
      fetchAccount();
    }, [account, provider, setAccount, setRendered]);

    return (
        <div>
            {provider ? <p>Selected account: {rendered}</p> : ""}
            <Button onClick={() => {
              if (!provider) {
                loadWeb3Modal();
              } else {
                logoutOfWeb3Modal();
              }
            }}
            >
            {!provider ? "Connect Wallet" : "Disconnect Wallet"}
            </Button>
        </div>
    );
}
