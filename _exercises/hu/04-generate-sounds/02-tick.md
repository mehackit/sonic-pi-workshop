---
chapter: Hangok generálása
title: Jelölés
lang: hu
layout: exercise
---

Emlékszel a `chord`utasításra? A chord függvény megadja egy bizonyos akkord hangjegyeit:

{% highlight ruby %}
play (chord :c, :major).choose
# egy véletlenszerű hangot játszik le a C-dúr skáláról (:c, :e vagy :g)
{% endhighlight %}

Van még egy léptéknek nevezett függvény:  `scale`. A scale az összes hangot egy skálán adja vissza, nem csak az akkordban szereplőket:

{% highlight ruby %}
play (scale :c, :major).choose
# véletlenszerű hangot játszik a C-dúr skáláról (: c,: d,: e,: f,: g,: a vagy: b)
{% endhighlight %}

A `choose` segítségével véletlenszerű elemet szerezhetsz egy listából. Ha strukturáltabb módon szeretnéd áttekinteni az értékeket, akkor arra a Sonic PI nagyon hathatós függvénnyel rendelkezik, amelyet  `tick`-nek hívnak:

{% highlight ruby %}
live_loop :arp do
  play (scale :e3, :minor_pentatonic).tick, release: 0.1
  sleep 0.125
end
{% endhighlight %}

Itt az E3 pentaton skálát megfogjuk, és megjelöljük minden elemen. Ezt úgy végezzük el, hogy egy .tick utasítást adunk a skála meghatározásának végéhez. Ez a jel az aktuális a live loop-hoz tartozik, tehát minden live loop-nak megvan a saját önálló jele:

{% highlight ruby %}
live_loop :arp do
  play (scale :e3, :minor_pentatonic).tick, release: 0.1
  sleep 0.125
end

live_loop :arp2 do
  use_synth :dsaw
  play (scale :e2, :minor_pentatonic, num_octaves: 3).tick, release: 0.25
  sleep 0.25
end
{% endhighlight %}

## Körök

Megjelölhetsz bármit, ami kör (nos, listákat is kitűzhetsz, de akkor megáll, ha a végére ér). A Ring gyűrű/kör egy speciális lista, amely újra kezdődik, amikor a végére ér. Az előző példához hasonlóan a skála az utolsó hangjegy elérése után ismét az elejétől kezdődött. A  `scale` és a `chord` visszaadja a kört. Előfordulhat, hogy létrehoz egy listát, és azt körré alakítja a `.ring` hívásával vagy a `ring` készítő használatával:

{% highlight ruby %}
puts [1, 2, 3, 4].ring #=> (ring 1, 2, 3, 4)
puts (ring 1, 2, 3, 4) #=> (ring 1, 2, 3, 4)
{% endhighlight %}

{% highlight ruby %}
live_loop :arp do
  play [:c, :e, :d, :f].ring.tick, release: 0.1
  sleep 0.125
end
{% endhighlight %}

Itt egy kicsit összetettebb példa. Itt van egy lista vagy akkordok, amelyek körré alakulnak és bejelölhetők:

{% highlight ruby %}
live_loop :keys do
  use_synth :blade
  play [(chord :Ab, :major7), (chord :Db, :major7), (chord :Bb, :minor7), (chord :Eb, '7')].ring.tick, attack: 0.1, release: 1
  sleep 1
end
{% endhighlight %}

Tegyél rá egy vezető dallamot:

{% highlight ruby %}
live_loop :keys do
  use_synth :blade
  play [(chord :Ab, :major7), (chord :Db, :major7), (chord :Bb, :minor7), (chord :Eb, "7")].ring.tick, attack: 0.1, release: 1
  sleep 1
end

live_loop :lead do
  use_synth :dsaw
  play (scale :Ab, :major, num_octaves: 3).mirror.tick, attack: 0.05, release: 0.25, cutoff: rrand(80, 110), amp: 0.5
  sleep 0.25
end
{% endhighlight %}

Kezd a jelölést, vadulj!
