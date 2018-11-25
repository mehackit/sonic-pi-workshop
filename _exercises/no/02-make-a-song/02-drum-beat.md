---
chapter: Lag en sang
title: Trommer
lang: no
layout: exercise
---

La oss se på hvordan vi lager et enkelt trommespor, bestående av en basstromme, skarptromme og en hi-hat. Du kommer til å lære to nye ting: `live_loop` og `sample`.

Start med et tomt buffer og lag en `live_loop` som vi kaller `:trommer`. Den kan hete hva som helst, navnene er bare så vi lett skal kunne huske hva de gjør. `live_loop` er en uendelig gjentagende løkke som kan synkroniseres med andre live_looper. (en `live_loop` må ha minst en sleep):

{% highlight ruby %}
live_loop :trommer do
  sample :drum_heavy_kick
  sleep 1
end
{% endhighlight %}

Trykk **Run** for å høre din første `live_loop` spille en fin basstromme på hvert taktslag. 

La oss lage en fin rytme med en basstromme på 1 og 3, skarptromme på 2 og 4. Istedenfor å spille noter spiller vi sampler. det er så lett som å skrive `sample :navn_på_sample`. Er er et eksempel:

{% highlight ruby %}

live_loop :trommer do
  use_bpm 100
  sample :drum_heavy_kick
  sleep 1
  sample :drum_snare_hard
  sleep 1
  sample :drum_heavy_kick
  sleep 1
  sample :drum_snare_hard
  sleep 1
end
{% endhighlight %}

Det er en stødig rytme. `:trommer` løkken starter med et bass, spiller skarptromme på nummer to, bass på tre, så en skarptromme på nummer fire. Så starter den igjen:

<img src="{{ "/assets/img/live_loop.png" | prepend: site.baseurl}}">

Nå kan du prøve å endre tempo (nummeret etter `use_bpm`) og lek litt med samplene. Når du begynner å skrive navnet på et sample kan du bla deg frem til andre sampler. Forsøk forskjellige samples og finn ut av hva de høres ut som. Legg merke til at du ikke trenger å trykke på stop for å endre lyden, bare skrive om koen og trykk på **Run**  igjen - lyden vil oppdatere seg på neste runde uten å miste et taktslag.

## Legg på hi-hat

Nå kan du legge på en hi-ht. La en ny live loop som heter `:hihat` og legg til et hi-hat sample. du kan for eksempel legge på noe på hver åttende eller sekstendedels sånn som dette (dette er sekstendedels):

{% highlight ruby %}
live_loop :hihat do
  sample :drum_cymbal_closed
  sleep 0.25
end
{% endhighlight %}

Men det trenger ikke være så rett frem. Du kan også prøve noe mer funky sånn som:

{% highlight ruby %}
live_loop :hihat do
  sample :drum_cymbal_closed
  sleep 0.25
  sample :drum_cymbal_pedal
  sleep 1
end
{% endhighlight %}


Rytmene i hi-hat mønsteret var først en "feil". Løkken er 1.25 takter lang istedenfor 1 som det skulle være, men det høres jo kult ut! Så husk og lage mange feil - det er da du kan finne det du ikke visste du lette etter.

Nå ser sangen ut omtrent som dette:

{% highlight ruby %}
use_bpm 100

live_loop :trommer do
  sample :drum_heavy_kick
  sleep 1
  sample :drum_snare_hard
  sleep 1
  sample :drum_heavy_kick
  sleep 1
  sample :drum_snare_hard
  sleep 1
end

live_loop :hihat do
  sample :drum_cymbal_closed
  sleep 0.25
  sample :drum_cymbal_pedal
  sleep 1
end
{% endhighlight %}

Du lurer kanskje på hvoran live_loops ville sett ut som en musikksekvens i vanlige musikkprogrammer? Denne videoen kan kanksje hjelpe deg med å forstå sammenhengen:

<iframe width="640" height="360" src="https://www.youtube.com/embed/iFMNOb33_KM?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>

Nå kan du prøve med forskjellige sampler og rytmer. Du kan også legge til en tredje `live_loop` for perkusjon eller andre effekter. Videre skal vi lage et basspor for komposisjonen din