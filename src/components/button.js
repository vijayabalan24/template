import React from 'react'
class Button extends React.Component{
    render(){
        return(
            <>
                <button className="btn">{this.props.children}</button>
                <style jsx>
                    {
                        `
                        .btn{background-color: #009999; color:#fff;border: 0; border-radius: 5px; padding: 12px 50px 14px; font-size: 1.2rem;}
                        `
                    }
                </style>
            </>
        )
    }
}   
export default Button