import React, { useCallback, useState, useEffect } from "react";
export default function Web3Data(props) {
  const { web3Context } = props;
  const { networkId, networkName, accounts, providerName } = web3Context;
  const requestAuth = async (web3Context) => {
    try {
      await web3Context.requestAuth();
    } catch (e) {
      console.error(e);
    }
  };

  const requestAccess = useCallback(() => requestAuth(web3Context), []);

  return (
    <div>
      {accounts && accounts.length ? (
        <div>Accounts & Signing Status: Access Granted</div>
      ) : !!networkId && providerName !== "infura" ? (
        <div>
          <button onClick={requestAccess}>Connect</button>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}