---
chapter: Genrera ljud
title: Variabler
lang: se
layout: exercise
---

Börja med att prova exemplet nedan. Vad händer? 

{% highlight ruby %}
live_loop :melodia do
  use_synth :blade
  r = [0.25, 0.25, 0.5, 1].choose
  play chord(:c, :minor).choose, attack: 0, release: r
  sleep r
end
{% endhighlight %}

I exemplet finns det en variabel `r`, som får ett värde från listan `[0.25, 0.25, 0.5, 1]` varje gång live_loopen börjar om från början. Variabeln `r` används som parameter för `release` och som ett värde för `sleep`. En variabel är som en box dit du kan bevara ett värde och ta ut det när det behövs. I boxen kan du endast ha ett värde åt gången, så om du lägger in ett nytt värde försvinner det gamla. Att använda variabler är så lätt som att skriva `variabelns_namn = variabelns_värde`. Nu har `variabelns_värde` sparats i en variabel som heter `variabelns_namn`. Senare kan du ta använda värdet genom att bara skriva `variabelns_namn`. 

Nu tillägger vi två nya live_loops i föregående exempel. Den första loopen `:synth` gör inget nytt, men den andra (`:bas`) är lite mer komplicerad. 

{% highlight ruby %}
live_loop :melodi do
  use_synth :blade
  r = [0.25, 0.25, 0.5, 1].choose
  play chord(:c, :minor).choose, attack: 0, release: r
  sleep r
end

live_loop :synth do
  use_synth :blade
  play chord(:c, :minor)
  sleep 1
end

live_loop :bas do
  use_synth :fm
  n = chord(:c2, :minor).tick
  3.times do
    play n
    sleep 1
  end
  play n
  sleep 0.5
  play chord(:c2, :minor).tick
  sleep 0.5
end
{% endhighlight %}

`n = chord(:c2, :minor).tick` tar en ton ur C-mollsackordet och sparar den i variabeln `n`. `.tick` flyttar sig alltid framåt till nästa värde när den kallas. Efter det spelar `play n` tonen som är sparad i variabeln `n` och efter det kallas `tick` igen för att få nästa ton i ackordet. När loopen börjar från början, fortsätter `tick` från var den blev kvar. 
