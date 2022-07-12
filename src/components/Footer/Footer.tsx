import { AiFillGithub, AiFillMail, AiFillLinkedin } from 'react-icons/ai'
import styles   from "./Footer.module.css"


const Footer = () => {
  return (
    <footer className={styles.footer}>
       <h1>Contatos</h1>
          <ul>
            <li><a href='https://github.com/ItalloVasconcelos'> <i><AiFillGithub/></i>  Github</a></li>
            <li><a href="mailto: itallo.prog@gmai.com"> <i><AiFillMail /></i> Email</a></li>
            <li><a href='https://www.linkedin.com/in/itallo-vasconcelos-7441b4158'> <i><AiFillLinkedin /></i>  Linkedin</a></li>
          </ul>
          <p><span>Aplicação desenvolvida por </span>  Itallo Vasconcelos</p>

            
            
            
 
    </footer>
  )
}

export default Footer