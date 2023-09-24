import '../css/Register.css'; 
import FilmRegister from "../assets/FilmRegister.png"
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { login } from '../firebase';
import Swal from 'sweetalert2';

function Login() {
    const navigate = useNavigate();
    const getRegister=()=>{
        navigate("/register");
    }
    const [email,setEmail] =useState("");
  const [password,setPassword] =useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      console.error('E-posta veya şifre alanı boş olamaz!.');
      return;
    }
    
    try {
      const user = await login(email, password);
      console.log("user", user);
      if (user) {
        navigate("/");
      } else {
        Swal.fire({
          title: 'Kullanıcı Bulunamadı!',
          icon: 'error',
          text: 'Lütfen geçerli bir e-posta ve şifre girin.',
        });
      }
    } catch (error) {
      console.error('Giriş sırasında bir hata oluştu:', error.message);
      // Firebase hata iletisini görüntüle
    }
  }
  
  return (
    <div className="register-background">
      <div className="register-container">
        <div className="register-left">
          <img src={FilmRegister} alt="Register" />
        </div>
        <div className="register-right">
          <h1>Film Evreni&apos;ne Yeniden Hoşgeldiniz!</h1>
          <form onSubmit={handleSubmit}>
            <input onChange={e=>setEmail(e.target.value)} type="email" placeholder="E-posta" />
            <input onChange={e=>setPassword(e.target.value)} type="password" placeholder="Şifre" />
            <button type='submit'>Giriş Yap</button>
          </form>
          <div>Kaydınız yok mu? <button onClick={getRegister} style={{backgroundColor:'transparent',color:'black',justifyContent:'center',marginTop:"2vh"}}>Kaydol</button></div>
        </div>
      </div>
    </div>
  );
}

export default Login;
