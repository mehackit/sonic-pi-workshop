---
chapter:  製作一首歌曲
title: 主聲道
lang: ch
layout: exercise
---

現在就來搞定旋律吧。為了避免一遍遍重複`play`和`sleep`指令，我們有個簡化指令：`play_pattern_timed`

如果你之前寫成了：

{% highlight ruby %}
play :c2
sleep 0.5
play :d2
sleep 0.25
play :e2
sleep 0.75
play :d2
sleep 0.5
{% endhighlight %}

那現在可以寫成：

{% highlight ruby %}
play_pattern_timed [:c2, :d2, :e2, :d2], [0.5, 0.25, 0.75, 0.5]
{% endhighlight %}

第一個列表 `[:c2, :d2, :e2, :d2]` 是一組音符，第二個清單`[0.5, 0.25, 0.75, 0.5]`是音符間的休止時間。


## 旋律

為你的歌曲創建一個名為`:melody`的`live_loop`。走捷徑的話使用`play_pattern_timed` function功能來編寫旋律。需要的話可以使用<a href="{{ "/exercises/en/09-keys-chords-and-scales/01-piano.html" | prepend: site.baseurl }}">鋼琴。</a> 下面是例子：

{% highlight ruby %}
live_loop :melody do
  play_pattern_timed [:c4, :e4, :f4, :g4, :f4, :e4, :f4, :g4, :f4, :e4, :f4], [0.25, 0.25, 0.25, 1.5, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25]
end
{% endhighlight %}

現在整首曲子聽起來是這樣的

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

live_loop :melody do
  play_pattern_timed [:c4, :e4, :f4, :g4, :f4, :e4, :f4, :g4, :f4, :e4, :f4], [0.25, 0.25, 0.25, 1.5, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25], attack: 0, release: 0.2
end
{% endhighlight %}

哈，真是個好的開端！快去試試不同旋律、合成以及`attack:`和`release:` 的數值。