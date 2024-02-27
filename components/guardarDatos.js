import { ref, push, set } from 'firebase/database';
import { database } from '../firebase';

const guardarDatos = async (datosFormulario) => {
    try {
        // Generar una nueva clave única para cada registro
        const nuevaClave = push(ref(database, 'pacientes')).key;

        // Actualizar el camino utilizando la nueva clave
        const caminoRegistro = `pacientes/${nuevaClave}`;

        // Guardar datos en la base de datos de Firebase
        await set(ref(database, caminoRegistro), datosFormulario);

        console.log('Datos guardados en Firebase:', datosFormulario);
    } catch (error) {
        console.error('Error al guardar datos en Firebase:', error);
    }
};

export default guardarDatos;