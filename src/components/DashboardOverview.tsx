import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Upload, 
  Database, 
  FileCheck, 
  TrendingUp, 
  Clock,
  Shield,
  Zap,
  Globe
} from "lucide-react";

export const DashboardOverview = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Dashboard Overview</h1>
          <p className="text-muted-foreground">
            Transform your Web2 data into Web3 blockchain storage
          </p>
        </div>
        <Button className="bg-gradient-primary">
          <Upload className="w-4 h-4 mr-2" />
          Upload New File
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Files Processed</CardTitle>
            <FileCheck className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,847</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-success">+20.1%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Blockchain Storage</CardTitle>
            <Database className="h-4 w-4 text-info" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156 GB</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-info">+15.3%</span> data stored
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">API Requests</CardTitle>
            <TrendingUp className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">48.2K</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-warning">+8.7%</span> this week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Uptime</CardTitle>
            <Shield className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">99.9%</div>
            <p className="text-xs text-muted-foreground">
              Zero Trust guarantee
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Recent Conversions
            </CardTitle>
            <CardDescription>
              Latest SQL/CSV to JSON conversions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 border border-border rounded-lg">
              <div>
                <p className="font-medium">user_database.sql</p>
                <p className="text-sm text-muted-foreground">Converted 2 hours ago</p>
              </div>
              <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
                Completed
              </Badge>
            </div>
            <div className="flex items-center justify-between p-3 border border-border rounded-lg">
              <div>
                <p className="font-medium">analytics_data.csv</p>
                <p className="text-sm text-muted-foreground">Converting...</p>
              </div>
              <div className="flex items-center gap-2">
                <Progress value={75} className="w-16 h-2" />
                <Badge variant="secondary" className="bg-warning/10 text-warning border-warning/20">
                  75%
                </Badge>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 border border-border rounded-lg">
              <div>
                <p className="font-medium">inventory.sql</p>
                <p className="text-sm text-muted-foreground">Queued for processing</p>
              </div>
              <Badge variant="secondary" className="bg-muted/10 text-muted-foreground border-muted/20">
                Pending
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Platform Features
            </CardTitle>
            <CardDescription>
              Zero Trust Web2 to Web3 Migration
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3 p-3 border border-primary/20 rounded-lg bg-primary/5">
              <Shield className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <h4 className="font-medium text-primary">Zero Trust Security</h4>
                <p className="text-sm text-muted-foreground">
                  End-to-end encryption for all data transfers
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 border border-border rounded-lg">
              <Database className="w-5 h-5 text-info mt-0.5" />
              <div>
                <h4 className="font-medium">Blockchain Storage</h4>
                <p className="text-sm text-muted-foreground">
                  Decentralized storage on multiple networks
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 border border-border rounded-lg">
              <Globe className="w-5 h-5 text-success mt-0.5" />
              <div>
                <h4 className="font-medium">Multi-Chain Support</h4>
                <p className="text-sm text-muted-foreground">
                  Ethereum, Polygon, Binance Smart Chain & more
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};