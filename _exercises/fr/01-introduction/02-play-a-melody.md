---
chapter: Introduction
title: Jouer une mélodie
lang: fr
layout: exercise
---

Tape ce qui suit dans la zone d'édition et appuie sur run:

{% highlight ruby %}
play 60
play 67
play 69
{% endhighlight %}

Ca ne sonne pas comme une mélodie, n'est-ce pas&nbsp;? Au lieu de jouer une séquence, Sonic Pi a joué toutes les notes en même temps (tu as donc écrit un accord).

Si tu veux que Sonic Pi joue chaque note en séquence, tu dois indiquer au logiciel de faire une pause à chaque fois. Essaie d'ajouter `sleep 1` sous chacune des notes, comme ceci&nbsp;:

{% highlight ruby %}
play 60
sleep 1
play 67
sleep 1
play 69
{% endhighlight %}

`sleep 1` dit à Sonic Pi d'attendre une pulsation. Tu peux essayer des nombres plus petits ou plus grands. Plus le nombre est petit, plus la durée entre les notes est courte et vice versa. Si vous connaissez la notation musicale, voici à quoi ressemblent différentes notes dans Sonic Pi&nbsp;:

<img src="{{ "/assets/img/Notes_FR.png" | prepend: site.baseurl }}">
<img src="{{ "/assets/img/Rests_fr.png" | prepend: site.baseurl }}">

Comme déjà indiqué, tu peux écrire les notes en MIDI, c'est à dire en nombres compris entre 0 et 127 (`67`, `80`, `22`) ou en notation musicale anglaise (`:G4`, `:Ab5`, `:Bb`), c'est comme tu veux. Voici un tableau indiquant pour chaque note la valeur MIDI correspondante&nbsp;:

<img src="{{ "/assets/img/midi_notes_fr.png" | prepend: site.baseurl }}">

## Essayons

Utilise les notes de la gamme de Do majeur (`72, 74, 76, 77, 79, 81, 83` ou `:C5 :D5 :E5 :F5 :G5 :A5 :B5`) pour créer une mélodie. Utilise `sleep` avec différentes valeurs pour faire varier le rythme. Tu peux utiliser l'instruction `use_bpm` au début pour accélérer ou ralentir ton morceau. L'acronyme BPM signifie _Beats Per Minute_ ce qu'on peut traduire par _Pulsation Par Minute_. Voici un exemple&nbsp;:

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

{% include player.html filepath="/assets/audio/c-major-melody.mp3" description="Ecoute l'exemple ci-dessus" %}

A ton tour de faire ta propre mélodie&nbsp;!
