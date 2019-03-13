---
chapter: 進階話題1
title: 切片器
lang: ch
layout: exercise
---

除了之前討論過的采樣切片，你還可以用`:slicer`指令使你作品更加抑揚頓挫。它隨著時間的推移改變聲音的音量（這個效果通常被稱作調幅）。在空白緩存處新建一個`live_loop` ，然後將采樣`:loop_breakbeat` 作為我們的代碼塊：

{% highlight ruby %}
use_bpm 120

live_loop :breakbeat do
  sample :loop_breakbeat, beat_stretch: 4, amp: 2
  sleep 4
end
{% endhighlight %}

循環聽起來應該跟下面視頻差不多了。我們用紅色來表示聲音的音量，在這個例子中音量應該是最大值。

{% include videoplayer.html filepath="/assets/video/breakbeat_dry" %}

現在我們用`with_fx` 指令給`live_loop`加一個切片效果。如果你記不得Sonic Pi裡面的效果是如何運用的，請閱讀<a href="{{ "/exercises/en/03-tweak-the-sounds/03-effects.html" | prepend: site.baseurl }}">“效果”</a>章節來回顧一下。

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

新添加的切片器效果聽起來太辣耳朵了，我們得稍微調整一下。切片效果的主要選項是`phase`, `wave` 和 `mix`。 你可以使用它們來控制振幅。`phase`選項是振幅快慢出現的頻率，它的預設數值是`0.25`，意味著每過一個十六分音符出現一次。正因如此，前面的例子聽起來相當手忙腳亂。

切片效果可以通過使用四種不同的波形來調製振幅：`0`（鋸齒形），`1`（脈衝），`2`（三角形）和`3`（正弦波）。 預設情況下，波被設置為`1`，這意味著使用脈衝（也稱為方波）來調製幅度。 下面的圖片展示了波形的外觀，以及它們隨著時間的推移增加或減少幅度（用紅色標記的區域）的情況。

<img src="{{ "/assets/img/slicer_waveforms.png" | prepend: site.baseurl }}" width="100%">

現在讓我們嘗試將波形更改為鋸齒形（`wave: 0`）。 這樣會使效果更平滑一些，不會那麼突兀。

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

我們把段落持續時間加倍(`phase: 0.5`) 並將波形切換為脈衝形(`wave: 1`)：

{% include videoplayer.html filepath="/assets/video/fx_slicer_wave_1" %}

如果我們用下面的選項添加效果(`phase: 0.5, wave: 1`)：

{% include videoplayer.html filepath="/assets/video/fx_slicer_wave_2" %}

這樣很容易給鼓點循環加入旋律、變量和動態效果。記得你也可以用Sonic Pi裡面的合成器哦！

下面是最後一個例子，用了切片效果和更長的段落間隔

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
