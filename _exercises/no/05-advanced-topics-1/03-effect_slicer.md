---
chapter: Avanserte tema 1
title: Slicer
lang: no
layout: exercise
---

I tillegg til samplesplittingen i det forrige kapittelet kan du også bruke effekten `:slicer` for å legge på litt "rhythmic & chops" til musikken din. Det den gjør er å endre volumet av samplet over tid (dette kalles også amplititudemodifikasjon). La oss begynne å eksperimente med denne effekten ved å lage en ny `live_loop` i et tomt mellomlager og bruke samplet `:loop_breakbeat` som byggekloss: 

{% highlight ruby %}
use_bpm 120

live_loop :breakbeat do
  sample :loop_breakbeat, beat_stretch: 4, amp: 2
  sleep 4
end
{% endhighlight %}

Nå skal sangen din høres ut som i videoen under. Vi bruker rød farge for å vise volumet til lyden, og i eksempelet her skal det være på max hele tiden.

{% include videoplayer.html filepath="/assets/video/breakbeat_dry" %}

La oss legge til en slicer effekt til `live_loop`en vår ved å bruke `with_fx` kommandoen. Hvis du ikke husker eller vet hvordan man bruker effekter i Sonic Pi, kan du lese mer om dem i det forrige kapittelet som heter <a href="{{ "/exercises/no/03-tweak-the-sounds/03-effects.html" | prepend: site.baseurl }}">effekter</a>.

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


Den effekten høres litt hard ut og vi må justere litt på den. De viktigste justeringsmulighetene i slicer effekten er `phase`, `wave` of `mix`. Du kan bruke dem for å styre amplitudemoduleringen. `phase` er frekvensen som sier hvor fort eller raskt amplitudemoduleringen foregår. Standardveriden for `phase` er `0.25` som betyr at effekten skjer hver 1/16 dels note. På grunn av dette høres det forrige eksempelet litt masete ut. 

Slicer effekten kan endre lyden med fire forskjellige bølgeformer: `0`(sagtann), `1` (puls), `2` (trekant) and `3`(sinusbølge). Som standard er `wave` satt til `1` som som betyr at det er en firkantpuls for å endre volumet (amplituden). Bildet under viesr hvordan bølgeformene ser ut og hvordan de senker og øker volumet (amplituden, det røde området) over tid.

<img src="{{ "/assets/img/slicer_waveforms.png" | prepend: site.baseurl }}" width="100%">

Nå kan du prøve å endre bølgeformen til en sagtann (`wave: 0`). Det burde gjøre effekten litt mykere og ikke så brå.

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

La oss senke frekvensen ved å øke phase (`phase: 0.5`) og bytte bølgeformen til en firkantpuls (`wave: 1`):

{% include videoplayer.html filepath="/assets/video/fx_slicer_wave_1" %}

Hva skjer om vi bruker disse verdiene på effekten? (`phase: 0.5, wave: 1`):

{% include videoplayer.html filepath="/assets/video/fx_slicer_wave_2" %}

På denne måten er det ganske lett å legge på rytme, variasjon og dynamikk til trommesporet. Husk at du også kan bruke dette på synthesizerene i Sonic Pi!

Her er et siste slicer effekt eksempel som bruker lenger fasetider (phase) med slicer effekten:

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
