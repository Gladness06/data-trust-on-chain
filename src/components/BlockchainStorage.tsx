import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Database, 
  ExternalLink, 
  Shield, 
  Zap,
  Globe,
  Copy,
  CheckCircle
} from "lucide-react";

export const BlockchainStorage = () => {
  const networks = [
    {
      name: "Ethereum",
      status: "active",
      stored: "45.2 GB",
      transactions: 1247,
      gasUsed: "2.4 ETH",
      color: "blue"
    },
    {
      name: "Polygon", 
      status: "active",
      stored: "32.8 GB",
      transactions: 856,
      gasUsed: "124 MATIC",
      color: "purple"
    },
    {
      name: "Binance Smart Chain",
      status: "active", 
      stored: "28.1 GB",
      transactions: 634,
      gasUsed: "0.8 BNB",
      color: "yellow"
    },
    {
      name: "Avalanche",
      status: "pending",
      stored: "0 GB", 
      transactions: 0,
      gasUsed: "0 AVAX",
      color: "red"
    }
  ];

  const transactions = [
    {
      hash: "0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b",
      network: "Ethereum",
      file: "user_database.json",
      size: "2.4 MB",
      timestamp: "2024-01-15 14:35:22",
      status: "confirmed",
      gasUsed: "0.0024 ETH"
    },
    {
      hash: "0x2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c",
      network: "Polygon", 
      file: "analytics_data.json",
      size: "1.8 MB",
      timestamp: "2024-01-15 13:22:15",
      status: "confirmed", 
      gasUsed: "0.45 MATIC"
    },
    {
      hash: "0x3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d",
      network: "Ethereum",
      file: "inventory.json", 
      size: "892 KB",
      timestamp: "2024-01-15 12:45:33",
      status: "pending",
      gasUsed: "0.0018 ETH"
    }
  ];

  const getNetworkBadge = (network: string) => {
    const colors = {
      "Ethereum": "bg-blue-500/10 text-blue-500 border-blue-500/20",
      "Polygon": "bg-purple-500/10 text-purple-500 border-purple-500/20", 
      "Binance Smart Chain": "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
      "Avalanche": "bg-red-500/10 text-red-500 border-red-500/20"
    };
    return <Badge className={colors[network as keyof typeof colors]}>{network}</Badge>;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Blockchain Storage</h1>
          <p className="text-muted-foreground">
            Monitor and manage your decentralized data storage across multiple networks
          </p>
        </div>
        <Button className="bg-gradient-primary">
          <Database className="w-4 h-4 mr-2" />
          Deploy New Contract
        </Button>
      </div>

      {/* Network Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {networks.map((network, index) => (
          <Card key={index} className="relative overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center justify-between">
                {network.name}
                {network.status === "active" ? (
                  <CheckCircle className="w-4 h-4 text-success" />
                ) : (
                  <div className="w-2 h-2 bg-warning rounded-full animate-pulse" />
                )}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Stored Data</span>
                  <span className="font-medium">{network.stored}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Transactions</span>
                  <span className="font-medium">{network.transactions.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Gas Used</span>
                  <span className="font-medium">{network.gasUsed}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Storage Analytics */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Security Features
            </CardTitle>
            <CardDescription>
              Zero Trust encryption and security protocols
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 border border-primary/20 rounded-lg bg-primary/5">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-primary" />
                <div>
                  <h4 className="font-medium">End-to-End Encryption</h4>
                  <p className="text-sm text-muted-foreground">AES-256 encryption</p>
                </div>
              </div>
              <Badge className="bg-success/10 text-success border-success/20">Active</Badge>
            </div>
            
            <div className="flex items-center justify-between p-3 border border-border rounded-lg">
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5 text-warning" />
                <div>
                  <h4 className="font-medium">Smart Contract Verification</h4>
                  <p className="text-sm text-muted-foreground">Automated verification</p>
                </div>
              </div>
              <Badge className="bg-success/10 text-success border-success/20">Verified</Badge>
            </div>

            <div className="flex items-center justify-between p-3 border border-border rounded-lg">
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-info" />
                <div>
                  <h4 className="font-medium">Multi-Network Redundancy</h4>
                  <p className="text-sm text-muted-foreground">Cross-chain backup</p>
                </div>
              </div>
              <Badge className="bg-success/10 text-success border-success/20">Enabled</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Storage Distribution</CardTitle>
            <CardDescription>
              Data distribution across blockchain networks
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Ethereum</span>
                  <span>42%</span>
                </div>
                <Progress value={42} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Polygon</span>
                  <span>31%</span>
                </div>
                <Progress value={31} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Binance Smart Chain</span>
                  <span>27%</span>
                </div>
                <Progress value={27} className="h-2" />
              </div>
            </div>
            <div className="pt-2 border-t border-border">
              <div className="flex justify-between text-sm font-medium">
                <span>Total Storage Used</span>
                <span>106.1 GB</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Transaction History */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
          <CardDescription>
            Latest blockchain storage transactions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {transactions.map((tx, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <div className="font-mono text-sm">
                      {tx.hash.slice(0, 10)}...{tx.hash.slice(-8)}
                    </div>
                    <Button variant="ghost" size="sm">
                      <Copy className="w-3 h-3" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <ExternalLink className="w-3 h-3" />
                    </Button>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    {getNetworkBadge(tx.network)}
                    <span>{tx.file} • {tx.size}</span>
                    <span>{tx.timestamp}</span>
                  </div>
                </div>
                <div className="text-right space-y-1">
                  <Badge 
                    className={
                      tx.status === "confirmed" 
                        ? "bg-success/10 text-success border-success/20"
                        : "bg-warning/10 text-warning border-warning/20"
                    }
                  >
                    {tx.status}
                  </Badge>
                  <p className="text-sm text-muted-foreground">{tx.gasUsed}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};