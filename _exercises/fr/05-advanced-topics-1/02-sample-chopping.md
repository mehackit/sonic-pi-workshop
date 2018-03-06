---
chapter: Techniques avancées 1
title: Découpage de Sample
lang: fr
layout: exercise
---

Faisons un pas en arrière et revenons aux samples. Regarde la vidéo ci-dessous pour comprendre comment une boucle de sample fonctionne.

{% include videoplayer.html filepath="/assets/video/amen_loop" %}

Elle montre la lecture du sample `:loop_amen` correspondant au code suivant&nbsp;:

{% highlight ruby %}
sample :loop_amen
{% endhighlight %}

Maintenant faisons une `live_loop` qui garde le rythme pour nous. Te souviens-tu de l'option `beat_stretch` de la commande `sample` qui modifie la tonalité du sample pour qu'il dure la longueur désirée en temps&nbsp;? Nous l'avons vu rapidement dans le chapitre "Peaufiner les sons". Nous allons l'utiliser pour étirer sur 4 temps le sample `loop_amen` et le faire boucler&nbsp;:

{% highlight ruby %}
use_bpm 145

live_loop :bouclerythmique do
  sample :loop_amen, beat_stretch: 4
  sleep 4
end
{% endhighlight %}

Ensuite nous allons voir comment tu peux jouer des portions du sample Amen dans un ordre différent. Avec la commande `sample` tu peux définir différents points de départ et d'arrêt du sample en utilisant les paramètres `start` et `finish`. Ces 2 paramètres prennent des valeurs entre `0` et `1` et indiquent le point de départ et la fin de la lecture du sample. Par exemple&nbsp;: `0` désigne le début du sample, `0.5` la moitié du sample et `1` le point final du sample. Voyons comment ça marche avec l'exemple suivant&nbsp;:

{% highlight ruby %}
use_bpm 145

live_loop :bouclerythmique do
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

La vidéo suivante (créée avec l'aide du Simpler de Ableton Live) montre quelles parties du sample `loop_amen` sont jouées dans une itération de la `live_loop`&nbsp;:

{% include videoplayer.html filepath="/assets/video/amen_slicing" %}

N'est-ce pas drôle de jouer les différentes parties du sample dans un ordre totalement différent&nbsp;? Essaie les différentes options de la commande `sample`. Par exemple, ajouter une option `rate: -1` à un des morceaux de `loop_amen` le fait jouer à l'envers.

Un sample peut prendre n'importe quelle forme une fois que tu as commencé à jouer avec les options de `sample`&nbsp;: `rate`, `pan`, `amp`, `attack`, `release`, `start` et `finish`. Les exemples suivants utilisent ces options avec des valeurs aléatoires pour jouer des micro-sons à partir de deux samples&nbsp;:

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

Cette technique est aussi très utilisée dans <a href="https://fr.wikipedia.org/wiki/Synth%C3%A8se_granulaire">les sampleurs et synthétiseurs granulaires</a>.
