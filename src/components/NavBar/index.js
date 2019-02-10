import React from "react";
import { Link } from "@reach/router";
import logo from "./media/logo-horiz.svg";

// isCurrent - true if the location.pathname is exactly the same as the anchor’s href.
const isActive = ({ isCurrent }) => {
  return isCurrent
    ? { className: "active nav-link" }
    : { className: "nav-link" };
};

// `getProps` Calls up to you to get props for the underlying anchor element.
// Useful for styling the anchor as active.
const ExactNavLink = props => <Link getProps={isActive} {...props} />;

/** 
NavBar provides a navigation component that uses "@reach/router" for links. 
It overrides some Bootstrap styles so it's "styles.scss" needs to be imported after Bootstrap.
 */
class NavBar extends React.Component {
  buttonRef = React.createRef();
  state = {
    isHidden: true
  };

  toggleHidden = event => {
    this.setState({
      isHidden: !this.state.isHidden
    });
    // blur the button (otherwise it stays pressed)
    this.buttonRef.current.blur();
  };

  render() {
    // hide and show classes
    let buttonClasses = "navbar-toggler";
    if (this.state.isHidden) {
      buttonClasses = "navbar-toggler collapsed";
    }
    let dropDown = "navbar-collapse collapse show";
    if (this.state.isHidden) {
      dropDown = "navbar-collapse collapse";
    }

    return (
      <nav className="navbar fixed-top navbar-expand-sm navbar-light bg-light">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img
              className="d-inline-block align-middle"
              src={logo}
              width="220"
              height="40"
              alt="Pacific Life"
            />
          </Link>

          <button
            className={buttonClasses}
            type="button"
            aria-label="Toggle navigation"
            onClick={this.toggleHidden}
            ref={this.buttonRef} // get a reference to the button
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className={dropDown}>
            {this.props.data.map((i, index) => (
              <ExactNavLink key={index} to={i.path} onClick={this.toggleHidden}>
                {i.name}
              </ExactNavLink>
            ))}
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
