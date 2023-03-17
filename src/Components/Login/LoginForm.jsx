import { useContext } from 'react';
import { UserContext } from '../../UserContext';
import { Link } from 'react-router-dom';
import { useForm } from '../../Hooks/useForm';
import { Button } from '../Forms/Button';
import { Input } from '../Forms/Input';
import { Error } from '../Helper/Error';
import styles from './LoginForm.module.css';
import stylesBtn from '../Forms/Button.module.css';

export const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const { userLogin, error, loading } = useContext(UserContext);

  async function handleSubmit (e) {
    e.preventDefault();

    if(username.validate() && password.validate()) {
      userLogin(username.value, password.value)
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="user" {...username} />
        <Input label="Senha" type="password" name="password" {...password}/>
        {loading ? <Button disabled>Carregando...</Button> : <Button>Entrar</Button>}
        <Error error={error}/>
      </form>
      <Link className={styles.perdeu} to="/login/perdeu">Perdeu a Senha?</Link>

      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className={stylesBtn.button} to="/login/criar">Cadastro</Link>
      </div>
    </section>
  )
}