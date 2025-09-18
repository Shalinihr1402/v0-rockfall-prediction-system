import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, Minus, Thermometer, Droplets, Zap } from "lucide-react"

const sensorData = [
  {
    id: 1,
    name: "Seismic Activity",
    value: "2.3",
    unit: "mm/s",
    trend: "up",
    change: "+12%",
    status: "warning",
    icon: Zap,
  },
  {
    id: 2,
    name: "Slope Angle",
    value: "47.2",
    unit: "°",
    trend: "up",
    change: "+0.5%",
    status: "normal",
    icon: TrendingUp,
  },
  {
    id: 3,
    name: "Moisture Content",
    value: "18.5",
    unit: "%",
    trend: "down",
    change: "-3%",
    status: "normal",
    icon: Droplets,
  },
  {
    id: 4,
    name: "Temperature",
    value: "24.1",
    unit: "°C",
    trend: "stable",
    change: "0%",
    status: "normal",
    icon: Thermometer,
  },
]

export function SensorDataCards() {
  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="h-4 w-4 text-orange-500" />
      case "down":
        return <TrendingDown className="h-4 w-4 text-green-500" />
      case "stable":
        return <Minus className="h-4 w-4 text-muted-foreground" />
      default:
        return <Minus className="h-4 w-4" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "warning":
        return "bg-orange-100 text-orange-800 border-orange-200"
      case "critical":
        return "bg-red-100 text-red-800 border-red-200"
      case "normal":
        return "bg-green-100 text-green-800 border-green-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {sensorData.map((sensor) => (
        <Card key={sensor.id}>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <sensor.icon className="h-5 w-5 text-muted-foreground" />
              <Badge className={getStatusColor(sensor.status)}>{sensor.status}</Badge>
            </div>
            <CardTitle className="text-sm font-medium">{sensor.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline space-x-1">
              <span className="text-2xl font-bold">{sensor.value}</span>
              <span className="text-sm text-muted-foreground">{sensor.unit}</span>
            </div>
            <div className="flex items-center space-x-1 mt-2">
              {getTrendIcon(sensor.trend)}
              <span className="text-sm text-muted-foreground">{sensor.change}</span>
              <span className="text-xs text-muted-foreground">vs last hour</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
