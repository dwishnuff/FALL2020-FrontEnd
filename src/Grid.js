import React from "react";
import "./Grid.css";
import Benchmark from "./Benchmark.js";
import GenderGrad from "./GenderGrad.js";
import RaceGrad from "./RaceGrad.js";
import Persistence from "./Persistence.js"
import { Responsive, WidthProvider } from "react-grid-layout";
//https://www.npmjs.com/package/react-grid-layout#installation

const ResponsiveReactGridLayout = WidthProvider(Responsive);

//placeholder for a benchmark chart
const chart1 = Benchmark;

//placeholder for second chart
const chart2 = GenderGrad;

//placeholder for third chart
const chart3 = RaceGrad;

//placeholder for fourth chart
const chart4 = Persistence;

class Grid extends React.Component {
  render() {
    const gridItems = [
      { id: 1, name: "PSU compared to Tier One CS", chart: chart1},
      { id: 2, name: "PSU CS Grad Class by Legal Sex", chart: chart2},
      { id: 3, name: "PSU CS Grad by Ethnicity", chart: chart3},
      { id: 4, name: "PSU CS Persistence",chart: chart4},
    ];

    const layout = [
      { i: "1", x: 0, y: 0, w: 5, h: 3 },
      { i: "2", x: 5, y: 0, w: 5, h: 3 },
      { i: "3", x: 0, y: 0, w: 5, h: 3 },
      { i: "4", x: 5, y: 0, w: 5, h: 3 },
    ];

    return (
        <div class = "grid">
      <ResponsiveReactGridLayout
        //layouts={{ lg:layout}, {md:layout}, {sm:layout}}
        layouts={{ lg: layout }}
        //breakpoints={{lg: 1200, md: 996, sm: 768}}
        measureBeforeMount={true}
        className="layout"
        autoSize={true}
        rowHeight={this.props.rowHeight}
        isDragable={true}
        isResizable={true}
        onDrag={this.onDragging}
        onDragStop={this.onMoveCard}
        onResizeStop={this.onResizeCard}
        margin={[20, 20]}
      >
        {gridItems.map((item, i) => {
          return (
            <div key={item.id} className="grid-item">
              <h3>{item.name}</h3>
              <div
                style={{
                  width: "90%",
                  height: "80%",
                  margin: "0 auto"
                }}
              >
                <item.chart />
              </div>
            </div>
          );
        })}
      </ResponsiveReactGridLayout>
      </div>
    );
  }
}

export default Grid;
