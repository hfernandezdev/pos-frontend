import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../api/authApi';
import { toast } from 'react-hot-toast';
import Button from '../../components/common/Button/Button';
import Input from '../../components/common/Input/Input';
import './LoginPage.styles.scss';
import logo from '../../assets/logotipo_bien_avai.png';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await login(email, password);
      console.log(response);
      toast.success('Inicio de sesión exitoso');
      navigate('/');
    } catch (error) {
      toast.error('Error al iniciar sesión');
    }
  };

  return (
    <div id="login-page">
      <main>
        <article>
          <div className='brand-logo-container'>
            <img src={logo} alt="Logo" />
          </div>
          <form onSubmit={handleLogin}>
            <Input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              type="password"
              name="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <fieldset>
              <label htmlFor="remember">
                <input
                  type="checkbox"
                  role="switch"
                  id="remember"
                  name="remember"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                Recordarme
              </label>
            </fieldset>
            <Button type="submit">Iniciar sesión</Button>
          </form>
        </article>
      </main>
    </div>
  );
}
