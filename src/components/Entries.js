import React, { Component } from 'react';
import Entry from './Entry';

class Entries extends Component {

    render() {
        return (   
            <div className="table-responsive">
                <table className="table table-hover table-bordered table-sm" id="myTable" cellSpacing="0" width="100%">
                    <thead>
                        <tr>
                            <th scope="col">Project Ref</th>
                            <th scope="col">country</th>
                            <th scope="col">implementing office</th>
                            <th scope="col">Project-title</th>
                            <th scope="col">Grant amount (USD)</th>
                            <th scope="col">Dates from GCF</th>
                            <th scope="col">Start date</th>
                            <th scope="col">Duration (months)</th>
                            <th scope="col">End date</th>
                            <th scope="col">Readiness or NAP</th>
                            <th scope="col">modify</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Entry />
                        <Entry />
                        <Entry />
                        <Entry />
                        <Entry />
                        <Entry />
                        <Entry />
                        <Entry />
                        <Entry />
                        <Entry />
                        { /*<Entry />
                        <Entry />
                        <Entry />
                        <Entry />
                        <Entry />
                        <Entry /> */}
                    </tbody>
                </table>
                <nav aria-label="...">
                <ul className="pagination justify-content-center">
                    <li className="page-item disabled">
                    <a className="page-link" href="#" tabindex="-1">Previous</a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item active">
                    <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                    <a className="page-link" href="#">Next</a>
                    </li>
                </ul>
                </nav>
                <span>Show </span>
                <select>
                <option>5 rows</option>
                <option>20 rows</option>
                <option>50 rows</option>
                <option>all</option>
                </select>
            </div>
        );
    }
}

export default Entries;
