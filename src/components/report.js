import React,{ Component } from 'react';

import PivotTableUI from 'react-pivottable/PivotTableUI';
import 'react-pivottable/pivottable.css';
import TableRenderers from 'react-pivottable/TableRenderers';
import Plot from 'react-plotly.js';
import createPlotlyRenderers from 'react-pivottable/PlotlyRenderers';
import { openIMRs } from './store'

class Report extends Component{
    constructor(props){
        super(props);
        this.state = props;
    }
    render(){
        const PlotlyRenderers = createPlotlyRenderers(Plot);

        const data = openIMRs.map(imr=>{
           return{
               "agingDays":imr.agingDays,
               "inc":imr.inc,
               "category":imr.category,
               "maxSLALost":imr.maxSLALost,
               "maxSLALostBy":imr.maxSLALostBy
           }
        })
               
        
        return(
            <div className="chartBoundary">
                <PivotTableUI className="chartFrame"
                data={data}
                onChange={s => this.setState(s)}
                renderers={Object.assign({}, TableRenderers, PlotlyRenderers)}
                {...this.state}
            />
            </div>
        );
    }
}

export default Report;