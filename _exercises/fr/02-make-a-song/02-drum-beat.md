---
chapter: Créer un morceau
title: Rythme de batterie
lang: fr
layout: exercise
---

Regardons comment créer un rythme de batterie simple avec une grosse caisse, une caisse claire et une charleston. Tu vas avoir besoin de deux nouvelles instructions&nbsp;: `live_loop` et `sample`.

Démarre avec un buffer vide et crée une `live_loop` nommée `:batterie`. Elle pourrait être nommée n'importe comment, le nom sert juste à identifier rapidement ce que la boucle fait. `live_loop` est une boucle sans fin qui peut être synchronisée avec d'autres boucles (une `live_loop` doit contenir au moins une instruction sleep)&nbsp;:

{% highlight ruby %}
live_loop :batterie do
  sample :drum_heavy_kick
  sleep 1
end
{% endhighlight %}

Appuie sur **Run** pour écouter ta première `live_loop` jouant un coup de grosse caisse sur chaque temps.

Créons un simple rythme avec la grosse caisse sur les temps 1 et 3 et la caisse claire sur 2 et 4. Au lieu de jouer des notes, tu vas déclencher des échantillons. C'est aussi simple que d'écrire `sample :nom_echantillon`. Voici notre exemple de rythme de batterie&nbsp;:


{% highlight ruby %}

use_bpm 100

live_loop :batterie do
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

Voilà un rythme régulier à contretemps. La boucle `:batterie` démarre avec un coup de grosse caisse, puis joue un coup de caisse claire sur le second temps, un coup de grosse caisse sur le troisième temps, enfin un coup de caisse claire sur le quatrième. Puis la boucle recommence&nbsp;:

<img src="{{ "/assets/img/live_loop.png" | prepend: site.baseurl}}">

Maintenant, essaie de changer le tempo (le nombre après `use_bpm`) et joue avec les samples. Quand tu écris le début d'un nom de sample, tu peux lister d'autres samples grâce à l'autocomplétion. Essaie différents samples et écoute les. Tu n'as pas besoin d'appuyer sur stop pour changer d'échantillon, modifie ton code et réappuie sur **Run**, le son va changer automatiquement lors de la prochaine itération de la boucle sans perdre une pulsation&nbsp;!

## Ajouter une charleston

Maintenant ajoutons une charleston. Crée une autre boucle nommée `:charleston` et ajoute un des samples débutant par drum_cymbal. Tu peux par exemple faire des croches ou des doubles croches (voici des doubles croches)&nbsp;:

{% highlight ruby %}
live_loop :charleston do
  sample :drum_cymbal_closed
  sleep 0.25
end
{% endhighlight %}

Mais ce n'est pas forcément si carré. Ca peut être un peu plus funky&nbsp;:

{% highlight ruby %}
live_loop :charleston do
  sample :drum_cymbal_closed
  sleep 0.25
  sample :drum_cymbal_pedal
  sleep 1
end
{% endhighlight %}

Ce motif polyrythmique de charleston est à priori une "erreur". La boucle dure 1,25 pulsations soit un quart de temps de plus qu'attendu. Mais ça sonne cool&nbsp;! Souviens-toi que faire beaucoup d'erreurs permet de découvrir des choses auxquelles on ne s'attend pas.

Maintenant le morceau ressemble à ça&nbsp;:

{% highlight ruby %}
use_bpm 100

live_loop :batterie do
  sample :drum_heavy_kick
  sleep 1
  sample :drum_snare_hard
  sleep 1
  sample :drum_heavy_kick
  sleep 1
  sample :drum_snare_hard
  sleep 1
end

live_loop :charleston do
  sample :drum_cymbal_closed
  sleep 0.25
  sample :drum_cymbal_pedal
  sleep 1
end
{% endhighlight %}

Tu peux te demander comment les boucles `live_loop` se traduisent en séquences dans les logiciels de création musicale&nbsp;? La vidéo ci-dessous peut t'aider à comprendre leur relation.

<iframe width="640" height="360" src="https://www.youtube.com/embed/iFMNOb33_KM?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>

Maintenant joue avec différents samples et rythmes. Tu peux aussi ajouter une troisième `live_loop` de percussions ou autres. Ensuite tu vas créer une ligne de basse pour ton morceau.
