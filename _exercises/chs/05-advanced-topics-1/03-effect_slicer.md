---
chapter: 进阶话题1
title: 切片器
lang: chs
layout: exercise
---

除了之前讨论过的采样切片，你还可以用`:slicer`指令使你作品更加抑扬顿挫。它随着时间的推移改变声音的音量（这个效果通常被称作调幅）。在空白缓存处新建一个`live_loop`，然后将采样`:loop_breakbeat`作为我们的代码块：

{% highlight ruby %}
use_bpm 120

live_loop :breakbeat do
  sample :loop_breakbeat, beat_stretch: 4, amp: 2
  sleep 4
end
{% endhighlight %}

循环听起来应该跟下面视频差不多了。我们用红色来表示声音的音量，在这个例子中音量应该是最大值。

{% include videoplayer.html filepath="/assets/video/breakbeat_dry" %}

现在我们用`with_fx` 指令给`live_loop`加一个切片效果。如果你记不得Sonic Pi里面的效果是如何运用的，请阅读<a href="{{ "/exercises/en/03-tweak-the-sounds/03-effects.html" | prepend: site.baseurl }}">“效果”</a>章节来回顾一下。

{% highlight ruby %}
use_bpm 120

live_loop :breakbeat do
  with_fx :slicer do
    sample :loop_breakbeat, beat_stretch: 4, amp: 2
    sleep 4
  end
end
{% endhighlight %}

{% include player.html filepath="/assets/audio/breakbeat_slicer.mp3" %}

新添加的切片器效果听起来太辣耳朵了，我们得稍微调整一下。切片效果的主要选项是`phase`、`wave`和`mix`。 你可以使用它们来控制振幅。`phase`选项是振幅快慢出现的频率，它的默认数值是`0.25`，意味着每过一个十六分音符出现一次。正因如此，前面的例子听起来相当手忙脚乱。

切片效果可以通过使用四种不同的波形来调制振幅：`0`（锯齿形），`1`（脉冲），`2`（三角形）和`3`（正弦波）。 默认情况下，波被设置为1，这意味着使用脉冲（也称为方波）来调制幅度。 下面的图片展示了波形的外观，以及它们随着时间的推移增加或减少幅度（用红色标记的区域）的情况。

<img src="{{ "/assets/img/slicer_waveforms.png" | prepend: site.baseurl }}" width="100%">

现在让我们尝试将波形更改为锯齿形（`wave: 0`）。 这样会使效果更平滑一些，不会那么突兀。

{% highlight ruby %}
use_bpm 120

live_loop :breakbeat do
  with_fx :slicer, phase: 0.25, wave: 0, mix: 1.0 do
    sample :loop_breakbeat, beat_stretch: 4, amp: 2
    sleep 4
  end
end
{% endhighlight %}

{% include videoplayer.html filepath="/assets/video/fx_slicer_wave_0" %}

我们把段落持续时间加倍(`phase: 0.5`) 并将波形切换为脉冲形(`wave: 1`)：

{% include videoplayer.html filepath="/assets/video/fx_slicer_wave_1" %}

如果我们用下面的选项添加效果(`phase: 0.5, wave: 1`)：

{% include videoplayer.html filepath="/assets/video/fx_slicer_wave_2" %}

这样很容易给鼓点循环加入旋律、变量和动态效果。记得你也可以用Sonic Pi里面的合成器哦！

下面是最后一个例子，用了切片效果和更长的段落间隔

{% highlight ruby %}
use_bpm 120

live_loop :breakbeat do
  with_fx :slicer, phase: 1.75, wave: 0, mix: 1.0 do
    sample :loop_garzul, beat_stretch: 16, amp: 1
    sleep 16
  end
end

live_loop :beep do
  with_fx :reverb, room: 0.9 do
    with_fx :slicer, phase: 1, wave: 1, mix: 1.0 do
      synth :hoover, note: [:Db4, :G3, :Bb3, :F4].ring.tick, attack: 2, release: 4, amp: 0.5
      sleep 6
    end
  end
end

live_loop :kick do
  sample :bd_haus
  sleep 4
end
{% endhighlight %}

{% include player.html filepath="/assets/audio/industrial_slicer.mp3" %}
