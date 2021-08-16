import React from 'react'
import { Link, NavLink } from 'react-router-dom';

class Header extends React.Component{
    constructor(){
        super();
        this.state = {
            data:[
                {
                    path:'/',
                    navName:'Home'
                },
                {
                    path:'/videos',
                    navName:'videos'
                },
                {
                    path:'/about',
                    navName:'about'
                },
                {
                    path:'/contact',
                    navName:'contact'
                }
            ]
        }
    }
    render(){
        return(
            <>
            <section className="header">
                <a href="/" className="header__logo"> Catalog-Z </a>
                <section className="">
                    {this.state.data.map((ls,index) =>
                        // <Link key={index} to={ls.path}>{ls.navName}</Link> 
                        <NavLink className="header__link" key={index} exact to={ls.path}>{ls.navName}</NavLink>
                    )}
                </section>
            </section>
            <style jsx>
                {
                    `
                        .active{border-bottom:2px solid #FF6666;}
                        .header{display: flex;margin:0 15px; padding-top: .5rem; padding-bottom: .5rem;flex-wrap: inherit; align-items: center; justify-content: space-between;}
                        .header__logo{padding-top: .3125rem; padding-bottom: .3125rem; margin-right: 1rem;color: #3399CC; font-size: 1.6rem; text-decoration: none; white-space: nowrap;}
                        .header__link{color: #666666; text-decoration:none;margin-right: 30px;font-size: 1.2rem;}
                    `
                }
            </style>
            </>
        )
    }
}
export default Header
