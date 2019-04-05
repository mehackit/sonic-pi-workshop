---
chapter: 进阶话题1
title: 采样切片
lang: chs
layout: exercise
---

让我们回头再看看采样。下面这个视频理解一下循环采样回放的作用。

{% include videoplayer.html filepath="/assets/video/amen_loop" %}

`:loop_amen`采样的回放由以下代码表示：


{% highlight ruby %}
sample :loop_amen
{% endhighlight %}

现在我们来做一个一直打拍子的`live_loop`。你还记得那个改变采样音高来适应所需节拍长度的`beat_stretch`指令吗？我们在“声音微调”章节简单介绍过。接下来我们要用它把loop_amen采样拉长到四拍并循环：

{% highlight ruby %}
use_bpm 145

live_loop :drumloop do
  sample :loop_amen, beat_stretch: 4
  sleep 4
end
{% endhighlight %}

接下来我们来看看怎么让部分Amen循环按照不同顺序演奏。用采样指令你可以用开始和结束参数来设定不同的起始点和结束点。两个参数都可以输入0到1之间的数值来设定采样回放的开始和结束点。例如：0是采样的起始，0.5是中点，1是结束点。我们来实际操作看看：

{% highlight ruby %}
use_bpm 145

live_loop :drumloop do
  sample :loop_amen, beat_stretch: 4, start: 0, finish: 0.125
  sleep 0.5
  sample :loop_amen, beat_stretch: 4, start: 0, finish: 0.125
  sleep 0.5
  sample :loop_amen, beat_stretch: 4, start: 0.5, finish: 0.75
  sleep 1
  sample :loop_amen, beat_stretch: 4, start: 0.25, finish: 0.5
  sleep 1
  sample :loop_amen, beat_stretch: 4, start: 0.75, finish: 0.875
  sleep 0.5
  sample :loop_amen, beat_stretch: 4, start: 0.25, finish: 0.375
  sleep 0.5
end
{% endhighlight %}

下面的视频可以看出`loop_amen`采样在每次`live_loop`中播放的部分。

{% include videoplayer.html filepath="/assets/video/amen_slicing" %}

把采样用完全不同的顺序播放是不是特别有意思？试试修改采样选项，例如添加一个-1的选项速率，让`loop_amen`倒放。

一旦你开始试验采样选项（比如速率、声像、幅度、击打、释放、开始和结束），一个采样能被塑造成任何样子。下面的例子在两个采样里用了随机数值演奏出了独特的效果：

{% highlight ruby %}
use_bpm 180

with_fx :reverb, mix: 0.2, room: 1 do
  live_loop :grain1 do
    s = rrand(0, 0.7)
    t = rrand(0.03, 0.3)
    e = s + t
    a = rrand(0.5, 1.0)
    sample :guit_e_fifths, rate: -1.5, start: s, finish: e, attack: t/6.0, sustain: t/2.0, pan: rrand(-0.5, 0.5)
    sleep t
  end

  live_loop :grain2 do
    s = rrand(0, 0.7)
    t = rrand(0.03, 0.2)
    e = s + t
    a = rrand(0.5, 1.0)
    sample :guit_em9, rate: 1.5, start: s, finish: e, attack: t/6.0, sustain: t/2.0, pan: rrand(-0.5, 0.5)
    sleep t
  end
end
{% endhighlight %}

{% include player.html filepath="/assets/audio/granular_1.mp3" %}

这个技术能被广泛运用在<a href="https://en.wikipedia.org/wiki/Granular_synthesis">颗粒采样器和合成器中。</a>. 
