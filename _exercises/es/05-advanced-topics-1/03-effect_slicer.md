---
chapter: Temas avanzados 1
title: Slicer
lang: es
layout: exercise
---

Además de el rebanado de samples presentado en el anterior tema, puede también usar el efecto de sonido `:slicer` para añadir  algo de “ritmo y chuletas” a tu música. Consiste básicamente en alterar el volumen del sonido en el tiempo. (y a menudo este efecto se llama modulación de la amplitud). 
Empecemos nuestro experimento con este efecto creando un nuevo `live_loop` en un buffer libre y usando el sample `:loop_breakbeat` como nuestro bloque de construcción:

{% highlight ruby %}
use_bpm 120

live_loop :breakbeat do
  sample :loop_breakbeat, beat_stretch: 4, amp: 2
  sleep 4
end
{% endhighlight %}

El bucle debería sonar ahora como en el vídeo de abajo. Estamos usando el color rojo para indicar el volumen del sonido y en este ejemplo debería estar al máximo. 

{% include videoplayer.html filepath="/assets/video/breakbeat_dry" %}

Ahora vamos a añadir el efecto rebanado al `live_loop` usando el comando ya conocido  `with_fx`. Si no te acuerdas o no sabes como se usan los efectos en Sonic Pi, puedes leer más sobre ellos en el anterior capítulo llamado <a href="{{ "/exercises/es/03-tweak-the-sounds/03-effects.html" | prepend: site.baseurl }}">Efectos</a>.

{% highlight ruby %}
use_bpm 120

live_loop :breakbeat do
  with_fx :slicer do
    sample :loop_breakbeat, beat_stretch: 4, amp: 2
    sleep 4
  end
end
{% endhighlight %}

{% include player.html filepath="/assets/audio/breakbeat_slicer.mp3" %}

El efecto de rebanado que acabamos de añadir suena demasiado duro y necesitaremos ajustarlo poco a poco. Las opciones principales del efecto de rebanado son `phase`, `wave` y `mix`. Puedes usarlas para controlar la amplitud de la modulación. La opción `phase` es la frecuencia, como de rápido o lento tiene lugar la modulación de la amplitud. El valor predeterminado de `phase` es `0.25` que significa que el efecto ocurre en cada nota de semicorchea. Por esto, el anterior ejemplo suena bastante agitado. 

El efecto de rebanado puede modular la amplitud usando cuatro formas de ondas distintas:  `0` (saw /sierra), `1` (pulse/pulso), `2` (triangle/triangulo) y `3` (sinewave/sinusoide). Por omisión, `wave` está configurado a `1` lo que significa que usa ondas de pulsos (también conocidos como cuadradas) para modular la amplitud. Las fotos de más abajo muestran como son las formas de onda y como aumentan o disminuyen la amplitud (el área marcada de color rojo) en el tiempo. 

<img src="{{ "/assets/img/slicer_waveforms.png" | prepend: site.baseurl }}" width="100%">

Ahora vamos a intentar cambiar la forma de la onda a sierra (`wave: 0`). Esto debería hacer el efecto un poco más suave y menos abrupto. 

{% highlight ruby %}
use_bpm 120

live_loop :breakbeat do
  with_fx :slicer, phase: 0.25, wave: 0, mix: 1.0 do
    sample :loop_breakbeat, beat_stretch: 4, amp: 2
    sleep 4
  end
end
{% endhighlight %}

{% include videoplayer.html filepath="/assets/video/fx_slicer_wave_0" %}

Vamos a duplicar la duración de la fase (`phase: 0.5`) y cambiar la forma de onda a pulso (`wave: 1`):

{% include videoplayer.html filepath="/assets/video/fx_slicer_wave_1" %}

Ahora que ocurre si usamos las siguientes opciones (`phase: 0.5, wave: 1`) con el efecto:

{% include videoplayer.html filepath="/assets/video/fx_slicer_wave_2" %}

De esta manera es muy fácil añadir algo de ritmo, variedad y dinamismo a los bucles de tambores. ¡Recuerda que puedes también usar esto con los sintetizadores en Sonic Pi!

Aquí tenemos el último ejemplo de efecto de rebanado que usa unos tiempos de fase más largos con el efecto de rebanado:

{% highlight ruby %}
use_bpm 120

live_loop :breakbeat do
  with_fx :slicer, phase: 1.75, wave: 0, mix: 1.0 do
    sample :loop_garzul, beat_stretch: 16, amp: 1
    sleep 16
  end
end

live_loop :beep do
  with_fx :reverb, room: 0.9 do
    with_fx :slicer, phase: 1, wave: 1, mix: 1.0 do
      synth :hoover, note: [:Db4, :G3, :Bb3, :F4].ring.tick, attack: 2, release: 4, amp: 0.5
      sleep 6
    end
  end
end

live_loop :kick do
  sample :bd_haus
  sleep 4
end
{% endhighlight %}

{% include player.html filepath="/assets/audio/industrial_slicer.mp3" %}
