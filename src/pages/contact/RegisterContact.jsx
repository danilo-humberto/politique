import { Undo2 } from 'lucide-react'
import './RegisterContact.css'
import { Link } from 'react-router-dom'

const RegisterContact = () => {
  return (
    <section className='flex'>
      <div className="contact-header">
        <h2>Cadastrar Contato</h2>
        <div className="div-icon-back">
          <Link to={'/contact'}>
              <Undo2 strokeWidth={1.5} />
          </Link>
        </div>
      </div>

      <div className="register-contact-form">
        <div className="register-contact-form-header">
            <h2>Dados Contato</h2>
        </div>
        <div className="register-contact-form-body">
            <form>
                <div className="register-contact-inputs">
                    <label></label>
                    <input type="text" placeholder=''/>
                </div>
            </form>
        </div>
      </div>
    </section>
  )
}

export default RegisterContact
