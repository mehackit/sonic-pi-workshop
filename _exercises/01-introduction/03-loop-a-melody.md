---
layout: exercise
chapter: Introduction
title: Loop a melody
---

Okay, so you wrote a nice melody. What if you want to repeat it, or parts of it, a few times. You could copy and paste the melody but that gets a bit tiring after a while. Luckily you can use **loops**!

Write `2.times do` to the beginning of your melody and `end` to the end of your melody (the notes are in musical notation just for example, you can use MIDI notes if you wish):

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

Instead of using `2.times do` you can choose how many times you want to loop the notes. For example `4.times do` or `99.times do`.

You can also use loops inside loops if you wish:

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

{% include player.html filepath="/audio/looping-melody.mp3" description="Listen to the previous example" %}