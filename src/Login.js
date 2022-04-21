import React, {useState} from 'react';
import './Login.css';
import {useNavigate} from "react-router-dom";
import { auth } from './firebase';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const signIn = e => {
        e.preventDefault(); // 새로고침 막기
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                navigate("/")
            })
            .catch((error) => {
                alert(error.message)
            });
    }

    const register = e => {
        e.preventDefault();

        auth 
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if(auth) {
                    navigate("/")
                }
            })
            .catch((error) => {
                alert(error.message)
            });
    }

    return (
        <div className="login">
            <div className="login_container">
                <h2>로그인</h2>

                <form>
                    <h3>이메일</h3>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="text" />
                    <h3>비밀번호</h3>
                    <input value={password} onChange={e => setPassword(e.target.value)}type="password" />

                    <button onClick={signIn} className="login_signInButton">로그인 하기</button>
                </form>
                <p>아직 회원이 아니십니까?</p>
                <button onClick={register} className="login_registerButton">회원가입</button>

            </div>
        </div>
    );
}

export default Login;