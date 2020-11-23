import React from "react";
import "./Grid.css";
import Benchmark from "./Benchmark.js";
import { Responsive, WidthProvider } from "react-grid-layout";
//https://www.npmjs.com/package/react-grid-layout#installation

const ResponsiveReactGridLayout = WidthProvider(Responsive);
class Grid extends React.Component {
  render() {
    const gridItems = [
      { id: 1, name: "Chart One Goes Here" },
      { id: 2, name: "Chart Two Goes Here" },
      { id: 3, name: "Chart Three Goes Here" },
      { id: 4, name: "Chart Four Goes Here" },
    ];

    const layout = [
      { i: "1", x: 0, y: 0, w: 5, h: 3 },
      { i: "2", x: 5, y: 0, w: 5, h: 3 },
      { i: "3", x: 0, y: 0, w: 5, h: 3 },
      { i: "4", x: 5, y: 0, w: 5, h: 3 },
    ];

    return (
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
                  width: "100%",
                  height: "80%",
                }}
              >
                <Benchmark />
              </div>
            </div>
          );
        })}
      </ResponsiveReactGridLayout>
    );
  }
}

export default Grid;
