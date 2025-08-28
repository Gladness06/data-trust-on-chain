import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  Database, 
  FileText, 
  BarChart3, 
  Settings, 
  Shield,
  Upload,
  BookOpen,
  Home,
  LogOut
} from "lucide-react";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Sidebar = ({ activeTab, setActiveTab }: SidebarProps) => {
  const menuItems = [
    { id: "overview", label: "Overview", icon: Home },
    { id: "files", label: "File Manager", icon: Upload },
    { id: "blockchain", label: "Blockchain Storage", icon: Database },
    { id: "api-docs", label: "API Documentation", icon: BookOpen },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className="w-64 bg-gradient-dark border-r border-border flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <Shield className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-lg font-bold bg-gradient-primary bg-clip-text text-transparent">
              Zero Trust
            </h1>
            <p className="text-xs text-muted-foreground">Web2 → Web3 Platform</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Button
              key={item.id}
              variant={activeTab === item.id ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start gap-3 text-left",
                activeTab === item.id && "bg-primary/10 text-primary border border-primary/20"
              )}
              onClick={() => setActiveTab(item.id)}
            >
              <Icon className="w-4 h-4" />
              {item.label}
            </Button>
          );
        })}
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-cyber flex items-center justify-center">
              <span className="text-sm font-medium">JD</span>
            </div>
            <div>
              <p className="text-sm font-medium">John Dev</p>
              <p className="text-xs text-muted-foreground">Developer</p>
            </div>
          </div>
          <Button variant="ghost" size="sm">
            <LogOut className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};