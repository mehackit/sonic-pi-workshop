---
chapter: Avancerade teman
title: Att klyva samples
lang: se
layout: exercise
---

Kommer du ihåg vad de föregående kapitlen har lärt dig om att spela samples? Vi börjar med att repetera hur man kan spela samples med kommandot `sample`. Videon nedan visar hur det låter när man spelar en sample och hur en sample ser ut: 

{% include videoplayer.html filepath="/assets/video/amen_loop" %}

{% highlight ruby %}
sample :loop_amen
{% endhighlight %}

Kommer du ihåg från de föregående kapitlen hur man får en sample (t.ex `:loop_amen` ) att spelas utan uppehåll och hållas i samma tempo som det övriga stycket? För det måste du använda `beat_stretch`. I nästa exempel sträcker vi ut `:loop_amen` till 4 slag långt och “loopar” den (dvs. spelar den om och om igen): 

{% highlight ruby %}
use_bpm 145

live_loop :drumloop do
  sample :loop_amen, beat_stretch: 4
  sleep 4
end
{% endhighlight %}

Vi provar att klyva Amen-loopen och spela kompet i en annan ordning. Till en `sample` kan du ge parametrarna `start` och `finish`. Med dem kan du fastställa varifrån du börjar och slutar att spela en sample. Du kan använda värden mellan `0` och `1` med båda, och `0` betyder samplets början, `1` slutet och `0.5` mittpunkten. Vi provar hur det fungerar i praktiken: 

{% highlight ruby %}
use_bpm 145

live_loop :drumloop do
  sample :loop_amen, beat_stretch: 4, start: 0, finish: 0.125
  sleep 0.5
  sample :loop_amen, beat_stretch: 4, start: 0, finish: 0.125
  sleep 0.5
  sample :loop_amen, beat_stretch: 4, start: 0.5, finish: 0.75
  sleep 1
  sample :loop_amen, beat_stretch: 4, start: 0.25, finish: 0.5
  sleep 1
  sample :loop_amen, beat_stretch: 4, start: 0.75, finish: 0.875
  sleep 0.5
  sample :loop_amen, beat_stretch: 4, start: 0.25, finish: 0.375
  sleep 0.5
end
{% endhighlight %}

Videon nedan (Som har gjorts med hjälp av Ableton live) hjälper dig att begripa vilka delar av `:loop_amen` spelas i en `live_loop`. 

{% include videoplayer.html filepath="/assets/video/amen_slicing" %}

Är det inte roligt att klyva samples och spela dem i en helt annan ordning? Prova nu att experimentera med olika parametrar! Till exempel om du tillägger `rate: -1` efter en loop_amen spelas den baklänges.

En sample kan formas till nästan vad som helst om du använder de olika parametrarna (t.ex `rate`, `amp`, `pan`, `attack`, `release`, `start` och `finish`). I exemplet nedan spelas det väldigt korta “mikroljud” från två samples och resultatet ändras hela tiden genom att skapa slumpmässighet med `rrand`: 

{% highlight ruby %}
use_bpm 180

with_fx :reverb, mix: 0.2, room: 1 do
  live_loop :grain1 do
    s = rrand(0, 0.7)
    t = rrand(0.03, 0.3)
    e = s + t
    a = rrand(0.5, 1.0)
    sample :guit_e_fifths, rate: -1.5, start: s, finish: e, attack: t/6.0, sustain: t/2.0, pan: rrand(-0.5, 0.5)
    sleep t
  end

  live_loop :grain2 do
    s = rrand(0, 0.7)
    t = rrand(0.03, 0.2)
    e = s + t
    a = rrand(0.5, 1.0)
    sample :guit_em9, rate: 1.5, start: s, finish: e, attack: t/6.0, sustain: t/2.0, pan: rrand(-0.5, 0.5)
    sleep t
  end
end
{% endhighlight %}

{% include player.html filepath="/assets/audio/granular_1.mp3" %}

Den här tekniken är mycket använd inom <a href="https://en.wikipedia.org/wiki/Granular_synthesis">granulära synthesizers</a>.
