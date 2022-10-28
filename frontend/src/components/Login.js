import React, { useState } from 'react';
import axios from 'axios';
import { Link,useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const Auth = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/login', {
        email: email,
        password: password,
      });
      localStorage.setItem('access_token', response.data.accessToken);
      dispatch({ type: 'SET_JWT', payload: response.data.accessToken });
      history.push('/dashboard');
    } catch (error) {
      if (error.response) {
        setErrorMsg(error.response.data.msg);
      }
    }
  };

  return (
    <section className="hero has-background-grey-light is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered ">
            <div className="column is-7-desktop">
              <form onSubmit={Auth} className="box">
                <figure class="is-centered is-128x128 ">
                  <img src="/oncare.gif" />
                </figure>
                <div className="field mt-5">
                  <label className="label">Email</label>
                  <div className="controls">
                    <input
                      type="text"
                      className="input"
                      placeholder="Username"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="field mt-5">
                  <label className="label">Password</label>
                  <div className="controls">
                    <input
                      type="password"
                      className="input"
                      placeholder="******"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="field mt-5">
                  <button className="button is-success is-fullwidth">
                    Login
                  </button>
                </div>
                <p className="has-text-centered mt-3 mb-3 has-text-danger">{errorMsg}</p>
                <div>
                  <button className="button is-warning is-fullwidth">
                    <Link href="/register" className="btn btn-info" role="button">
                      Register
                    </Link>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
