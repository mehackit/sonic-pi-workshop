---
chapter: Temas avanzados 1
title: Samples externos
lang: es
layout: exercise
---

Sonic Pi viene con aproximadamente 73 samples que puedes libremente usar y jugar, pero también tiene soporte para usar samples externos. Por ejemplo, quizás te gustaría grabar algo (como tu propia voz o guitarra) y tenerlo en Sonic Pi para usarlo en tu canción.

Primero, tendrás que tener algunos samples de audio en formato WAV localizados en una carpeta en tu disco duro. En los siguientes ejemplos, estamos usando un paquete de samples libres de *Mehackit*. Se llaman Solenoid Samples 1 y puedes descargarlo de <a href="{{ "/assets/files/solenoid_samples_1.zip" | prepend: site.baseurl }}">aquí</a>. Contiene 14 samples de una sola vez y bucles que fueron guardados de una instalación de sonido cinético que creamos en un taller a principios de 2016.

Una vez que hayas descargado y extraído los archivos de la carpeta, tendrás que comprobar la ruta de ese archivo. Por ejemplo, si extraes los archivos a una carpeta llamada ‘Samples’ en tu Escritorio, la ruta de archivo será seguramente la siguiente:

* Windows: "C:/Users/sam/Desktop/Samples" 
* Raspberry Pi, Linux and Mac: "/Users/sam/Desktop/Samples" 

Simplemente acuérdate de usar tu propio nombre de usuario en vez de ‘sam’. El paquete del sample contiene los siguientes archivos: de `hit_1.wav` a `hit_7.wav` (percusión) y de `loop_1.wav` a `loop_7.wav` (ritmos en bucle que se recomiendan para tocarlos con las opciones del sample `beat_stretch`).

Ahora puedes tocarlos directamente con el comando `sample` usando la ruta de archivo correcta:

{% highlight ruby %}
sample "/Users/sam/Desktop/Samples/loop_1.wav", amp: 1.5
{% endhighlight %}

Si la ruta de archivo está configurada correctamente para el comando `sample` deberías escuchar ahora el sonido `loop_1.wav`. ¡Sólo recuerda usar tu propia ruta de archivo en lugar de la que se muestra en los ejemplos! Es una forma directa de acceder y tocar samples. Sin embargo, probablemente quieras escribir la ruta de archivo una sola vez en el código y tocar los samples solo refiriéndote a sus nombres de archivos. Puedes declarar una variable para la ruta de archivo y usarla conjuntamente con el comando `sample`. Después de sample puedes introducir el nombre de la variable que contiene la ruta de archivo y luego el nombre del `sample`. Declararemos una variable para la ruta del archivo llamada `solenoids` en el ejemplo de abajo. Cuando lo ejecutes, el sample `loop_4.wav` debe empezar a tocar y hacer un bucle: 

{% highlight ruby %}
solenoids = "/Users/sam/Desktop/Samples/"
use_bpm 110

live_loop :solenoid1 do
  sample solenoids, "loop_4", beat_stretch: 4, amp: 2
  sleep 4
end
{% endhighlight %}

Ahora eres capaz de usar samples externos y samples de la propia librería de Sonic Pi en tus producciones. Intenta tocando el ejemplo de abajo que usa cuatro estancias diferentes de `live_loop` para tocar samples externos y propios de Sonic Pi. Ten en cuenta que en el live_loop `:solenoid2` estamos usando una variable `samplename` para de forma aleatoria seleccionar un archivo de los samples desde `hit_1.wav` a `hit_7.wav`.

{% highlight ruby %}
solenoids = "/Users/sam/Desktop/Samples/"
use_bpm 110

live_loop :solenoid1 do
  sample solenoids, "loop_4", beat_stretch: 4, amp: 2
  sleep 4
end

live_loop :kick do
  sample :bd_haus, rate: 0.8, amp: 2
  sleep 1
end

live_loop :solenoid2 do
  samplename = ["hit_1", "hit_2", "hit_3", "hit_4", "hit_5", "hit_6", "hit_7"].choose
  time = [0.25, 0.5, 0.75].choose
  sample solenoids, samplename, amp: 1.5, rate: 2, pan: rrand(-0.8, 0.8)
  sleep time
end

with_fx :reverb do
  live_loop :solenoid3 do
    sleep 2
    sample solenoids, "hit_6", rate: (ring 0.5, 0.55, 0.6, 0.65).tick, amp: 1.5
    sleep 2
  end
end
{% endhighlight %}

{% include player.html filepath="/assets/audio/solenoid_1.mp3" %}
