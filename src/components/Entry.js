import React, { Component } from 'react';

class Entry extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            entry: {
                projectRef: 'ALB-RS-001',
                country: 'Albania, Romania',
                office: 'Europe Office',
                projectTitle: 'Readiness support to Albania',
                grantAmt: '300,000',
                datesFromCGF: '11/15/2016',
                startDate: '8/30/2016',
                duration: '12',
                endDate: '8/30/2017',
                readiness: 'Readiness',
                modify: {
                    edit: 'edit',
                    delete: 'delete'
                }
            },
        }
    }

    render() {
        return (
            <tr>
                <td>{this.state.entry.projectRef}</td>
                <td>{this.state.entry.country}</td>
                <td>{this.state.entry.office}</td>
                <td>{this.state.entry.projectTitle}</td>
                <td>{this.state.entry.grantAmt}</td>
                <td>{this.state.entry.datesFromCGF}</td>
                <td>{this.state.entry.startDate}</td>
                <td>{this.state.entry.duration}</td>
                <td>{this.state.entry.endDate}</td>
                <td>{this.state.entry.readiness}</td>
                <td>{this.state.entry.modify.edit}</td>
                <td>{this.state.entry.modify.delete}</td>
            </tr>
        );
    }
}

export default Entry