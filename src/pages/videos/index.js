import React from 'react'
import Tile1 from '../../components/tile1'
class Video extends React.Component{
    constructor(){
        super()
        this.state={
            
            data:[
                {
                    img:'img-01.jpg',
                    dt:'18 Oct 2020',
                    review:'9,906 views',
                    info:'Clock'
                },
                {
                    img:'img-02.jpg',
                    dt:'14 Oct 2020',
                    review:'16,100 views',
                    info:'Plants'
                },
                {
                    img:'img-03.jpg',
                    dt:'12 Oct 2020',
                    review:'12,460 views',
                    info:'Morning'
                },
                {
                    img:'img-04.jpg',
                    dt:'10 Oct 2020',
                    review:'11,402 views',
                    info:'pinky'
                },
                {
                    img:'img-01.jpg',
                    dt:'18 Oct 2020',
                    review:'9,906 views',
                    info:'Clock'
                },
                {
                    img:'img-02.jpg',
                    dt:'14 Oct 2020',
                    review:'16,100 views',
                    info:'Plants'
                },
                {
                    img:'img-03.jpg',
                    dt:'12 Oct 2020',
                    review:'12,460 views',
                    info:'Morning'
                },
                {
                    img:'img-04.jpg',
                    dt:'10 Oct 2020',
                    review:'11,402 views',
                    info:'pinky'
                }, {
                    img:'img-01.jpg',
                    dt:'18 Oct 2020',
                    review:'9,906 views',
                    info:'Clock'
                },
                {
                    img:'img-02.jpg',
                    dt:'14 Oct 2020',
                    review:'16,100 views',
                    info:'Plants'
                },
                {
                    img:'img-03.jpg',
                    dt:'12 Oct 2020',
                    review:'12,460 views',
                    info:'Morning'
                },
                {
                    img:'img-04.jpg',
                    dt:'10 Oct 2020',
                    review:'11,402 views',
                    info:'pinky'
                }

            ]
        }
    }
    render(){
        return(
            <>
               <section className="video__banner">
                <video preload="auto" autoPlay class="videot" id="videot" preload>
                    <source src="hero.mp4" type="video/mp4" />
                    <object data="hero.mp4" height="200" >
                        <param name="wmode" value="transparent" />
                        <param name="autoplay" value="false"  />
                        <param name="loop" value="false"  />
                    </object>
                </video>
               </section>
               <h1 className="hp__title">Latest Videos</h1>
               <section className="hp__tile">
                    {this.state.data.map((ls,index)=>
                            <Tile1 dt={ls.dt} img={ls.img} review = {ls.review}/>
                        )}
                    </section>
               <style jsx>
                   {
                       `
                       video { max-height: 400px; width: 100%; object-fit: fill;}
                       .hp__title{color: #009999;font-size:30px;padding:20px 0;}
                       .hp__tile{display:flex;align-items:flex-start;flex-wrap: wrap; justify-content: center;}
                       `
                   }
               </style>
            </>
        )
    }
}
export default Video