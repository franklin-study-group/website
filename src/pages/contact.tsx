import Navbar from '../components/Navbar';
import Head from 'next/head';

export default function Contact(){
    return(
        <div className="contact">
            <Navbar />
            <div>
            <link href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet" />

            <header className="ccheader">
                <h1>Contact Us!</h1>	
            </header>
                <div className="wrapper">
                    <form method="post" action="/process?form=contactus" className="ccform" role="form">
                        <div className="ccfield-prepend">
                            <label htmlFor="email"><span className="ccform-addon"><i className="fa fa-envelope fa-2x"></i></span></label>
                            <input id="email" className="ccformfield" type="text" name="email" placeholder="Email" required />
                        </div>
                        <div className="ccfield-prepend">
                            <label htmlFor="email"><span className="ccform-addon"><i className="fa fa-comment fa-2x"></i></span></label>
                            <textarea id="message" className="ccformfield-message" name="ques" placeholder="Message" required></textarea>
                        </div>
                        <div className="ccfield-prepend">
                            <input className="ccbtn" type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}