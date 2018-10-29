import socketIO = require('socket.io');

export default class Socket
{
    //private servidor: Server;

    public constructor(puerto: number) {
        //this.servidor = Server.init(puerto);
    }

    /**
     * Detecta la conexion de un cliente
     */
    
    static cliente(io: socketIO.Server){
        io.on('connection', (client: any) => {
            console.log('Usuario conectado');

            client.on('disconnect', () => {
                console.log('Usuario desconectado');
                
            });

            // Escuchar el cliente, callback es la funcon q se llama cuando se resulva la escucha
            client.on('enviarMensaje', (data: any, callback: any) => {
                console.log(data);

                //Para mandar a todos los clientes usar
                //client.broadcast.emit('enviarMensajeServer', data);

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
    }

    static enviarNotificacion(mensaje: string){
        let io: socketIO.Server;
        io.emit('enviarMensajeServer', {
            mensaje: 'Bienvenido al sistema'
        });
    }
}