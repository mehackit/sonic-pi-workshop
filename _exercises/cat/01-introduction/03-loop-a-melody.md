---
chapter: Introducció
title: Repetint una melodia
lang: cat
layout: exercise
---

Bé, ja heu escrit una melodia bonica. I si vulguéreu repetir-la sencera, o parts d’ella, diverses vegades? Podríeu copiar i enganxar la melodia però, al final, això cansa. Per sort, podeu fer servir la *repetició*! El terme concret en informàtica per això és iteració, el qual només significa fer coses més d'una vegada.

Escriviu `2.times do` en el començament de la teva melodia i `end` a la fi de la melodia (les notes estan escrites en notació musical només per l'exemple, pots utilitzar notes MIDI si així ho desitjeu):


{% highlight ruby %}
2.times do
  play :c4
  sleep 0.5
  play :d4
  sleep 0.5
  play :e4
  sleep 0.5
  play :c4
  sleep 0.5
end
{% endhighlight %}

En lloc d'utilitzar `2.times do` podeu triar quantes vegades voleu repetir les notes. Per exempl `4.times do` o `99.times do`.

Podeu també utilitzar repeticions dins de repeticions si així ho desitgeu:

{% highlight ruby %}
4.times do
  4.times do
    play :c4
    sleep 0.25
  end
  play :d4
  sleep 0.5
  play :f4
  sleep 0.5
end
{% endhighlight %}

{% include player.html filepath="/assets/audio/looping-melody.mp3" description="Escolteu l'exemple anterior" %}