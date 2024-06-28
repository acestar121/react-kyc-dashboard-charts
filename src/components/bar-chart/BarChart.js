import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { useDataContext } from "../../hooks/useDataContext";
import "./BarChart.scss";

const BarChart = () => {
  const chartRef = useRef(null);
  const { chartData } = useDataContext();

  useEffect(() => {
    drawChart();
  }, [chartData]);

  const drawChart = () => {
    const width = 450;
    const height = 300;
    const margin = { top: 20, right: 30, bottom: 40, left: 40 };

    // Remove the old svg, legend and tooltip
    d3.select(chartRef.current).select("svg").remove();
    d3.select(chartRef.current).selectAll(".legend").remove();
    d3.select(chartRef.current).selectAll(".tooltip").remove();

    // Create new svg
    const svg = d3
      .select(chartRef.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    // X scale
    const xScale = d3
      .scaleBand()
      .domain(chartData.map((d) => d.label))
      .range([0, width])
      .padding(0.1);

    // Y scale
    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(chartData, (d) => d.value)])
      .nice()
      .range([height, 0]);

    // Color scale
    const color = d3.scaleOrdinal(d3.schemeCategory10);

    // Tooltip
    const tooltip = d3
      .select(chartRef.current)
      .append("div")
      .attr("class", "tooltip")
      .style("opacity", 0);

    // Draw bars
    svg
      .selectAll(".bar")
      .data(chartData)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", (d) => xScale(d.label))
      .attr("y", (d) => yScale(d.value))
      .attr("width", xScale.bandwidth())
      .attr("height", (d) => height - yScale(d.value))
      .attr("fill", (d) => color(d.label))
      .on("mouseover", (event, d) => {
        const rect = chartRef.current.getBoundingClientRect();
        tooltip.transition().duration(200).style("opacity", 0.9);
        tooltip
          .html(`${d.label}: ${d.value}`)
          .style("left", event.clientX - rect.left + "px")
          .style("top", event.clientY - rect.top + "px");
      })
      .on("mousemove", (event) => {
        const rect = chartRef.current.getBoundingClientRect();
        tooltip
          .style("left", event.clientX - rect.left + "px")
          .style("top", event.clientY - rect.top + "px");
      })
      .on("mouseout", () => {
        tooltip.transition().duration(200).style("opacity", 0);
      });

    // X axis
    svg
      .append("g")
      .attr("class", "x-axis")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(xScale));

    // Y axis
    svg.append("g").attr("class", "y-axis").call(d3.axisLeft(yScale));
  };

  return <div ref={chartRef} className="bar-chart-container"></div>;
};

export default BarChart;
