// import { Usuario } from "./Usuario";
import { UsuarioView } from "./UsuarioView";
import { UsuarioService } from "../service/UsuarioService";

export class UsuarioController {
    public usuarioService: UsuarioService;
    public usuarioView: UsuarioView;

    constructor() {
        this.usuarioService = new UsuarioService;
        this.usuarioView = new UsuarioView;
    }

    iniciar() {
        this.usuarioView.cadastrarCliente( this.cadastrarCliente.bind( this ) );
    }

    cadastrarCliente() {
        const dados = this.usuarioView.coletarDadosCadastroUsuario();
        this.usuarioService.cadastrarUsuario( dados );
    }
}