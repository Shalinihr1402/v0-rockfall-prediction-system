import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function RiskHeatmap() {
  const riskZones = [
    { id: 1, x: 20, y: 30, risk: "high", label: "Zone A" },
    { id: 2, x: 60, y: 20, risk: "medium", label: "Zone B" },
    { id: 3, x: 40, y: 60, risk: "low", label: "Zone C" },
    { id: 4, x: 80, y: 50, risk: "critical", label: "Zone D" },
  ]

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "critical":
        return "bg-red-500"
      case "high":
        return "bg-orange-500"
      case "medium":
        return "bg-yellow-500"
      case "low":
        return "bg-green-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Real-Time Risk Heatmap
          <Badge variant="outline" className="text-xs">
            Last Updated: 2 min ago
          </Badge>
        </CardTitle>
        <CardDescription>Interactive visualization of rockfall risk levels across mining zones</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative bg-muted rounded-lg h-80 overflow-hidden">
          {/* Simulated mine site background */}
          <div className="absolute inset-0 bg-gradient-to-br from-stone-200 to-stone-400 opacity-50" />

          {/* Risk zones */}
          {riskZones.map((zone) => (
            <div
              key={zone.id}
              className={`absolute w-8 h-8 rounded-full ${getRiskColor(zone.risk)} opacity-80 animate-pulse cursor-pointer hover:scale-110 transition-transform`}
              style={{ left: `${zone.x}%`, top: `${zone.y}%` }}
              title={`${zone.label}: ${zone.risk} risk`}
            />
          ))}

          {/* Legend */}
          <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm rounded-lg p-3 space-y-2">
            <h4 className="text-sm font-medium">Risk Levels</h4>
            <div className="space-y-1">
              {["critical", "high", "medium", "low"].map((level) => (
                <div key={level} className="flex items-center space-x-2 text-xs">
                  <div className={`w-3 h-3 rounded-full ${getRiskColor(level)}`} />
                  <span className="capitalize">{level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
