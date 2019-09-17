import React, { Component } from 'react';
import './MyCVs.scss';
import { getCvList } from './MyCvsService';

import DesktopHeader from '../../components/shared/DesktopHeader/DesktopHeader';

class MyCVs extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount(){
        this.getCvs();
    }

    async getCvs() {
        let data = await getCvList();
        this.setState({listCv: data});
    }

    render(){
        return (
            <div>
                <DesktopHeader/>
                <div id="my-cvs" className="container">
                    {this.state.listCv && this.state.listCv.length>0 && this.state.listCv.map((cv, index) => {
                        return(
                            <div key={index}>
                                <div>{cv.id}</div>
                                <div>{cv.link}</div>
                                <div>{cv.nameFile}</div>
                                <br></br>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default MyCVs;
