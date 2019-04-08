---
chapter: Fer una cançó
title: Ritme de bateria
lang: cat
layout: exercise
---

Fem una ullada a com crear un ritme senzill de bateria, consistent en un bombo, caixa i hi-hat (el xarleston o xarles). Aprendreu dues coses noves: `live_loop` i `sample`.

Comenceu amb un buffer buit i creeu un `live_loop` anomenat `:drums`. Se li pot anomenar de qualsevol manera, els noms només són per identificar ràpidament què fa el bucle. `live_loop` és una bucle que es repeteix sense fi, i es pot sincronitzar amb altres `live_loops` (1 live_loop ha de tenir almenys un sleep):

{% highlight ruby %}
live_loop :drums do
  sample :drum_heavy_kick
  sleep 1
end
{% endhighlight %}

Premeu Run per escoltar el vostre primer `live_loop` tocant un bon so de bombo en cada temps.

Farem un backbeat simple amb un el bombo en l’1 i 3 i la caixa en el 2 i 4. En lloc de tocar notes, estareu desencadenant samples (mostres). És tan simple com escriure `sample :sample_name`. Per exemple, un toc de bombo:


{% highlight ruby %}
use_bpm 100

live_loop :rummut do
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

Això és un toc continu de bombo. El bucle :drums comença amb un cop de bombo, un de caixa en el dos, un de bombo en el tres i després de nou un cop de caixa en el quatre. Després, el bucle comença de nou:

<img src="{{ "/assets/img/live_loop.png" | prepend: site.baseurl}}">

Ara proveu canviant el temps (el nombre després d’`use_bpm`) i jugueu amb les mostres. Quan comenceu a escriure el nom de la mostra, podeu navegar entre les diferents mostres amb la funció d'auto-completat. Proveu diferents samples i feu una ullada a com sonen. Recordeu que no heu de prémer stop per canviar el so - només canvia el codi i prémer una altra vegada Run - els sons canviaran automàticament en el següent bucle sense perdre el ritme!

## Afegir hi-hat

Ara afegiu hi-hat (el xarles). Creeu un altre `live_loop` anomenat `:hihat` i afegiu els samples hihat. Per exemple, podeu fer directament notes corxeres o semicorxeres com a continuació (aquest és amb semicorxeres):

{% highlight ruby %}
live_loop :hihat do
  sample :drum_cymbal_closed
  sleep 0.25
end
{% endhighlight %}

No cal que siga tan quadrat. Podeu fer-ho una mica més funky d’aquesta manera:

{% highlight ruby %}
live_loop :hihat do
  sample :drum_cymbal_closed
  sleep 0.25
  sample :drum_cymbal_pedal
  sleep 1
end
{% endhighlight %}

El patró de ritmes creuats de hi-hat era en principi un "error". El bucle dura 1.25 temps en lloc d’1. Però sona bé! Així que no tingues por de fer molts errors per trobar coses que ni tan sols estaves buscant.

Ara la cançó és alguna cosa com això:


{% highlight ruby %}
use_bpm 100

live_loop :rummut do
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

Potser estigueu preguntant-vos com els live_loops es podrien traduir a seqüències musicals en aplicacions populars de música. El següent vídeo pot ajudar-vos a entendre la seva relació.

<iframe width="640" height="360" src="https://www.youtube.com/embed/iFMNOb33_KM?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>

Ara jugueu amb diferents ritmes i mostres de so. Podeu afegir un tercer live_loop per percussions o altres efectes. Més endavant, a la secció següent, creareu una pista de baixos per a la composició. 