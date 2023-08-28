export interface userSingUp {
    nombre: String;
    email:String;
    contrasena: String;
    edad: String;
    imagen?: String
}

export interface userLogin{
    _id?: String
    email: String,
    contrasena: String
    imagen?: String
    nombre?: String
}