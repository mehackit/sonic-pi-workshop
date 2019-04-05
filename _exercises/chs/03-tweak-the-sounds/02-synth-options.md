---
chapter: 声音微调
title: 选项
lang: chs
layout: exercise
---

目前为止你已经在play指令里面用了`attack`, `release`, and `cutoff`选项。选项（或英语简称opts）是传递的控件，用于修改和控制声音的各种属性。每个合成器都有自己的选项设置来更好地调音。不过也有很多合成器有着相同的选项设置。现在就可以多了解一下选项来给你的音频添加更多表现力。

记得你也可以修改采样的选项哦！

### `amp:`

振幅是响度的大小。0是静音（什么也听不到），1是普通音量。你可以将幅度调整到2、10或100。但是这个操作会使得声音变得模糊且奇怪。所以响度一定要小，调到0到0.5能避免压缩。

{% highlight ruby %}
play :c2, amp: 0.5
{% endhighlight %}

### `pan:`

声像：
声像控制立体声声像的平移。-1表示你能听到左侧扬声器发声，1则表示右侧，0表示中间。你可以使用-1到1之间任何数值。试试随机的声像数值来添加踩镲的音乐织体。


{% highlight ruby %}
play :c2, amp: 0.5, pan: -1 #左側揚聲器
play :c2, amp: 0.5, pan: 0 #中間
play :c2, amp: 0.5, pan: 1 #右側揚聲器

sample :drum_cymbal_closed, pan: rrand(-0.7, 0.7)
{% endhighlight %}

### `cutoff:`

去掉高于给定值的频率。 使用0-130之间的值。

{% highlight ruby %}
play :c2, cutoff: 80
{% endhighlight %}

### `attack:` 和 `release:`

击打和释放节拍的时长。

{% highlight ruby %}
play :c2, attack: 1, release: 1 #這個音符時值是兩拍
{% endhighlight %}

<img src="{{ "/assets/img/attackrelease_chs.png" | prepend: site.baseurl }}">

### `use_synth_defaults` 和 `use_sample_defaults`

如果你不想在循环里面每次演奏或采样都设置一次选项，你可以用`use_synth_defaults`和`use_sample_defaults`来设置循环里面所有演奏和采样。

{% highlight ruby %}
live_loop :melody do
  use_synth :mod_fm
  use_synth_defaults attack: 0.25, release: 0.5, pan: rrand(-0.5, 0.5), cutoff: 50
  play 72
  sleep 0.25
  play 76
  sleep 0.25
  play 76
  sleep 0.25
end
{% endhighlight %}

### 额外福利： `beat_stretch:` 和 `rate:`

好用到无法忽视。赶快试试：

{% highlight ruby %}
live_loop :amen_break do
  sample :loop_amen
  sleep 2
end 
{% endhighlight %}

结尾的时候有讨厌的空白。这个采样长度为1.753310657596372拍，也就意味着你把它跟任何东西放在一起都很别扭。好在你还可以用`beat_stretch: 2`来延伸或压缩采样使它变成两拍长。


{% highlight ruby %}
live_loop :amen_break do
  sample :loop_amen, beat_stretch:2
  sleep 2
end
{% endhighlight %}

很好！现在到了`rate`指令这个选项了。Rate控制了采样的演奏速度。1是原始速度，0.5是半速，2是两倍速。改变速度的时候音高也会随之变化。不仅如此（此处应有掌声……），你还可以输入负值！负值能让采样倒放。试试改变这个循环的速率和休止时长：


{% highlight ruby %}
live_loop :amen_break do
  sample :loop_amen, beat_stretch:2, rate: -1
  sleep 2
end
{% endhighlight %}

