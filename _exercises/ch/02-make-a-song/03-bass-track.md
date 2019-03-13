---
chapter:  製作一首歌曲
title: 低音音軌
lang: ch
layout: exercise
---

給低音軌再添加一個live loop。編寫一段扎實而簡單的低音軌。如果覺得有用的話你可以用<a href="{{ "/exercises/en/09-keys-chords-and-scales/01-piano.html" | prepend: site.baseurl }}">鋼琴</a>或者在流覽器中選一個你喜歡的。下面是一個例子：

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

## 改變合成器

是時候讓你寫的調調變得更有趣了！我們可以通過改變使用中的合成聲音來達到目的。Sonic Pi默認的合成器叫做 `beep`. 想使用不同合成器就在所需位置的代碼前面加上 `use_synth :name_of_synth`。 

在這個例子裡，fm是合成器的名字。

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

Sonic Pi裡面有好多有趣的聲音合成器。想要找到它們可以點擊螢幕上方説明鍵來查看幫助檔。選擇對話方塊左側合成器。點擊任意合成器的名字就能看到對應使用介紹。

## 改變音符時長

有時候你可能想讓聲音演奏時間變長或者改變速度。這可以通過改變代碼的選擇參數來實現。用`attack`和`release`指令來控制音符頻率在時間上的變化。

<img src="{{ "/assets/img/attackrelease_ch.png" | prepend: site.baseurl }}">

用如下方式使用attack和release指令。現在音符就變成了四拍。

{% highlight ruby %}
play 60, attack: 1, release: 3
{% endhighlight %}

如果你想做一個小的變奏，就把attack調成0，把release調成非常小的數值。

{% highlight ruby %}
play :c4, attack: 0, release: 0.2
{% endhighlight %}

探索不同合成器和音符長度來讓你的低音軌更流暢。

現在旋律差不多是這樣了：

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
