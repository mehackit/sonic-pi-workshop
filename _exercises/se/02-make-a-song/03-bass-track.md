---
chapter: Gör en låt
title: Basspår
lang: se
layout: exercise
---

Skapa en live_loop till för basen och skriv en enkel och fungerande basgång. Om du vill kan du använda <a href="{{ "/exercises/se/09-keys-chords-and-scales/01-piano.html" | prepend: site.baseurl }}">ett virtualpiano</a> som fungerar i din webbläsare. Här är ett exempel: 

{% highlight ruby %}
live_loop :bas do
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

## Ändra synthesizern

Det är dags att du gör din låt intressantare! Vi kan göra detta genom att ändra på syntheziserljuden den består av. Vanligtvis använder Sonic Pi en synth som heter `:beep`, men prova nu att använda en annan synth. Skriv `use_synth :namn` på synth före `play`. 

I det här exemplet är `:fm` namnet på synthen vi använder. 

{% highlight ruby %}
live_loop :bas do
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

I Sonic Pi hittar du hur många intressanta synthar som helst. Du hittar dem lätt från listan som öppnas efter `use_synth` eller från hjäppanelens synthflik. 

## Ändra längden på noterna

Ibland vill du kanske spela noter av olika längd. Det kan du göra genom att tillägga parametrarna `attack` och `release` efter `play`. De ändrar på ljudets volym i förhållande till tiden. 

Såhär ser det ut. Nu är tonen 4 slag lång: ljudet blir starkare det första slaget och tystnar under de tre sista. 

<img src="{{ "/assets/img/attackrelease_fi.png" | prepend: site.baseurl }}"> 

{% highlight ruby %}
play 60, attack: 1, release: 3
{% endhighlight %}

Du kan göra korta staccato-noter om du ställer `attack` till 0 och `release` till ett mycket litet värde: 

{% highlight ruby %}
play :c4, attack: 0, release: 0.2
{% endhighlight %}

Utforska nu de olika syntherna och tonlängderna och gör ett tufft basspår!

Vi har nu programmerat ett enkelt trumbeat och basspår och vår kod ser ut ungefär såhär: 

{% highlight ruby %}
use_bpm 100

live_loop :trummor do
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

live_loop :bas do
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
