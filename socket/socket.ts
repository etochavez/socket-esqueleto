import Server from "../server/server";

export default class Socket
{
    private servidor: Server;

    public constructor(puerto: number) {
        this.servidor = Server.init(puerto);
        //this.cliente();
    }

    static init(puerto: number) {
        return new Socket(puerto);
    }

    /**
     * Detecta la conexion de un cliente
     */
    /*
    cliente(){
        this.servidor.io.on('connection', (client: any) => {
            console.log('Usuario conectado');

            client.on('disconnect', () => {
                console.log('Usuario desconectado');
                
            });

            // Escuchar el cliente, callback es la funcon q se llama cuando se resulva la escucha
            client.on('enviarMensaje', (data: any, callback: any) => {
                console.log(data);

                if(data.usuario){
                    callback({
                        respuesta: 'Todo salio bien'
                    });
                } else {
                    callback({
                        respuesta: 'Todo salio mal'
                    });
                }
            });

            client.emit('enviarMensajeServer', {
                mensaje: 'Bienvenido al sistema'
            });
        })
    }*/
}