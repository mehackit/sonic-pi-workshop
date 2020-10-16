---
chapter: Introducció
title: Reproduir una melodia
lang: cat
layout: exercise
---

Escriviu el següent codi en el buffer i premeu **run**:

{% highlight ruby %}
play 60
play 67
play 69
{% endhighlight %}

No ha sonat com una melodia, veritat? En comptes de tocar-les d’una en una, Sonic Pi ha tocat totes les notes alhora (de fet, així és com podeu escriure acords).

Si voleu que Sonic Pi toque cada nota en una seqüència, heu de dir-li al programari que faça una pausa entre una nota i una altra. Intenteu-ho escrivint `sleep 1` davall de cada nota, com s’indica a continuació:

{% highlight ruby %}
play 60
sleep 1
play 67
sleep 1
play 69
{% endhighlight %}

`sleep 1` diu a Sonic Pi que espere un temps. Podeu provar amb nombres més grans o més menuts. Com més baix siga el valor de `sleep`, menor serà la durada entre les ordres play i al contrari. Si esteu familiaritzat amb les notes musicals, així són les diferents notes musicals en Sonic Pi:

<img src="{{ "/assets/img/notes_cat.png" | prepend: site.baseurl }}">
<img src="{{ "/assets/img/Rests_cat.png" | prepend: site.baseurl }}">

Com hem dit abans, podeu escriure les notes en MIDI, que són bàsicament nombres entre 0 i 127 (`67`, `80`, `22`) o com a notes musicals (`:G4`, `:AB5` , `:Bb`), com preferiu. ACí tenim un gràfic que mostra les notes i els seus corresponents valors en MIDI:

<img src="{{ "/assets/img/midi_notes_cat.png" | prepend: site.baseurl }}">

## Proveu-ho

Feu servir les notes de l'escala de do major (`72, 74, 76, 77, 79, 81, 83` o `:C5 :D5 :E5 :F5 :G5 :A5 :B5`) melodian luomiseen. Käytä `play` per crear una melodia. Utilitzeu `sleep` amb diferents valors per variar el ritme. Podeu fer servir `use_bpm` al principi per fer la melodia més ràpida o més lenta. L'acrònim BPM fa referència a *Beats Per Minute* (pulsacions per minut). Per exemple:


{% highlight ruby %}
use_bpm 120

play 72
sleep 0.25
play 76
sleep 0.25
play 76
sleep 0.25
play 72
sleep 0.5
play 83
sleep 0.25
play 74
sleep 0.25
play 83
sleep 0.25
play 79
play 84
{% endhighlight %}

{% include player.html filepath="/assets/audio/c-major-melody.mp3" description="Escolteu l'exemple anterior" %}

Ara feu la vostra pròpia melodia!