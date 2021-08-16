import React from 'react'
class Tile1 extends React.Component{
    
   
    render(){
        return(
            <>
            {/* <p>{this.props.dt}</p>
            <p>{this.props.img}</p>
            <p>{this.props.review}</p> */}
                <section className="tl1__inner">
                    <img  className="tl1__inner__img" src={this.props.img} />
                    <p className="tl1__inner__info">
                        <span className="tl1__inner__info__dt">{this.props.dt}</span>
                        <span className="tl1__inner__info__rvw">{this.props.review}</span>
                    </p>
                </section>
             <style jsx>
                 {
                     `
                     .tl1__inner{margin:10px 5px;}
                     .tl1__inner__info{display: flex;padding:5px 0 0; justify-content: space-between;}
                     .tl1__inner__info__dt{font-size:16px;color: #CCC;}
                     .tl1__inner__info__rvw{font-size:16px;color: #CCC;}
                     `
                 }
             </style>
            </>
        )
    }
}   
export default Tile1