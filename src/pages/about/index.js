import React from 'react'
import Button from '../../components/button'
class About extends React.Component{
    
    render(){
        return(
            <>
                <section className="home__banner"></section>
                <section className="abt">
                    <p className="abt__title">About Catalog-Z Website Template</p>
                    <section className="abt__sup">
                        <img src="/about.jpg" className="abt__sup__img" />
                        <section className="abt__sup__info">
                            <p className="abt__sup__info__det">You may support TemplateMo website by making <a className="link" href="">a small contribution</a> via PayPal. This will be helpful for us. We hope you like this Catalog-Z photo / video template for your website. We are making new templates regularly for you. Please come back and visit our <a className="link" href="">TemplateMo website</a> again.</p>
                            <p className="abt__sup__info__det">You may support TemplateMo website by making <a className="link" href="">a small contribution</a> via PayPal. This will be helpful for us. We hope you like this Catalog-Z photo / video template for your website. We are making new templates regularly for you. Please come back and visit our <a className="link" href="">TemplateMo website</a> again.</p>
                        </section>
                    </section>
                    <section className="abt__sup">
                        <section className="abt__sup__info">
                        <p className="abt__title">Left side of 2-Column content</p>
                            <p className="abt__sup__info__det">Pellentesque urna odio, scelerisque eu mauris vitae, vestibulum sodales neque. Ut augue justo, tincidunt nec aliquet ac, cursus vel augue. Suspendisse vel quam imperdiet, sodales tellus sed, ullamcorper lorem.</p>
                            <p className="abt__sup__info__det">Pellentesque urna odio, scelerisque eu mauris vitae, vestibulum sodales neque. Ut augue justo, tincidunt nec aliquet ac, cursus vel augue. Suspendisse vel quam imperdiet, sodales tellus sed, ullamcorper lorem.</p>
                        </section>
                        <section className="abt__sup__info">
                        <p className="abt__title">Right-side Title goes here</p>
                            <p className="abt__sup__info__det">Pellentesque urna odio, scelerisque eu mauris vitae, vestibulum sodales neque. Ut augue justo, tincidunt nec aliquet ac, cursus vel augue. Suspendisse vel quam imperdiet, sodales tellus sed, ullamcorper lorem.</p>
                            <p className="abt__sup__info__det">Pellentesque urna odio, scelerisque eu mauris vitae, vestibulum sodales neque. Ut augue justo, tincidunt nec aliquet ac, cursus vel augue. Suspendisse vel quam imperdiet, sodales tellus sed, ullamcorper lorem.</p>
                        </section>
                    </section>
                    <section className="abt__sup">
                        <section className="abt__sup__info">
                        <p className="abt__title">Three-column title one</p>
                            <p className="abt__sup__info__det">Pellentesque urna odio, scelerisque eu mauris vitae, vestibulum sodales neque. Ut augue justo, tincidunt nec aliquet ac, cursus vel augue. Suspendisse vel quam imperdiet, sodales tellus sed, ullamcorper lorem.</p>
                            <p className="abt__sup__info__det">Pellentesque urna odio, scelerisque eu mauris vitae, vestibulum sodales neque. Ut augue justo, tincidunt nec aliquet ac, cursus vel augue. Suspendisse vel quam imperdiet, sodales tellus sed, ullamcorper lorem.</p>
                        </section>
                        <section className="abt__sup__info">
                        <p className="abt__title">Third Title goes here</p>
                            <p className="abt__sup__info__det">Pellentesque urna odio, scelerisque eu mauris vitae, vestibulum sodales neque. Ut augue justo, tincidunt nec aliquet ac, cursus vel augue. Suspendisse vel quam imperdiet, sodales tellus sed, ullamcorper lorem.</p>
                            <p className="abt__sup__info__btncenter">
                            <Button>Read More</Button>
                            </p>
                        </section>
                        <section className="abt__sup__info">
                        <p className="abt__title">Title two of three-column</p>
                            <p className="abt__sup__info__det">Pellentesque urna odio, scelerisque eu mauris vitae, vestibulum sodales neque. Ut augue justo, tincidunt nec aliquet ac, cursus vel augue. Suspendisse vel quam imperdiet, sodales tellus sed, ullamcorper lorem.</p>
                            <p className="abt__sup__info__det">Pellentesque urna odio, scelerisque eu mauris vitae, vestibulum sodales neque. Ut augue justo, tincidunt nec aliquet ac, cursus vel augue. Suspendisse vel quam imperdiet, sodales tellus sed, ullamcorper lorem.</p>
                        </section>
                        
                    </section>
                </section>
               <style jsx>
                   {
                       `
                       .home__banner{background:url('hero.jpg') no-repeat;min-height:200px;background: url(hero.jpg) no-repeat; min-height: 200px; background-position: center center; background-position: left; background-size: cover;}
                       .abt{padding:15px}
                       .abt__title{color: #009999;font-size:30px;padding:20px 0;}
                       .hp__tile{}
                       .abt__sup{display:flex;margin:15px 0;}
                       .abt__sup__img{}
                       .abt__sup__info{margin-left:15px;}
                       .abt__sup__info__det{color: #999;line-height:26px;font-size:18px;margin:0 0 15px;}
                       .link{color: #0d6efd;text-decoration: none;
                        transition: all 0.3s ease;}
                        .abt__sup__info__btncenter{text-align:center}
                       `
                   }
               </style>
            </>
        )
    }
}
export default About