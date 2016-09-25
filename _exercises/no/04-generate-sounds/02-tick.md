---
chapter: Lag lyder
title: Tick
lang: no
layout: exercise
---

Husker du `chord`? Chord funksjonen gir deg tonene i en gitt akkord:

{% highlight ruby %}
play (chord :c, :major).choose 
# spiller en tilfeldig tone fra c-dur akkorder (:c, :g r :f)
{% endhighlight %}

Det er også en funksjon som heter `scale`. Den gir deg alle notene i en _skala_, ikke bare de som er i en akkord:

{% highlight ruby %}
play (scale :c, :major).choose 
# spiller en tilfeldig note fra C-dur skalaen (:c, :d, :e, :f, :g, :a or :b)
{% endhighlight %}

Med `choose` får du et tilfeldig element fra en liste. Hvis du vil gå igjennom alle verdiene i en liste på en mer strukturert måte har Sonic PI en veldig kraftig funksjon som heter `tick`:

{% highlight ruby %}
live_loop :arp do
  play (scale :e3, :minor_pentatonic).tick, release: 0.1
  sleep 0.125
end
{% endhighlight %}

Her bruker vi bare femtoneskalaen E3-moll og går igjennom hvert element. Det gjør vi ved å legge på .tick på slutten av skaladeklarasjonen. Ticken gjelder bare inne i live-loopen, så hver live loop kan ha sin egen, uavhengige tick: 

{% highlight ruby %}
live_loop :arp do
  play (scale :e3, :minor_pentatonic).tick, release: 0.1
  sleep 0.125
end

live_loop :arp2 do
  use_synth :dsaw
  play (scale :e2, :minor_pentatonic, num_octaves: 3).tick, release: 0.25
  sleep 0.25
end 
{% endhighlight %}

## Ringer

Du kan også ticke igjennom alt som er en _ring_ (eller, du kan ticke gjennom lister også, men de slutter når du kommer til slutten). En ring er en spesiell liste som starter på nytt når du kommer til slutten. Akkurat som i det forrige eksempelet der skalaen starter på nytt etter den har kommet til den siste tonen. `scale` og `chord` er begge ringer. Noen ganger vil man gjøre om en liste til en ring, det kan du gjøre ved å skrive `.ring` eller lage den direkte med `ring` som vist under:

{% highlight ruby %}
puts [1, 2, 3, 4].ring #=> (ring 1, 2, 3, 4)
puts (ring 1, 2, 3, 4) #=> (ring 2, 2, 3, 4)
{% endhighlight %}

{% highlight ruby %}
live_loop :arp do
  play [:c, :e, :d, :f].ring.tick, release: 0.1
  sleep 0.125
end
{% endhighlight %}

Her er et litt mer sammensatt eksempel. Vi har en liste av akkorder som vi gjør igjennom til en ring og ticker igjennom:

{% highlight ruby %}
live_loop :keys do
  use_synth :blade
  play [(chord :Ab, :major7), (chord :Db, :major7), (chord :Bb, :minor7), (chord :Eb, '7')].ring.tick, attack: 0.1, release: 1
  sleep 1
end
{% endhighlight %}

Og til slutt kan vi legge på en melodi:

{% highlight ruby %}
live_loop :keys do
  use_synth :blade
  play [(chord :Ab, :major7), (chord :Db, :major7), (chord :Bb, :minor7), (chord :Eb, "7")].ring.tick, attack: 0.1, release: 1
  sleep 1
end

live_loop :lead do
  use_synth :dsaw
  play (scale :Ab, :major, num_octaves: 3).mirror.tick, attack: 0.05, release: 0.25, cutoff: rrand(80, 110), amp: 0.5
  sleep 0.25
end
{% endhighlight %}

Start med ticking, slipp deg løs!