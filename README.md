# PhaserDemo
Simple Phaser 3 game (web development course homework)

To build from repository

```
docker build https://github.com/SamiKoh/PhaserDemo.git -t imagename
```` 

To list images
```
docker images -a
```
To spin up a container from image 
```
docker run --rm --detach --publish 8080:80 --name containername imagename
```

To list containers
```
docker ps -a
```
To stop a process

```
docker stop containername
```

To delete container
```
docker rm containername
```
To delete image 
```
docker rmi imagename
```
