---
chapter: Musique algorithmique
title: Progressions d'accords
lang: fr
layout: exercise
---

L'exemple précédent jouait seulement avec l'accord de C (do) mineur. Voici maintenant un exemple qui utilise un anneau d'accords que toutes les boucles utilisent. Toutes les boucles vont jouer autour du même accord et une des boucles change d'accord pour toutes les autres. Cela devient un peu compliqué, mais regarde cela peut t'inspirer. Si tu veux, tu peux t'aider des <a href="{{ "/exercises/fr/09-keys-chords-and-scales/01-piano.html" | prepend: site.baseurl }}">tables de progression des accords</a> pour choisir un ensemble qui sonne bien.

{% highlight ruby %}
chords = [(chord :C, :minor7), (chord :Ab, :major7), (chord :Eb, :major7), (chord :Bb, "7")].ring
c = chords[0] # prend le premier accord de l'anneau et stocke le dans une variable
# ce c va être utilisé dans toutes les live_loops. Il sera modifié par la boucle :basse

live_loop :melodie do
  use_synth :blade
  r = [0.25, 0.25, 0.5, 1].choose
  play c.choose, attack: 0, release: r
  sleep r
end

live_loop :tonalite do
  use_synth :blade
  play c
  sleep 1
end

live_loop :basse do
  use_synth :fm
  use_octave -2
  3.times do
    play c[0] # joue la première note de l'accord
    sleep 1
  end
  play c[2] # joue la troisième note de l'accord
  sleep 0.5
  play c[1] # # joue la seconde note de l'accord
  sleep 0.5
  c = chords.tick
end
{% endhighlight %}
