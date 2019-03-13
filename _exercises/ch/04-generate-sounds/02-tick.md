---
chapter: 聲音生成
title: Tick指令
lang: ch
layout: exercise
---

還記得和弦嗎？和弦功能可以在特定和弦內給出一個音符。

{% highlight ruby %}
play (chord :c, :major).choose 
#隨機演奏C大調和弦的一個音符(:c, :e or :g)
{% endhighlight %}

還有一個功能叫做音階。音階功能把所有音符歸到同一個音階裡面，不僅僅是一個和弦裡。

{% highlight ruby %}
play (scale :c, :major).choose 
#演奏C大調音階的隨機音符(:c, :d, :e, :f, :g, :a or :b)
{% endhighlight %}

篩選後你可以在清單裡面得到一個隨機元素。如果你想在更加結構化的方式裡面得到數值，Sonic Pi有一個強大的功能叫做 `tick`:

{% highlight ruby %}
live_loop :arp do
  play (scale :e3, :minor_pentatonic).tick, release: 0.1
  sleep 0.125
end
{% endhighlight %}

此處我們拿E3小調五聲音階舉例然後勾選每個元素。在音階說明的結尾加上 `.tick`就能實現。這個勾選只在所處循環內有效，所以每個活循環都可以有自己的tick。

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

## 環

任何環內的音符都可以勾選（列表裡當然也是可以的但是一到結尾就停止了）。環是一種特殊列表，到結尾還會重新開始。就像之前例子裡面音階到最後一個音符重新開始一樣。 `scale` 和 `chord`都能回到一個環。你想創建一個環狀列表的話就用 `.ring`或者`ring` 生成器。

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

下面的例子會複雜一點。現在你有一個已經成環並且被勾選了的列表。

{% highlight ruby %}
live_loop :keys do
  use_synth :blade
  play [(chord :Ab, :major7), (chord :Db, :major7), (chord :Bb, :minor7), (chord :Eb, '7')].ring.tick, attack: 0.1, release: 1
  sleep 1
end
{% endhighlight %}

然後在下面加上主旋律

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

開始勾選，噪起來！
