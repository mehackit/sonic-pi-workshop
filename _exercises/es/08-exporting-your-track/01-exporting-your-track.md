---
chapter: Exportando tu pista
title: Exportando tu pista
lang: es
layout: exercise
---
Cuando estés satisfecho con tu pista, puede que quieras guardarla como un archivo de audio y compartirla con tus amigos en la red (por ejemplo, en tu página <a href="http://www.soundcloud.com/mehackit">SoundCloud</a>). Primero necesitarás grabar tu canción usando la función guardar en Sonic Pi.

El proceso de grabación es simplemente esto: 

Ahora que la grabación está pulsada, empieza tu canción pulsando Run
Una vez que tu canción ha terminado (o una vez que has tocado suficientes veces tus live_loos) pulsa Stop
Finalmente, pulsa de nuevo Rec para parar la grabación 
Guarda tu archivo de audio en la ventana de diálogo (por ejemplo con el nombre MiCancion.wav)

The recording process is simply following: 

* Pulsa el botón **Rec** y debería quedar destacado
* Ahora que la grabación está pulsada, empieza tu canción pulsando **Run**
* Una vez que tu canción ha terminado (o una vez que has tocado suficientes veces tus live_loops) pulsa **Stop**
* Finalmente, pulsa de nuevo **Rec** para parar la grabación 
* Guarda tu archivo de audio en la ventana de diálogo (por ejemplo con el nombre *MiCancion.wav*)

{% include videoplayer.html filepath="/assets/video/record_audio" %}

Una vez que tu archivo de audio está guardado, estarás listo para tocarlo y compartirlo. Sin embargo, te recomendamos que proceses tu archivo de audio un poco, para hacer el sonido más profesional y con más volumen. Para esto vamos a usar Audacity, que es un software libre, de código abierto para grabar y editar sonidos. Puedes descargar Audacity (para Windows, Linux y OS X) de aquí: <a href="http://www.audacityteam.org/download/">http://www.audacityteam.org/download/</a>.

## Audacity: quitando silencios

Normalmente cuando grabas audio con Sonic Pi, habrá algo de silencio extra en el principio y al final de la canción. Si quieres, puedes eliminar este silencio no deseado con unos pasos simples. Primero, abre tu archivo de audio en Audacity desde el menú “Archivo / Abrir” Una vez que los hayas abierto tu archivo verás algo como lo de más abajo. 

<img src="{{ "/assets/img/audio_tutorial_04.jpg" | prepend: site.baseurl }}" width="100%">

Ahora navega por el menú “Efecto” y selecciona “Truncado de silencio”.

<img src="{{ "/assets/img/audio_tutorial_05.jpg" | prepend: site.baseurl }}" width="100%">

Usa los siguientes valores en la ventana “Truncado de silencio”:

* Nivel: -60 dB
* Duración: 0.5 segundos
* Truncar a: 0.1 segundos

Luego pulsa “Ok”.

<img src="{{ "/assets/img/audio_tutorial_06.jpg" | prepend: site.baseurl }}" width="100%">

Ahora deberías ver las partes del silencio en el audio eliminadas de la onda de sonido. 

## Audacity: Normalización del volumen

<img src="{{ "/assets/img/audio_tutorial_07.jpg" | prepend: site.baseurl }}" width="100%">

Ahora vamos a hacer el sonido tan fuerte como sea posible sin compresión o sin hacer ningún daño al propio audio. Si piensas que tu música está más dominada por el tiempo del ritmo y debería en general ser más fuerte, entonces el siguiente paso es para ti. Por otra parte, si tu material es más suave (como música ambiental) y debería quedarse así, entonces no necesariamente recomendamos que sigas los siguientes pasos para normalizar el sonido.  De cualquier modo, esto es lo que tienes que hacer: Ve al menú “Efecto” y selecciona “Normalizar” 

<img src="{{ "/assets/img/audio_tutorial_08.jpg" | prepend: site.baseurl }}" width="100%">

Pon los siguientes valores en la ventana “Normalizar”:

* Normalizar amplitud máxima a -0.1 dB

Selecciona los dos opciones de más arriba y presiona “Ok”

<img src="{{ "/assets/img/audio_tutorial_09.jpg" | prepend: site.baseurl }}" width="100%">

Ahora deberías ver que los picos de la onda del sonido son mas altos, lo que significa que el audio resultante es también más alto. 

<img src="{{ "/assets/img/audio_tutorial_10.jpg" | prepend: site.baseurl }}" width="100%">

## Audacity: Guardando archivos MP3

Ahora sólo tendrás que guardar un archivo de audio. Por ejemplo, si quieres guardar tu pista como un archivo MP3, abre el menú “Archivo” y selecciona “Exportar audio”

<img src="{{ "/assets/img/audio_tutorial_11.jpg" | prepend: site.baseurl }}" width="100%">

En la ventana Exportar audio deberías ver un menú desplegable en algún sitio de tu ventana de archivos. Selecciona “Archivos  MP3” de tu menú. Puedes usar uno de los ajustes preestablecidos estándares en las Opciones de formato para los archivos MP3. Por ejemplo, las siguiente opciones de formato deberían funcionar siempre de forma decente: 

* Modo de velocidad de transferencia:  Valor predefinido  
* Calidad: Estándar, 170-210 kbps 
* Velocidad variable: Rápido
* Modo de canal: Estéreo unido 

Lo siguiente es poner un nombre de archivo en el campo “Nombre” y pulsar “Guardar”. ¡Eso debería hacer el truco! Ahora tienes el archivo MP3 de tu pista, que puedes enviar fácilmente a tus amigos, ponerlo en SoundCloud o subirlo a tu teléfono móvil.

<img src="{{ "/assets/img/audio_tutorial_12.jpg" | prepend: site.baseurl }}" width="100%">

¡Esperamos que te hayas divertido creando y publicando pistas con Sonic Pi!
