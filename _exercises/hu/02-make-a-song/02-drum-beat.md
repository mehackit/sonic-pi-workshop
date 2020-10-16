---
chapter: Készíts egy dalt
title: Dob alap
lang: hu
layout: exercise
---

Nézzük hogy lehet egyszerű dob alapot létrehozni, amely lábdobból, pergő dobból és lábcintányérból áll. Két új dolgot fogsz megismerni: a  `live_loop` és a `sample` utasításokat.

Kezdd egy üres pufferrel és hozz létre egy  `live_loop` -ot, melynek a neve `:drums`. Ezt máshogy is el lehet nevezni, a nevek csak arra szolgálnak, hogy gyorsan azonosítsák, amit a ciklus tesz. A `live_loop` egy végtelen ciklus, amely szinkronizálható más live_loop utasításokkal (a `live_loop` utasításban kell lenni legalább egy sleep utasításnak)

{% highlight ruby %}
live_loop :drums do
  sample :drum_heavy_kick
  sleep 1
end
{% endhighlight %}

Kattints a **Run** gombra, hogy halld az első  `live_loop`-ot, ami minden ütemre egy szép lábdobot játszik.

Hozz létre egy kíséretet úgy, hogy lábdob az 1. és 3. ütem, erős pergés a 2. és 4. ütemre. Hangjegyek lejátszása helyett mintákat fogsz készíteni. Egyszerűen így írd:  `sample :sample_name`. Íme egy példa a dobverésre:

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
{% endhighlight %}

Ez egy állandó kíséret. A  `:drums` ciklus lábdobbal kezdődik, pergőt játszik a 2., láb lesz a 3. és pergő lesz a 4. ütemre. Ezután a ciklus újra kezdődik.

<img src="{{ '/assets/img/live_loop_hu.png' | prepend: site.baseurl}}">

Most próbálkozz megváltoztatni a tempót (a szám a `use_bpm` után) és játssz a mintákkal. Amikor elkezded írni a minta nevét, az automatikus kiegészítés funkcióval böngészhetsz a különböző minták között. Próbálj ki különböző mintákat, és ellenőrizd, hogy milyennek hangzanak.
Vedd figyelembe, hogy a hang megváltoztatásához nem kell megállítanod a dalt - csak változtasd meg a kódot, és nyomd meg újra a **Run** - gombot - a hangok automatikusan megváltoznak a következő ciklusban anélkül, hogy ütemet veszítenének!

## Adj hozzá cint

Most adj hozzá egy cint. Hozz létre egy másik ciklust  `:hihat` néven, és adj hozzá a cin mintákat. Megteheted például egyenesen a 8-ad vagy a 16-od hangokkal (ez a 16-od hang):

{% highlight ruby %}
live_loop :hihat do
  sample :drum_cymbal_closed
  sleep 0.25
end
{% endhighlight %}

De ez nem feltétlenül kell, hogy ilyen szögletes legyen: Mehetne egy kicsit funky módon, mint ez:

{% highlight ruby %}
live_loop :hihat do
  sample :drum_cymbal_closed
  sleep 0.25
  sample :drum_cymbal_pedal
  sleep 1
end
{% endhighlight %}

A poliritmikus cin minta először „hiba” volt. A ciklus 1,25-os üteme hosszabb a feltételezett 1 helyett. De remekül hangzik! Tehát ne feledd, hogy sok hibát kell elkövetni, hogy találj valamit, amit még csak nem is kerestél.

Az új dal valahogy így szól:

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
{% endhighlight %}

Kíváncsi vagy, hogy a live_loops hogyan tudja lefordítani a zenei hangsorokat a népszerű zenét készítő alkalmazásokban? A következő videó segíthet megérteni kapcsolatukat.

<iframe width="640" height="360" src="https://www.youtube.com/embed/iFMNOb33_KM?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>

Most játssz különböző mintákkal és ritmusokkal. Hozzáadhatsz egy harmadik  `live_loop` -ot is ütőhangokhoz vagy egyéb effektusokhoz. Ezután hozz létre egy basszust a kompozíciódhoz.
