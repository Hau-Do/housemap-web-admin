import React, { Component } from 'react';
import './JobItem.scss';
import { applyJob, removeJob } from '../../../modules/MyJobs/MyJobsService';
import { getMonthDayYear, urlJobHop } from '../../../utils/helper';
// import { Button } from 'semantic-ui-react';

class JobItem extends Component {
    constructor(props){
        super(props);
        this.state = {};

        this.apply = this.apply.bind(this);
        this.remove = this.remove.bind(this);
    }

    componentDidMount(){
    }

    async remove(job, jobIndex) {
        let data = await removeJob(job.id+'/favourite');
        this.props.removeJob(data, jobIndex);
    }

    async apply(job, jobIndex) {
        let data = await applyJob(job.id+'/apply');
        if(data.success){
            this.remove(job, jobIndex);
        }
    }

    render(){
        return (
            <div className="job-item">
                <div className={this.props.action ? "company-logo-container saved-job" : "company-logo-container"}>
                    <img className="company-logo" alt="no" src={this.props.job.organization.logo}></img>
                </div>
                <div className="job-infor-container">
                    <div className="job-address">
                        <a target="_blank" rel="noopener noreferrer" href={urlJobHop(this.props.job, process.env.REACT_APP_API_ROOT_JOBSEEKER)} className="job text-bold-blue">{this.props.job.position}</a> {this.props.job.cityName && <span>-</span>} <span className="address">{this.props.job.districtName && (this.props.job.districtName +', ')}{this.props.job.cityName}</span>
                    </div>
                    <div className="company text-bold-blue">{this.props.job.organization.name}</div>
                    {this.props.action ? 
                    <div className="applied-date">Posted on {getMonthDayYear(this.props.job.lastUpdate)}</div> 
                    : <div className="applied-date">Applied on {getMonthDayYear(this.props.job.appliedDate)}</div>
                    }
                </div>
                {this.props.action && 
                <div className="action-buttons">
                    <div className="remove" onClick={() => this.remove(this.props.job, this.props.jobIndex)}>
                        <i className="fas fa-trash"></i>
                        <div>Remove</div>
                    </div>
                    {/* <Button className="apply" onClick={() => this.apply(this.props.job, this.props.jobIndex)}>Apply</Button> */}
                </div>
                }
            </div>
        );
    }
}

export default JobItem;
