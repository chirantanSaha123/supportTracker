import React,{ Component } from 'react';

import PivotTableUI from 'react-pivottable/PivotTableUI';
import 'react-pivottable/pivottable.css';
import TableRenderers from 'react-pivottable/TableRenderers';
import Plot from 'react-plotly.js';
import createPlotlyRenderers from 'react-pivottable/PlotlyRenderers';
import { imrsInOtherTeamsQueue } from './store'

class Report extends Component{
    constructor(props){
        super(props);
        this.state = props;
    }
    render(){
        const PlotlyRenderers = createPlotlyRenderers(Plot);
        const allOpenImrs = this.props.imrs
        console.log(`[Report]:[render()]:allOpenImrs:`,allOpenImrs)

        const data = allOpenImrs.map(imr=>{
           return{
               "agingDays":imr.age,
               "inc":imr.INC,
               "category":imr.analyzedCategory,
               "maxSLALost":imr.maxSLALost,
               "maxSLALostBy":imr.mostSLALostBy,
               "pending_reason": imr.section

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