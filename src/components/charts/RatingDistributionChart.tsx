"use client"

import { useMemo } from "react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from "recharts"
import type { Review } from "@/lib/definitions"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { useTheme } from "@/contexts/ThemeContext"

const chartConfig = {
  reviews: {
    label: "Reviews",
  },
} satisfies ChartConfig

export default function RatingDistributionChart({ reviews }: { reviews: Review[] }) {
  const { theme } = useTheme();

  const data = useMemo(() => {
    const counts = [
      { rating: 5, count: 0 },
      { rating: 4, count: 0 },
      { rating: 3, count: 0 },
      { rating: 2, count: 0 },
      { rating: 1, count: 0 },
    ]
    reviews.forEach(review => {
      const item = counts.find(c => c.rating === review.rating)
      if (item) {
        item.count++
      }
    })
    return counts
  }, [reviews])

  const chartColor = theme === 'dark' ? 'hsl(var(--primary))' : 'hsl(var(--primary))';

  return (
    <div className="h-48 w-full">
        <ChartContainer config={{
          ...chartConfig,
          reviews: {
            ...chartConfig.reviews,
            color: chartColor
          }
        }} className="h-full w-full">
        <ResponsiveContainer>
            <BarChart data={data} layout="vertical" margin={{ left: -10, right: 10 }}>
                <CartesianGrid horizontal={false} />
                <YAxis
                dataKey="rating"
                type="category"
                tickLine={false}
                axisLine={false}
                tick={({ x, y, payload }) => (
                    <g transform={`translate(${x},${y})`}>
                    <text x={0} y={0} dy={4} textAnchor="end" fill={theme === 'dark' ? "hsl(var(--foreground))" : "hsl(var(--foreground))"} className="text-xs">{payload.value} star</text>
                    </g>
                )}
                />
                <XAxis type="number" hide />
                <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="line" />}
                />
                <Bar dataKey="count" fill="var(--color-reviews)" radius={4} />
            </BarChart>
        </ResponsiveContainer>
        </ChartContainer>
    </div>
  )
}
