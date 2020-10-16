---
chapter: Készíts egy dalt
title: Adj hozzá véletlenszerűséget
lang: hu
layout: exercise
---

Nagyszerű! Most már jól sikerült futtatnod a dalt, folyamatosan ütemezve és basszussal ellátva, mellette van a dallam. Most valami igazán jó dolgot csinálunk, és felszabadítjuk a Sonic Pi valódi lehetőségeit. Adjunk hozzá néhány generáló elemet a számhoz, és programozzuk a számítógépet, hogy komponáljon nekünk!

## Dobj egy kockát és transzponáld a dallamot!

A transzponálás azt jelenti, hogy a hangmagasságot felfelé vagy lefelé kell megváltoztatni. Időről időre véletlenszerűen transzponálhatjuk a dallamot, hogy adjunk némi fűszert a számhoz. Dobhatsz egy kockát, annak eldöntésére, mikor kell emelni a hangmagasságot a dallamhoz. Íme egy példa:

{% highlight ruby %}
live_loop :melody do
  if one_in(6)
    use_transpose 2
  else
    use_transpose 0
  end
  play_pattern_timed [:c4, :e4, :f4, :g4, :f4, :e4, :f4, :g4, :f4, :e4, :f4], [0.25, 0.25, 0.25, 1.5, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25], attack: 0, release: 0.2
end
{% endhighlight %}

## Hozz létre egy véletlenszerű basszust

LCsináljunk valami érdekeset a basszus számára. A  `.choose` utasítás használata egy praktikus módszer, amely véletlenszerűen választ ki egy elemet egy listából. Mint ez:

{% highlight ruby %}
play [:c, :e, :g].choose
{% endhighlight %}

`[:c, :e, :g]` a hangjegyek listája (ebben az esetben a C-dúr akkord hangjegyei).  `.choose` véletlenszerűen választja ki az egyik hangjegyet. Hangjegyek helyett bármi is szerepelhet a listában. Például a várakozási értékek:

{% highlight ruby %}
loop do
  use_octave [0, 1].choose
  play [:c, :e, :g].choose
  sleep [0.25, 0.25, 0.5, 1].choose
end
{% endhighlight %}

Nem is kell emlékezned arra, hogy milyen hangok vannak az akkordokban. A Sonic Pi ezt kezelni tudja neked. A  `[:c, :e, :g]`, írása helyett használhatod ezt  `(chord :C, :major)`. Ez automatikusan létrehozza a megfelelő hangjegyek listáját. Íme egy példa:

{% highlight ruby %}
loop do
  play (chord :c, :major).choose
  sleep [0.25, 0.25, 0.5, 1].choose
end
{% endhighlight %}

Használjuk ezt a varázslatot egy pezsgő basszushoz. Mentsd el munkádat, és másold át az aktuális  `:bass` ciklust egy másik pufferbe, arra az esetre, ha vissza akarsz hozzá térni. Ezután hagyj helyet az új basszusnak, és töröld a ciklus tartalmát. Használjuk a klasszikus  `:tb303` szintetizátort, és játsszunk véletlenszerű 16-od hangjegyeket a C-dúr akkordból:

{% highlight ruby %}
live_loop :bass do
  use_synth :tb303
  play (chord :C2, :major).choose
  sleep 0.25
end
{% endhighlight %}

Ajaj! Nem egészen igaz. Add hozzá a  `, release: 0.125` paramétert a lejátszási parancs végén, így:

{% highlight ruby %}
live_loop :bass do
  use_synth :tb303
  play (chord :C2, :major).choose, release: 0.125
  sleep 0.25
end
{% endhighlight %}

Ez jobb, de még mindig kell egy kis csiszolás. Eddig az `attack:` és a `release:` paramétereket használtad a lejátszási parancshoz. Az alkalmazott szinetizátortól függően sokkal több paraméter használható. Például a tb303 szintetizátor 45 különböző beállítási lehetőséget kínál. A basszushoz használjuk a  `cutoff` nevű paramétert. A cutoff eltávolítja az összes frekvenciát, amely a cutoff frekvencia felett van. 0-130 közötti értékeket használhatsz.

De ne csak egy rögzített küszöbértéket használj, ha véletlenszerű értékkel is rendelkezhetsz! Az `rrand(min, max)` segítségével véletlenszerű számokat generálhatsz egy adott tartományban. Próbáld ki ezt:

{% highlight ruby %}
live_loop :bass do
  use_synth :tb303
  play (chord :C2, :major).choose, release: 0.125, cutoff: rrand(60, 110)
  sleep 0.25
end
{% endhighlight %}

Nagyszerű! Ne felejtsd felfedezni és kipróbálni a különböző dolgokat. Összefoglalva, itt van egy példa arra, hogy mik a további lehetőségek ettől a ponttól:

{% highlight ruby %}
use_bpm 120

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
  use_synth :tb303
  play (chord :C2, :major).choose, release: 0.125, cutoff: rrand(60, 110)
  sleep 0.25
end


live_loop :melody do
  if one_in(6)
    use_transpose 2
  else
    use_transpose 0
  end
  play_pattern_timed [:c4, :e4, :f4, :g4, :f4, :e4, :f4, :g4, :f4, :e4, :f4], [0.25, 0.25, 0.25, 1.5, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25], attack: 0, release: 0.2
end
{% endhighlight %}
