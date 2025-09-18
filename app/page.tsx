import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { RiskHeatmap } from "@/components/risk-heatmap"
import { AlertsPanel } from "@/components/alerts-panel"
import { SensorDataCards } from "@/components/sensor-data-cards"
import { PredictiveAnalytics } from "@/components/predictive-analytics"

export default function RockfallDashboard() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 p-6 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <RiskHeatmap />
            </div>
            <div>
              <AlertsPanel />
            </div>
          </div>
          <SensorDataCards />
          <PredictiveAnalytics />
        </main>
      </div>
    </div>
  )
}
