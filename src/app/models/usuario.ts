export interface Usuario {
    
    idUsuario: number;

    nombres: string;

    celular: number;

    direccion: string;

    sexo: string;

    email: string;

    fechaNacimiento: Date;

    tipoAsociacion: string;

    password:string;
    
    token: string;
}