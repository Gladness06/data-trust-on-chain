import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Code, 
  Copy, 
  ExternalLink, 
  Key,
  Globe,
  Database,
  Upload,
  Download
} from "lucide-react";

export const ApiDocumentation = () => {
  const endpoints = [
    {
      method: "POST",
      path: "/api/auth/register",
      description: "Register a new developer account",
      params: ["email", "password", "firstName", "lastName"],
      response: "User object with authentication token"
    },
    {
      method: "POST",
      path: "/api/auth/login",
      description: "Authenticate developer credentials",
      params: ["email", "password"],
      response: "Authentication token and user profile"
    },
    {
      method: "POST",
      path: "/api/files/upload",
      description: "Upload SQL or CSV file for conversion",
      params: ["file", "conversionType", "blockchainNetwork"],
      response: "Upload confirmation with job ID"
    },
    {
      method: "GET",
      path: "/api/files/convert/{jobId}",
      description: "Check conversion status and retrieve converted JSON",
      params: ["jobId"],
      response: "Conversion status and download URL"
    },
    {
      method: "POST",
      path: "/api/blockchain/store",
      description: "Store converted JSON on blockchain network",
      params: ["jsonData", "network", "encryptionLevel"],
      response: "Blockchain transaction hash and storage details"
    },
    {
      method: "GET",
      path: "/api/blockchain/retrieve/{hash}",
      description: "Retrieve data from blockchain using transaction hash",
      params: ["hash", "network"],
      response: "Decrypted JSON data"
    },
    {
      method: "GET",
      path: "/api/analytics/dashboard",
      description: "Get developer dashboard analytics",
      params: ["timeRange", "metrics"],
      response: "Analytics data and usage statistics"
    },
    {
      method: "DELETE",
      path: "/api/files/{fileId}",
      description: "Delete file and associated blockchain data",
      params: ["fileId", "permanentDelete"],
      response: "Deletion confirmation"
    }
  ];

  const codeExamples = {
    upload: `// Upload and convert SQL/CSV file
const formData = new FormData();
formData.append('file', sqlFile);
formData.append('conversionType', 'sql-to-json');
formData.append('blockchainNetwork', 'ethereum');

const response = await fetch('/api/files/upload', {
  method: 'POST',
  headers: {
    'Authorization': \`Bearer \${token}\`,
  },
  body: formData
});

const result = await response.json();
console.log('Job ID:', result.jobId);`,
    
    convert: `// Check conversion status
const response = await fetch(\`/api/files/convert/\${jobId}\`, {
  headers: {
    'Authorization': \`Bearer \${token}\`,
  }
});

const conversion = await response.json();
if (conversion.status === 'completed') {
  // Download converted JSON
  window.open(conversion.downloadUrl);
}`,

    blockchain: `// Store JSON on blockchain
const response = await fetch('/api/blockchain/store', {
  method: 'POST',
  headers: {
    'Authorization': \`Bearer \${token}\`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    jsonData: convertedData,
    network: 'ethereum',
    encryptionLevel: 'high'
  })
});

const result = await response.json();
console.log('Transaction Hash:', result.transactionHash);`
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">API Documentation</h1>
          <p className="text-muted-foreground">
            Complete API reference for Zero Trust platform integration
          </p>
        </div>
        <Button variant="outline">
          <ExternalLink className="w-4 h-4 mr-2" />
          Open in Postman
        </Button>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid grid-cols-4 w-fit">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="endpoints">Endpoints</TabsTrigger>
          <TabsTrigger value="examples">Examples</TabsTrigger>
          <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Key className="w-5 h-5" />
                  Authentication
                </CardTitle>
                <CardDescription>
                  Secure API access using JWT tokens
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 bg-muted/50 rounded-lg">
                  <code className="text-sm">
                    Authorization: Bearer YOUR_API_TOKEN
                  </code>
                  <Button variant="ghost" size="sm" className="ml-2">
                    <Copy className="w-3 h-3" />
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  Include your API token in the Authorization header for all requests.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  Base URL
                </CardTitle>
                <CardDescription>
                  API endpoint for all requests
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 bg-muted/50 rounded-lg">
                  <code className="text-sm">
                    https://api.zerotrust.dev/v1
                  </code>
                  <Button variant="ghost" size="sm" className="ml-2">
                    <Copy className="w-3 h-3" />
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  All API endpoints are relative to this base URL.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Supported File Types & Networks</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">File Types</h4>
                <div className="flex gap-2">
                  <Badge variant="secondary">SQL (.sql)</Badge>
                  <Badge variant="secondary">CSV (.csv)</Badge>
                  <Badge variant="secondary">JSON (.json)</Badge>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Blockchain Networks</h4>
                <div className="flex gap-2 flex-wrap">
                  <Badge className="bg-blue-500/10 text-blue-500 border-blue-500/20">Ethereum</Badge>
                  <Badge className="bg-purple-500/10 text-purple-500 border-purple-500/20">Polygon</Badge>
                  <Badge className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20">Binance Smart Chain</Badge>
                  <Badge className="bg-green-500/10 text-green-500 border-green-500/20">Avalanche</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="endpoints" className="space-y-4">
          <ScrollArea className="h-96">
            {endpoints.map((endpoint, index) => (
              <Card key={index} className="mb-4">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <Badge 
                        variant={endpoint.method === 'GET' ? 'secondary' : 'default'}
                        className={
                          endpoint.method === 'GET' ? 'bg-green-500/10 text-green-500 border-green-500/20' :
                          endpoint.method === 'POST' ? 'bg-blue-500/10 text-blue-500 border-blue-500/20' :
                          'bg-red-500/10 text-red-500 border-red-500/20'
                        }
                      >
                        {endpoint.method}
                      </Badge>
                      <code className="text-sm bg-muted/50 px-2 py-1 rounded">
                        {endpoint.path}
                      </code>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Copy className="w-3 h-3" />
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    {endpoint.description}
                  </p>
                  <div className="space-y-2">
                    <p className="text-xs font-medium text-muted-foreground">Parameters:</p>
                    <div className="flex gap-1 flex-wrap">
                      {endpoint.params.map((param, i) => (
                        <code key={i} className="text-xs bg-muted/50 px-1.5 py-0.5 rounded">
                          {param}
                        </code>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </ScrollArea>
        </TabsContent>

        <TabsContent value="examples" className="space-y-4">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="w-5 h-5" />
                  File Upload & Conversion
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-48">
                  <pre className="text-sm bg-muted/50 p-4 rounded-lg overflow-x-auto">
                    <code>{codeExamples.upload}</code>
                  </pre>
                </ScrollArea>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Check Conversion Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-32">
                  <pre className="text-sm bg-muted/50 p-4 rounded-lg overflow-x-auto">
                    <code>{codeExamples.convert}</code>
                  </pre>
                </ScrollArea>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="w-5 h-5" />
                  Blockchain Storage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-40">
                  <pre className="text-sm bg-muted/50 p-4 rounded-lg overflow-x-auto">
                    <code>{codeExamples.blockchain}</code>
                  </pre>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="webhooks" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Webhook Events</CardTitle>
              <CardDescription>
                Receive real-time notifications about file processing and blockchain operations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="p-3 border border-border rounded-lg">
                  <h4 className="font-medium">file.conversion.completed</h4>
                  <p className="text-sm text-muted-foreground">Fired when file conversion is completed</p>
                </div>
                <div className="p-3 border border-border rounded-lg">
                  <h4 className="font-medium">blockchain.storage.confirmed</h4>
                  <p className="text-sm text-muted-foreground">Fired when data is successfully stored on blockchain</p>
                </div>
                <div className="p-3 border border-border rounded-lg">
                  <h4 className="font-medium">file.processing.failed</h4>
                  <p className="text-sm text-muted-foreground">Fired when file processing encounters an error</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};