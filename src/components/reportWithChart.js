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

       
       //1
       
        const imrsForElligibility = this.state.imrs.filter(imr=>{
            return imr.section ==='Elligibility'
        })
        
        
        const imrsForElligibilitygCount = imrsForElligibility.length
        console.log(`[ReportWithChartJS]:[render()]: imrsForElligibility :`,imrsForElligibilitygCount);

        //2
        const imrsForMissedCapability = this.state.imrs.filter(imr=>{
            return imr.section ==='Missed Capability'
        })
        const imrsForMissedCapabilityCount = imrsForMissedCapability.length
        console.log(`[ReportWithChartJS]:[render()]: imrsForMissedCapabilityCount :`,imrsForMissedCapabilityCount);
        
        //3
        const imrsForBusinessException = this.state.imrs.filter(imr=>{
            return imr.section ==='Business Exception'
        })
        const imrsForBusinessExceptionCount = imrsForBusinessException.length
        console.log(`[ReportWithChartJS]:[render()]: imrsForBusinessExceptionCount :`,imrsForBusinessExceptionCount);
        //4
        const imrsForMissedUseCase = this.state.imrs.filter(imr=>{
            return imr.section ==='Missed Use Case'
        })
        const imrsForMissedUseCaseCount = imrsForMissedUseCase.length
        console.log(`[ReportWithChartJS]:[render()]: imrsForMissedUseCaseCount :`,imrsForMissedUseCaseCount);

        //5 Production Failure
        const imrsForProductionFailure = this.state.imrs.filter(imr=>{
            return imr.section ==='Production Failure'
        })
        const imrsForProductionFailureCount = imrsForProductionFailure.length
        console.log(`[ReportWithChartJS]:[render()]: imrsForProductionFailureCount :`,imrsForProductionFailureCount);
        //6
        const imrsForOtherIssues = this.state.imrs.filter(imr=>{
            return imr.section ==='Other'
        })
        const imrsForOtherIssuesCount = imrsForOtherIssues.length
        console.log(`[ReportWithChartJS]:[render()]: imrsForOtherIssuesCount :`,imrsForOtherIssuesCount);





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
              'Elligibility',
              'Missed Capability',
              'Business Exception',
              'Missed Use Case',
              'Production Failure',
              'Other'
            ],
            datasets: [{
              data: [
                  imrsForElligibilitygCount, 
                  imrsForMissedCapabilityCount,
                  imrsForBusinessExceptionCount,
                  imrsForMissedUseCaseCount,
                  imrsForProductionFailureCount,
                  imrsForOtherIssuesCount
                ],
              backgroundColor: [
              '#FF5733',              
              '#9B59B6',
              '#16A085',
              '#7E5109',
              '#424949',
              '#FFC300'
              ],
              hoverBackgroundColor: [
                '#FF5733',              
              '#9B59B6',
              '#16A085',
              '#7E5109',
              '#424949',
              '#FFC300'
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




  
                <div className="barAreaForLessThan7Days">
                    <h6 className="indigo-text darken-3 center-align"><b>Count of Issues by High level Category</b></h6>
                    <Pie className="positionPieChart" data={data} height={400} width={750} options={options}/>
                </div>






            </div>

        );
    }
}

export default ReportWithChartJS;