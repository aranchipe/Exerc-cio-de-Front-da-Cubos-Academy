import './style.css'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'


function SignIn() {
    return (
        <div className='container-sign-in'>
            <form>
                <div className='logo'>
                    <img src={logo} alt='logo' />
                </div>
                <div className='email'>
                    <input placeholder='E-mail' />
                </div>
                <div className='senha'>
                    <input type='password' placeholder='Password' />
                </div>
                <div className='frase'>
                    <span>Não tem cadastro? <a href='#'>Clique Aqui!</a></span>
                </div>
                <Link to='/main'><button>Login</button></Link>
            </form>
        </div>
    )
}

export default SignIn