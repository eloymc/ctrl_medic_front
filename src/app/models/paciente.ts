import { Direccion } from "./direccion";

export interface Paciente {
    id: number;
    nombre: string;
    apellido_paterno: string;
    apellido_materno: string;
    genero: string;
    email: string;
    telefono_1: string;
    telefono_2: string;
    id_direccion: number;
    direccion: Direccion;
    fecha_nacimiento: Date;
    activo: boolean;
}
