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


## Copyright notice

Images used in this demo were fetched under Creative Commons licence, I do not hold copyrights for any of them. 

Star : [pngimg.com CC-4.0 BY-NC] (http://pngimg.com/download/41531)
Car : [freeiconspng.com, Author: Ahkâm] (https://www.freeiconspng.com/img/34860)
Background: [Pixabay, Author: BarbaraALane, CC0] (https://pixabay.com/fi/liitutaulu-tausta-rakenne-1337809/)

