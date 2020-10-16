---
chapter: Haladó témák  1
title: Minta szeletelés
lang: hu
layout: exercise
---

Tegyünk egy lépést hátra, és nézzük meg újra a mintákat. Nézd meg az alábbi videót, hogy megértsd, hogyan viselkedik a ciklikus minta lejátszása.

{% include videoplayer.html filepath="/assets/video/amen_loop" %}

Megmutatja a `:loop_amen` minta lejátszását a következő kóddal:


{% highlight ruby %}
sample :loop_amen
{% endhighlight %}

Készítsünk egy  `live_loop` -ot, amely folyamatosan játssza nekünk a ritmust. Emlékszel a `sample` parancs `beat_stretch` lehetőségére, amely megváltoztatja a minta hangmagasságát, hogy megegyezzen a kívánt hosszúsággal az ütemekben? Röviden bemutattuk a „Ismerd meg a hangokat” fejezetben. Ezután úgy fogjuk használni, hogy a `loop_amen` mintát 4 ütemre választjuk és folyamatosan ismételjük:

{% highlight ruby %}
use_bpm 145

live_loop :drumloop do
  sample :loop_amen, beat_stretch: 4
  sleep 4
end
{% endhighlight %}

Ezután megvizsgáljuk, hogyan lehet az Amen ciklus részeit más sorrendben lejátszani. A  `sample` paranccsal a kezdő és a befejező paraméterek segítségével beállíthatsz egy másik  `start` és `finish`. pontot a mintára. Mindkét paraméter  `0` és `1` közötti értékeket fogad el, amelyek jelzik a minta lejátszásának kezdő és befejező pontját. Például:  `0` is a minta kezdete, `0.5` a minta középpontja és  `1` a minta végpontja. Kipróbáljuk a következő példában:

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

Az alábbi videó (az Ableton Live alkalmazásban az Simpler segítségével készült) bemutatja, hogy a `loop_amen` minta mely részeit játsszák a `live_loop` minden egyes futtatásakor:

{% include videoplayer.html filepath="/assets/video/amen_slicing" %}

Most nem szórakoztató, ha a minta különböző részeit teljesen más sorrendben játsszuk? Próbáld ki a `sample`. parancs lehetőségeit. Például, ha hozzáadsz egy `rate: -1`utasítást a `loop_amen` egyikéhez, akkor visszafelé fogja lejátszani.

Egy mintát szinte bármivé át lehet alakítani, ha elkezdesz kísérletezni a  `sample` lehetőségeivel (például  `rate`, `pan`, `amp`, `attack`, `release`, `start` and `finish`). A következő példa ezeket a lehetőségeket használja véletlenszerűen alkalmazott értékekkel, hogy két minta egyedi mikrohangjait játssza le:

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

Ezt a technikát széles körben alkalmazzák a <a href="https://en.wikipedia.org/wiki/Granular_synthesis">szemcsés mintavevőkben és a szintetizátorokban is</a>.
