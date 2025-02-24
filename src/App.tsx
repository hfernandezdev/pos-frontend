import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import client from './api/client';
import './App.css'

function App() {
  const [data, setData] = useState(null);

  const showAlert = () => {
    Swal.fire({
      title: '¡Hola!',
      text: 'Este es un mensaje de SweetAlert2',
      icon: 'success',
    });
  };

  const showToast = () => {
    toast.success('¡Notificación de Toast!');
    // toast.error('¡Notificación de Toast!');
  };

  useEffect(() => {
    client.get('/')
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div className="container">
        <h1>POS Frontend</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
        <button className="primary" onClick={showAlert}>
          Mostrar Alerta
        </button>
        {" "}
        <button className="secondary" onClick={showToast}>
          Mostrar Toast
        </button>
    </div>
    </>
  )
}

export default App
