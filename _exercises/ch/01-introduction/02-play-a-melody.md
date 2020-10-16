---
chapter: 介紹
title: 演奏一段旋律
lang: ch
layout: exercise
---

輸入以下內容並點擊運行

{% highlight ruby %}
play 60
play 67
play 69
{% endhighlight %}

聽起來不成調，是吧？輸入進Sonic Pi的所有音符都是即刻運行的（這也是和弦的創作基礎），並不是有序演奏。
如果你想讓Sonic Pi有序演奏，就要讓軟體適時停頓。在每個音符下面輸入一行
 `sleep 1` ，如下圖所示：

{% highlight ruby %}
play 60
sleep 1
play 67
sleep 1
play 69
{% endhighlight %}

`sleep 1` 指令代表休止一拍。你可以自行改成其他數值，數值越低，音符間休止時長越短，反之亦然。以下是五線譜和Sonic Pi指令對照表：

<img src="{{ "/assets/img/notes_ch.png" | prepend: site.baseurl }}">
<img src="{{ "/assets/img/Rests_ch.png" | prepend: site.baseurl }}">

如前所述，MIDI可以用0到127 (`67`, `80`, `22`) 的自然數或者音符 (`:G4`, `:Ab5`, `:Bb`)來編曲。
下圖是一個MIDI數值和音符的對照表。


<img src="{{ "/assets/img/midi_notes_ch.png" | prepend: site.baseurl }}">

## 小試牛刀

用C大調音階(`72, 74, 76, 77, 79, 81, 83`
要么 `:C5 :D5 :E5 :F5 :G5 :A5 :B5`) 來譜寫一段旋律。用 `sleep` 指令配合不同數值來區別韻律。在代碼開端使用 `use_bpm` 指令可以界定節奏快慢。BPM是每分鐘節拍的縮寫。

{% highlight ruby %}
use_bpm 120

play 72
sleep 0.25
play 76
sleep 0.25
play 76
sleep 0.25
play 72
sleep 0.5
play 83
sleep 0.25
play 74
sleep 0.25
play 83
sleep 0.25
play 79
play 84
{% endhighlight %}

{% include player.html filepath="/assets/audio/c-major-melody.mp3" description="聽一下之前的例子" %}

開始你的個人創作吧！