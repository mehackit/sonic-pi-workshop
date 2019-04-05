---
chapter:  制作一首歌曲
title: 添加随机化
lang: chs
layout: exercise
---
好样的！你的歌曲已经有了稳定的节拍和低音并且跟主旋律配合良好了。下面我们要做的能释放出Sonic Pi的真正潜力。在轨道上添加一些生成元素，我们能用编程让计算机为我们作曲！

## 掷骰子并移调


移调意味着向上或向下改变音高。我们可以偶尔将旋律移调来增添曲子新鲜感。你可以掷骰子来决定什么时候来让曲调上扬。下面是举例：


{% highlight ruby %}
live_loop :melody do
  if one_in(6)
    use_transpose 2
  else
    use_transpose 0
  end
  play_pattern_timed [:c4, :e4, :f4, :g4, :f4, :e4, :f4, :g4, :f4, :e4, :f4], [0.25, 0.25, 0.25, 1.5, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25], attack: 0, release: 0.2
end
{% endhighlight %}

## 创建一个随机酸贝斯音轨

让我们给低音循环加点料。`.choose`是一种非常顺手的方法，用来从列表中随机挑选一个元素。就像这样：

{% highlight ruby %}
play [:c, :e, :g].choose
{% endhighlight %}

`[:c, :e, :g]`是一串音符（此情况下音符是C大调和弦）。`.choose`指令会随机选取音符。其他内容也可以随机选取，比如`sleep`的数值：

{% highlight ruby %}
loop do
  use_octave [0, 1].choose
  play [:c, :e, :g].choose
  sleep [0.25, 0.25, 0.5, 1].choose
end
{% endhighlight %}

你都不需要记得你在哪个和弦里写了什么音符。Sonic Pi你能帮你搞定一切。你可以用`(chord :C, :major)`来替代`[:c, :e, :g]`。这样就能自动生成一串正确的音符。例如：

{% highlight ruby %}
loop do
  play (chord :c, :major).choose
  sleep [0.25, 0.25, 0.5, 1].choose
end
{% endhighlight %}

把这个神奇的方法用在低音音轨上看看能创造出什么奇迹。保存你的作品然后把现在的`:bass`循环复制到另一个缓存上，以防你还想回到原处。接着给新的低音音轨腾出位置并删除循环里面的内容。我们用古典`:tb303`合成器在C大调和弦里演奏随机的十六分音符。

{% highlight ruby %}
live_loop :bass do
  use_synth :tb303
  play (chord :C2, :major).choose
  sleep 0.25
end
{% endhighlight %}

哎呀，好像哪里不对。在`play`指令末尾加上参数`release:0.125`，像这样试试：

{% highlight ruby %}
live_loop :bass do
  use_synth :tb303
  play (chord :C2, :major).choose, release: 0.125
  sleep 0.25
end
{% endhighlight %}

这就好多了嘛，尽管我们还有点删减要做。到现在为止你已经在`play`指令里运用了`attack:`和`release:`参数。还有很多参数可以根据你的合成器来添加。 例如tb303合成器就有45个可调选项。我们现在给低音音轨添加cutoff指令。Cutoff能把所有不在范围内的频率清除。可以输入的数值范围在0-130间。

设定随机数值时别只是用固定的cutoff数值。还可以用`rrand(min, max)`指令来划定数值范围。赶快试试！


{% highlight ruby %}
live_loop :bass do
  use_synth :tb303
  play (chord :C2, :major).choose, release: 0.125, cutoff: rrand(60, 110)
  sleep 0.25
end
{% endhighlight %}

太太太太棒了！时刻记得多多尝试和探索。下面是一个总结举例，可以给你一个大概的前进方向：

{% highlight ruby %}
use_bpm 120

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
  use_synth :tb303
  play (chord :C2, :major).choose, release: 0.125, cutoff: rrand(60, 110)
  sleep 0.25
end


live_loop :melody do
  if one_in(6)
    use_transpose 2
  else
    use_transpose 0
  end
  play_pattern_timed [:c4, :e4, :f4, :g4, :f4, :e4, :f4, :g4, :f4, :e4, :f4], [0.25, 0.25, 0.25, 1.5, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25], attack: 0, release: 0.2
end
{% endhighlight %}
