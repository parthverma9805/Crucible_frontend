import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

import Dashboard from "./pages/Dashboard";
import Agents from "./pages/Agents";
import AgentDetails from "./pages/AgentDetails";
import Workflows from "./pages/Workflows";
import Runs from "./pages/Runs";
import Approvals from "./pages/Approvals";
import Connections from "./pages/Connections";
import Knowledge from "./pages/Knowledge";
import AuditLogs from "./pages/AuditLogs";

function App() {
  const [activePage, setActivePage] = useState("dashboard");
  const [selectedAgent, setSelectedAgent] = useState(null);

  const openAgent = (agent) => {
    setSelectedAgent(agent);
    setActivePage("agent-details");
  };

  const renderPage = () => {
    switch (activePage) {
      case "dashboard":
        return <Dashboard setActivePage={setActivePage} />;

      case "agents":
        return <Agents openAgent={openAgent} />;

      case "agent-details":
        return (
          <AgentDetails
            agent={selectedAgent}
            setActivePage={setActivePage}
          />
        );

      case "workflows":
        return <Workflows />;

      case "runs":
        return <Runs />;

      case "approvals":
        return <Approvals />;

      case "connections":
        return <Connections />;

      case "knowledge":
        return <Knowledge />;

      case "audit":
        return <AuditLogs />;

      default:
        return <Dashboard setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="app-shell">
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <div className="main-area">
        <Topbar activePage={activePage} />

        <main className="page-content">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}

export default App;