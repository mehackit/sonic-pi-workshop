---
chapter: Haladó témák  1
title: Szeletelő
lang: hu
layout: exercise
---

Az előző témakörben bemutatott mintaszeletelésen kívül a  `:slicer` audiohatást is használhatod, hogy hozzáadj a zenédhez „ritmikus és apró” hangszereket. Alapvetően megváltoztatja a hang hangerejét az idő múlásával (és ezt a hatást gyakran amplitúdómodulációnak nevezik). Most kezdjük meg kísérletünket azáltal, hogy létrehozunk egy új  `live_loop` -ot egy üres pufferben, és a következő mintát használjuk a felépítéshez `:loop_breakbeat` :

{% highlight ruby %}
use_bpm 120

live_loop :breakbeat do
  sample :loop_breakbeat, beat_stretch: 4, amp: 2
  sleep 4
end
{% endhighlight %}

A ciklusnak ugyanúgy kell hangozni, mint az alábbi videóban. A piros szín használatával jelezzük a hang hangerejét, és ebben a példában a maximálisnak kell lennie.

{% include videoplayer.html filepath="/assets/video/breakbeat_dry" %}

NMost adjuk hozzá a szeletelő effektusot a `live_loop` -hoz az ismerős `with_fx` paranccsal. Ha nem emlékszel, vagy nem ismered az effektusok használatát a Sonic Pi-ban, akkor azokról az  <a href="{{ "/exercises/hu/03-tweak-the-sounds/03-effects.html" | prepend: site.baseurl }}">Effektusok</a> előző fejezetében olvashatsz bővebben..

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

Most az újonnan hozzáadott szeletelő hatás túl durvának hangzik, és kissé be kell hangolnunk. A szeletelő hatás fő lehetőségei a  `phase`, a `wave` és a `mix`. Használhatod azokat az amplitúdó moduláció szabályozására. A  `phase` lehetőség az amplitúdó moduláció gyors vagy lassú frekvenciája. Az alapértelmezett érték a  `phase`-hoz `0.25` , ami azt jelenti, hogy a hatás minden 16-od hangon megjelenik. Emiatt az előző példa meglehetősen hektikusnak tűnt.

A szeletelő effektus az amplitúdót négy különféle hullámformával modulálhatja:  `0`(fűrész), `1` (impulzus), `2` (háromszög) and `3`(szinuszhullám). ). Alapértelmezés szerint a  `wave` értéke `1` azaz impulzus (más néven négyzet alakú) hullámot használ az amplitúdó modulálására. Az alábbi képek szemléltetik, hogy néznek ki a hullámformák, és hogyan növelik vagy csökkentik az amplitúdót (a vörös színű terület) az idő múlásával.

<img src="{{ '/assets/img/slicer_waveforms.png' | prepend: site.baseurl }}" width="100%">

Most próbáljuk megváltoztatni a hullámformát fűrészre  (`wave: 0`). Ennek egy kicsit simábbnak és kevésbé meredeknek kell lennie.

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

Duplázzuk meg a fázis időtartamát  (`phase: 0.5`) és kapcsoljuk át a hullámformát impulzusra (`wave: 1`):

{% include videoplayer.html filepath="/assets/video/fx_slicer_wave_1" %}

Mi történik, ha a következő lehetőségeket használjuk (`phase: 0.5, wave: 2`) az effektusnál:

{% include videoplayer.html filepath="/assets/video/fx_slicer_wave_2" %}

Így meglehetősen könnyű hozzáadni ritmust, variációt és dinamikát a dobhurokhoz. Ne feledd, hogy ezt a Sonic Pi szintetizátorokkal is használhatod!

Itt van az utolsó szeletelőhatás-példa, amely hosszabb fázisidőket használ a szeletelőeffektushoz:

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
