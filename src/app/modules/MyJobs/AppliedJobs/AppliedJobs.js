import React, { Component } from 'react';
import './AppliedJobs.scss';
import { appliedJobs } from '../MyJobsService';
import JobItem from '../../../components/shared/JobItem/JobItem';
import not_found_data from '../../../../assets/img/not_found_data.svg';

class AppliedJobs extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.getAppliedJobs();
    }

    async getAppliedJobs() {
        let data = await appliedJobs();
        this.setState({appliedJobs: data});
    }
    
    render(){
        return (
            <div id="applied-jobs">
                {this.state.appliedJobs && this.state.appliedJobs.length>0 && this.state.appliedJobs.map((job, index) => {
                    return(
                        <JobItem job={job} key={index}/>
                    );
                })} 
                { this.state.appliedJobs && this.state.appliedJobs.length===0 &&
                    <div className="not-found-data-job-container">
                    <img className='not-data-job-image' alt="no" src={not_found_data}/>
                    <div className="no-job-text m-t-28">Look like you have not apply any company yet ?</div>
                    <div className="no-job-text m-t-8">Start <span className="biscay-bold">searching for opportunities</span> or apply your <span className="biscay-bold">saved jobs</span></div>
                    </div>
                }
            </div>
        );
    }
}

export default AppliedJobs;
