import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { 
  Key, 
  Shield, 
  Bell, 
  Globe,
  Trash2,
  Download,
  RefreshCw
} from "lucide-react";

export const Settings = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account, API keys, and platform preferences
        </p>
      </div>

      {/* API Keys */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Key className="w-5 h-5" />
            API Keys
          </CardTitle>
          <CardDescription>
            Manage your API keys for Zero Trust platform integration
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border border-border rounded-lg">
              <div>
                <h4 className="font-medium">Production Key</h4>
                <code className="text-sm text-muted-foreground">zt_prod_••••••••••••••••••••••••••••••••</code>
                <p className="text-xs text-muted-foreground mt-1">Created on Jan 10, 2024 • Last used 2 hours ago</p>
              </div>
              <div className="flex items-center gap-2">
                <Badge className="bg-success/10 text-success border-success/20">Active</Badge>
                <Button variant="outline" size="sm">
                  <RefreshCw className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 border border-border rounded-lg">
              <div>
                <h4 className="font-medium">Development Key</h4>
                <code className="text-sm text-muted-foreground">zt_dev_••••••••••••••••••••••••••••••••••</code>
                <p className="text-xs text-muted-foreground mt-1">Created on Jan 5, 2024 • Last used 1 day ago</p>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">Development</Badge>
                <Button variant="outline" size="sm">
                  <RefreshCw className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
          
          <Button className="w-full bg-gradient-primary">
            <Key className="w-4 h-4 mr-2" />
            Generate New API Key
          </Button>
        </CardContent>
      </Card>

      {/* Security Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="w-5 h-5" />
            Security & Privacy
          </CardTitle>
          <CardDescription>
            Configure security settings and data protection preferences
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="two-factor" className="font-medium">Two-Factor Authentication</Label>
                <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
              </div>
              <Switch id="two-factor" />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="encryption" className="font-medium">Enhanced Encryption</Label>
                <p className="text-sm text-muted-foreground">Use AES-256 encryption for all data transfers</p>
              </div>
              <Switch id="encryption" defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="audit-logs" className="font-medium">Audit Logging</Label>
                <p className="text-sm text-muted-foreground">Track all API calls and file operations</p>
              </div>
              <Switch id="audit-logs" defaultChecked />
            </div>
          </div>

          <div className="pt-4 border-t border-border">
            <Label htmlFor="webhook-url" className="font-medium">Security Webhook URL</Label>
            <p className="text-sm text-muted-foreground mb-2">
              Receive notifications about security events
            </p>
            <Input 
              id="webhook-url" 
              placeholder="https://your-app.com/webhooks/security"
              className="mt-2"
            />
          </div>
        </CardContent>
      </Card>

      {/* Notifications */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="w-5 h-5" />
            Notifications
          </CardTitle>
          <CardDescription>
            Configure how you receive updates and alerts
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="email-notifications" className="font-medium">Email Notifications</Label>
              <p className="text-sm text-muted-foreground">Receive updates via email</p>
            </div>
            <Switch id="email-notifications" defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="conversion-alerts" className="font-medium">Conversion Completion</Label>
              <p className="text-sm text-muted-foreground">Notify when file conversion is complete</p>
            </div>
            <Switch id="conversion-alerts" defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="blockchain-alerts" className="font-medium">Blockchain Confirmations</Label>
              <p className="text-sm text-muted-foreground">Notify on blockchain transaction confirmations</p>
            </div>
            <Switch id="blockchain-alerts" />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="security-alerts" className="font-medium">Security Alerts</Label>
              <p className="text-sm text-muted-foreground">Critical security notifications</p>
            </div>
            <Switch id="security-alerts" defaultChecked disabled />
          </div>
        </CardContent>
      </Card>

      {/* Network Preferences */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="w-5 h-5" />
            Blockchain Networks
          </CardTitle>
          <CardDescription>
            Configure preferred blockchain networks for storage
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-center justify-between p-3 border border-border rounded-lg">
              <div>
                <h4 className="font-medium">Ethereum</h4>
                <p className="text-sm text-muted-foreground">Primary network</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between p-3 border border-border rounded-lg">
              <div>
                <h4 className="font-medium">Polygon</h4>
                <p className="text-sm text-muted-foreground">Lower gas fees</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between p-3 border border-border rounded-lg">
              <div>
                <h4 className="font-medium">Binance Smart Chain</h4>
                <p className="text-sm text-muted-foreground">Fast transactions</p>
              </div>
              <Switch />
            </div>

            <div className="flex items-center justify-between p-3 border border-border rounded-lg">
              <div>
                <h4 className="font-medium">Avalanche</h4>
                <p className="text-sm text-muted-foreground">Coming soon</p>
              </div>
              <Switch disabled />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Data Management */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Download className="w-5 h-5" />
            Data Management
          </CardTitle>
          <CardDescription>
            Export or delete your data and account information
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-border rounded-lg">
            <div>
              <h4 className="font-medium">Export Account Data</h4>
              <p className="text-sm text-muted-foreground">Download all your files and transaction history</p>
            </div>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export Data
            </Button>
          </div>

          <div className="flex items-center justify-between p-4 border border-destructive/20 rounded-lg bg-destructive/5">
            <div>
              <h4 className="font-medium text-destructive">Delete Account</h4>
              <p className="text-sm text-muted-foreground">Permanently delete your account and all associated data</p>
            </div>
            <Button variant="destructive">
              <Trash2 className="w-4 h-4 mr-2" />
              Delete Account
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};