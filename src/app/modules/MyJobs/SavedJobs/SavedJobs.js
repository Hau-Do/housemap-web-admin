import React, { Component } from 'react';
import './SavedJobs.scss';
import { savedJobs } from '../MyJobsService';
import JobItem from '../../../components/shared/JobItem/JobItem';
import not_found_data from '../../../../assets/img/not_found_data.svg';

class SavedJobs extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.getSavedJobs();
    }

    async getSavedJobs() {
        let data = await savedJobs();
        this.setState({savedJobs: data});
    }

    removeJobCallback = (data, jobIndex) => {
        if(data.success){
            let savedJobs = [...this.state.savedJobs];
            if (jobIndex !== -1) {
                savedJobs.splice(jobIndex, 1);
                this.setState({savedJobs: savedJobs});
            }
        }
    }

    render(){
        return (
            <div id="saved-jobs">
                {this.state.savedJobs && this.state.savedJobs.length>0 && this.state.savedJobs.map((job, index) => {
                    return(
                        <JobItem job={job} jobIndex={index} key={index} action={true} removeJob={this.removeJobCallback}/>
                    );
                })} 
                { this.state.savedJobs && this.state.savedJobs.length===0 &&
                    <div className="not-found-data-job-container">
                    <img className='not-data-job-image' alt="no" src={not_found_data}/>
                    <div className="no-job-text m-t-28">Your Saved Jobs is empty!</div>
                    <div className="no-job-text m-t-8">Start <span className="biscay-bold">searching for your jobs now!</span></div>
                    </div>
                }
            </div>
        );
    }
}

export default SavedJobs;
