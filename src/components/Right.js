import { Box } from '@mui/material'
import React from 'react'
import ReactApexChart from 'react-apexcharts'

const Right = ({ chart }) => {
 

  //console.log(prices)
  const price = chart.map(el => {
    console.log(el[1])
    return (
      el[1]
    )
  })
  const date = chart.map(el => {
    console.log(new Date(el[0]).toDateString())
    return (
      new Date(el[0]).toDateString()
    )
  })
  

  //console.log(data)
  const series = [{
    name: "Desktops",
    data: price,
  }]
  const options = {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      }
    },

    dataLabels: {
      enabled: false,

    },
    stroke: {
      curve: 'straight'
    },
    title: {
      text: 'Product Trends by Month',
      align: 'left'
    },
    grid: {
      show: false,
      row: {
        colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },

    },
     xaxis: {
       categories: date,
     },
    // xaxis: {
    //   show: false,
    //   labels: {
    //     show: false
    //   },
    //   axisBorder: {
    //     show: false
    //   },
    //   axisTicks: {
    //     show: false
    //   }
    // },
    colors:['#FFD700'],
    // yaxis: {
    //   show: false,
    //   labels: {
    //     show: false
    //   },
    //   axisBorder: {
    //     show: false
    //   },
    //   axisTicks: {
    //     show: false
    //   }
    // },
  }
  return (
    <Box flex={5} sx={{ padding: '1rem' }}>
      <ReactApexChart series={series} options={options} type="line" height={650} />
    </Box>
  )
}

export default Right
