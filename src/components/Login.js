import React from 'react';
import '../styles/Login.scss';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { auth } from '../lib/firebase';

function Login() {
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const email = watch('email');
  const password = watch('password');

  const navigate = useNavigate();

  const signIn = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        navigate('/');
      })
      .catch(error => {
        alert(error.message);
      });
  };

  const join = e => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(auth => {
        if (auth) {
          navigate('/');
        }
      })
      .catch(error => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <div className="login-container">
        <h2>로그인</h2>
        <form onSubmit={handleSubmit(signIn)}>
          <h3>이메일</h3>
          <input
            type="text"
            {...register('email', {
              required: {
                value: true,
                message: '이메일을 입력해주세요.',
              },
              pattern: {
                value: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
                message: '잘못된 이메일 주소입니다.',
              },
            })}
          />
          <span className="error-message">
            {errors.email && errors.email.message}
          </span>
          <h3>비밀번호</h3>
          <input
            type="password"
            {...register('password', {
              required: {
                value: true,
                message: '비밀번호를 입력해주세요.',
              },
              pattern: {
                value:
                  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
                message:
                  '최소 8자 이상으로 영문자 대문자, 영문자 소문자, 숫자, 특수문자가 각각 최소 1개 이상 입력해주세요',
              },
            })}
          />
          <span className="error-message">
            {errors.password && errors.password.message}
          </span>
          <button className="login-signin-button">로그인 하기</button>
        </form>
        <p>아직 회원이 아니십니까?</p>
        <button onClick={join} className="login-register-button">
          회원가입
        </button>
      </div>
    </div>
  );
}

export default Login;
