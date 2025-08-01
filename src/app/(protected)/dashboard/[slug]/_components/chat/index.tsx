"use client"
// import { Card, CardContent } from '@/components/ui/card'
import { Card, CardContent } from '@/components/ui/card'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import React from 'react'
import { AreaChart, Area, CartesianGrid, ResponsiveContainer, XAxis } from 'recharts'

type Props = {}


const chartData = [
    {month: 'Jan', desktop: 86},
    {month: 'Feb', desktop: 50},
    {month: 'Mar', desktop: 37},
    {month: 'Apr', desktop: 73},
    {month: 'May', desktop: 29},
    {month: 'Jun', desktop: 14},
]

const chartConfig = {
    desktop: {
        label: 'Desktop',
        color: 'hsl(var(--chart-1))'
    }
}

const Chart = (props: Props) => {
  return (
    <>
    <Card className="border-none p-0">
        <CardContent className="p-0">
            <ResponsiveContainer 
                height={300} 
                width={'100%'}
            >
                <ChartContainer config={chartConfig}>
                    <AreaChart
                        accessibilityLayer
                        data={chartData}
                        margin={{right: 12, left: 12}}
                    >
                        <CartesianGrid vertical={false}/>
                        <XAxis 
                            dataKey="month" 
                            tickLine={false} 
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0,3)}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="line"/>}
                        />
                        <Area
                            dataKey="desktop"
                            type="natural"
                            fill="blue"
                            fillOpacity={0.2}
                            stroke="var(--color-desktop)"
                        />
                    </AreaChart>
                </ChartContainer>
            </ResponsiveContainer>
        </CardContent>
    </Card>
    </>
  )
}

export default Chart
