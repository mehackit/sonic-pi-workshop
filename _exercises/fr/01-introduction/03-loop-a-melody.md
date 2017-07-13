---
chapter: Introduction
title: Répéter une mélodie
lang: fr
layout: exercise
---

Ok, tu as écris une jolie mélodie. Que faire si tu veux la répéter, ou en répéter des morceaux, plusieurs fois&nbsp;? Tu peux copier et coller la mélodie mais avec le nombre cela va être un peu fatiguant. Heureusement tu peux utiliser la **répétition** ! Le terme informatique exact pour cela est itératif qui signifie simplement faire des choses plus d'une fois.

Ecris `2.times do` au début de ta mélodie et `end` à la fin de ta mélodie (les notes sont en notation anglaise pour l'exemple, tu peux utiliser les notes MIDI si tu veux)&nbsp;:

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

Au lieu de `2.times do` tu peux choisir combien de fois tu veux répéter les notes. Par exemple `4.times do` ou `99.times do`.

Tu peux aussi faire des répétitions à l'intérieur de répétitions si tu veux&nbsp;:

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

{% include player.html filepath="/assets/audio/looping-melody.mp3" description="Ecoute l'exemple ci-dessus" %}
