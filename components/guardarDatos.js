import { ref, push, set } from 'firebase/database';
import { database } from '../firebase';

const guardarDatos = async (datosFormulario) => {
    try {
        // Agregar un nuevo elemento con una clave única
        const nuevaClave = push(ref(database, 'pacientes')).key;

        // Guardar datos en la base de datos de Firebase
        await set(ref(database, `pacientes/${nuevaClave}`), datosFormulario);

        console.log('Datos guardados en Firebase:', datosFormulario);
    } catch (error) {
        console.error('Error al guardar datos en Firebase:', error);
    }
};

export default guardarDatos;