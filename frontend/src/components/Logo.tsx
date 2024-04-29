import logo from '../assets/logo.png'; // Tell webpack this JS file uses this image

export function Logo(props: {
  }) {
    return <div>
        <img src={logo} alt="HyperionLogo" />
    </div>
  }
