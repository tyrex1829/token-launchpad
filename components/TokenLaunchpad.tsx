"use client";

import {
  createInitializeMint2Instruction,
  getMinimumBalanceForRentExemptMint,
  MINT_SIZE,
  TOKEN_2022_PROGRAM_ID,
} from "@solana/spl-token";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Keypair, SystemProgram, Transaction } from "@solana/web3.js";
import { useState } from "react";

export function TokenLaunchpad() {
  const [inputs, setInputs] = useState({
    name: "",
    symbol: "",
    imageUrl: "",
    initialSupply: "",
  });

  const { connection } = useConnection();
  const wallet = useWallet();

  const createToken = async () => {
    if (!wallet.publicKey) return;

    const mintKeypair = Keypair.generate();
    const lamports = await getMinimumBalanceForRentExemptMint(connection);

    const transaction = new Transaction().add(
      SystemProgram.createAccount({
        fromPubkey: wallet.publicKey,
        newAccountPubkey: mintKeypair.publicKey,
        space: MINT_SIZE,
        lamports,
        programId: TOKEN_2022_PROGRAM_ID,
      }),

      createInitializeMint2Instruction(
        mintKeypair.publicKey,
        9,
        wallet.publicKey,
        wallet.publicKey,
        TOKEN_2022_PROGRAM_ID
      )
    );

    transaction.feePayer = wallet.publicKey;
    transaction.recentBlockhash = (
      await connection.getLatestBlockhash()
    ).blockhash;
    transaction.partialSign(mintKeypair);

    await wallet.sendTransaction(transaction, connection);
    console.log(`Token mint created at ${mintKeypair.publicKey.toBase58()}`);
  };

  createToken();

  return (
    <div className="flex flex-col items-center justify-center p-10 max-w-screen gap-5">
      <h1 className="text-4xl font-bold mb-4">Solana Token Launchpad</h1>

      <input
        type="text"
        placeholder="Name"
        className="w-96 py-5 pl-2.5 border border-gray-600 rounded-xl"
        value={inputs.name}
        onChange={(e) => {
          setInputs({ ...inputs, name: e.target.value });
        }}
      />

      <input
        type="text"
        placeholder="Symbol"
        className="w-96 py-5 pl-2.5 border border-gray-600 rounded-xl"
        value={inputs.symbol}
        onChange={(e) => {
          setInputs({ ...inputs, symbol: e.target.value });
        }}
      />

      <input
        type="text"
        placeholder="Image URL"
        className="w-96 py-5 pl-2.5 border border-gray-600 rounded-xl"
        value={inputs.imageUrl}
        onChange={(e) => {
          setInputs({ ...inputs, imageUrl: e.target.value });
        }}
      />

      <input
        type="text"
        placeholder="Initial Supply"
        className="w-96 py-5 pl-2.5 border border-gray-600 rounded-xl"
        value={inputs.initialSupply}
        onChange={(e) => {
          setInputs({ ...inputs, initialSupply: e.target.value });
        }}
      />

      <button className="p-5 bg-gray-700 rounded-xl text-white text-xl hover:bg-gray-600 transition-colors duration-300 cursor-pointer">
        Create a token
      </button>
    </div>
  );
}
