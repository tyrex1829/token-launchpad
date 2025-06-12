import RootLayout from "@/components/AppWalletProvider";
import ConnectWallet from "@/components/ConnectWallet";
import { TokenLaunchpad } from "@/components/TokenLaunchpad";

export default function Home() {
  return (
    <div>
      <RootLayout>
        <ConnectWallet />
      </RootLayout>
      <TokenLaunchpad />
    </div>
  );
}
