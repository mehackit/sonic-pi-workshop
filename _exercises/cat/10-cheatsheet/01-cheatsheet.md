---
chapter: En resum...
title: En resum...
lang: cat
layout: exercise
---

## Tocar una nota

{% highlight ruby %}
use_bpm 100
# això és un comentari
play 50
sleep 1
play :C3
sleep 1
play_pattern_timed [:c2, :d2, :e2, :d2], [0.5, 0.25, 0.75, 0.5]
{% endhighlight %}

<img src="{{ "/assets/img/midi_notes_cat.png" | prepend: site.baseurl }}">


## Bulce

{% highlight ruby %}
live_loop :drums do
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

## Sintetitzadors i opcions

<img src="{{ "/assets/img/adsr_cat.png" | prepend: site.baseurl }}">

{% highlight ruby %}
use_synth :fm
use_transpose 0
use_octave 0

play :c, attack 1, decay: 0, sustain: 0, release: 1, amp: 0.5, pan: rrand(-0.5,0.5)
{% endhighlight %}

## Mostres i opcions

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

## Aleatorització

{% highlight ruby %}
rrand(60, 110)

if one_in(6)
  # fes alguna cosa
else
  # fes alguna cosa més
end

sleep [0, 1, 2].choose
play [:c, :e, :g].choose
{% endhighlight %}

## FX (efectes)

{% highlight ruby %}
with_fx :reverb, mix: 0.5 do
  # fes alguna cosa
end
{% endhighlight %}

## Escales i acords

{% highlight r %}
scale(:c2, :major) # ring of :c2, :d2, :e2, :f2, :g2, :a2, :b2
chord(:c2, :major, num_octaves: 2) # ring of :c2, :e2, :g2 :c3, :e3, :g3
{% endhighlight %}

<img src="{{ "/assets/img/play_scale_1_en.png" | prepend: site.baseurl }}">
<img src="{{ "/assets/img/play_scale_2_en.png" | prepend: site.baseurl }}">
<img src="{{ "/assets/img/play_scale_3_en.png" | prepend: site.baseurl }}">
<img src="{{ "/assets/img/chords.png" | prepend: site.baseurl }}">

## Tick, ring i variables

{% highlight ruby %}
play scale(:e3, :minor_pentatonic).tick, release: 0.1

play [:c, :e, :d, :f].ring.tick

r = [0.25, 0.25, 0.5, 1].choose
play chord(:c, :minor).choose, attack: 0, release: r
sleep r

chords = [chord(:C, :minor7), chord(:Ab, :major7)].ring # un anell d’acords
c = chords.tick # desa el proper acord a la variable ‘c’
c[0] # pren la primera nota de l’acord
{% endhighlight %}

## Altres

Si el teu codi es torna lent, intenta usar `use_debug false` al principi del teu codi. Això redueix el nombre de missatges de registre que genera Sonic Pi i pot accelerar el teu codi.