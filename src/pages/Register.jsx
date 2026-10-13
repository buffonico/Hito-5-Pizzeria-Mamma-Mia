import { useState } from 'react';

const Register = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handelSubmit = (e) => {
        e.preventDefault();

        if (email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
            alert('Todos los campos son obligatorios');
            return;
        }

        if (password.length < 6) {
            alert('El password debe tener al menos 6 caracteres');
            return;
        }

        if (password !== confirmPassword) {
            alert('El password y la confirmación de la contraseña debe ser iguales');
            return;
        }

        alert('¡Registro exitoso!')

        setEmail('');
        setPassword('');
        setConfirmPassword('');
    };

    return (
        <div className='container mt-5 mb-5' style={{ maxWidth: '400px' }}>
            <h2 className='mb-4'>Register</h2>
            <form onSubmit={handelSubmit}>

                {/* Campo 1: email */}
                <div className='mb-3'>
                    <label className='form-label'>Email</label>
                    <input
                        type='email'
                        className='form-control'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="correo@ejemplo.com"
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Password</label>
                    <input
                        type='password'
                        className='form-control'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="La contraseña debe tener al menos 6 caracteres"
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Confirm Password</label>
                    <input
                        type='password'
                        className='form-control'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Las contraseñas deben coincidir"
                    />
                </div>

                <button type='submit' className='btn btn-dark w-100'>
                    Register
                </button>
            </form>
        </div>
    );
};

export default Register;