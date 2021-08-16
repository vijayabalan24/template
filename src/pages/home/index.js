import React from 'react'
import Tile from '../../components/tile1'
class Home extends React.Component{
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
               <section className="home__banner">
               </section>
               <section className="hp">
                   <h2 className="hp__title">Latest Photos</h2>
                   <section className="hp__tile">
                    {this.state.data.map((ls,index)=>
                        <Tile dt={ls.dt} img={ls.img} review = {ls.review}/>
                    )}
                   </section>
               </section>
               <style jsx>
                   {
                       `
                       .home__banner{background:url('hero.jpg') no-repeat;min-height:200px;background: url(hero.jpg) no-repeat; min-height: 200px; background-position: center center; background-position: left; background-size: cover;}
                       .hp{padding:0 15px;}
                       .hp__title{color: #009999;font-size:30px;padding:20px 0;}
                       .hp__tile{display:flex;align-items:flex-start;flex-wrap: wrap; justify-content: center;}
                       `
                   }
               </style>
            </>
        )
    }
}
export default Home