import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Clock, CheckCircle } from "lucide-react"

const alerts = [
  {
    id: 1,
    type: "critical",
    title: "High Vibration Detected",
    location: "Zone D - Sector 7",
    time: "2 min ago",
    description: "Seismic sensors detected unusual vibration patterns",
    acknowledged: false,
  },
  {
    id: 2,
    type: "warning",
    title: "Slope Angle Change",
    location: "Zone A - Sector 3",
    time: "15 min ago",
    description: "Gradual slope angle increase detected over 24h",
    acknowledged: false,
  },
  {
    id: 3,
    type: "info",
    title: "Drone Survey Complete",
    location: "Zone B - All Sectors",
    time: "1 hour ago",
    description: "Weekly aerial survey completed successfully",
    acknowledged: true,
  },
]

export function AlertsPanel() {
  const getAlertIcon = (type: string) => {
    switch (type) {
      case "critical":
        return <AlertTriangle className="h-4 w-4 text-destructive" />
      case "warning":
        return <Clock className="h-4 w-4 text-orange-500" />
      case "info":
        return <CheckCircle className="h-4 w-4 text-primary" />
      default:
        return <AlertTriangle className="h-4 w-4" />
    }
  }

  const getAlertVariant = (type: string) => {
    switch (type) {
      case "critical":
        return "destructive"
      case "warning":
        return "secondary"
      case "info":
        return "outline"
      default:
        return "outline"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Active Alerts</CardTitle>
        <CardDescription>Real-time notifications and system alerts</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {alerts.map((alert) => (
          <div key={alert.id} className={`p-4 rounded-lg border ${alert.acknowledged ? "bg-muted/50" : "bg-card"}`}>
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center space-x-2">
                {getAlertIcon(alert.type)}
                <Badge variant={getAlertVariant(alert.type) as any}>{alert.type.toUpperCase()}</Badge>
              </div>
              <span className="text-xs text-muted-foreground">{alert.time}</span>
            </div>

            <h4 className="font-medium text-sm mb-1">{alert.title}</h4>
            <p className="text-xs text-muted-foreground mb-2">{alert.location}</p>
            <p className="text-xs mb-3">{alert.description}</p>

            {!alert.acknowledged && (
              <div className="flex space-x-2">
                <Button size="sm" variant="outline" className="text-xs bg-transparent">
                  Acknowledge
                </Button>
                <Button size="sm" variant="outline" className="text-xs bg-transparent">
                  View Details
                </Button>
              </div>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
