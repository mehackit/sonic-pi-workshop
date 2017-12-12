---
chapter: Genrera ljud
title: Tick
lang: se
layout: exercise
---

Du minns `chord`, som ger ackordets toner som en lista? 

{% highlight ruby %}
play chord(:c, :major).choose 
# Spelar slumpmässigt toner från C-dursackordet (:c, :e tai :g)
{% endhighlight %}

I Sonic Pi kan du också använda kommandot `scale`, som ger dig alla toner i en skala. 

{% highlight ruby %}
play scale(:c, :major).choose 
# soittaa satunnaisesti C-duuriskaalan säveliä (:c, :d, :e, :f, :g, :a or :b)
{% endhighlight %}

Med `choose` kan du välja slumpmässiga element från en lista. Om vill gå igenom en hel lista i ursprunglig ordning kan du använda en väldigt praktisk metod för det: `tick`:

{% highlight ruby %}
live_loop :arp do
  play scale(:e3, :minor_pentatonic).tick, release: 0.1
  sleep 0.125
end
{% endhighlight %}

I exemplet går programmet igenom alla toner i E-mollskalan i tredje oktaven. Som du der lyckas det genom att tillägga `.tick` efter föregående `scale`- eller `chord`-kommandon. `Tick` är lokal för varje `live_loop`, så du kan använda den i varje loop skillt. 

{% highlight ruby %}
live_loop :arp do
  play scale(:e3, :minor_pentatonic).tick, release: 0.1
  sleep 0.125
end

live_loop :arp2 do
  use_synth :dsaw
  play scale(:e2, :minor_pentatonic, num_octaves: 3).tick, release: 0.25
  sleep 0.25
end 
{% endhighlight %}

## Kedjor

En kedja (**ring**) skiljer sig från en lista i att tick återvänder till första elementet efter att hela ringen har gåtts igenom. I föregående exempel fortsatte genomgången av scale efter sista elementet. `scale` och `chord` ger båda en alltid en kedja istället för en lista. Ibland kan det löna sig att ändra en lista till en kedja, och det lyckas så här: 

{% highlight ruby %}
live_loop :arp do
  play [:c, :e, :d, :f].ring.tick, release: 0.1
  sleep 0.125
end
{% endhighlight %}

Nu tar vi ett titt på ett mera avancerat exempel. Här ändras en lista av ackord till en kedja som gås igenom med hjälp av `.tick`.

{% highlight ruby %}
live_loop :keys do
  use_synth :blade
  play [chord(:Ab, :major7), chord(:Db, :major7), chord(:Bb, :minor7), chord(:Eb, '7')].ring.tick, attack: 0.1, release: 1
  sleep 1
end
{% endhighlight %}

Och till slut kan vi lägga till en melodi. Obs! `.mirror` vänder melodin så att det sista elementet spelas först osv. 

{% highlight ruby %}
live_loop :keys do
  use_synth :blade
  play [chord(:Ab, :major7), chord(:Db, :major7), chord(:Bb, :minor7), chord(:Eb, "7")].ring.tick, attack: 0.1, release: 1
  sleep 1
end

live_loop :lead do
  use_synth :dsaw
  play scale(:Ab, :major, num_octaves: 3).mirror.tick, attack: 0.05, release: 0.25, cutoff: rrand(80, 110), amp: 0.5
  sleep 0.25
end
{% endhighlight %}

Prova `tick` med olika slags listor och kedjor och låt datorn ta hand om att spela melodierna!
