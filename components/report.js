import React,{ Component } from 'react';

import PivotTableUI from 'react-pivottable/PivotTableUI';
import 'react-pivottable/pivottable.css';
import TableRenderers from 'react-pivottable/TableRenderers';
import Plot from 'react-plotly.js';
import createPlotlyRenderers from 'react-pivottable/PlotlyRenderers';

class Report extends Component{
    constructor(props){
        super(props);
        this.state = props;
    }
    render(){
        const PlotlyRenderers = createPlotlyRenderers(Plot);
        const data = [
            {"agingDays":"10","inc":"INC01001567","reporter":"Jensen","category":"vendor","createdOn":"12/31/18","status":"In Progress","subject":"Cannot link products","description":"12/30- Created the ticket.\n\n 12/31- Routed to MYCA"},
            {"agingDays":"5","inc":"INC01001568","reporter":"Jensen","category":"vendor","createdOn":"12/31/18","status":"In Progress","subject":"Cannot link products","description":"12/30- Created the ticket.\n\n 12/31- Routed to MYCA"},
            {"agingDays":"2","inc":"INC01001567","reporter":"Jensen","category":"Loan","createdOn":"12/31/18","status":"In Progress","subject":"Cannot link products","description":"12/30- Created the ticket.\n\n 12/31- Routed to MYCA"},
            {"agingDays":"10","inc":"INC01001567","reporter":"Jensen","category":"customer","createdOn":"12/31/18","status":"In Progress","subject":"Cannot link products","description":"12/30- Created the ticket.\n\n 12/31- Routed to MYCA"},
            {"agingDays":"5","inc":"INC01001567","reporter":"Jensen","category":"Loan","createdOn":"12/31/18","status":"In Progress","subject":"Cannot link products","description":"12/30- Created the ticket.\n\n 12/31- Routed to MYCA"},
            {"agingDays":"5","inc":"INC01001567","reporter":"Jensen","category":"elligibility","createdOn":"12/31/18","status":"In Progress","subject":"Cannot link products","description":"12/30- Created the ticket.\n\n 12/31- Routed to MYCA"},
            {"agingDays":"5","inc":"INC01001567","reporter":"Jensen","category":"Loan","createdOn":"12/31/18","status":"In Progress","subject":"Cannot link products","description":"12/30- Created the ticket.\n\n 12/31- Routed to MYCA"},
            {"agingDays":"5","inc":"INC01001567","reporter":"Jensen","category":"payment","createdOn":"12/31/18","status":"In Progress","subject":"Loan tequest has failed for 5 times","description":"12/30- Created the ticket.\n\n 12/31- Routed to MYCA"},
            {"agingDays":"8","inc":"INC01001567","reporter":"Jensen","category":"Loan","createdOn":"12/31/18","status":"In Progress","subject":"Cannot link products","description":"12/30- Created the ticket.\n\n 12/31- Routed to MYCA"},
            {"agingDays":"5","inc":"INC01001567","reporter":"Jensen","category":"vendor","createdOn":"12/31/18","status":"In Progress","subject":"Cannot link products","description":"12/30- Created the ticket.\n\n 12/31- Routed to MYCA"},
            {"agingDays":"5","inc":"INC01001567","reporter":"Jensen","category":"payment","createdOn":"12/31/18","status":"In Progress","subject":"Cannot link products","description":"12/30- Created the ticket.\n\n 12/31- Routed to MYCA"},
            {"agingDays":"5","inc":"INC01001567","reporter":"Jensen","category":"elligibility","createdOn":"12/31/18","status":"In Progress","subject":"Cannot link products","description":"12/30- Created the ticket.\n\n 12/31- Routed to MYCA"},
            {"agingDays":"5","inc":"INC01001567","reporter":"Jensen","category":"Loan","createdOn":"12/31/18","status":"In Progress","subject":"Cannot link products","description":"12/30- Created the ticket.\n\n 12/31- Routed to MYCA"},
            {"agingDays":"5","inc":"INC01001567","reporter":"Jensen","category":"customer","createdOn":"12/31/18","status":"In Progress","subject":"Cannot link products","description":"12/30- Created the ticket.\n\n 12/31- Routed to MYCA"},
            {"agingDays":"3","inc":"INC01001567","reporter":"Jensen","category":"customer","createdOn":"12/31/18","status":"In Progress","subject":"Cannot link products","description":"12/30- Created the ticket.\n\n 12/31- Routed to MYCA"},
            {"agingDays":"5","inc":"INC01001567","reporter":"Jensen","category":"Loan","createdOn":"12/31/18","status":"In Progress","subject":"Cannot link products","description":"12/30- Created the ticket.\n\n 12/31- Routed to MYCA"},
            {"agingDays":"4","inc":"INC01001567","reporter":"Jensen","category":"vendor","createdOn":"12/31/18","status":"In Progress","subject":"Cannot link products","description":"12/30- Created the ticket.\n\n 12/31- Routed to MYCA"}
        ]
        return(
            <div>
                <h2 className="yellow-text">Reports</h2>
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