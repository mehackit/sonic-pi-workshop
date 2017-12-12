---
chapter: Peaufiner les sons
title: Options
lang: fr
layout: exercise
---

Jusqu'ici tu as utilisé les options `attack`, `release`, et `cutoff` après une commande play. Les options sont des ordres passés à play pour modifier certains aspects du son produit. Chaque synthé a son propre ensemble d'options pour ajuster finement son son. Toutefois, il y a des options qui sont communes à de nombreux sons. Voyons quelques options qui vont ajouter de l'expression à nos sons.

Note que tu peux utiliser certaines options avec les samples aussi&nbsp;!

### `amp:`

L'amplitude contrôle le volume d'un son. 0 c'est le silence (tu n'entendras rien), le volume normal est à 1. Tu peux monter l'amplitude à 2, 10 ou 100, mais cela risque de brouiller le son et le résultat sera bizarre. Aussi, essaie d'utiliser des amplitudes faibles, comprises entre 0 et 0.5 pour éviter la compression.

{% highlight ruby %}
play :c2, amp: 0.5
{% endhighlight %}

### `pan:`

Pan contrôle la stéréophonie du son. -1 signifie que tu vas l'entendre sortir du haut-parleur de gauche, 1 signifie qu'il va sortir de celui de droite et 0 qu'il va être centré. Tu peux utiliser n'importe qu'elle valeur entre -1 et 1. Tu peux essayer de mettre une valeur aléatoire de pan sur ta charleston pour lui donner du caractère.

{% highlight ruby %}
play :c2, amp: 0.5, pan: -1 #haut-parleur de gauche
play :c2, amp: 0.5, pan: 0 #centre
play :c2, amp: 0.5, pan: 1 #haut-parleur de droite

sample :drum_cymbal_closed, pan: rrand(-0.7, 0.7)
{% endhighlight %}

### `cutoff:`

Supprime les fréquences supérieures à la valeur donnée. Utilise des valeurs comprises entre 0 et 130.

{% highlight ruby %}
play :c2, cutoff: 80
{% endhighlight %}

### `attack:` and `release:`

Durée en temps de l'attaque et de l'extinction.

{% highlight ruby %}
play :c2, attack: 1, release: 1 #la note dure deux temps
{% endhighlight %}

<img src="{{ "/assets/img/attackrelease_fr.png" | prepend: site.baseurl }}">

### `use_synth_defaults` et `use_sample_defaults`

Si tu ne veux pas répéter les mêmes options pour chaque commande play ou sample de ta boucle, utilise les instructions `use_synth_defaults` ou `use_sample_defaults` en début de boucle pour définir les options à appliquer par défaut&nbsp;:

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

### Bonus: `beat_stretch:` et `rate:`

Ces deux là sont trop cool pour les manquer. Essaie ça&nbsp;:

{% highlight ruby %}
live_loop :amen_break do
  sample :loop_amen
  sleep 2
end
{% endhighlight %}

Il y a un silence gênant à la fin. Le sample dure 1.753310657596372 temps, ce qui n'est pas commode quand on veut le jouer avec d'autres éléments musicaux. Heureusement tu peux utiliser `beat_stretch: 2` pour étirer/raccourcir le sample pour qu'il dure exactement 2 temps&nbsp;:

{% highlight ruby %}
live_loop :amen_break do
  sample :loop_amen, beat_stretch:2
  sleep 2
end
{% endhighlight %}

Joli&nbsp;! Maintenant, l'option `rate`. Rate contrôle la vitesse à laquelle le sample est joué&nbsp;: 1 pour la vitesse originale, 0.5 pour la réduire de moitié et 2 pour la doubler. Quand tu changes la vitesse du sample, il change aussi de hauteur, il devient plus grave ou plus aigu. Et (roulement de tambour...) tu peux même avoir des valeurs négatives&nbsp;! Les valeurs négatives jouent les samples _à reculons_. Essaie de jouer cette boucle en modifiant la vitesse et la valeur de sleep&nbsp;:

{% highlight ruby %}
live_loop :amen_break do
  sample :loop_amen, beat_stretch:2, rate: -1
  sleep 2
end
{% endhighlight %}
