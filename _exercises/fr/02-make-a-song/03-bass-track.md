---
chapter: Créer un morceau
title: Ligne de basse
lang: fr
layout: exercise
---

Ajoute une autre live_loop pour ta basse. Compose un groove de basse solide et simple. Si ça t'aide, tu peux utiliser le <a href="{{ "/exercises/fr/09-keys-chords-and-scales/01-piano.html" | prepend: site.baseurl }}">piano</a> dans ton navigateur pour choisir les notes que tu aimes. Voici un exemple :

{% highlight ruby %}
live_loop :basse do
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

## Changer de synthétiseur

Il est temps de rendre le son de ton morceau plus attrayant ! Nous pouvons le faire en changeant le synthétiseur utilisé. Le synthétiseur par défaut de Sonic Pi se nomme `beep`. Pour utiliser un synthétiseur différent, tu dois ajouter le code `use_synth :nom_du_synthé` au-dessus des lignes de code où tu veux qu'il soit utilisé.

Dans cet exemple, fm est le nom du synthétiseur&nbsp;:

{% highlight ruby %}
live_loop :basse do
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

Il y a beaucoup de synthétiseurs cools inclus dans Sonic Pi. Pour trouver leur nom, clique sur le bouton Help en haut de l'écran de façon à ce que la fenêtre d'aide s'affiche. Puis sélectionne l'onglet Synthétiseur sur la gauche de la fenêtre d'aide. Clique sur le nom de n'importe lequel des synthétiseurs pour obtenir des informations sur comment l'utiliser.

## Changer la longueur des notes

Parfois tu voudras jouer les sons plus longtemps ou à une vitesse différente. Ceci peut être fait en utilisant des paramètres optionnels du code que tu utilises. `attack` et `release` contrôle l'amplitude de la note au fil du temps&nbsp;:

<img src="{{ "/assets/img/attackrelease_fr.png" | prepend: site.baseurl }}">

Voici comment utiliser attack et release. Maintenant la note va durer 4 temps.

{% highlight ruby %}
play 60, attack: 1, release: 3
{% endhighlight %}

Tu peux créer une brêve note piquée avec une attaque (attack) de zéro et une extinction (release) de valeur très courte&nbsp;:

{% highlight ruby %}
play :c4, attack: 0, release: 0.2
{% endhighlight %}

Explore différents synthétiseurs et longueurs de note jusqu'à obtenir une ligne de basse qui roule.

Maintenant ton morceau peut ressembler à ça&nbsp;:

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

live_loop :basse do
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
