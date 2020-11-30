import React from "react";
import "./Grid.css";
import { GradLegalSex } from "./GradLegalSex.js";
import { Responsive, WidthProvider } from "react-grid-layout";
import { pdxDataCounts, pdxDataPercents } from "./apis/apiData";
import RaceGrad from "./RaceGrad.js";
import Persistence from "./Persistence.js";
//https://www.npmjs.com/package/react-grid-layout#installation

const ResponsiveReactGridLayout = WidthProvider(Responsive);

//placeholder for third chart
const chart3 = RaceGrad;

//placeholder for fourth chart
// const chart4 = Persistence;

class Grid extends React.Component {
  // needed to initialize state
  constructor() {
    super();
    // set index of each dataset to false
    // TODO: use meaningful property names?
    this.state = { 0: false, 1: false, 2: true, 3: false };
  }

  componentDidMount() {
    // set up the component by fetching data, and set appropriate state when the fetch succeeds

    pdxDataPercents("grad-demographics", "legal-sex").then(c => {
      // data loaded, store in state object
      this.setState({ legalSexPercent: c })
    }).catch(_ => {
      // failed load, ensure loaded=false for this dataset
      this.setState({ 0: false })
    }).finally(_ => {
      this.setState({ 0: true })
    });

    pdxDataCounts("grad-demographics", "legal-sex", false).then(c => {
      // data loaded, store in state object
      this.setState({ legalSexCounts: c })
    }).catch(_ => {
      // failed load, ensure loaded=false for this dataset
      this.setState({ 1: false})
    }).finally(_ => {
      this.setState({ 1: true })
    });

    pdxDataCounts("retention", "legal-sex", true).then(c => {
      this.setState({ legalSexPersistence: c })
    }).catch(_ => {
      // failed load, ensure loaded=false for this dataset
      this.setState({ 3: false})
    }).finally(_ => {
      console.log("loaded: ", this.state.legalSexPersistence);
      this.setState({ 3: true });
    });

    // TODO: load other datasets
  }

  render() {
    // conditionally avoid rendering unloaded data
    const gridItems = [
      {
        id: 1,
        name: "PSU CS Grad Class by Legal Sex (percentages)",
        chart: () => {
          if (this.state[0]) {
            return (<GradLegalSex data={this.state.legalSexPercent} isPercent={true} />);
          } else { return null; }
        }
      },
      {
        id: 2,
        name: "PSU CS Grad Class by Legal Sex (counts)",
        chart: () => {
          if (this.state[1]) {
            return (<GradLegalSex data={this.state.legalSexCounts} />);
          } else { return null; }
        }
      },
      {
        id: 3,
        name: "PSU CS Grad by Ethnicity",
        chart: chart3
      },
      {
        id: 4,
        name: "PSU CS Persistence",
        chart: () => {
          if (this.state[3]) {
            return (<Persistence data={this.state.legalSexPersistence} />);
          } else { return null; }
        }
      },
      // TODO: add IPEDS institution 6-year grad rates by legal sex
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
