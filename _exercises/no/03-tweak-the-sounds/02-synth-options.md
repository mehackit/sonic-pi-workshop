---
chapter: Juster lydene
title: Muligheter
lang: no
layout: exercise
---

Så langt har du brukt `attack`, `release`, og `cutoff` egenskapene etter en play kommando. Options (or opts for short, engelsk for valgmuligheter) er justeringer du kan bruke for å styre egenskaper ved lydene du hører. Hver synth har sine egene valgmuligheter for å finjustere lyden sin. Det finnes likevel en del vanlige muligheter som de fleste har til felles. Nå skal vi ta en titt på noen av dem.

Husk at du kan bruke en del av disse på sampler også!

### `amp:`

Amp står for amplitutde og er hvor høy en lyd er, som volum. 0 er stille (du hører ingenting), 1 er normalt volum. Du kan justere opp til 2, 10 eller 100, men det vil ofte gjøres lyden gjørmete og rar. Prøv å bruke lave amplituder, rundt 0 til 0.5 for at det skal høres bra ut.


{% highlight ruby %}
play :c2, amp: 0.5
{% endhighlight %}

### `pan:`

Pan kontrollene bestemmer hvilke høytalere lyden kommer fra når man har to høytalere (stereo). -1 betyr at du hører det i venstre høyttaler, 1 betyr at du hører det i høyre høyttaler og 0 betyr i senter, altså like mye i begge høyttalerene. Du kan bruke en hvilken som helst verdi mellom -1 og 1, og gjerne prøv med tilfeldige tall.

{% highlight ruby %}
play :c2, amp: 0.5, pan: -1 #left speaker
play :c2, amp: 0.5, pan: 0 #center
play :c2, amp: 0.5, pan: 1 #right speaker

sample :drum_cymbal_closed, pan: rrand(-0.7, 0.7)
{% endhighlight %}

### `cutoff:`

Fjerner frekvenser som er høyere enn en gitt verdi. Bruk verdier mellom 0-130.

{% highlight ruby %}
play :c2, cutoff: 80
{% endhighlight %}

### `attack:` og `release:`

Tiden er gitt i taktslag for attack og release.

{% highlight ruby %}
play :c2, attack: 1, release: 1 # tonen er to taktslag lang
{% endhighlight %}

<img src="{{ "/assets/img/attackrelease.png" | prepend: site.baseurl }}">

### `use_synth_defaults` og `use_sample_defaults`

Hvis du ikke vil sette dine egne verdier hvor hvert eneste sample eller hver eneste play kommando, kan du bruke `use_synth_defaults` og `use_sample_defaults` for å sette valgene for alle de neste play eller sample kommandoene i løkken:

{% highlight ruby %}
live_loop :melodi do
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

### Bonus: `beat_stretch:` og `rate:`

Disse er litt for kule til å hoppe over. Prøv dette:

{% highlight ruby %}
live_loop :amen_break do
  sample :loop_amen
  sleep 2
end 
{% endhighlight %}

Det er en litt irriterende pause på slutten. Samplet er 1.753310657596372 takter lang, som ikke er så enkelt når du vil spille det sammen med alle de andre sporene. Heldigvis kan du bruke `beat_stretch: 2` for å strekke/mose samplet for å få det akkurat to takter langt:

{% highlight ruby %}
live_loop :amen_break do
  sample :loop_amen, beat_stretch:2
  sleep 2
end
{% endhighlight %}

Supert! Nå kan vi se på `rate`. Rate styrer hvor fort et sample blir spilt. 1 er orginal fart, 0.5 er halv fart og 2 er dobbel fart. Samplet høres også lysere ut når det blir spilt fort og mørkere når det blir spilt sakte. Og (trommevirvel...) - du kan til og med ha negative verdier! Negative verdier spiller samplet _baklengs_. Forsøk og spille denne løkken og endre på rate og sleep verdiene:

{% highlight ruby %}
live_loop :amen_break do
  sample :loop_amen, beat_stretch:2, rate: -1
  sleep 2
end
{% endhighlight %}

