import React from 'react'
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label } from 'recharts';
// import Hoc from "../../hoc/Hoc"

const initData = (date,amount) => {
  return {date,amount};
}

const data = [
    initData("19/2/2021",0),
    initData("20/2/2021",1000),
    initData("21/2/2021",3000),
    initData("22/2/2021",8000),
    initData("23/2/2021",4000),
    initData("24/2/2021",5000),
    initData("25/2/2021",undefined),
];

const Chart = () => {
const theme = useTheme();
    
    return (
        <LineChart
          data={data}
          width={500}
          height={300}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="date" stroke={theme.palette.text.secondary}/>
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Amount
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} />
        </LineChart>
    )
        
      
}

export default Chart;