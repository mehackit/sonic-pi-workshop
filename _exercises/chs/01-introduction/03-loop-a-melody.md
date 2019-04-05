---
chapter: 介绍
title: 旋律反复
lang: chs
layout: exercise
---

不错，你已经写出一段优美的旋律了。我们接下来试试反复或反复部分旋律若干次。尽管你可以用复制粘贴的方式，但是反复次数太多还是很麻烦的。好在我们还能用 **repetition**指令。这个神奇的单词在计算机术语中叫做“迭代”，就是重复的意思。

在旋律开端输入`2.times do` ，末尾输入 `end` 来结束旋律。（音符使用了音名为了方便举例，你也可以输入MIDI数值。）

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

除了输入`2.times do`，你可以自行决定重复次数。比如`4.times do`或`99.times do`。

有必要的话你也可以在重复指令里面嵌套重复。

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

{% include player.html filepath="/assets/audio/looping-melody.mp3" description="来听一下之前的例子" %}