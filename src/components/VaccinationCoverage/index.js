// Write your code here
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts'

import './index.css'

const VaccinationCoverage = props => {
  const {vaccineContainer} = props
  console.log(vaccineContainer)

  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 100).toString()}K`
    }
    return number.toString()
  }
  return (
    <div className="vaccine-container">
      <h1 className="coverage-heading">Vaccination Coverage</h1>
      <ResponsiveContainer width={1000} height={500}>
        <BarChart data={vaccineContainer} margin={{top: 10}}>
          <XAxis
            dataKey="vaccineDate"
            tick={{stroke: '#6c757d', strokeWidth: 1}}
          />
          <YAxis
            tickFormatter={DataFormatter}
            tick={{stroke: '#6c757d', strokeWidth: 0}}
          />
          <Legend wrapperStyle={{padding: 40}} />
          <Bar dataKey="dose1" name="DOSE1" fill="#2d87bb" barSize="8%" />
          <Bar dataKey="dose2" name="DOSE2" fill="#f54394" barSize="8%" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
export default VaccinationCoverage
