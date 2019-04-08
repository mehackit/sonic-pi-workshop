---
chapter: Fer una cançó
title: Afegeix aleatorització
lang: cat
layout: exercise
---

Genial! Heu aconseguit que la cançó vaja bé amb un ritme estable i un baix connectat a la melodia. Ara en farem una de grossa i desfermarem el veritable potencial de Sonic Pi. Anem a afegir alguns elements generatius a la pista i així aconseguir que l'ordinador compose per nosaltres.


## Tirar un dau i transportar la melodia

Transportar significar moure la tonalitat cap amunt o cap avall. Podem transportar aleatòriament la melodia de tant en tant i després afegir algun condiment a la pista. Pots tirar un dau per decidir quan canviar el to de la melodia. Un exemple: 

{% highlight ruby %}
live_loop :melodia do
  if one_in(6)
    use_transpose 2
  else
    use_transpose 0
  end
  play_pattern_timed [:c4, :e4, :f4, :g4, :f4, :e4, :f4, :g4, :f4, :e4, :f4], [0.25, 0.25, 0.25, 1.5, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25], attack: 0, release: 0.2
end
{% endhighlight %}


## Crea una pista aleatòria de baix "acid"

Anem a fer quelcom interessant per al bucle dels baixos. `.choose` és un mètode pràctic que aleatòriament escull un element d'una llista. Com aquesta:

{% highlight ruby %}
play [:c, :e, :g].choose
{% endhighlight %}

`[:c, :e, :g]` són una llista de notes (en aquest cas les notes de l'acord de Do major). `.choose` tria una d'aquestes notes a l'atzar. En lloc de notes pots escriure qualsevol cosa a la llista. Com temps de silenci per exemple:

{% highlight ruby %}
loop do
  use_octave [0, 1].choose
  play [:c, :e, :g].choose
  sleep [0.25, 0.25, 0.5, 1].choose
end
{% endhighlight %}

No has ni de recordar quines notes formen un determinat acord. Sonic Pi pot fer això per vosaltres. En lloc d'escriure `[:c, :e, :g]`, simplement escriviu `(chord :C, :major)`. Això crea una llista automàtica amb les notes correctes. Per exemple:

{% highlight ruby %}
loop do
  play chord(:c, :major).choose
  sleep [0.25, 0.25, 0.5, 1].choose
end
{% endhighlight %}

Feu servir aquesta “truc de màgia” per crear una pista de baix tipus bubbling (bombolles). Guardeu el vostre treball i copieu el bucle `:bass` en curs en un altre buffer, per si voleu tornar-hi. Després feu lloc per a la nova pista de baix i elimineu el contingut del bucle. Anem a fer servir el sintetitzador clàssic `:tb303` i tocarem notes de semicorxera de l'acord de Do major:

{% highlight ruby %}
live_loop :bass do
  use_synth :tb303
  play chord(:C2, :major).choose
  sleep 0.25
end
{% endhighlight %}

Oh! No acaba d’estar bé. Afegiu el paràmetre `release: 0.125` al final de la comanda play, així:

{% highlight ruby %}
live_loop :basso do
  use_synth :tb303
  play chord(:C2, :major).choose, release: 0.125
  sleep 0.25
end
{% endhighlight %}

Així està millor, però encara es pot polir una mica més. Fins ara heu fet servir els paràmetres `attack:` i `release:` per la comanda `play`. Depenent del sintetitzador que estigueu usant, hi ha un molts més paràmetres per utilitzar.

Per exemple el sintetitzador tb303 té 45 opcions diferents de retoc. Anem a fer servir el paràmetre anomenat `cutoff` per als baixos. Cutoff elimina totes les freqüències per sobre de la freqüència de cutoff. Podeu fer servir valors entre 0-130.

Però no faceu servir només un determinat valor de cutoff, podem tenir un valor aleatori! Amb `rrand(min, max)` podeu generar nombres aleatoris en un rang donat. Proveu-ho:

{% highlight ruby %}
live_loop :bass do
  use_synth :tb303
  play chord(:C2, :major).choose, release: 0.125, cutoff: rrand(60, 110)
  sleep 0.25
end
{% endhighlight %}

Molt bé! Recordeu investigar i provar coses diferents. Com a repàs, ací tenim un exemple sobre el que heu aconseguit fer fins ara: 

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
  play chord(:C2, :major).choose, release: 0.125, cutoff: rrand(60, 110)
  sleep 0.25
end


live_loop :melodia do
  if one_in(6)
    use_transpose 2
  else
    use_transpose 0
  end
  play_pattern_timed [:c4, :e4, :f4, :g4, :f4, :e4, :f4, :g4, :f4, :e4, :f4], [0.25, 0.25, 0.25, 1.5, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25], attack: 0, release: 0.2
end
{% endhighlight %}