import React, { Component } from 'react'
import { Bar, Line, Pie } from 'react-chartjs-2'
import { imrsInOtherTeamsQueue } from './store'


class ReportWithChartJS extends Component {
    state = {
        imrs: [
            { "id": "1", "agingDays": 10, "inc": "INC01001567", "reporter": "Jensen", "category": "Loan", "createdOn": "12/31/18", "status": "In Progress", "subject": "Cannot link products", "description": "12/30- Created the ticket.\n\n 12/31- Routed to MYCA" },
            { "id": "2", "agingDays": 5, "inc": "INC01001568", "reporter": "Jensen", "category": "Loan", "createdOn": "12/31/18", "status": "In Progress", "subject": "Cannot link products", "description": "12/30- Created the ticket.\n\n 12/31- Routed to MYCA" },
            { "id": "3", "agingDays": 2, "inc": "INC01001569", "reporter": "Jensen", "category": "Loan", "createdOn": "12/31/18", "status": "In Progress", "subject": "Cannot link products", "description": "12/30- Created the ticket.\n\n 12/31- Routed to MYCA" },
            { "id": "4", "agingDays": 10, "inc": "INC01001560", "reporter": "Jensen", "category": "Loan", "createdOn": "12/31/18", "status": "In Progress", "subject": "Cannot link products", "description": "12/30- Created the ticket.\n\n 12/31- Routed to MYCA" },
            { "id": "5", "agingDays": 5, "inc": "INC01001571", "reporter": "Jensen", "category": "Loan", "createdOn": "12/31/18", "status": "In Progress", "subject": "Cannot link products", "description": "12/30- Created the ticket.\n\n 12/31- Routed to MYCA" },
            { "id": "6", "agingDays": 5, "inc": "INC01001572", "reporter": "Jensen", "category": "Loan", "createdOn": "12/31/18", "status": "In Progress", "subject": "Cannot link products", "description": "12/30- Created the ticket.\n\n 12/31- Routed to MYCA" },
            { "id": "7", "agingDays": 5, "inc": "INC01001573", "reporter": "Jensen", "category": "Loan", "createdOn": "12/31/18", "status": "In Progress", "subject": "Cannot link products", "description": "12/30- Created the ticket.\n\n 12/31- Routed to MYCA" },
            { "id": "8", "agingDays": 5, "inc": "INC01001574", "reporter": "Jensen", "category": "Loan", "createdOn": "12/31/18", "status": "In Progress", "subject": "Loan tequest has failed for 5 times", "description": "12/30- Created the ticket.\n\n 12/31- Routed to MYCA" },
            { "id": "9", "agingDays": 8, "inc": "INC01001575", "reporter": "Jensen", "category": "Loan", "createdOn": "12/31/18", "status": "In Progress", "subject": "Cannot link products", "description": "12/30- Created the ticket.\n\n 12/31- Routed to MYCA" },
            { "id": "10", "agingDays": 5, "inc": "INC01001576", "reporter": "Jensen", "category": "Loan", "createdOn": "12/31/18", "status": "In Progress", "subject": "Cannot link products", "description": "12/30- Created the ticket.\n\n 12/31- Routed to MYCA" },
            { "id": "11", "agingDays": 5, "inc": "INC01001577", "reporter": "Jensen", "category": "Loan", "createdOn": "12/31/18", "status": "In Progress", "subject": "Cannot link products", "description": "12/30- Created the ticket.\n\n 12/31- Routed to MYCA" },
            { "id": "12", "agingDays": 5, "inc": "INC01001578", "reporter": "Jensen", "category": "Loan", "createdOn": "12/31/18", "status": "In Progress", "subject": "Cannot link products", "description": "12/30- Created the ticket.\n\n 12/31- Routed to MYCA" },
            { "id": "13", "agingDays": 8, "inc": "INC01001579", "reporter": "Jensen", "category": "Loan", "createdOn": "12/31/18", "status": "In Progress", "subject": "Cannot link products", "description": "12/30- Created the ticket.\n\n 12/31- Routed to MYCA" },
            { "id": "14", "agingDays": 9, "inc": "INC01001580", "reporter": "Jensen", "category": "Loan", "createdOn": "12/31/18", "status": "In Progress", "subject": "Cannot link products", "description": "12/30- Created the ticket.\n\n 12/31- Routed to MYCA" },
            { "id": "15", "agingDays": 3, "inc": "INC01001581", "reporter": "Jensen", "category": "Loan", "createdOn": "12/31/18", "status": "In Progress", "subject": "Cannot link products", "description": "12/30- Created the ticket.\n\n 12/31- Routed to MYCA" },
            { "id": "16", "agingDays": 6, "inc": "INC01001582", "reporter": "Jensen", "category": "Loan", "createdOn": "12/31/18", "status": "In Progress", "subject": "Cannot link products", "description": "12/30- Created the ticket.\n\n 12/31- Routed to MYCA" },
            { "id": "17", "agingDays": 4, "inc": "INC01001583", "reporter": "Jensen", "category": "Loan", "createdOn": "12/31/18", "status": "In Progress", "subject": "Cannot link products", "description": "12/30- Created the ticket.\n\n 12/31- Routed to MYCA" }
        ],
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
        const dataForAgingLessThan7Days = this.state.imrs.filter(imr => {
            return imr.agingDays < 7
        })

        const chartLabels = dataForAgingLessThan7Days.map(label => {
            return label.inc
        })
        const dataSet = dataForAgingLessThan7Days.map(data => {
            return data.agingDays
        })

        const imrsWithOthers = this.state.imrsInOtherTeamsQueue.map(imr => {
            let pulseColor = ''
            if (imr.agingDays >= 4) {
                pulseColor = 'red darken-3 pulse'

            } else if (imr.agingDays >= 2 && imr.agingDays < 4) {
                pulseColor = 'yellow darken-2'
            } else {
                pulseColor = 'green darken-3'
            }
            return (
                <tr key={imr.id}>
                    <td className="cell_data_imr center-align incNumberWithUrgency">
                        {imr.inc} &nbsp; &nbsp;
                    <button className={`btn-floating z-depth-4 smallerButton ${pulseColor}`}></button>
                    </td>

                    <td className="cell_data center-align">{imr.category}</td>
                    <td className="cell_data center-align">{imr.issueWith}</td>
                    <td className="cell_data center-align">{imr.agingDays}</td>
                    <td className="cell_data bigtextAreas">{imr.subject}</td>
                    <td className="cell_data">{imr.reporter}</td>

                    <td className="cell_data center-align">{imr.createdOn}</td>

                </tr>);


        })


        const lessThan7DaysChartData = {
            labels: chartLabels,
            datasets: [{
                label: 'Aging days',
                data: dataSet,
                backgroundColor: '#3d42f5'
            }],
            borderColor: 'black'
        }


        return (
            <div className="reportSheet">
                <h6 className="yellow-text center-align"><b>Issues to be followed up</b></h6>
                <table className="striped indigo lighten-4 otherTeamsIMRTable">
                    <thead>
                        <tr className="indigo darken-2 white-text">
                            <td className="cell_header center-align">INC Number</td>
                            <td className="cell_header center-align">Category</td>
                            <td className="cell_header center-align">Issue With</td>
                            <td className="cell_header center-align">Aging Days</td>
                            <td className="cell_header center-align">Subject</td>
                            <td className="cell_header center-align">Reporter</td>
                            <td className="cell_header center-align">Created On</td>
                        </tr>
                    </thead>
                    <tbody>
                        {imrsWithOthers}
                    </tbody>
                </table>

                <div className="barAreaForLessThan7Days">
                    <h6 className="indigo-text darken-3 center-align"><b>Aging Less than 7 days</b></h6>
                    <Bar
                        data={lessThan7DaysChartData}
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

                </div>
            </div>

        );
    }
}

export default ReportWithChartJS;