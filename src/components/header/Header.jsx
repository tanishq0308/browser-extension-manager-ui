import logo from '../../assets/images/logo.svg'
import darkLogo from '../../assets/images/dark-logo.svg'
import ToggleButton from '../toggleButton/ToggleButton'

const Header = () => {
  return (
    <header className='bg-white flex justify-between items-center p-3 dark:bg-[#54596954] shadow-lg rounded-2xl'>
      <div>
        <img src={darkLogo} alt="" className='dark:block hidden'/>
        <img src={logo} alt="" className='block dark:hidden'/>
      </div>
      <div>
        <ToggleButton/>
      </div>
    </header>
  )
}

export default Header