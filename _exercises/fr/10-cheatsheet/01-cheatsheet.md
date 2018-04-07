---
chapter: Cheatsheet
title: Antisèche
lang: fr
layout: exercise
---

## Jouer une note

{% highlight ruby %}
use_bpm 100
# ceci est un commentaire
play 50
sleep 1
play :C3
sleep 1
play_pattern_timed [:c2, :d2, :e2, :d2], [0.5, 0.25, 0.75, 0.5]
{% endhighlight %}

<img src="{{ "/assets/img/midi_notes_fr.png" | prepend: site.baseurl }}">


## Boucle

{% highlight ruby %}
live_loop :batterie do
  sample :drum_heavy_kick
  sleep 1
end

2.times do
  play_pattern_timed [:E5, :Eb5], [0.25]
end
play_pattern_timed [:e5, :b4, :d5, :c5], [0.25]
play :a4
sleep 1
{% endhighlight %}

## Synthés et options

<img src="{{ "/assets/img/adsr_fr.png" | prepend: site.baseurl }}">

{% highlight ruby %}
use_synth :fm
use_transpose 0
use_octave 0

play :c, attack 1, decay: 0, sustain: 0, release: 1, amp: 0.5, pan: rrand(-0.5,0.5)
{% endhighlight %}

## Samples et options

{% highlight ruby %}
sample :bd_haus, amp: 0.5
sleep 1
sample :drum_cymbal_open, attack: 0.01, sustain: 0, release: 0.1
sleep 1
live_loop :amen_break do
  sample :loop_amen, beat_stretch:2, rate: -1
  sleep 2
end
{% endhighlight %}

## Hazard

{% highlight ruby %}
rrand(60, 110)

if one_in(6)
  # fait quelque chose
else
  # fait autre chose
end

sleep [0, 1, 2].choose
play [:c, :e, :g].choose
{% endhighlight %}

## Effets

{% highlight ruby %}
with_fx :reverb, mix: 0.5 do
  # joue quelque chose
end
{% endhighlight %}

## Gammes et accords

{% highlight r %}
scale(:c2, :major) # anneau contenant :c2, :d2, :e2, :f2, :g2, :a2, :b2
chord(:c2, :major, , num_octaves: 2) # anneau contenant :c2, :e2, :g2 :c3, :e3, :g3
{% endhighlight %}

<img src="{{ "/assets/img/play_scale_1_fr.png" | prepend: site.baseurl }}">
<img src="{{ "/assets/img/play_scale_2_fr.png" | prepend: site.baseurl }}">
<img src="{{ "/assets/img/play_scale_3_fr.png" | prepend: site.baseurl }}">
<img src="{{ "/assets/img/chords_fr.png" | prepend: site.baseurl }}">

## Tick, anneau et variables

{% highlight ruby %}
play scale(:e3, :minor_pentatonic).tick, release: 0.1

play [:c, :e, :d, :f].ring.tick

r = [0.25, 0.25, 0.5, 1].choose
play chord(:c, :minor).choose, attack: 0, release: r
sleep r

accords = [chord(:C, :minor7), chord(:Ab, :major7)].ring # un anneau d'accords
c = accords.tick # met le prochain accord dans une variable nommée 'c'
c[0] # récupère la première note de l'accord
{% endhighlight %}

## Divers

Si ton code devient lent, ajoute `use_debug false` au début de ton code. Ca réduit la quantité de messages de log que génère Soni Pi et ça peut accélérer l'éxecution du code.
