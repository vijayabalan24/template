import React from 'react'
class Tile2 extends React.Component{
   
    render(){
        //console.log(this.props.tiledata)
        return(
            <>
                <section className="cntile">
                    {this.props.tiledata.map((ls,index) =>
                        <section className="cntile__lst">
                            <img src={ls.img} className="cntile__lst__img" />
                            <p className="cntile__lst__nm">{ls.name}</p>
                            <p className="cntile__lst__desig">{ls.desig}</p>
                            <p className="cntile__lst__desc">{ls.desc}</p>
                        </section>
                    )}
                </section>
                <style jsx>
                    {
                        `
                        .cntile{display: flex;}
                        .cntile__lst{width:25%;margin:20px 15px;}
                        .cntile__lst__nm{color: #009999;font-size:30px;margin:25px 0}
                        .cntile__lst__desig{color: #CC6699;font-size:24px;margin-bottom:15px}
                        .cntile__lst__desc{margin-bottom: 15px;color: #999;font-size:18px;line-height:24px;word-wrap: break-word; text-align: left; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis;}
                        `
                    }
                </style>
            </>
        )
    }
}   
export default Tile2