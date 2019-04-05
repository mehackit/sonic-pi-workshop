---
chapter:  制作一首歌曲
title: 低音音轨
lang: chs
layout: exercise
---

给低音轨再添加一个live loop。编写一段扎实而简单的低音轨。如果觉得有用的话你可以用<a href="{{ "/exercises/en/09-keys-chords-and-scales/01-piano.html" | prepend: site.baseurl }}">钢琴</a>或者在浏览器中选一个你喜欢的。下面是一个例子：

{% highlight ruby %}
live_loop :bass do
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

## 改变合成器

是时候让你的调调变得更有趣了！我们可以通过改变使用中的合成声音来达到目的。Sonic Pi默认的合成器叫做`beep`。想使用不同合成器就在所需位置的代码前面加上`use_synth :name_of_synth`。 

在这个例子里，fm是合成器的名字。

{% highlight ruby %}
live_loop :bass do
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

Sonic Pi里面有好多有趣的声音合成器。想要找到它们可以点击屏幕上方帮助键来查看帮助文件。选择对话框左侧合成器。点击任意合成器的名字就能看到对应使用介绍。

## 改变音符时长

有时候你可能想让声音演奏时间变长或者改变速度。这可以通过改变代码的选择参数来实现。用`attack`和`release`指令来控制音符频率在时间上的变化。

<img src="{{ "/assets/img/attackrelease_chs.png" | prepend: site.baseurl }}">

用如下方式使用attack和release指令。现在音符就变成了四拍。

{% highlight ruby %}
play 60, attack: 1, release: 3
{% endhighlight %}

如果你想做一个小的变奏，就把attack调成0，把release调成非常小的数值。

{% highlight ruby %}
play :c4, attack: 0, release: 0.2
{% endhighlight %}

探索不同合成器和音符长度来让你的低音轨更流畅。

现在旋律差不多是这样了：

{% highlight ruby %}
use_bpm 100

live_loop :drums do
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

live_loop :bass do
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
