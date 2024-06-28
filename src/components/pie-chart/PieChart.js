// src/components/PieChart.js
import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { useDataContext } from "../../hooks/useDataContext";
import "./PieChart.scss";

const PieChart = () => {
  const chartRef = useRef(null);
  const [highlightedLabel, setHighlightedLabel] = useState(null);
  const { chartData } = useDataContext();

  useEffect(() => {
    drawChart();
  }, [highlightedLabel, chartData]);

  const drawChart = () => {
    const width = 250;
    const height = 250;
    const margin = 10;
    const radius = Math.min(width, height) / 2 - margin;

    // Remove the old svg, legend and tooltip
    d3.select(chartRef.current).select("svg").remove();
    d3.select(chartRef.current).selectAll(".legend").remove();
    d3.select(chartRef.current).selectAll(".tooltip").remove();

    // Create new svg
    const svg = d3
      .select(chartRef.current)
      .append("svg")
      .attr("width", width + margin * 2)
      .attr("height", height + margin * 2)
      .append("g")
      .attr(
        "transform",
        `translate(${width / 2 + margin}, ${height / 2 + margin})`
      );

    // Color scale
    const color = d3.scaleOrdinal(d3.schemeCategory10);

    // Compute the position of each group on the pie
    const pie = d3.pie().value((d) => d.value);
    const data_ready = pie(chartData);

    // The arc generator
    const arc = d3.arc().innerRadius(0).outerRadius(radius);

    // Tooltip
    const tooltip = d3
      .select(chartRef.current)
      .append("div")
      .attr("class", "tooltip")
      .style("opacity", 0);

    // Build the pie chart
    svg
      .selectAll("path")
      .data(data_ready)
      .enter()
      .append("path")
      .attr("d", arc)
      .attr("fill", (d) => color(d.data.label))
      .attr("stroke", "white")
      .style("stroke-width", "1px")
      .attr("transition", "1s")
      .style("opacity", (d) =>
        !highlightedLabel || d?.data?.label === highlightedLabel ? 1 : 0.3
      )
      .attr("transform", (d) =>
        highlightedLabel && d.data.label === highlightedLabel
          ? `translate(${arc.centroid(d)[0] * 0.1}, ${
              arc.centroid(d)[1] * 0.1
            })`
          : ""
      )
      .on("mouseover", function (event, d) {
        setHighlightedLabel(d.data.label);
        const rect = chartRef.current.getBoundingClientRect();
        d3.select(this).style("opacity", 1);
        tooltip.transition().duration(200).style("opacity", 0.9);
        tooltip
          .html(d?.data?.label + ": " + d?.data?.value)
          .style("left", event.clientX - rect.left + "px")
          .style("top", event.clientY - rect.top + "px");
      })
      .on("mousemove", function (event, d) {
        setHighlightedLabel(d.data.label);
        const rect = chartRef.current.getBoundingClientRect();
        tooltip
          .style("left", event.clientX - rect.left + "px")
          .style("top", event.clientY - rect.top + "px");
      })
      .on("mouseout", function (d) {
        setHighlightedLabel("");
        if (!highlightedLabel || d?.data?.label !== highlightedLabel) {
          d3.select(this).style("opacity", 0.3);
        }
        tooltip.transition().duration(200).style("opacity", 0);
      });

    // Add legend
    const legend = d3
      .select(chartRef.current)
      .append("div")
      .attr("class", "legend");

    const legendItem = legend
      .selectAll(".legend-item")
      .data(chartData)
      .enter()
      .append("div")
      .attr("class", "legend-item")
      .on("click", (event, d) => {
        setHighlightedLabel(d.label);
        tooltip.transition().duration(200).style("opacity", 0.9);
        tooltip
          .html(d.label + ": " + d.value)
          .style("left", width / 2 + margin + "px")
          .style("top", height / 2 + margin - 28 + "px");
      });

    legendItem
      .append("div")
      .attr("class", "legend-color")
      .style("background-color", (d) => color(d.label));

    legendItem
      .append("div")
      .attr("class", "legend-label")
      .text((d) => d.label);
  };

  return <div ref={chartRef} className="pie-chart-container"></div>;
};

export default PieChart;
