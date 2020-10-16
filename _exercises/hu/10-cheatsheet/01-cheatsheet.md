---
chapter: Puska
title: Puska
lang: hu
layout: exercise
---

## Játssz egy hangot

{% highlight ruby %}
use_bpm 100
# ez egy megjegyzés
play 50
sleep 1
play :C3
sleep 1
play_pattern_timed [:c2, :d2, :e2, :d2], [0.5, 0.25, 0.75, 0.5]
{% endhighlight %}

<img src="{{ '/assets/img/midi_notes_hu.png' | prepend: site.baseurl }}">


## Ciklus

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

## Szintetizátorok és beállítások

<img src="{{ "/assets/img/adsr.png" | prepend: site.baseurl }}">

{% highlight ruby %}
use_synth :fm
use_transpose 0
use_octave 0

play :c, attack: 1, decay: 0, sustain: 0, release: 1, amp: 0.5, pan: rrand(-0.5,0.5)
{% endhighlight %}

## Minták és lehetőségek

{% highlight ruby %}
sample :bd_haus, amp: 0.5
sleep 1
sample :drum_cymbal_open, attack: 0.01, sustain: 0, release: 0.1
sleep 1
live_loop :amen_break do
  sample :loop_amen, beat_stretch: 2, rate: -1
  sleep 2
end
{% endhighlight %}

## Véletlenszerűség

{% highlight ruby %}
rrand(60, 110)

if one_in(6)
  # csinálj valamit
  # csinálj valami mást

sleep [0, 1, 2].choose
play [:c, :e, :g].choose
{% endhighlight %}

## FX

{% highlight ruby %}
with_fx :reverb, mix: 0.5 do
  # csinálj valamit
end
{% endhighlight %}

## Skálák és akkordok

{% highlight r %}
scale(:c2, :major) # ring of :c2, :d2, :e2, :f2, :g2, :a2, :b2
chord(:c2, :major, , num_octaves: 2) # kör of :c2, :e2, :g2 :c3, :e3, :g3
{% endhighlight %}

<img src="{{ '/assets/img/play_scale_1_en.png' | prepend: site.baseurl }}">
<img src="{{ '/assets/img/play_scale_2_en.png' | prepend: site.baseurl }}">
<img src="{{ '/assets/img/play_scale_3_en.png' | prepend: site.baseurl }}">
<img src="{{ '/assets/img/chords_hu.png' | prepend: site.baseurl }}">

## Jel, kör és változók

{% highlight ruby %}
play scale(:e3, :minor_pentatonic).tick, release: 0.1

play [:c, :e, :d, :f].ring.tick

r = [0.25, 0.25, 0.5, 1].choose
play chord(:c, :minor).choose, attack: 0, release: r
sleep r

chords = [chord(:C, :minor7), chord(:Ab, :major7)].ring # akkordok gyűrűje
c = chords.tick # következő akkord mentése a 'c' változóra
c[0] # megkapja az akkord első hangját
{% endhighlight %}

## Egyéb

Ha a kód lassul, próbáld ki a `use_debug false` kódot a kód elején. Ez csökkenti a Sonic Pi által generált naplóüzeneteket, és felgyorsíthatja a kódot.
