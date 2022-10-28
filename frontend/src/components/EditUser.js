import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useUsers } from '../utilits/users.js';

const EditUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [userId, setUserId] = useState();
  const history = useHistory();
  const { GetUserById, UpdateUser } = useUsers();
  const { id } = useParams();

  const handleForm = (e) => {
    e.preventDefault();
    UpdateUser({ id: userId, name, email });
    history.push('/dashboard');
  };

  useEffect(() => {
    GetUserById(id).then((user) => {
      setUserId(user.id);
      setName(user.name);
      setEmail(user.email);
    });
  }, []);
  return (
    <div className='container'>
      <form onSubmit={handleForm}>
        <div className="container m-7">
          <label className="label mt-5">Name</label>
          <input
            className="input is-normal"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="container m-10 ">
          <label className="label mt-2">Email</label>
          <input 
            className="input is-normal"
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="container mt-3">
          <button className="button is-primary is-fullwidth ">Update</button>
        </div>
      </form>
    </div>
  );
};

export default EditUser;
