import { Group ,Select} from '@mantine/core'
import React from 'react';

const Filters = ({setFilters,filters,getData}) => {
  return (
    <Group>
         <Select 
         label="Select Frequency"
         placeholder="Select Frequency"
         data={[
            {label: "Last Week", value: "7"},
            {label: "Last Month", value: "30"},
            {label: "Last Year", value: "360"},
         ]}
         value={filters.frequency}
         onChange={(value) => setFilters({ ...filters, frequency: value })}
         name = "frequency"
         />
         
         <Select 
         label="Select Type"
         placeholder="Select Type"
         data={[
            {label: "All", value: ""},
            {label: "Income", value: "income"},
            {label: "Expense", value: "expense"},
         ]}
         value={filters.type}
         onChange={(value) => setFilters({...filters, type:value})}
         name = "type"
         />
    </Group>
  )
}

export default Filters