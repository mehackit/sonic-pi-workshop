---
chapter: 進階話題1
title: 采樣切片
lang: ch
layout: exercise
---

讓我們回頭再看看采樣。下面這個視頻理解一下循環采樣重播的作用。

{% include videoplayer.html filepath="/assets/video/amen_loop" %}

`:loop_amen`采樣的重播由以下代碼表示：


{% highlight ruby %}
sample :loop_amen
{% endhighlight %}

現在我們來做一個一直打拍子的`live_loop`。你還記得那個改變采樣音高來適應所需節拍長度的`beat_stretch`采樣拉長到四拍並循環：

{% highlight ruby %}
use_bpm 145

live_loop :drumloop do
  sample :loop_amen, beat_stretch: 4
  sleep 4
end
{% endhighlight %}

接下來我們來看看怎麼讓部分Amen循環按照不同順序演奏。用采樣指令你可以用開始和結束參數來設定不同的起始點和結束點。兩個參數都可以輸入0到1之間的數值來設定采樣重播的開始和結束點。例如：0是采樣的起始，0.5是中點，1是結束點。我們來實際操作看看：

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

下面的視頻可以看出`loop_amen` 采樣在每次`live_loop`中播放的部分。

{% include videoplayer.html filepath="/assets/video/amen_slicing" %}

把采樣用完全不同的順序播放是不是特別有意思？試試修改采樣選項，例如添加一個-1的選項速率，讓`loop_amen`倒放。

一旦你開始試驗采樣選項（比如速率、聲像、幅度、擊打、釋放、開始和結束），一個采樣能被塑造成任何樣子。下面的例子在兩個采樣裡用了亂數值演奏出了獨特的效果：

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

這個技術能被廣泛運用在<a href="https://en.wikipedia.org/wiki/Granular_synthesis">顆粒采樣器和合成器中。</a>. 
