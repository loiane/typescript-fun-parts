enum UsuariosActionTypes {
  LOAD_REQUEST = '[Usuarios] Load Request',
  LOAD_SUCCESS = '[Usuarios] Load Success'
}

interface Usuario {
  nome: string;
}

type UsuarioActions =
  | { type: UsuariosActionTypes.LOAD_REQUEST; }
  | { type: UsuariosActionTypes.LOAD_SUCCESS; payload: Usuario[] };

