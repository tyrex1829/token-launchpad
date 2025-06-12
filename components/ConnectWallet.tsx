"use client";

import {
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
// import { useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";

const ConnectWallet = () => {
  //   const [balance, setBalance] = useState(0);
  const wallet = useWallet();
  //   const { connection } = useConnection();

  //   async function getBalance() {
  //     if (wallet.publicKey) {
  //       const balanceUser = await connection.getBalance(wallet.publicKey);
  //       setBalance(balanceUser);
  //     }
  //   }

  //   getBalance();

  return (
    <div className="flex flex-col justify-center items-center gap-10 pt-12">
      <div className="flex justify-center gap-12">
        <WalletMultiButton />
        <WalletDisconnectButton />
      </div>

      <div className="border border-gray-400 rounded-xl px-10 py-6 text-xl font-medium flex gap-3 mb-10">
        Public Key :{" "}
        <span className="font-normal text-gray-700">
          {wallet.publicKey?.toString()}
        </span>
      </div>
    </div>
  );
};

export default ConnectWallet;
