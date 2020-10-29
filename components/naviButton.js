import { Component } from 'react';
import styles from '../styles/naviButton.module.css'
import HamburgerMenu from 'react-hamburger-menu';

//Thanks to Zac Willmington https://www.zacwillmington.com/how-to-add-a-hamburger-menu-to-your-website/

export default class NaviButton extends Component{
    constructor(){
        super()
        this.state = {
            open: false,
            hideOrShowHambugerDropDown: 'nav'
        }
    }

    handleClick = () => {
        this.setState({open: !this.state.open});
    }

    displayHamburgerMenu = () => {
        return (
            <HamburgerMenu
                    isOpen={this.state.open}
                    menuClicked={this.handleClick.bind(this)}
                    width={18}
                    height={15}
                    strokeWidth={1}
                    rotate={0}
                    color='gray'
                    borderRadius={0}
                    animationDuration={0.5}
                    className={styles.navbar}
                />
        )
    }

    displayMobileMenu = () => {
        return (
            <ul className={styles.hamburgerDropDown}>
                <li className={styles.menuLi}>
                    <button className={styles.teacherButton} onClick={this.props.loginToggle}>
                        Teacher Mode
                    </button>
                </li>
            </ul>
        )
    }

    render() {
        return (
            <div className={styles.navbar}>
                { this.state.open ?  this.displayMobileMenu() : null}
                {this.displayHamburgerMenu()}
            </div>
        );
    }
}