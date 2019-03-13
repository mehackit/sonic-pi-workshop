---
chapter:  製作一首歌曲
title: 添加隨機化
lang: ch
layout: exercise
---

好樣的！你的歌曲已經有了穩定的節拍和低音並且跟主旋律配合良好了。下面我們要做的能釋放出Sonic Pi的真正潛力。在軌道上添加一些生成元素，我們能用程式設計讓電腦為我們作曲！

## 擲骰子並移調

移調意味著向上或向下改變音高。我們可以偶爾將旋律移調來增添曲子新鮮感。你可以擲骰子來決定什麼時候來讓曲調上揚。下面是舉例：

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

## 創建一個隨機酸貝斯音軌

讓我們給低音循環加點料。`.choose`是一種非常順手的方法，用來從清單中隨機挑選一個元素。就像這樣：

{% highlight ruby %}
play [:c, :e, :g].choose
{% endhighlight %}

`[:c, :e, :g]`是一串音符（此情況下音符是C大調和弦）。`.choose`指令會隨機選取音符。其他內容也可以隨機選取，比如`sleep`的數值：

{% highlight ruby %}
loop do
  use_octave [0, 1].choose
  play [:c, :e, :g].choose
  sleep [0.25, 0.25, 0.5, 1].choose
end
{% endhighlight %}

你都不需要記得你在哪個和弦裡寫了什麼音符。Sonic Pi你能幫你搞定一切。你可以用`(chord :C, :major)`來替代`[:c, :e, :g]`。這樣就能自動生成一串正確的音符。例如：

{% highlight ruby %}
loop do
  play (chord :c, :major).choose
  sleep [0.25, 0.25, 0.5, 1].choose
end
{% endhighlight %}

把這個神奇的方法用在低音音軌上看看能創造出什麼奇跡。保存你的作品然後把現在的`:bass`循環複製到另一個緩存上，以防你還想回到原處。接著給新的低音音軌讓出位置並刪除循環裡面的內容。我們用古典`:tb303`合成器在C大調和弦裡演奏隨機的十六分音符。

{% highlight ruby %}
live_loop :bass do
  use_synth :tb303
  play (chord :C2, :major).choose
  sleep 0.25
end
{% endhighlight %}

哎呀，好像哪裡不對。在`play`指令末尾加上參數`release:0.125`，像這樣試試：

{% highlight ruby %}
live_loop :bass do
  use_synth :tb303
  play (chord :C2, :major).choose, release: 0.125
  sleep 0.25
end
{% endhighlight %}

這就好多了嘛，儘管我們還有點刪減要做。到現在為止你已經在`play`指令裡運用了`attack:`和`release:`參數。還有很多參數可以根據你的合成器來添加。 例如tb303合成器就有45個可調選項。我們現在給低音音軌添加cutoff指令。Cutoff能把所有不在範圍內的頻率清除。可以輸入的數值範圍在0-130間。

設定亂數值時別只是用固定的cutoff數值。還可以用`rrand(min, max)`指令來劃定數值範圍。趕快試試！

{% highlight ruby %}
live_loop :bass do
  use_synth :tb303
  play (chord :C2, :major).choose, release: 0.125, cutoff: rrand(60, 110)
  sleep 0.25
end
{% endhighlight %}

太太太太棒了！時刻記得多多嘗試和探索。下面是一個總結舉例，可以給你一個大概的前進方向：

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
