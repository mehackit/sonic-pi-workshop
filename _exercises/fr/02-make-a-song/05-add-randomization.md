---
chapter: Créer un morceau
title: Ajouter du hasard
lang: fr
layout: exercise
---

Bien&nbsp;! Tu as un morceau qui tourne avec un rythme stable et une basse sur laquelle s'accroche la mélodie. Maintenant nous allons faire un truc vraiment cool et libérer le vrai potentiel de Sonic Pi. Programmons l'ordinateur pour qu'il compose pour nous&nbsp;!

## Transposer la mélodie à l'aide d'un dé

Transposer signifie changer la hauteur des notes (vers l'aigu ou le grave). On peut aléatoirement transposer la mélodie ici et là pour ajouter du piment au morceau. Tu peux lancer un dé pour décider quand augmenter la hauteur de la mélodie. Voici un exemple&nbsp;:

{% highlight ruby %}
live_loop :melodie do
  if one_in(6)
    use_transpose 2
  else
    use_transpose 0
  end
  play_pattern_timed [:c4, :e4, :f4, :g4, :f4, :e4, :f4, :g4, :f4, :e4, :f4], [0.25, 0.25, 0.25, 1.5, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25], attack: 0, release: 0.2
end
{% endhighlight %}

## Créer une basse acid aléatoire

Faisons quelque chose d'intéressant avec la boucle de basse. `.choose` est un moyen d'extraire de façon aléatoire un élément d'une liste. Comme ceci&nbsp;:

{% highlight ruby %}
play [:c, :e, :g].choose
{% endhighlight %}

`[:c, :e, :g]` est une liste de notes (en fait les notes de l'accord de Do majeur). `.choose` extrait une de ces notes au hasard. Au lieu de notes tu peux avoir n'importe quoi dans la liste. Par exemple des valeurs de sleep&nbsp;:

{% highlight ruby %}
loop do
  use_octave [0, 1].choose
  play [:c, :e, :g].choose
  sleep [0.25, 0.25, 0.5, 1].choose
end
{% endhighlight %}

Tu n'as même pas besoin de retenir quelles notes sont dans quels accords. Sonic Pi peut s'occuper de ça pour toi. Au lieu de `[:c, :e, :g]`, tu peux juste écrire `(chord :C, :major)`. Ca crée automatiquement une liste des notes de l'accord de Do majeur. Voici un exemple&nbsp;:

{% highlight ruby %}
loop do
  play (chord :c, :major).choose
  sleep [0.25, 0.25, 0.5, 1].choose
end
{% endhighlight %}

Utilisons cette sorcellerie pour avoir une ligne de basse bouillonnante. Sauvegarde ton travail et copie ta boucle `:bass` dans un autre buffer, au cas où tu voudrais la reprendre. Ensuite fais de la place pour notre nouvelle ligne de basse en supprimant le contenu de la boucle. Prenons le célèbre synthétiseur `:tb303` et jouons au hasard des doubles-croches de l'accord majeur de do&nbsp;:

{% highlight ruby %}
live_loop :basse do
  use_synth :tb303
  play (chord :C2, :major).choose
  sleep 0.25
end
{% endhighlight %}

Oups&nbsp;! Pas vraiment des doubles-croches. Ajoute le paramètre `, release: 0.125` à la fin de la commande play, comme ceci&nbsp;:

{% highlight ruby %}
live_loop :basse do
  use_synth :tb303
  play (chord :C2, :major).choose, release: 0.125
  sleep 0.25
end
{% endhighlight %}

C'est mieux, mais il y a encore quelques finitions à faire. Jusqu'ici tu as utilisé les paramètres `attack:` et `release:` pour une instruction play. En fonction du synthétiseur que tu utilises, il y a beaucoup plus de paramètres à disposition. Par exemple le synthétiseur tb303 possède 45 options différentes à règler. Utilisons pour la basse un paramètre nommé `cutoff`. Cutoff supprime toutes les fréquences au-dessus d'un seuil. Tu peux utiliser des valeurs entre 0-130.

Mais n'utilise pas un seuil de cutoff fixe quand tu peux en avoir un au hasard&nbsp;! Avec `rrand(min, max)` tu peux générer des nombres aléatoires dans un intervalle donné. Essaie ça&nbsp;:

{% highlight ruby %}
live_loop :basse do
  use_synth :tb303
  play (chord :C2, :major).choose, release: 0.125, cutoff: rrand(60, 110)
  sleep 0.25
end
{% endhighlight %}

Super&nbsp;! N'oublie pas d'explorer et d'essayer différentes choses. Pour récapituler, voici un exemple de ce que tu peux avoir maintenant&nbsp;:

{% highlight ruby %}
use_bpm 120

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

live_loop :basse do
  use_synth :tb303
  play (chord :C2, :major).choose, release: 0.125, cutoff: rrand(60, 110)
  sleep 0.25
end


live_loop :melodie do
  if one_in(6)
    use_transpose 2
  else
    use_transpose 0
  end
  play_pattern_timed [:c4, :e4, :f4, :g4, :f4, :e4, :f4, :g4, :f4, :e4, :f4], [0.25, 0.25, 0.25, 1.5, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25], attack: 0, release: 0.2
end
{% endhighlight %}
