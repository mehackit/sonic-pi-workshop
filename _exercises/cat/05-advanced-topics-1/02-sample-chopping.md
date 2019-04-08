---
chapter: Temes avançats 1
title: Sample slicing (llescant mostres de so)
lang: cat
layout: exercise
---

Tornem enrere i mirem els samples (mostres) de nou. Mireu el vídeo que ve a continuació per a entendre com es comporta la reproducció d'un bucle de samples.


{% include videoplayer.html filepath="/assets/video/amen_loop" %}

Mostreu la reproducció del sample `:loop_amen` amb el codi següent:

{% highlight ruby %}
sample :loop_amen
{% endhighlight %}


Anem a fer un `live_loop` que manté sonant el ritme. Recordeu l'opció `beat_stretch` per l’ordre `sample` que altera l’entonació de la mostra perquè coincidisca amb la longitud desitjada en temps? Ho presentem breument en el capítol “Retocant sons”. Després l’utilitzarem per a estirar el sample `loop_amen` a 4 temps i ho mantindrem repetint-se: 

{% highlight ruby %}
use_bpm 145

live_loop :drumloop do
  sample :loop_amen, beat_stretch: 4
  sleep 4
end
{% endhighlight %}

A continuació veurem com podeu tocar parts del bucle Amen en un ordre diferent. Amb l’ordre `sample` podeu configurar un començament i un final diferent i per al sample usant els paràmetres `start` i `finish`. Tots dos paràmetres accepten valors entre `0` i `1` indicant els punts del començament i el final de la reproducció del sample. Per exemple: `0` és el començament del sample, `0.5` és el punt mitjà i `1` és el final del sample.Provem-ho en acció amb el següent exemple:

{% highlight ruby %}
use_bpm 145

live_loop :drumloop do
  sample :loop_amen, beat_stretch: 4, start: 0, finish: 0.125
  sleep 0.5
  sample :loop_amen, beat_stretch: 4, start: 0, finish: 0.125
  sleep 0.5
  sample :loop_amen, beat_stretch: 4, start: 0.5, finish: 0.75
  sleep 1
  sample :loop_amen, beat_stretch: 4, start: 0.25, finish: 0.5
  sleep 1
  sample :loop_amen, beat_stretch: 4, start: 0.75, finish: 0.875
  sleep 0.5
  sample :loop_amen, beat_stretch: 4, start: 0.25, finish: 0.375
  sleep 0.5
end
{% endhighlight %}

El vídeo de més avall, (creat amb l'ajuda de Simpler en Ableton Live) visualitza quines parts del sample `loop_amen` s'estan tocant en cada execució de `live_loop`:

{% include videoplayer.html filepath="/assets/video/amen_slicing" %}

Ara, no seria divertit tocar diferents parts del sample en un ordre completament diferent? Intenteu-ho provant amb les opcions per l’ordre sample. Per exemple, afegint l'opció `rate: -1` a un dels loop_amen fa que es reproduïsca cap enrere.

Una mostra de so pot esculpir-se de manera que es transforma en quasi qualsevol altra cosa una vegada que comenceu a experimentar amb les opcions de `sample` (com `rate`, `pan`, `amp`, `attack`, `release`, `start` i `finish`). El següent exemple usa aquestes opcions amb valors aleatoris per a tocar uns micro-sons únics dels dos samples: 

{% highlight ruby %}
use_bpm 180

with_fx :reverb, mix: 0.2, room: 1 do
  live_loop :grain1 do
    s = rrand(0, 0.7)
    t = rrand(0.03, 0.3)
    e = s + t
    a = rrand(0.5, 1.0)
    sample :guit_e_fifths, rate: -1.5, start: s, finish: e, attack: t/6.0, sustain: t/2.0, pan: rrand(-0.5, 0.5)
    sleep t
  end

  live_loop :grain2 do
    s = rrand(0, 0.7)
    t = rrand(0.03, 0.2)
    e = s + t
    a = rrand(0.5, 1.0)
    sample :guit_em9, rate: 1.5, start: s, finish: e, attack: t/6.0, sustain: t/2.0, pan: rrand(-0.5, 0.5)
    sleep t
  end
end
{% endhighlight %}

{% include player.html filepath="/assets/audio/granular_1.mp3" %}

Aquesta tècnica també s’utilitza àmpliament en <a href="https://en.wikipedia.org/wiki/Granular_synthesis">samplers granulars i sintetitzadors</a>