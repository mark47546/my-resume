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
                        <div className='columns portfolio-item'>
                            <div className='item-wrap'>
                                
                                    <img src={item.imgurl} className='item-img'/>
                                    <div className='overlay'>
                                        <div className='portfolio-item-meta'>
                                            <a href={item.link}>
                                                <h5>{item.name}</h5>
                                            </a>
                                        </div>
                                    </div>
                                    {/* <h5>{item.description}</h5> */}
                                
                            </div>
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