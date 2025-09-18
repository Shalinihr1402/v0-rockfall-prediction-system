import { BarChart3, Map, AlertCircle, Settings, Database, Camera, Activity } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navigationItems = [
  { icon: BarChart3, label: "Dashboard", active: true },
  { icon: Map, label: "Risk Map", active: false },
  { icon: AlertCircle, label: "Alerts", active: false },
  { icon: Activity, label: "Sensors", active: false },
  { icon: Camera, label: "Drone Data", active: false },
  { icon: Database, label: "Analytics", active: false },
  { icon: Settings, label: "Settings", active: false },
]

export function DashboardSidebar() {
  return (
    <aside className="w-64 bg-sidebar border-r border-sidebar-border">
      <nav className="p-4 space-y-2">
        {navigationItems.map((item) => (
          <Button
            key={item.label}
            variant={item.active ? "default" : "ghost"}
            className={cn("w-full justify-start", item.active && "bg-sidebar-primary text-sidebar-primary-foreground")}
          >
            <item.icon className="mr-3 h-4 w-4" />
            {item.label}
          </Button>
        ))}
      </nav>
    </aside>
  )
}
