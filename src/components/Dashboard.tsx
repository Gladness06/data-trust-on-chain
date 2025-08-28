import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { DashboardOverview } from "./DashboardOverview";
import { FileManager } from "./FileManager";
import { BlockchainStorage } from "./BlockchainStorage";
import { ApiDocumentation } from "./ApiDocumentation";
import { Analytics } from "./Analytics";
import { Settings } from "./Settings";

export const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return <DashboardOverview />;
      case "files":
        return <FileManager />;
      case "blockchain":
        return <BlockchainStorage />;
      case "api-docs":
        return <ApiDocumentation />;
      case "analytics":
        return <Analytics />;
      case "settings":
        return <Settings />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 overflow-auto">
        <div className="p-6">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};