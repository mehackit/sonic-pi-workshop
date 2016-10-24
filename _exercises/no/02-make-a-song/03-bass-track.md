---
chapter: Lag en sang
title: Bassspor
lang: no
layout: exercise
---

Legg til en ny live_loop for bassen. Komponener en stødig og enkel bass. Hvis det hjelper kan du bruke <a href="{{ "/exercises/09-keys-chords-and-scales/01-piano.html" | prepend: site.baseurl }}">piano</a> i browseren for å finne toner som du liker. Her er et eksempel:

{% highlight ruby %}
live_loop :bass do
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

## Endre synthen

Det er på tide å gjøre sangen mer interessant. Vi kan oppnå dette ved å endre på synthesizer lydene den bruker. Som standard bruker Sonic PI en synth som heter `beep`. Prøv å bruke en annen synth, du må legge til koden `use_synth :navn_på_synthen_du_vil_bruke` over sekvensen av kode der du vil bruke den.

I dette eksempelet er fm navnet på synthen vi bruker:

{% highlight ruby %}
live_loop :bass do
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

Det er mange kule synther som følger med Sonic Pi. For å finne navnet på dem kan du tryke på hjelp-ikonet på toppen av skjermen sånn at hjelpevinduet dukker opp. Så kan du velge Synths fra venstresiden i hjelpevinduet. Trykk på navnet på en synth for å få mer informasjon om hvordan du kan bruke den.

## Endre lengden på en tone

Innimellom ønsker man kanskje å få en lyd til å spille lenger eller i et annet tempo. Dette kan man få til ved å endre på parametere i koden du bruker. `attack` og`release` styrer volumet av en tone over tid:

<img src="{{ "/assets/img/attackrelease.png" | prepend: site.baseurl }}">

Å bruke attack og release ser ut som i eksempelet under. Nå vil tonen være 4 takter lang.

{% highlight ruby %}
play 60, attack: 1, release: 3
{% endhighlight %}

du kan lage korte, stakkato noter ved å sette attack til 0 og release til en veldig kort verdi:

{% highlight ruby %}
play :c4, attack: 0, release: 0.2
{% endhighlight %}

Utforsk forskjellige synther og notelengder og lag et tøft bassspor.

Nå høres sangen ut kanskje noe som det her:

{% highlight ruby %}
use_bpm 100

live_loop :trommer do
  sample :drum_heavy_kick
  sleep 1
  sample :drum_snare_hard
  sleep 1
  sample :drum_heavy_kick
  sleep 1
  sample :drum_snare_hard
  sleep 1
end

live_loop :hihat do
  sample :drum_cymbal_closed
  sleep 0.25
  sample :drum_cymbal_pedal
  sleep 1
end

live_loop :bass do
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
