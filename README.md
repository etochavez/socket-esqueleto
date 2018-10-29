# Notas:
Este es un pequeño servidor de express listo para ejecutarse, configurado para la comunicacion por socket.io con un  cliente que esta en la carpeta cliente.

reconstruir los módulos de node con el comando

```
npm install
```

```
nodemon dist/index
```


La carpeta cliente funciona con http-server y es el que maneja la escucha y llamadas desde el clientte al servidor express mediante sockets
EN la carpeta cliente usar:

```
http-server
```