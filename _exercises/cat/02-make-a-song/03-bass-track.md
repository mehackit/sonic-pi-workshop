---
chapter: Fer una cançó
title: Pista de baixos
lang: cat
layout: exercise
---

Afegiu un altre `live_loop` per als baixos. Compon un ritme senzill i sòlid de baixos tipus groove. Podeu fer servir el <a href="{{ "/exercises/fi/09-keys-chords-and-scales/01-piano.html" | prepend: site.baseurl }}">piano</a> al navegador per triar les notes que vulgueu. Ací teniu un exemple:

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

## Canviar el sintetitzador

Ha arribat el moment de modificar el so d'una forma més interessant! Podem fer-ho canviant el sintetitzador de so que estem fent servir. El sintetitzador predeterminat de Sonic Pic es diu `beep`. Per utilitzar un sintetitzador diferent, necessiteu afegir al codi `use_synth :nom_del_sintetitzador` damunt de la seqüència de codi a la qual voleu que afecte.

En aquest exemple, `fm` és el nom del sintetitzador:


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


## Canviar la duració de les notes

De vegades, pot ser que us agrade fer sons que sonen durant un temps més llarg o a diferent velocitat. Això es pot aconseguir modificant uns paràmetres opcionals del codi que esteu fent servir. `attack` i `release` controlen l'amplitud de la nota en el temps: 

<img src="{{ "/assets/img/attackrelease_fi.png" | prepend: site.baseurl }}"> 

{% highlight ruby %}
play 60, attack: 1, release: 3
{% endhighlight %}

Per utilitzar attack i release ho heu de fer així. Ara, la nota seria d'una durada de quatre temps.

Podeu fer una nota curta staccato configurant `attack` a zero i `release` a un valor molt curt:


{% highlight ruby %}
play :c4, attack: 0, release: 0.2
{% endhighlight %}

Exploreu amb diferents sintetitzadors i durades de notes i aconseguiu la pista de baixos desitjaa.

Ara la cançó pot sonar d’aquesta manera:


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