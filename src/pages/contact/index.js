import React from 'react'
import Tile2 from '../../components/tile2'
import Button from '../../components/button'
class Contact extends React.Component{
    constructor(props){
        super(props)
        this.state={
            
            data:[
                {
                    img:'people-1.jpg',
                    name:'Ryan White',
                    desig:'Chief Executive Officer',
                    desc:'Mauris ante tellus, feugiat nec metus non, bibendum semper velit. Praesent laoreet urna id tristique fermentum. Morbi venenatis dui quis diam mollis pellentesque.'
                },
                {
                    img:'people-2.jpg',
                    name:'Catherine Pinky',
                    desig:'Chief Marketing Officer',
                    desc:'Sed faucibus nec velit finibus accumsan. Sed varius augue et leo pharetra, in varius lacus eleifend. Quisque ut eleifend lacus.'
                },
                {
                    img:'people-3.jpg',
                    name:'Johnny Brief',
                    desig:'Accounting Executive',
                    desc:'Mauris ante tellus, feugiat nec metus non, bibendum semper velit. Praesent laoreet urna id tristique fermentum. Morbi venenatis dui quis diam mollis pellentesque.'
                },
                {
                    img:'people-4.jpg',
                    name:'George Nelson',
                    desig:'Creative Art Director #C69',
                    desc:'Mauris ante tellus, feugiat nec metus non, bibendum semper velit. Praesent laoreet urna id tristique fermentum. Morbi venenatis dui quis diam mollis pellentesque.'
                }
            ]
        }
    }
    render(){
        return(
            <>
            <section className="home__banner"></section>
                <section className="cnt">
                    <section className="cnt__blk">
                        <p className="hp__title">Contact page</p>
                        <form id="contact-form" action="" method="POST" className="tm-contact-form mx-auto">
                            <div className="form-group">
                                <input type="text" name="name" className="form-control rounded-0" placeholder="Name" required />
                            </div>
                            <div className="form-group">
                                <input type="email" name="email" className="form-control rounded-0" placeholder="Email" required />
                            </div>
                            <div className="form-group">
                                <select className="form-control" id="contact-select" name="inquiry">
                                    <option value="-">Subject</option>
                                    <option value="sales">Sales &amp; Marketing</option>
                                    <option value="creative">Creative Design</option>
                                    <option value="uiux">UI / UX</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <textarea rows="8" name="message" className="form-control rounded-0" placeholder="Message" required></textarea>
                            </div>

                            <div className="form-group tm-text-right">
                                <Button>Send</Button>
                            </div>
                        </form>  
                    </section>
                    <section className="cnt__blk">
                        <p className="hp__title">Our Address</p>
                        <p class="tm-mb-50">Quisque eleifend mi et nisi eleifend pretium. Duis porttitor accumsan arcu id rhoncus. Praesent fermentum venenatis ipsum, eget vestibulum purus. </p>
                    <p class="tm-mb-50">Nulla ut scelerisque elit, in fermentum ante. Aliquam congue mattis erat, eget iaculis enim posuere nec. Quisque risus turpis, tempus in iaculis.</p>
                    <address class="tm-text-gray tm-mb-50">
                        120-240 Fusce eleifend varius tempus<br />
                        Duis consectetur at ligula 10660
                    </address>
                    <ul class="tm-contacts">
                        <li>
                            <a href="#" class="tm-text-gray">
                                <i class="fas fa-envelope"></i>
                                Email: info@company.com
                            </a>
                        </li>
                        <li>
                            <a href="#" class="tm-text-gray">
                                <i class="fas fa-phone"></i>
                                Tel: 010-020-0340
                            </a>
                        </li>
                        <li>
                            <a href="#" class="tm-text-gray">
                                <i class="fas fa-globe"></i>
                                URL: www.company.com
                            </a>
                        </li>
                    </ul>
                    </section>
                    <section className="cnt__blk">
                        <p className="hp__title">Our Location </p>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62456.79912128148!2d79.7785083213391!3d11.936377111166736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5361ab8e49cfcf%3A0xcc6bd326d2f0b04e!2sPuducherry!5e0!3m2!1sen!2sin!4v1618897934413!5m2!1sen!2sin" width="100%" height="400"  allowfullscreen="" loading="lazy"></iframe>
                    </section>
                </section>
                <Tile2 tiledata = {this.state.data}/>
                <style jsx>
                        {
                            `
                            .home__banner{background:url('hero.jpg') no-repeat;min-height:200px;background: url(hero.jpg) no-repeat; min-height: 200px; background-position: center center; background-position: left; background-size: cover;}
                            .hp__title{color: #009999;font-size:30px;padding:20px 0;}
                            .cnt__blk{max-width: 400px;margin:0 15px; width: 100%;}
                            .cnt{display:flex;align-items:flex-start;flex-wrap: wrap;justify-content: space-between; margin: 20px 15px;}

                            .tm-contact-form { max-width: 420px; }
                            .form-group { margin-bottom: 25px;}
                            .form-control {display: block; width: 100%;     box-sizing: border-box;min-height: calc(1.5em + .75rem + 2px); padding: .375rem .75rem; font-size: 1rem; font-weight: 400; line-height: 1.5; color: #495057; background-color: #fff; background-clip: padding-box; border: 1px solid #ced4da; -webkit-appearance: none; -moz-appearance: none; appearance: none; border-radius: .25rem; transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;}

                            .tm-address-col { max-width: 520px; }
                            .tm-mb-50 {margin-bottom: 30px; color: #999; line-height: 24px; font-size: 18px;}
                            .tm-text-gray { color: #999;text-decoration: none;line-height:20px; transition: all 0.3s ease; }
                            `
                        }
                    </style>
            </>
        )
    }
}
export default Contact