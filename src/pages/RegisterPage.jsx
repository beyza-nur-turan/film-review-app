
import '../css/Register.css';
import FilmRegister from '../assets/FilmRegister.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { register } from '../firebase';

const Register = () => {
  const navigate = useNavigate();

  const getLogin = () => {
    navigate('/login');
  }
  const [email,setEmail] =useState("");
  const [password,setPassword] =useState("");
  const handleSubmit= async e=>{
   
      if (!email || !password) {
        console.error('E-posta veya şifre alanı boş olamaz!.');
        return;
      }
      
    e.preventDefault()
    const user =await register(email,password)
    console.log("user",user)
    
  }

  return (
    <div className="register-background">
      <div className="register-container">
        <div className="register-left">
          <img src={FilmRegister} alt="Register" />
        </div>
        <div className="register-right">
          <h1>Film Evreni&apos;ne Hoşgeldiniz!</h1>
          <form onSubmit={handleSubmit}>
            {/* <input  type="text" placeholder="Ad-Soyad"  /> */}
            <input value={email} onChange={e=>setEmail(e.target.value)} type="text" placeholder="E-posta" />
            {/* <input type="text" placeholder="Kullanıcı adı"/> */}
            <input value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="Şifre"  />
            {/* <input
              type="password"
              placeholder="Şifre tekrar"
              
            /> */}
            <button disabled={!email||!password}  type="submit" >
              Kayıt Ol
            </button>
          </form>
          <div>
            Daha önce kayıt yaptırdınız mı?{' '}
            <button
              onClick={getLogin}
              style={{ backgroundColor: 'transparent', color: 'black', justifyContent: 'center', marginTop: '2vh' }}
            >
              Giriş Yap
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
