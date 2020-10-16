---
chapter: Készíts egy dalt
title: Bassszus
lang: hu
layout: exercise
---

Adj hozzá egy másik live loop-ot a basszushoz. Készíts tömör és egyszerű basszus részt. Ha ez segít, akkor a böngésződben a  <a href="{{ "/exercises/hu/09-keys-chords-and-scales/01-piano.html" | prepend: site.baseurl }}">piano</a> segítségével kiválaszthatod a kívánt hangjegyeket. Íme egy példa:

{% highlight ruby %}
live_loop :bass do
  play :c2
  sleep 0.25
  play :c2
  sleep 2
  play :e2
  sleep 0.75
  play :f2
  sleep 1
end
{% endhighlight %}

## Változtatsd a szintetizátort

Ideje, hogy a dallam még érdekesebbé váljon! Megtehetjük ezt a szintetizátor hangjainak megváltoztatásával. Az alapértelmezett Sonic Pi szintetizátort  `beep` hangjelzésnek hívják. Másik szintetizátor használatához hozzá kell adnod a  `use_synth :name_of_synth` akódot azon kódsorozat fölött amelyben használni szeretnéd.

Ebben a példában az fm a szintetizátor neve:

{% highlight ruby %}
live_loop :bass do
  use_synth :fm
  play :c2
  sleep 0.25
  play :c2
  sleep 2
  play :e2
  sleep 0.75
  play :f2
  sleep 1
end
{% endhighlight %}

A Sonic Pi szoftverben sok jó hangzású szintetizátor található. Neveik megkereséséhez kattints a képernyő tetején található súgó ikonra, hogy megjelenjen a súgó dokumentumok ablak. Ezután válaszd ki a Synths-et a súgóablak bal oldalán található fülről. Kattints a szintetizátor nevek bármelyikére, hogy további információt kapj a használatáról.

## Hangjegyek hosszának módosítása

Előfordulhat, hogy hosszabb ideig vagy más ütemben szeretnéd lejátszani a hangokat. Ez a használt kód opcionális paramétereinek módosításával érhető el.  `attack` és `release` vezérli a hangjegy amplitúdóját az idő múlásával:

<img src="{{ '/assets/img/attackrelease_hu.png' | prepend: site.baseurl }}">

A kezdés és az elengedés használata a következőképpen néz ki. Most a hang 4 ütem hosszú lenne.

{% highlight ruby %}
play 60, attack: 1, release: 3
{% endhighlight %}

Rövid staccato hangot készíthetsz úgy, hogy a kezdést nullára állítod, és nagyon rövid értékre engeded:

{% highlight ruby %}
play :c4, attack: 0, release: 0.2
{% endhighlight %}

Fedezd fel a különféle szintetizátorokat és hanghosszokat, és gördülékeny basszusod lesz.

Most a dal lehet valami ilyen:

{% highlight ruby %}
use_bpm 100

live_loop :drums do
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

live_loop :bass do
  use_synth :fm
  play :c2, attack: 0, release: 0.25
  sleep 0.25
  play :c2, attack: 0, release: 0.3
  sleep 2
  play :e2
  sleep 0.75
  play :f2
  sleep 1
end
{% endhighlight %}
