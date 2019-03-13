---
chapter:  製作一首歌曲
title: 鼓點
lang: ch
layout: exercise
---

我們來看一下如何編寫一段包含大鼓，小鼓和踩鑔的鼓點。你能學會兩點： `live_loop` 指令和采樣。

在空白的程式設計面板創建一個名為`:drums`的l`live_loop` 指令。你可以隨意命名，名字只是為了快速辨別循環了什麼內容。`live_loop` 是一個可以跟其他多個`live_loop`同步的無限循環 (一個`live_loop`至少要有一個`sleep`指令）：

{% highlight ruby %}
live_loop :drums do
  sample :drum_heavy_kick
  sleep 1
end
{% endhighlight %}

點擊 **Run** 來聽聽你的第一個 `live_loop` 演奏的每一個漂亮的節拍。

我們在1、3行用大鼓，2、4行用小鼓做一個簡單的基調強節奏。不同於演奏音符，你會觸發采樣。就像輸入`sample :sample_name`一樣簡單。下面是鼓點的舉例。

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

這就是個穩定的基調強節奏。鼓點循環從大鼓開始，小鼓在第二拍，第三拍還是大鼓，第四拍小鼓。然後循環又開始了：

<img src="{{ "/assets/img/live_loop.png" | prepend: site.baseurl}}">

現在試著變一下節奏（`use_bpm`後的數字）然後用采樣演奏一下。在輸入采樣名稱的時候，流覽一下各種自動完成的采樣的特性。試試不同的采樣然後感受一下他們聽起來都什麼樣。
需要留意的是，你想變換聲音的時候並不需要點擊終止按鈕，改寫代碼再重新點擊運行，聲音就會在下一個循環自動變換而不會錯過任何一個節拍！

## 加入踩鑔

現在加一個踩鑔。創建一個名為hihat的活循環然後加入你的踩鑔采樣。
你可以直接做這樣的八分之一或者十六分之一的音符（這個就是十六分之一）


{% highlight ruby %}
live_loop :hihat do
  sample :drum_cymbal_closed
  sleep 0.25
end
{% endhighlight %}

但是不用這麼死板，也可以做得像這樣放克一點：

{% highlight ruby %}
live_loop :hihat do
  sample :drum_cymbal_closed
  sleep 0.25
  sample :drum_cymbal_pedal
  sleep 1
end
{% endhighlight %}

多重節奏模式最開始是一個“錯誤”。這個循環時長1.25拍  而不是一拍。但是聽起來很帶感！所以記得多犯點錯，也許就能發現點沒想刻意發現的結果。

現在歌曲就聽起來像這樣了

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

你可能會納悶，`live_loop`是怎麼在音樂製作軟體裡面被轉化成樂曲的？下面的視頻可以説明你更好地理解它們之間的關係。

<iframe width="640" height="360" src="https://www.youtube.com/embed/iFMNOb33_KM?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>

現在可以隨意試試采樣和旋律。你還可以再加第三個打擊樂或者其他效果的`live_loop。接下來你就可以在你的作品裡面編寫一個低音音軌了。
