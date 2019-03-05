import React, { Component } from 'react'
import { Bar, Line, Pie } from 'react-chartjs-2'
import { imrsInOtherTeamsQueue } from './store'


class ReportWithChartJS extends Component {
    state = {
        imrs: this.props.imrs,
        imrsInOtherTeamsQueue: imrsInOtherTeamsQueue
    }
    getRandomBackgroundColor() {
        var hex = "0123456789ABCDEF",
            color = "#";
        for (var i = 1; i <= 6; i++) {
            color += hex[Math.floor(Math.random() * 16)];
            return color;
        }
    }
    render() {
       

        const dataForAgingMoreThan7Days = this.state.imrs.filter(imr => {
            return imr.age > 15
        })

        const chartLabels = dataForAgingMoreThan7Days.map(label => {
            return label.INC
        })
      

        const dataSetForAgingMoreThan7days = dataForAgingMoreThan7Days.map(data => {
            return data.age
        })
        console.log(`[ReportWithChartJS]:[render()]: dataSetForAgingMoreThan7days : `,dataSetForAgingMoreThan7days);

        const imrsForAwaitingServicing = this.state.imrs.filter(imr=>{
            return imr.section ==='Awaiting servicing'
        })
        
        
        const imrsForAwaitingServicingCount = imrsForAwaitingServicing.length
        console.log(`[ReportWithChartJS]:[render()]: imrsForAwaitingServicingCount :`,imrsForAwaitingServicingCount);

        const imrsForPendingInvestigation = this.state.imrs.filter(imr=>{
            return imr.section ==='Pending Investigation'
        })
        const imrsForPendingInvestigationCount = imrsForPendingInvestigation.length
        console.log(`[ReportWithChartJS]:[render()]: imrsForAwaitingServicingCount :`,imrsForPendingInvestigationCount);
        
        



        // const lessThan7DaysChartData = {
        //     labels: chartLabels,
        //     datasets: [{
        //         label: 'Aging days',
        //         data: dataSet,
        //         backgroundColor: '#3d42f1'
        //     }],
        //     borderColor: 'black'
        // }

        const moreThan7DaysChartData = {
            labels: chartLabels,
            datasets: [{
                label: 'Aging days',
                data: dataSetForAgingMoreThan7days,
                backgroundColor: '#1D06FC'

            }],
            borderColor: 'black'
        }





        const options = {
            maintainAspectRatio: false,
            responsive: false,
            legend: {
              position: 'left',
              labels: {
                boxWidth: 10
              }
            }
          }

          const data = {
            labels: [
              'Pending Investigation',
              'Awaiting servicing'
            ],
            datasets: [{
              data: [imrsForPendingInvestigationCount, imrsForAwaitingServicingCount],
              backgroundColor: [
              '#FF6384',
              
              '#FFCE56'
              ],
              hoverBackgroundColor: [
              '#FF6384',
              
              '#FFCE56'
              ]
            }]
          };


        return (
            <div className="reportSheet">
               

                <div className="barAreaForLessThan7Days">
                    <h6 className="indigo-text darken-3 center-align"><b>Aging More than 15 days</b></h6>
                    <Bar
                        data={moreThan7DaysChartData}
                        options={
                            {
                                maintainAspectRatio: false,
                                scales: {
                                    yAxes: [{
                                        ticks: {
                                            beginAtZero: true
                                        }
                                    }]
                                },
                                legend: {
                                    labels: {
                                        // This more specific font property overrides the global property
                                        fontColor: this.getRandomBackgroundColor()
                                    }
                                }
                            }
                        }
                    />

                </div>




                 {/* <div className="barAreaForLessThan7Days">
                    <h6 className="indigo-text darken-3 center-align"><b>Aging More than 7 days</b></h6>
                    <Bar
                        data={moreThan7DaysChartData}
                        options={
                            {
                                maintainAspectRatio: false,
                                scales: {
                                    yAxes: [{
                                        ticks: {
                                            beginAtZero: true
                                        }
                                    }]
                                },
                                legend: {
                                    labels: {
                                        // This more specific font property overrides the global property
                                        fontColor: '#4233ff'
                                    }
                                }
                            }
                        }
                    />

                </div> */}
                <div className="barAreaForLessThan7Days">
                    <h6 className="indigo-text darken-3 center-align"><b>Count of Issues</b></h6>
                    <Pie data={data} height={400} width={500} options={options}/>
                </div>






            </div>

        );
    }
}

export default ReportWithChartJS;