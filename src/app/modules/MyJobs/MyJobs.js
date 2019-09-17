import React, { Component } from 'react';
import './MyJobs.scss';
import DesktopHeader from '../../components/shared/DesktopHeader/DesktopHeader';
// import { Tab } from 'semantic-ui-react';

import AppliedJobs from './AppliedJobs/AppliedJobs';
import SavedJobs from './SavedJobs/SavedJobs';

class MyJobs extends Component {
    render(){
        // const panes = [
        //     {   menuItem: { key: 'applied-jobs', content: <div><i className="far fa-check-double icon-for-job"></i>Applied Jobs</div> }, 
        //         render: () => <Tab.Pane className="tab-pane-job"><AppliedJobs/></Tab.Pane> },
        //     {   menuItem: { key: 'saved-jobs', content: <div><i className="fal fa-heart icon-for-job"></i>Saved Jobs</div> }, 
        //     render: () => <Tab.Pane className="tab-pane-job"><SavedJobs/></Tab.Pane> },
        // ]
        return (
            <div>
                <DesktopHeader/>
                <div id="my-jobs" className="container">
                    {/* <Tab menu={{ fluid: true, vertical: true }} menuPosition='left' panes={panes} /> */}
                </div>
            </div>
        );
    }
}

export default MyJobs;
