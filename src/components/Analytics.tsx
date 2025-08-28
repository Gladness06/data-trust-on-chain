import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Users, 
  Database, 
  Zap,
  Activity,
  DollarSign
} from "lucide-react";

export const Analytics = () => {
  const metrics = [
    {
      title: "Total Files Processed",
      value: "2,847",
      change: "+12.5%",
      trend: "up",
      icon: Database,
      description: "Files converted this month"
    },
    {
      title: "Active Developers", 
      value: "156",
      change: "+23.1%",
      trend: "up",
      icon: Users,
      description: "Registered developers"
    },
    {
      title: "API Requests",
      value: "48.2K",
      change: "+8.7%", 
      trend: "up",
      icon: Activity,
      description: "Requests this week"
    },
    {
      title: "Storage Revenue",
      value: "$12,450",
      change: "+15.3%",
      trend: "up", 
      icon: DollarSign,
      description: "Monthly recurring revenue"
    }
  ];

  const recentActivity = [
    {
      user: "john.doe@example.com",
      action: "Uploaded user_database.sql",
      time: "2 minutes ago",
      status: "success"
    },
    {
      user: "sarah.dev@company.com", 
      action: "Converted analytics.csv to JSON",
      time: "5 minutes ago",
      status: "success"
    },
    {
      user: "mike.admin@startup.io",
      action: "Stored inventory data on Ethereum",
      time: "12 minutes ago", 
      status: "success"
    },
    {
      user: "lisa.code@agency.net",
      action: "Failed to process corrupted.sql",
      time: "18 minutes ago",
      status: "error"
    },
    {
      user: "alex.tech@bigcorp.com",
      action: "Retrieved data from Polygon",
      time: "25 minutes ago",
      status: "success"
    }
  ];

  const networkUsage = [
    { network: "Ethereum", usage: 42, transactions: 1247, cost: "$2,845" },
    { network: "Polygon", usage: 31, transactions: 856, cost: "$124" },
    { network: "BSC", usage: 27, transactions: 634, cost: "$89" }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
          <p className="text-muted-foreground">
            Monitor platform usage, performance, and revenue metrics
          </p>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                <Icon className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metric.value}</div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <TrendingUp className="h-3 w-3 text-success" />
                  <span className="text-success">{metric.change}</span>
                  <span>{metric.description}</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Charts and Activity */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="w-5 h-5" />
              Recent Activity
            </CardTitle>
            <CardDescription>
              Latest user actions and system events
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">{activity.user}</span>
                    <Badge 
                      variant="secondary"
                      className={
                        activity.status === "success" 
                          ? "bg-success/10 text-success border-success/20"
                          : "bg-destructive/10 text-destructive border-destructive/20"
                      }
                    >
                      {activity.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{activity.action}</p>
                </div>
                <span className="text-xs text-muted-foreground">{activity.time}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Network Usage
            </CardTitle>
            <CardDescription>
              Blockchain network utilization and costs
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {networkUsage.map((network, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{network.network}</span>
                  <span className="text-muted-foreground">{network.usage}% usage</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-gradient-primary h-2 rounded-full transition-all"
                    style={{ width: `${network.usage}%` }}
                  />
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{network.transactions.toLocaleString()} transactions</span>
                  <span>{network.cost}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Performance Stats */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Conversion Success Rate</CardTitle>
            <CardDescription>File processing success metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-success mb-2">98.7%</div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Successful</span>
                <span className="text-success">2,811</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Failed</span>
                <span className="text-destructive">36</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Average Processing Time</CardTitle>
            <CardDescription>File conversion performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-info mb-2">2.4s</div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">SQL files</span>
                <span>1.8s avg</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">CSV files</span>
                <span>3.1s avg</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Storage Efficiency</CardTitle>
            <CardDescription>Compression and optimization</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-warning mb-2">73%</div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Space saved</span>
                <span className="text-success">28.4 GB</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Compression ratio</span>
                <span>2.7:1</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};