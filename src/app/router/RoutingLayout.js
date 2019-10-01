import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { NotFound } from '../components';
import { UserList } from '../modules/UserManagement';
import { ProjectList } from '../modules/ProjectManagement';

const RoutingLayout = () => (
    <div className="content-container" style={{ marginTop: '72px' }}>
        <div className="content-wrapper">
            <Switch>
                <Route path="/" component={UserList} exact/>
                <Route path="/user-management" component={UserList}/>
                <Route path="/project-management" component={ProjectList}/>
                <Route component={NotFound}/>
            </Switch>
            {/*  In a Switch component, only the first child < Route > or < Redirect >, that matches the location, will be rendered.  */}
        </div>
    </div>
);

export default RoutingLayout;