---
chapter: Musique algorithmique
title: Tick
lang: fr
layout: exercise
---

Tu te souviens de `chord` ? La fonction chord te donne les notes d'un certain accord&nbsp;:

{% highlight ruby %}
play (chord :c, :major).choose
# joue au hasard une note de l'accord de do majeur (:c, :e ou :g)
{% endhighlight %}

Il y a aussi une fonction nommée `scale`. Scale retourne toutes les notes d'une  _gamme_, pas seulement celles d'un accord&nbsp;:

{% highlight ruby %}
play (scale :c, :major).choose
# joue au hasard une note de la gamme de do majeur (:c, :d, :e, :f, :g, :a ou :b)
{% endhighlight %}

Avec `choose` tu peux obtenir aléatoirement un des éléments d'une liste. Si tu veux parcourir la liste de manière plus structurée, Sonic PI a une fonction très puissante nommée `tick`&nbsp;:

{% highlight ruby %}
live_loop :arp do
  play (scale :e3, :minor_pentatonic).tick, release: 0.1
  sleep 0.125
end
{% endhighlight %}

Ici, on récupère juste la gamme de E3 (mi) mineur pentatonique et on joue chaque élément. Pour cela on ajoute `.tick` à la fin de la déclaration de la gamme. Ce tick est local à la boucle live_loop, donc chaque live_loop peut avoir son propre indice d'itération tick&nbsp;:

{% highlight ruby %}
live_loop :arp do
  play (scale :e3, :minor_pentatonic).tick, release: 0.1
  sleep 0.125
end

live_loop :arp2 do
  use_synth :dsaw
  play (scale :e2, :minor_pentatonic, num_octaves: 3).tick, release: 0.25
  sleep 0.25
end
{% endhighlight %}

## Anneaux

Tu peux utiliser tick sur n'importe quel anneau (en fait, tu peux aussi itérer sur des listes mais ça s'arrêtera quand tu arriveras à la fin). Les anneaux (_ring_ en anglais) sont des listes spéciales qui recommencent à zéro quand elles arrivent à la fin. Dans l'exemple ci-dessus la gamme redémarre au début après avoir atteint la dernière note. Les deux fonctions `scale` et `chord` retournent un anneau. Parfois tu voudras créer une liste et la transformer en anneau en appelant `.ring` ou en utilisant le constructeur `ring`&nbsp;:

{% highlight ruby %}
puts [1, 2, 3, 4].ring #=> (ring 1, 2, 3, 4)
puts (ring 1, 2, 3, 4) #=> (ring 1, 2, 3, 4)
{% endhighlight %}

{% highlight ruby %}
live_loop :arp do
  play [:c, :e, :d, :f].ring.tick, release: 0.1
  sleep 0.125
end
{% endhighlight %}

Voici un exemple un tout petit peu plus compliqué. Ici tu as une liste d'accords qui est convertie en anneau sur lequel on itère&nbsp;:

{% highlight ruby %}
live_loop :accords do
  use_synth :blade
  play [(chord :Ab, :major7), (chord :Db, :major7), (chord :Bb, :minor7), (chord :Eb, '7')].ring.tick, attack: 0.1, release: 1
  sleep 1
end
{% endhighlight %}

Et maintenant, pour couronner le tout, ajoutons lui une mélodie&nbsp;:

{% highlight ruby %}
live_loop :accords do
  use_synth :blade
  play [(chord :Ab, :major7), (chord :Db, :major7), (chord :Bb, :minor7), (chord :Eb, "7")].ring.tick, attack: 0.1, release: 1
  sleep 1
end

live_loop :melodie do
  use_synth :dsaw
  play (scale :Ab, :major, num_octaves: 3).mirror.tick, attack: 0.05, release: 0.25, cutoff: rrand(80, 110), amp: 0.5
  sleep 0.25
end
{% endhighlight %}

Commence à itérer, vas-y&nbsp!
