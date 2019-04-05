---
chapter: 声音生成
title: Tick指令
lang: chs
layout: exercise
---

还记得和弦吗？和弦功能能给在特定和弦内给出一个音符。

{% highlight ruby %}
play (chord :c, :major).choose 
#随机演奏C大调和弦的一个音符(:c, :e or :g)
{% endhighlight %}

还有一个功能叫做音阶。音阶功能把所有音符归到同一个音阶里面，不仅仅是一个和弦里。

{% highlight ruby %}
play (scale :c, :major).choose 
#演奏C大调音阶的随机音符(:c, :d, :e, :f, :g, :a or :b)
{% endhighlight %}

筛选后你可以在列表里面得到一个随机元素。如果你想在更加结构化的方式里面得到数值，Sonic Pi有一个强大的功能叫做`tick`:

{% highlight ruby %}
live_loop :arp do
  play (scale :e3, :minor_pentatonic).tick, release: 0.1
  sleep 0.125
end
{% endhighlight %}

此处我们拿E3小调五声音阶举例然后勾选每个元素。在音阶说明的结尾加上 `.tick`就能实现。此勾选只在所处循环内有效，所以每个活循环都可以有自己的tick。
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

## 环

任何环内的音符都可以勾选（列表里当然也是可以的但是一到结尾就停止了）。环是一种特殊列表，到结尾还会重新开始。就像之前例子里面音阶到最后一个音符重新开始一样。`.scale`和`chord`都能回到一个环。你想创建一个环状列表的话就用`.ring`或者`ring`生成器。

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

下面的例子会复杂一点。现在你有一个已经成环并且被勾选了的列表。

{% highlight ruby %}
live_loop :keys do
  use_synth :blade
  play [(chord :Ab, :major7), (chord :Db, :major7), (chord :Bb, :minor7), (chord :Eb, '7')].ring.tick, attack: 0.1, release: 1
  sleep 1
end
{% endhighlight %}

然后在下面加上主旋律

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

开始勾选，噪起来！
