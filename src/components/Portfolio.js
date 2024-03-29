import React, { Component } from 'react';
export default class Porfolio extends Component {
render() {
let resumeData = this.props.resumeData;
    return (
        <section id='portfolio'>
            <div className='row'>
                <div className='twelve columns collapsed'>
                    <h1>My Projects</h1>
                    <div id='portfolio-wrapper' className='bgrid-quarters s-bgrid-thirds cf' alt=''>
                    {
                        resumeData.portfolio && resumeData.portfolio.map((item)=>{
                            return(
                                <div className='columns portfolio-item' key={item.name}>
                                    <a href={item.link} target="_blank">
                                        <div className='item-wrap' >
                                            <img src={item.imgurl} className='item-img'/>
                                            <div className='overlay'>
                                                <div className='portfolio-item-meta'>    
                                                        <h5>{item.name}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
        </section>
        );
    }
}