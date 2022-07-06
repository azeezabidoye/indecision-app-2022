import React from "react";

class Header extends React.Component {
    render() {
        return (
        <div>
            <div className="header">
                <div className="container">
                    <h1 className="header__title">{this.props.title}</h1>
                    <h2 className="header__subtitle">{this.props.subtitle}</h2>
                </div>
            </div>
        </div>
        )
    }
}

Header.defaultProps = {
    title: 'Indecision App',
    subtitle: 'Let computer make decisions for you'
}

export default Header;