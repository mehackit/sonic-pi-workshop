---
chapter: Introducción
title: Introducción
lang: es
layout: exercise
---

Sonic Pi es un entorno de programación de código abierto, diseñado para explorar y enseñar conceptos de programación a través del proceso de crear sonidos nuevos. Es un sintetizador libre de programación en directo para todo el mundo, creado por Sam Aaron en el laboratorio de informática de la Universidad de Cambridge. Puedes usar Sonic Pi para programar, componer e interpretar una gama de estilos desde clásicos a contemporáneos, de Canons a Dubstep. 

Este tutorial te guiará a través de los básicos y más de Sonic Pi. Al final de este tutorial serás capaz de crear cosas como esta:


{% include player.html filepath="/assets/audio/groove.mp3" %}

O algo como esto:

{% include player.html filepath="/assets/audio/amen.mp3" %}

En Sonic Pi se traba de explorar. No hay errores, son sólo descubrimientos. Y sobre todo, es cuestión de pasárselo bien.  Así que recuerda: ¡diviértete, explora y hackea!

## Abre Sonic Pi

Si no tienes instalado Sonic Pi, visita <a href="http://sonic-pi.net/">sonic-pi.net</a>, descárgalo e instálalo. Está disponible para Windows, OS X y sistemas operativos Linux.

Luego, ¡enciende Sonic Pi! Vamos a ver como es.

Este es el interfaz de Sonic Pi; tiene tres ventanas principales. La mayor es para escribir tu código y la podemos llamar Panel de Programación. Hay también un panel de registro, que muestra información sobre tu programa cuando se ejecuta. Cuando pulsas en el botón de ayuda, en la parte de arriba de la ventana, un tercer panel aparece en la parte del fondo mostrando la documentación de ayuda. Ésta contiene información sobre el lenguaje para programar Sonic Pi, y también sobre los diferentes sintetizadores de sonido, ejemplos de sonido, y mucho más. ¡Hay también multitud de ejemplos listos para funcionar que puedes probar y usar! 


<img src="{{ "/assets/img/es/interface_es.png" | prepend: site.baseurl}}">
<p class="center"><small><i>Sonic Pi interface</i></small></p>

## Tocar una nota

Empecemos programando Sonic Pi para tocar una nota. Selecciona el `Buffer 0` y escribe:

{% highlight ruby %}
play 60
{% endhighlight %}

Presiona **Run** desde la esquina superior izquierda. ¿Puedes oír un beep?

Prueba diferentes valores. Escribe por ejemplo `play 50` o `play 70`. ¿Cómo cambia el sonido?

Ahora intenta escribir `pley 60` y presiona run. ¿Qué sucede?

> Este es un ejemplo de un bug en tu código. En las actividades de más adelante, si el panel de error muestra un texto, sabrás que tienes un bug que necesitas corregir. Podría ser que has escrito una palabra mal como `play`.

Los números que has usado son notas MIDI. MIDI es una forma práctica de componer y es una herramienta práctica para probar rápidamente tus notas y ajustarlas disminuyendo su valor (haciendo tu nota más baja) o incrementándola, (haciendo el tono más alto). Sonic Pi está familiarizado tanto con la notación numérica en MIDI (con valores entre `0` y `127`) y la notación musical tradicional (como: `:C4`, `:Eb3` o `:G5`).
