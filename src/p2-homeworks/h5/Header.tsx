import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from "./Routes";
import s from './Header.module.css'

function Header() {
    return (
        <div>
            // add NavLinks
            <nav className={s.menu}>
                <div className={s.content}>
                    <NavLink
                        to={PATH.PRE_JUNIOR}
                        className={s.item}
                    >Pre Junior</NavLink>
                    <NavLink
                        to={PATH.JUNIOR}
                        className={s.item}
                    >Junior</NavLink>
                    <NavLink
                        to={PATH.JUNIOR_PLUS}
                        className={s.item}
                    >Junior Plus</NavLink>
                    <div className={s.item + ' ' + s.waffel}>menu</div>
                </div>
            </nav>
        </div>
    )
}

export default Header
