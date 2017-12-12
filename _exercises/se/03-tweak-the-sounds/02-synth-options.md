---
chapter: Justera ljudet
title: Synthesizers och samples
lang: se
layout: exercise
---

Tills nu har du använt parametrarna `attack`, `release` och `cutoff` i samband med samples. Som vi nämnde i föregående kapitel har varje synth otaliga parametrar som kan användas för att bearbeta ljudet. Nu tar vi ett titt på några parametrar som är tillgängliga för alla samples och ljud. Du kan göra din musik mycket mera uttrycksfull genom att använda dem!

### `amp:`

Amplitud betyder ljudstyrka. När du ger parametern värdet 0, hörs ljudet inte alls och med värdet 1 spelas ljudet med normal volym. Du kan öka ljudstyrkan med t.ex värdena 1.5 eller 2, me oftast lönar sig det inte eftersom det ibland försämrar ljudkvaliteten. Du kan spela ljudet med lägre volym än normalt med värden under 1 (t.ex 0.5, då ljudstyrkan är hälften av det normala)

{% highlight ruby %}
play :c2, amp: 0.5
sleep 1
sample :bd_ada, amp: 0.8
{% endhighlight %}

### `pan:`

Parametern pan kontrollerar ljudets position i vänster och höger kanal. Med värdet -1 hörs ljudet endast i vänster kanal, med 0 i mitten (lika högt i båda) och med 1 bara i höger kanal. Man kan använda alla värden mellan -1 och 1. Till exempel kan du skapa en känsla av rörelse i hihat-loopen som du gjorde tidigare med kommandot `rrand(-0.7, 0.7)`. 

{% highlight ruby %}
play :c2, amp: 0.5, pan: -1 #vänster kanal
play :c3, amp: 0.5, pan: 0 #mitten
play :c4, amp: 0.5, pan: 1 #höger kanal
{% endhighlight %}

{% highlight ruby %}
live_loop :hihat do
  sample :drum_cymbal_closed, pan: rrand(-0.7, 0.7)
  sleep 0.25
  sample :drum_cymbal_pedal, pan: rrand(-0.7, 0.7)
  sleep 1
end
{% endhighlight %}

### `cutoff:`

Cutoff “skär bort” höga frekvenser ovanför värdet du ger. Värdet måste vara mellan 0 och 130. 

{% highlight ruby %}
play :c2, cutoff: 80
sample :drum_cymbal_open, cutoff: 60
{% endhighlight %}

### `attack:` ja `release:`

`Attack betyder tiden som volymen .... Pitää vielä pyytää Annilta tekstit. `

{% highlight ruby %}
play :c2, attack: 1, release: 1 # kaksi iskua pitkä nuotti
{% endhighlight %}

<img src="{{ "/assets/img/attackrelease_fi.png" | prepend: site.baseurl }}">

### `use_synth_defaults` ja `use_sample_defaults`

Om du inte vill ge parametrar skilt för varje `play`- och `sample`-kommandon, kan du bestämma ett standardvärde. Obs! Dessa värden övergår inte automatiskt mellan olika live_loops. 

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

### Bonus: `beat_stretch:` ja `rate:`

De här är för roliga att hoppa över. Prova: 

{% highlight ruby %}
live_loop :amen_break do
  sample :loop_amen
  sleep 2
end 
{% endhighlight %}

Pausen i slutet är lite irriterande. Samplet är 1.753310657596372 slag långt, vilket gör det opraktiskt att spela det tillsammans med andra ljud. Som tur är kan du använda `beat_stretch: 2` för att sträcka ut samplet till exakt två slag långt: 

{% highlight ruby %}
live_loop :amen_break do
  sample :loop_amen, beat_stretch:2
  sleep 2
end
{% endhighlight %}

Nu kan du prova använda `rate`. Den styr hur snabbt samplet spelas. Med värdet 1 spelas samplet normalt, med 0.5 med halvfart och 2 dubbelfart. Samplet också låter högre eller lägre beroende på farten. Och med negativa värden spelas de baklänges! Kopiera koden här nedan till en tom flik, kör programmet och prova olika värden.

{% highlight ruby %}
live_loop :amen_break do
  sample :loop_amen, beat_stretch:2, rate: -1
  sleep 2
end
{% endhighlight %}
