// import axios from 'axios';
// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// axios.defaults.withCredentials = true;
// axios.defaults.withXSRFToken = true;

export default function AdminDashBoard() {
  // const navigate = useNavigate();
  // useEffect(() => {
  //   const token = localStorage.getItem('authToken');
  //   if (!token) {
  //     navigate('/login');
  //   }
  //   const fetchUser = async () => {
  //     const user = await axios.get('http://localhost:8000/api/user');
  //     if (user.data.role == 'player') {
  //       navigate('/');
  //     }
  //   };
  //   fetchUser();
  // }, []);

  return (
    <div className='h-screen'>
      <h1
        className='text-center font-bold text-2xl mx-10'
        style={{ borderBottom: '3px solid', borderColor: '#6767e0' }}
      >
        Панель управления-админа
      </h1>
      <div className='p-4 mx-10 flex flex-col '>
        <div className='flex flex-col gap-2 justify-center align-middle items-center md:items-start'>
          <p className='text-xl'>
            <b>Найти игрока:</b>
          </p>
          <input type='text' enterKeyHint='search' className='border-2 rounded-sm w-52 h-8 focus:border-red-900 focus:outline-none'/>
          <button className='text-white bg-black w-fit py-1 px-4 rounded-md'>
            Поиск
          </button>
          <div><h1><b>Найденный профиль:</b></h1>
          <div className='w-auto h-auto bg-white text-black flex flex-col text-center rounded-md'><span>Ник: Test</span><span>Аккаунт создан: 11.11.11</span> <span>Роль: default</span></div></div>
        </div>
      </div>
    </div>
  );
}
