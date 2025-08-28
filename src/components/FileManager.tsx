import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Upload, 
  FileText, 
  Database, 
  Download,
  Trash2,
  Search,
  Filter,
  RefreshCw
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const FileManager = () => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();

  const files = [
    {
      id: "1",
      name: "user_database.sql",
      type: "SQL",
      size: "2.4 MB",
      status: "completed",
      uploadedAt: "2024-01-15 14:30",
      convertedSize: "1.8 MB",
      blockchainHash: "0x1a2b3c..."
    },
    {
      id: "2", 
      name: "analytics_data.csv",
      type: "CSV",
      size: "5.2 MB", 
      status: "converting",
      uploadedAt: "2024-01-15 15:45",
      progress: 75
    },
    {
      id: "3",
      name: "inventory.sql", 
      type: "SQL",
      size: "892 KB",
      status: "pending",
      uploadedAt: "2024-01-15 16:12"
    },
    {
      id: "4",
      name: "customer_export.csv",
      type: "CSV", 
      size: "3.7 MB",
      status: "failed",
      uploadedAt: "2024-01-15 13:22",
      error: "Invalid CSV format"
    }
  ];

  const handleFileUpload = () => {
    setIsUploading(true);
    setUploadProgress(0);
    
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          toast({
            title: "Upload completed",
            description: "File uploaded and queued for conversion",
          });
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-success/10 text-success border-success/20">Completed</Badge>;
      case "converting":
        return <Badge className="bg-warning/10 text-warning border-warning/20">Converting</Badge>;
      case "pending":
        return <Badge variant="secondary">Pending</Badge>;
      case "failed":
        return <Badge className="bg-destructive/10 text-destructive border-destructive/20">Failed</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">File Manager</h1>
          <p className="text-muted-foreground">
            Upload, convert, and manage your SQL/CSV files
          </p>
        </div>
      </div>

      {/* Upload Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Upload className="w-5 h-5" />
            Upload Files
          </CardTitle>
          <CardDescription>
            Upload SQL or CSV files for conversion to JSON and blockchain storage
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
            <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">Drop files here or click to upload</h3>
            <p className="text-muted-foreground mb-4">
              Supports SQL, CSV files up to 100MB
            </p>
            <Button onClick={handleFileUpload} disabled={isUploading}>
              {isUploading ? <RefreshCw className="w-4 h-4 mr-2 animate-spin" /> : <Upload className="w-4 h-4 mr-2" />}
              {isUploading ? "Uploading..." : "Select Files"}
            </Button>
          </div>
          
          {isUploading && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Uploading...</span>
                <span>{uploadProgress}%</span>
              </div>
              <Progress value={uploadProgress} />
            </div>
          )}
        </CardContent>
      </Card>

      {/* File List */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Uploaded Files</CardTitle>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-3 text-muted-foreground" />
                <Input placeholder="Search files..." className="pl-9 w-64" />
              </div>
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {files.map((file) => (
              <div key={file.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    {file.type === "SQL" ? (
                      <Database className="w-5 h-5 text-primary" />
                    ) : (
                      <FileText className="w-5 h-5 text-primary" />
                    )}
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium">{file.name}</h4>
                      {getStatusBadge(file.status)}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{file.type} • {file.size}</span>
                      <span>Uploaded {file.uploadedAt}</span>
                      {file.blockchainHash && (
                        <span className="text-success">Hash: {file.blockchainHash}</span>
                      )}
                    </div>
                    {file.status === "converting" && file.progress && (
                      <div className="flex items-center gap-2">
                        <Progress value={file.progress} className="w-32 h-2" />
                        <span className="text-xs text-muted-foreground">{file.progress}%</span>
                      </div>
                    )}
                    {file.status === "failed" && file.error && (
                      <p className="text-sm text-destructive">{file.error}</p>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {file.status === "completed" && (
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Download JSON
                    </Button>
                  )}
                  <Button variant="outline" size="sm">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};