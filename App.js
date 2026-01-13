
import './App.css';
import picture from './Frame 10.png'
import google from './Social icon.png'
import github from './mdi_github.png'
import discord from './logos_discord-icon.png'
function App() {
  return (
    
    <div className="App">
      <header className='app-header'> 
        <div className='header-content'>
          <div className='logo'>
            <img className='logo-image' src={picture} alt='logo' />
            <div className='logo-text'>
              Design system
          </div>
          </div>
          <div className='app-navigation'>
            <a className='home' href='#'>Home</a>
            <a className='components' href='#'>Components</a>
            <a className='pricing' href='#'>Pricing</a>
            <a className='contact' href='#'>Contact</a>
          </div>
          <div className='action-buttons'>
            <button type='button' className='log-in'> <a href='App.js' className='login'>Log in</a></button>
            <button type='button' className='sign-up'> <a href='#' className='signup'>Sign up</a> </button>
          </div>
        </div>
      </header>
      <div className='content'>
        <div className='log-in-form'>
          <div className='texts'>
            <h2 className='text'>Log in to your account</h2>
            <text className='supporting-text'>Welcome back! Please enter your details.</text>
          </div>
        <div className='input-fields'>
          <div className='email-input'>
            <text className='title-of-input'>Email*</text>
            <input type='email' className='data-input' placeholder='example@gmail.com' />
          </div>
          <div className='password-input'>
            <text className='title-of-input'>Password*</text>
            <input type='password' className='data-input' placeholder='enter password' />
          </div> 
        </div>
        <div className='row'>
          <div className='checkboxx'>
            <input type='checkbox' className='checkboxxx'/> <text className='text-remember'>Remember for 30 days</text>
          </div>
            <a href='#'className='forgot-password'><text >forgot password?</text></a>
        </div> 
        <button type='submit' className='sign-in-button'><a href='#' className='sign-in-text'>Sign in</a></button>
        <div className='divider-or'>
          <div className='line'></div>
          <span className='or-text'>OR</span>
          <div className='line'></div>
        </div>
        <div className='apps'>
          <a href='#'><div className='apps-background'>
            <img src={google} />
          </div></a>
          <a href='#'><div className='apps-background'>
             <img src={github} />
          </div></a>
           <a href='#'><div className='apps-background'>
            <img src={discord} />
          </div></a>
        </div>
        </div>
        <div className='sign-up-link'>Don't have an account? <a className='link' href='#'> Sign up</a> </div>
      </div>
    </div>
  );
}

export default App;
