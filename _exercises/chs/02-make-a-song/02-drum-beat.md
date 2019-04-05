---
chapter:  制作一首歌曲
title: 鼓点
lang: chs
layout: exercise
---

我们来看一下如何编写一段包含大鼓，小鼓和踩镲的鼓点。你能学会两点：live_loop指令和采样。

在空白的编程面板创建一个名为`:drums`的`live_loop`指令。你可以随意命名，名字只是为了快速辨别循环了什么内容。`live_loop`是一个可以跟其他多个`live_loop`同步的无限循环（一个`live_loop`至少要有一个`sleep`指令）：

{% highlight ruby %}
live_loop :drums do
  sample :drum_heavy_kick
  sleep 1
end
{% endhighlight %}

点击**run**来听听你的第一个`live_loop`演奏的每一个漂亮的节拍。

我们在1、3行用大鼓，2、4行用小鼓做一个简单的基调强节奏。不同于演奏音符，你会触发采样。就像输入`sample :sample_name`一样简单。下面是鼓点的举例。

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
{% endhighlight %}

这就是个稳定的基调强节奏。鼓点循环从大鼓开始，小鼓在第二拍，第三拍还是大鼓，第四拍小鼓。然后循环又开始了：

<img src="{{ "/assets/img/live_loop.png" | prepend: site.baseurl}}">

现在试着变一下节奏（`use_bpm`后的数字）然后用采样演奏一下。在输入采样名称的时候，浏览一下各种自动完成的采样的特性。试试不同的采样然后感受一下他们听起来都什么样。需要留意的是，你想变换声音的时候并不需要点击终止按钮，改写代码再重新点击运行，声音就会在下一个循环自动变换而不会错过任何一个节拍！

## 加入踩镲

现在加一个踩镲。创建一个名为hihat的live_loop然后加入你的hi-hat采样。
你可以直接做这样的八分之一或者十六分之一的音符（这个就是十六分之一）



{% highlight ruby %}
live_loop :hihat do
  sample :drum_cymbal_closed
  sleep 0.25
end
{% endhighlight %}

但是不用这么死板，也可以做得像这样放克一点：


{% highlight ruby %}
live_loop :hihat do
  sample :drum_cymbal_closed
  sleep 0.25
  sample :drum_cymbal_pedal
  sleep 1
end
{% endhighlight %}

多重节奏模式最开始是一个“错误”。这个循环时长1.25拍  而不是一拍。但是听起来很带感！所以记得多犯点错，也就能发现点没想刻意发现的结果。

现在歌曲就听起来像这样了

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
{% endhighlight %}

你可能会纳闷，live_loop是怎么在音乐制作软件里面被转化成乐曲的？下面的视频可以帮助你更好地理解它们之间的关系。

<iframe width="640" height="360" src="https://www.youtube.com/embed/iFMNOb33_KM?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>

现在可以随意试试采样和旋律。你还可以再加第三个打击乐或者其他效果的`live_loop。接下来你就可以在你的作品里面编写一个低音音轨了。
