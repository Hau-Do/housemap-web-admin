import React, { Component } from 'react';
import './DesktopHeader.scss';
// import { Container, Input, Image, Menu, Dropdown } from 'semantic-ui-react';
import history from '../../../utils/BrowserHistory';
import jobhop_logo from '../../../../assets/logo/jobhop_logo.svg';
import vi_lang from '../../../../assets/icon/vi_lang.svg';

class DesktopHeader extends Component {
    constructor(props){
        super(props);
        this.state = {
           
        };

        this.handleItemClick = this.handleItemClick.bind(this);
    }

    handleItemClick(e, { name }){
        this.setState({
            activeItem: name 
        })
        history.push('/'+name);
    }

    render(){
        const { activeItem } = this.state;
        return (
            <div id="desktop-header">
                {/* <Menu className="desktop-header-menu" fixed='top' size='massive'>
                    <Container>
                        <Image size='mini' src={jobhop_logo} style={{ marginRight: '1.5em' }} />
                        <Menu.Item 
                            className="menu-item" 
                            name='my-profile' 
                            active={activeItem === 'my-profile'} 
                            onClick={this.handleItemClick}>
                            My Profile
                        </Menu.Item>
                        <Menu.Item 
                            className="menu-item" 
                            name='my-jobs' 
                            active={activeItem === 'my-jobs'} 
                            onClick={this.handleItemClick}>
                            My Jobs
                        </Menu.Item>
                        <Menu.Item 
                            className="menu-item" 
                            name='my-cvs'
                            active={activeItem === 'my-cvs'} 
                            onClick={this.handleItemClick}>
                            My CVs
                        </Menu.Item>
                        <Menu.Menu className="menu-item-right" position='right'>
                            <Menu.Item className="menu-item-inside" >
                                <Input icon='search' placeholder='Search...' />
                            </Menu.Item>
                            <Dropdown item className="menu-item-inside" text='Lam Phong'>
                                <Dropdown.Menu>
                                    <Dropdown.Item>what?  what?</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Menu.Item className="menu-item-inside">
                                <Image size='mini' src={vi_lang} style={{ marginRight: '1.5em' }} />
                            </Menu.Item>
                        </Menu.Menu>
                    </Container>
                </Menu> */}
            </div>
        );
    }
}

export default DesktopHeader;
