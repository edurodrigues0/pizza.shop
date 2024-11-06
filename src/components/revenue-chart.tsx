import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts'
import colors from 'tailwindcss/colors'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const data = [
  { date: '01/11', revenue: 1200 },
  { date: '02/11', revenue: 800 },
  { date: '03/11', revenue: 561 },
  { date: '04/11', revenue: 2569 },
  { date: '05/11', revenue: 1574 },
  { date: '06/11', revenue: 741 },
  { date: '07/11', revenue: 622 },
]

export function RevenueChart() {
  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Receita no período
          </CardTitle>
          <CardDescription>Receita diário no período</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={data} style={{ fontSize: 12 }}>
            <YAxis
              stroke="#888"
              axisLine={false}
              tickLine={false}
              width={120}
              tickFormatter={(value: number) =>
                value.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })
              }
            />

            <XAxis dataKey="date" tickLine={false} axisLine={false} dy={16} />

            <CartesianGrid
              vertical={false}
              className="stroke-neutral-300 dark:stroke-neutral-800"
            />

            <Line
              type="linear"
              strokeWidth={2}
              dataKey="revenue"
              stroke={colors.violet['500']}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
