import './style.css'
import CardTeacher from '../../components/CardTeacher'
import { useParams } from 'react-router-dom'
import voltar from '../../assets/voltar.svg'
import logo from '../../assets/logo.svg'
import { useNavigate } from 'react-router-dom'


function Teacher() {
    const { id } = useParams()
    const navigate = useNavigate()
    return (
        <div className='container-teacher'>
            <div className='header'>
                <img className='logo' src={logo} />
            </div>

            <img
                className='voltar'
                src={voltar}
                onClick={() => navigate(-1)}
            />

            <CardTeacher id={id} />
        </div>
    )
}


export default Teacher