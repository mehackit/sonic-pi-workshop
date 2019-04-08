---
chapter: Temes avançats 1
title: Slicer
lang: cat
layout: exercise
---

A més del llescat de samples (mostres sonores) presentat en la secció anterior, podeu també usar l'efecte de so `:slicer` per a afegir una mica de “ritme i llesques” a la música. Consisteix bàsicament a alterar el volum del so en el temps (i sovint aquest efecte es diu modulació de l'amplitud). Comencem el nostre experiment amb aquest efecte creant un nou `live_loop` en un buffer lliure i usant el sample `:loop_breakbeat` com a bloc de construcció:

{% highlight ruby %}
use_bpm 120

live_loop :breakbeat do
  sample :loop_breakbeat, beat_stretch: 4, amp: 2
  sleep 4
end
{% endhighlight %}

El bucle hauria de sonar ara com en el vídeo de més avall. Estem usant el color roig per a indicar el volum del so i en aquest exemple hauria d'estar al màxim.
{% include videoplayer.html filepath="/assets/video/breakbeat_dry" %}

Ara afegirem l'efecte slicer al `live_loop` usant l’ordre ja conegut `with_fx`. Si no te’n recordes o no saps com s'usen els efectes en Sonic Pi, pots llegir més sobre ells en l'anterior capítol anomenat <a href="{{ "/exercises/cat/03-tweak-the-sounds/03-effects.html" | prepend: site.baseurl }}">Efectes</a>.

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

L'efecte de llescat slicer que acabem d'afegir sona massa dur i necessitarem ajustar-ho a poc a poc. Les opcions principals de l'efecte de llescat són `phase`, `wave` i `mix`. Podeu usar-les per a controlar l'amplitud de la modulació. L'opció phase és la freqüència, com de ràpid o lent té lloc la modulació de l'amplitud. El valor predeterminat de `phase` és `0.25` que significa que l'efecte ocorre en cada semicorxera. Per això, l'anterior exemple sona bastant agitat.

L'efecte de llescat pot modular l'amplitud usant quatre formes d'ones diferents: `0` (saw /serra), `1` (pulse/pols), `2` (triangle/triangle) i `3` (sinewave/sinusoidal). Per omissió, `wave` està configurat a `1`, el que significa que usa ones de pols (també conegudes com quadrades) per a modular l'amplitud. Les imatges a continuació mostren com són les formes d'ona i com augmenten o disminueixen l'amplitud (l'àrea marcada de color roig) en el temps.

<img src="{{ "/assets/img/slicer_waveforms.png" | prepend: site.baseurl }}" width="100%">

Ara intentarem canviar la forma de l'ona a serra (`wave: 0`). Açò hauria de fer l'efecte una mica més suau i menys abrupte.

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

Duplicarem la durada de la fase (`phase: 0.5`) i canviarem la forma d'ona a pols (`wave: 1`):
{% include videoplayer.html filepath="/assets/video/fx_slicer_wave_1" %}

Ara veurem què ocorre amb l’efecte si usem les següents opcions (`phase: 0.5, wave: 2`):
{% include videoplayer.html filepath="/assets/video/fx_slicer_wave_2" %}

D'aquesta manera és molt fàcil afegir una mica de ritme, varietat i dinamisme als bucles de ritme o percussió. Recordeu que també poden utilitzar-se amb els sintetitzadors de Sonic Pi!
Ací tenim l'últim exemple d'efecte de llescat (`slice`) que utilitza uns temps de fase més llargs amb l'efecte de llescat:

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
