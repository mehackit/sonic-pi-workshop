---
chapter: Modifica els sons
title: Opcions
lang: cat
layout: exercise
---

Fins ara heu utilitzat les opcions `attack`, `release` i `cutoff` després de l’ordre play. Les opcions (abreujades opts en anglés) són controls que passen a reproduir-se, les quals modifiquen i controlen aspectes del so que s’escolta. Cada sintetitzador té el seu propi conjunt d'opcions per ajustar de forma precisa el seu so. No obstant això, hi ha un conjunt d'opcions compartides per molts sons. Ara coneixereu algunes opcions més per afegir més expressió als sons.

També podeu utilitzar algunes de les opcions amb les mostres de so!


### `amp:`

L’amplitud és el volum d'un so. 0 es silenci (no escoltareu res), 1 és el volum normal. Podeu pujar l'amplitud a 2, 10 o 100. No obstant això, aquest fet fa sovint el so tèrbol i estrany. Del que es tracta, doncs, és d'utilitzar amplituds baixes, per exemple en el rang de 0 a 0.5 per evitar compressió. 

{% highlight ruby %}
play :c2, amp: 0.5
sleep 1
sample :bd_ada, amp: 0.8
{% endhighlight %}

### `pan:`

Pan controla el panning (panoramització) d'un so en estèreo. -1 vol dir que ho sentireu en l'altaveu esquerre, 1 significa que el sentireu en l'altaveu dret i 0 és centre. Podeu fer servir qualsevol valor entre -1 i 1. Podeu provar un valor aleatori de panning per a algunes textures dels hi-hats.

{% highlight ruby %}
play :c2, amp: 0.5, pan: -1 #altaveu esquerre
play :c2, amp: 0.5, pan: 0 #centre
play :c2, amp: 0.5, pan: 1 #altaveu dret
{% endhighlight %}

{% highlight ruby %}
live_loop :hihat do
  sample :drum_cymbal_closed, pan: rrand(-0.7, 0.7)
  sleep 0.25
  sample :drum_cymbal_pedal, pan: rrand(-0.7, 0.7)
  sleep 1
end
{% endhighlight %}

### `cutoff:`

Suprimeix freqüències majors a un valor donat. Usa valors entre 0-130.

{% highlight ruby %}
play :c2, cutoff: 80
sample :drum_cymbal_open, cutoff: 60
{% endhighlight %}

### `attack:` i `release:`

Temps en pulsacions per a l’atac i l’extinció del so. 

{% highlight ruby %}
play :c2, attack: 1, release: 1 # la nota té dues pulsacions de duració
{% endhighlight %}

<img src="{{ "/assets/img/attackrelease_cat.png" | prepend: site.baseurl }}">

### `use_synth_defaults` i `use_sample_defaults`

Si no voleu configurar les opts per cada play o mostra de so dels vostres bucles, podeu fer servir `use_synth_defaults` i `use_sample_defaults` per configurar les opts per a tots els plays i mostres posteriors al bucle: 

{% highlight ruby %}
live_loop :melody do
  use_synth :mod_fm
  use_synth_defaults attack: 0.25, release: 0.5, pan: rrand(-0.5, 0.5), cutoff: 50
  play 72
  sleep 0.25
  play 76
  sleep 0.25
  play 76
  sleep 0.25
end
{% endhighlight %}

### Bonus: `beat_stretch:` i `rate:`

Açò és massa guai per saltar-nos-ho. Proveu-ho:

{% highlight ruby %}
live_loop :amen_break do
  sample :loop_amen
  sleep 2
end 
{% endhighlight %}

Hi ha un buit molest al final. La mostra és de 1.753310657596372 pulsacions de durada, no massa pràctic quan vols reproduir-la amb totes les altres coses que estem fent servir. Per sort podeu utilitzar `beat_stretch: 2` per estirar o encongir la mostra per tal de fer-la durar exactament 2 pulsacions.

{% highlight ruby %}
live_loop :amen_break do
  sample :loop_amen, beat_stretch:2
  sleep 2
end
{% endhighlight %}

Bé! Ara l'opció `rate`. Rate controla la velocitat a la que es toca una mostra. 1 és en la seva velocitat original, 0.5 és a meitat de velocitat i 2 és al doble de velocitat. El to de la mostra també canvia a més alt o més baix quan canvies rate. I (redoblament de tambors...) pots tenir fins i tot valors negatius! Els valors negatius toquen les mostres cap enrere. Proveu tocant aquest bucle i canviant els seus valors de rate i speed:

{% highlight ruby %}
live_loop :amen_break do
  sample :loop_amen, beat_stretch:2, rate: -1
  sleep 2
end
{% endhighlight %}
