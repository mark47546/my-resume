import React,{Component} from 'react';
export default class ContactUs extends Component{
    render(){
        let resumeData = this.props.resumeData;
        return(
            <section id='contact'>
                <div className='align-center'>
                    <div className='row' >
                            <div className='widget'>
                                <h4>
                                    Github: <a href='https://github.com/mark47546'>{resumeData.githubId}</a>
                                </h4>
                                <h4>
                                    Contact: {resumeData.telephoneNum}
                                </h4>
                                <h4>
                                    Gmail: {resumeData.gmail}
                                </h4>
                            </div>
                    </div>
                </div>
            </section>
        );
    }
}