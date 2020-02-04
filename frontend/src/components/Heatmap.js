import React, { useRef, useEffect } from 'react'
import * as d3 from 'd3'

function Heatmap ({ timestamps }) {
  const d3Ref = useRef(null)

  const width = 1200
  const height = 500

  useEffect(() => {
    if (timestamps.length > 0 && d3Ref.current) {
      // inspired by http://bl.ocks.org/tjdecke/5558084
      const margin = { top: 30, right: 30, bottom: 30, left: 50 }
      const adjustedWidth = width - margin.left - margin.right
      const time = [...Array(24).keys()].map(x => String(x))
      const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat']
      const colours = ['#f7fbff', '#deebf7', '#c6dbef', '#9ecae1', '#6baed6', '#4292c6', '#2171b5', '#08519c', '#08306b']

      const timeData = timestamps
        .map(t => {
          const date = new Date(t)
          return { hour: date.getHours(), day: date.getDay(), count: 1 }
        })
        .reduce((acc, cur) => {
          const sameHourAndDay = acc
            .find(
              timeObj =>
                timeObj.hour === cur.hour &&
                timeObj.day === cur.day
            )
          if (sameHourAndDay) {
            sameHourAndDay.count++
          } else {
            acc.push(cur)
          }
          return acc
        }, [])

      const maxCount = Math.max(...timeData.map(x => x.count))

      const getColour = count => {
        const index = Math.floor(count / maxCount * (colours.length - 1))
        return colours[index]
      }

      const cellSize = Math.floor(adjustedWidth / time.length)

      const svg = d3
        .select(d3Ref.current)
        .append('g')
        .attr('transform', `translate(${margin.left}, ${margin.top})`)

      svg
        .selectAll('.dayLabels')
        .data(days)
        .enter()
        .append('text')
        .text(d => d)
        .attr('x', -40)
        .attr('y', (_, i) => i * cellSize - 10)
        .attr('class', 'dayLabels')
        .attr('transform', `translate(-6, ${cellSize / 1.5})`)

      svg
        .selectAll('.timeLabels')
        .data(time)
        .enter()
        .append('text')
        .text(d => d)
        .attr('x', (_, i) => i * cellSize)
        .attr('y', 0)
        .attr('class', 'timeLabels')
        .attr('transform', `translate(${cellSize / 2}, -6)`)

      svg
        .selectAll('.cell')
        .data(timeData)
        .enter()
        .append('rect')
        .attr('x', d => d.hour * cellSize)
        .attr('y', d => d.day * cellSize)
        .attr('width', cellSize)
        .attr('height', cellSize)
        .attr('rx', 4)
        .attr('ry', 4)
        .attr('fill', d => getColour(d.count))
    }
  }, [timestamps])

  return (
    <svg ref={d3Ref} width={width} height={height} />
  )
}

export default Heatmap
