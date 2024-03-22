import { useConnection, useWallet } from "@solana/wallet-adapter-react";

export default function Home() {
    const { connection } = useConnection();
    const wallet = useWallet();
    const networkName = connection.rpcEndpoint.includes('devnet') ? 'Devnet' :
        connection.rpcEndpoint.includes('testnet') ? 'Testnet' :
            connection.rpcEndpoint.includes('mainnet-beta') ? 'Mainnet' :
                'Unknown Network';

    return (
        <div>
            {/* 展示连接状态和基本操作 */}
            <div>
                Wallet Connected: {wallet.connected ? 'Yes' : 'No'}
                <p>Connected Network: {networkName}</p>
            </div>
            <div>
                {/* 这里可以添加按钮或其他UI元素以触发连接钱包或切换网络的操作 */}
            </div>
        </div>
    );
}
