---
chapter: Introducción
title: Tocar una melodía
lang: es
layout: exercise
---

Escribe lo siguiente en el buffer y presiona run:


{% highlight ruby %}
play 60
play 67
play 69
{% endhighlight %}

No sonó como una melodía, ¿verdad?. En vez de tocarlas una tras otra, Sonic Pi tocó todas las notas a la vez (y así es como puedes realmente escribir acordes).

Si quieres que Sonic Pi toque cada nota en una secuencia, le tienes que decir al software que haga una pausa entre una nota y otra. Inténtalo escribiendo
 `sleep 1` debajo de cada nota como esto: 

{% highlight ruby %}
play 60
sleep 1
play 67
sleep 1
play 69
{% endhighlight %}

`sleep 1` dice a Sonic Pi que espere un tiempo. Puedes probar con números mayores o menores. Cuanto menor sea el valor de sleep, menor será la duración entre los comandos play y al contrario. Si estás familiarizado con las notas musicales, así son las diferentes notas musicales en Sonic Pi:

<img src="{{ "/assets/img/es/Notes_es.png" | prepend: site.baseurl }}"> 
<img src="{{ "/assets/img/es/Rests_es.png" | prepend: site.baseurl }}">

Como dijimos antes, puedes escribir las notas en MIDI, que son básicamente números entre 0 y 127 (`67`, `80`, `22`) o como notas musicales (`:G4`, `:Ab5`, `:Bb`), como prefieras. Aquí tenemos un gráfico que muestra las notas y sus correspondientes valores en MIDI:

<img src="{{ "/assets/img/es/midi_notes_es.png" | prepend: site.baseurl }}">

## Prueba

Usa las notas de la escala de do mayor (`72, 74, 76, 77, 79, 81, 83` o `:C5 :D5 :E5 :F5 :G5 :A5 :B5`) para crear una melodía. Usa `sleep` con diferentes valores para variar el ritmo. Puedes usar `use_bpm` al principio para hacer tu melodía más rápida o más lenta. El acrónimo BPM viene de Beats Per Minute (pulsaciones por minuto). Por ejemplo:

{% highlight ruby %}
use_bpm 120

play 72
sleep 0.25
play 76
sleep 0.25
play 76
sleep 0.25
play 72
sleep 0.5
play 83
sleep 0.25
play 74
sleep 0.25
play 83
sleep 0.25
play 79
play 84
{% endhighlight %}

{% include player.html filepath="/assets/audio/c-major-melody.mp3" description="Escucha el ejemplo anterior" %}

¡Ahora haz tu propia melodía!