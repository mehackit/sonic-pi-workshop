---
chapter: Avanserte tema 1
title: Samplesplitting
lang: no
layout: exercise
---

La oss ta et steg tilbake og se på sampler igjen. Se på videoen under for å forstå hvordan sampler oppfører seg når man spiller dem.

{% include videoplayer.html filepath="/assets/video/amen_loop" %}

Videoen viser en avspilling av `:loop_amen` med følgende kode:

{% highlight ruby %}
sample :loop_amen
{% endhighlight %}

La oss lage en live-løkke som spiller denne rytmen for oss. Husker du justeringsmuligheten `beat_stretch` for `sample` kommandoen som endrer samplet slik at det treffer den ønskede lengden målt i takter? Vi snakket litt om det i kapittelet "Juster lydene". Nå skal vi bruke det for å strekke samplet `loop_amen` til 4 takter og gjenta det:

{% highlight ruby %}
use_bpm 145

live_loop :drumloop do
  sample :loop_amen, beat_stretch: 4
  sleep 4
end
{% endhighlight %}

Deretter skal vi ta en titt på hvordan du kan spille deler av Amen løkken i forskjellig rekkefølge. Med `sample` kommandoen kan du sette forskjellige start og sluttpunkter for avspilling med å bruke parameterne `start` og `finish`. Begge parameterne tar verdier mellom `0` og `1` for start og sluttpunktene i sampleavspillingen. For eksempel: `0` er begynnelsen av samplet, , `0.5` er midtpunktet i samplet og `1` er sluttpunktet i samplet. La oss prøve det med det følgende eksempelet:

{% highlight ruby %}
use_bpm 145

live_loop :trommeløkke do
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

Videoen (laget ved hjelp av Simpler)
The video below (created with the help of Simpler i Ableton Live) visualiserer deler av løkken `loop_amen` samplet som blir spilt i hver gjennomkjøring av `live_loop`:

{% include videoplayer.html filepath="/assets/video/amen_slicing" %}

Er det ikke morsomt å spille forskjellige deler av et sample i forskjellig rekkefølge? Forsøk å eksperimentere med kommandoen `sample`. For eksempel kan du legge til justeringsmuligheten `rate: -1` på en avspillingene av `loop_amen` sånn at den spiller baklengs. 

Et sample kan bli formet til omtrent hva som helst når du begynner å eksperimentere med justeringsmulighetene (som `rate`, `pan`, `amp`, `attack`, `release`, `start` og `finish`). Det følgende eksempelet bruker disse justeringsmuligheten med tilfeldige verdier for å spille forskjellige korte utklipp fra de to samplene:

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

Denne teknikken blir brukt i <a href="https://en.wikipedia.org/wiki/Granular_synthesis">granulære samplere og synthesizere</a>. 
