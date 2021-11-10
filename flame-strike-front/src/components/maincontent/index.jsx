import React, { Component } from 'react';


export default class index extends Component {

    constructor(props){
        super(props);
        const { page } = props;
        this.state = {
            page:page
        }
    }
    
    render() {
        const { page } = this.state;
        return (
            <div style={{height:'100%'}}>
                <iframe style={{width:'100%', height:'100%' }} src={page}>
                 </iframe>
            </div>
        )
    }
}
