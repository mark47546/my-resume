import React ,{Component} from 'react';
import './styles.css'
export default class About extends Component {
    render(){
        let resumeData = this.props.resumeData;
        return(
            <section id = 'about'>
                <div className='row'>
                    <div className='three columns'>
                        <img className='profile-pic' src='images/profile.jpeg' alt='' />
                    </div>
                    <div className='nine columns main-col'>
                        <div className='row'>
                            <h2 className='alignleft'>About Me</h2>
                            <p className='alignleft'>
                                {
                                    resumeData.aboutMe
                                }
                            </p>
                        </div>
                        <div className='row'>
                            <h2 className='alignleft'>Contact Details</h2>
                            <p className='alignleft'>
                                {resumeData.name}
                                <br></br>
                                {resumeData.gmail}
                                <br></br>
                                {resumeData.telephoneNum}                                   
                                <br></br>
                                {resumeData.address}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}