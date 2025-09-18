import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Brain } from "lucide-react"

const predictions = [
  {
    id: 1,
    model: "LSTM Neural Network",
    prediction: "Low Risk",
    confidence: 87,
    timeframe: "Next 24 hours",
    factors: ["Stable seismic activity", "Normal moisture levels", "Favorable weather"],
  },
  {
    id: 2,
    model: "Random Forest",
    prediction: "Medium Risk",
    confidence: 73,
    timeframe: "Next 48 hours",
    factors: ["Increasing slope angle", "Recent rainfall", "Historical patterns"],
  },
  {
    id: 3,
    model: "XGBoost Ensemble",
    prediction: "High Risk",
    confidence: 91,
    timeframe: "Next 72 hours",
    factors: ["Elevated vibrations", "Slope instability", "Weather forecast"],
  },
]

export function PredictiveAnalytics() {
  const getPredictionColor = (prediction: string) => {
    switch (prediction.toLowerCase()) {
      case "low risk":
        return "bg-green-100 text-green-800 border-green-200"
      case "medium risk":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "high risk":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Brain className="h-5 w-5 text-primary" />
          <span>AI Predictive Analytics</span>
        </CardTitle>
        <CardDescription>
          Machine learning models analyzing current conditions and predicting rockfall risk
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {predictions.map((pred) => (
            <div key={pred.id} className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-medium text-sm">{pred.model}</h4>
                <Badge className={getPredictionColor(pred.prediction)}>{pred.prediction}</Badge>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Confidence Level</span>
                  <span className="font-medium">{pred.confidence}%</span>
                </div>
                <Progress value={pred.confidence} className="h-2" />
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium">Timeframe: {pred.timeframe}</p>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Key Factors:</p>
                  {pred.factors.map((factor, index) => (
                    <p key={index} className="text-xs flex items-center space-x-1">
                      <span className="w-1 h-1 bg-primary rounded-full" />
                      <span>{factor}</span>
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
