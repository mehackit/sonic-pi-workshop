---
chapter: Peaufiner les sons
title: Effets
lang: fr
layout: exercise
---

Nous avons laissé cela de côté trop longtemps, alors voici&nbsp;: `with_fx`&nbsp;!

C'est un outil puissant pour ajouter des effets à ta composition. Démarrons avec `:reverb`. Presque tout sonne mieux avec de la réverbération. Encadre ton code dans un bloc `with_fx :reverb do` et `end`&nbsp;:

{% highlight ruby %}
live_loop :effects do
  with_fx :reverb do
    play 50
    sleep 0.5
    sample :elec_plip
    sleep 0.5
    play 62
  end
end
{% endhighlight %}

Ca sonne plus gros, n'est-ce pas&nbsp;? Comme les synthés et les samples, les effets ont des options. `mix:` est une option qui précise la proportion d'effet par rapport au son original. `mix: 0` joue seulement le son original, `mix: 1` joue seulement l'effet. Reverb a aussi une option `:room`. Essaie différentes tailles de salle avec des valeurs comprises entre 0 et 1. Si tu ouvres la rubrique 'Fx' de la fenêtre d'aide tu peux voir quelles sont les options d'un effet.

{% highlight ruby %}
live_loop :effects do
  with_fx :reverb, mix: 0.5, room: 0.9 do
    play 50
    sleep 0.5
    sample :elec_plip
    sleep 0.5
    play 62
  end
end
{% endhighlight %}

Il y a tellement d'effets à tester. Et tu n'as pas besoin de te restreindre à un seul&nbsp;: tu peux les imbriquer&nbsp;! (A un certain moment, ton ordinateur peut manquer de puissance mais ne t'inquiète pas de ça pour l'instant.)

{% highlight ruby %}
live_loop :effects do
  with_fx :wobble do
    with_fx :slicer do
      with_fx :reverb do
        play 50
        sleep 0.5
        sample :elec_plip
        sleep 0.5
        play 62
      end
    end
  end
end
{% endhighlight %}

Maintenant deviens fou et ajoute des effets partout pour obtenir des nouveaux sons incroyables&nbsp;!
