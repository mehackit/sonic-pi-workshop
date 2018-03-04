---
chapter: Techniques avancées 1
title: Slicer
lang: fr
layout: exercise
---

En plus du découpage de sample présenté dans la section précédente, tu peux aussi utiliser l'effet audio `:slicer` pour ajouter  une "rhythmique hachée" à ta musique. En fait, c'est simplement une modification du volume du son au fil du temps (et cet effet est souvent nommé modulation d'amplitude). Débutons notre expérimentation en créant une nouvelle `live_loop` dans un éditeur vide et utilisons le sample `:loop_breakbeat` comme brique de base&nbsp;:

{% highlight ruby %}
use_bpm 120

live_loop :breakbeat do
  sample :loop_breakbeat, beat_stretch: 4, amp: 2
  sleep 4
end
{% endhighlight %}

La boucle doit maintenant être identique à la vidéo ci-dessous. Nous utilisons la couleur rouge pour représenter le volume sonore et dans cet exemple il est à son maximum.  

{% include videoplayer.html filepath="/assets/video/breakbeat_dry" %}

Ajoutons l'effet slicer à la `live_loop` en utilisant la commande `with_fx`. Si tu ne te souviens pas ou ne sais pas comment utiliser les effets dans Sonic Pi, tu peux revoir le chapitre nommé <a href="{{ "/exercises/fr/03-tweak-the-sounds/03-effects.html" | prepend: site.baseurl }}">Effets</a>.

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

Le nouvel effet slicer ajouté sonne trop rude et nous allons devoir l'ajuster un peu. Les principales options de l'effet slicer sont  `phase`, `wave` et `mix`. Elles te servent à contrôler la modulation d'amplitude. L'option `phase` est la fréquence rapide ou lente à laquelle la modulation intervient. La valeur par défaut de `phase` est `0.25` ce qui signifie que l'effet intervient tous les 1/16 de pulsation. Ceci explique pourquoi l'exemple précédent est plutôt trépidant.

L'effet slicer peut moduler l'amplitude en utilisant quatre différentes formes d'onde&nbsp;: `0` (saw/dents de scie), `1` (pulse/carrée), `2` (triangle) et `3`(sinewave/sinusoïde). Par défaut, `wave` est à `1` donc il utilise une forme d'onde carrée pour moduler l'amplitude. Les illustrations ci-dessous montrent à quoi ressemble les formes d'onde et comment elles augmentent ou diminuent l'amplitude (zone de couleur rouge) au fil du temps.

<img src="{{ "/assets/img/slicer_waveforms.png" | prepend: site.baseurl }}" width="100%">

Maintenant essayons d'utiliser la forme d'onde en dents de scie (`wave: 0`). Ceci devrait rendre l'effet un peu plus doux, moins abrupte.

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

Doublons la durée de la modulation (`phase: 0.5`) et passons à la forme d'onde carrée (`wave: 1`)&nbsp;:

{% include videoplayer.html filepath="/assets/video/fx_slicer_wave_1" %}

Et maintenant que se passe-t-il si on utilise les options suivantes (`phase: 0.5, wave: 2`)&nbsp;:

{% include videoplayer.html filepath="/assets/video/fx_slicer_wave_2" %}

Avec l'effet `slicer` il est facile d'ajouter du rythme, de la variation et des nuances à des boucles rhythmiques. Et souviens-toi qu'on peut aussi l'utiliser avec les synthétiseurs de Sonic Pi&nbsp;!

Voici le dernier exemple d'effet de découpage qui utilise des durées de modulation plus longues&nbsp;:

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
