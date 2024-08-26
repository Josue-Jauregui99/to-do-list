import logo from '../assets/images/logo-no-background.svg'
import '../styles/YZRYBanner.css'

export default function YZRYBanner() {
    return (
      <div className="yzry-banner">
        <img className='logo' src={logo} alt="logo" />
      </div>
    )
}