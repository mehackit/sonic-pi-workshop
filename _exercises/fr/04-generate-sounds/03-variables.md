---
chapter: Musique algorithmique
title: Variables
lang: fr
layout: exercise
---

Regarde l'exemple ci-dessous. Que se passe-t-il&nbsp;?

{% highlight ruby %}
live_loop :melodie do
  use_synth :blade
  r = [0.25, 0.25, 0.5, 1].choose
  play (chord :c, :minor).choose, attack: 0, release: r
  sleep r
end
{% endhighlight %}

Il y a une variable `r` qui prend une certaine valeur à chaque fois que la boucle est jouée et cette valeur est utilisée pour l'option release de la commande play et aussi pour définir la longueur de la commande sleep. Une variable est un peu comme une boite dans laquelle on peut stocker des choses puis les récupérer après. Utiliser une variable est aussi simple que `nom_de_variable = valeur`. Maintenant la valeur est stockée dans nom_de_variable. Tu peux récupérer la valeur en tapant juste nom_de_variable.

Ajoutons un synthé et une basse à l'exemple pour expérimenter les variables. La boucle `:tonalite` est simple, rien de nouveau, mais la boucle `:basse` est un peu délicate&nbsp;:

{% highlight ruby %}
live_loop :melodie do
  use_synth :blade
  r = [0.25, 0.25, 0.5, 1].choose
  play (chord :c, :minor).choose, attack: 0, release: r
  sleep r
end

live_loop :tonalite do
  use_synth :blade
  play chord(:c, :minor)
  sleep 1
end

live_loop :basse do
  use_synth :fm
  n = (chord :c2, :minor).tick
  3.times do
    play n
    sleep 1
  end
  play n
  sleep 0.5
  play (chord :c2, :minor).tick
  sleep 0.5
end
{% endhighlight %}

`n = (chord :c2, :minor).tick` prend une note de l'accord de do mineur et la stocke dans une variable nommée `n`. L'indice `.tick` avance toujours à la prochaine valeur après qu'il soit appelé. `play n` joue la note sauvegardée. Puis `.tick` est encore appelé pour obtenir la prochaine note de l'accord. Quand la boucle redémarre , `.tick` continue à partir d'où il était resté.
