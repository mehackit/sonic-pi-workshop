---
chapter: 聲音微調
title: 選項
lang: ch
layout: exercise
---

目前為止你已經在play指令裡面用了 `attack`, `release`, 和 `cutoff` 選項。選項（或英語簡稱opts）是傳遞的控制項，用於修改和控制聲音的各種屬性。每個合成器都有自己的選項設置來更好地調音。不過也有很多合成器有著相同的選項設置。現在就可以多瞭解一下選項來給你的音訊添加更多表現力。

記得你也可以修改采樣的選項哦！

### `amp:`

振幅是響度的大小。0是靜音（什麼也聽不到），1是普通音量。你可以將幅度調整到2、10或100。但是這個操作會使得聲音變得模糊且奇怪。所以響度一定要小，調到0到0.5能避免壓縮。

{% highlight ruby %}
play :c2, amp: 0.5
{% endhighlight %}

### `pan:`

聲像控制立體聲聲像的平移。-1表示你能聽到左側揚聲器發聲，1則表示右側，0表示中間。你可以使用-1到1之間任何數值。試試隨機的pan數值來添加踩鑔的音樂織體。

{% highlight ruby %}
play :c2, amp: 0.5, pan: -1 #左側揚聲器
play :c2, amp: 0.5, pan: 0 #中間
play :c2, amp: 0.5, pan: 1 #右側揚聲器

sample :drum_cymbal_closed, pan: rrand(-0.7, 0.7)
{% endhighlight %}

### `cutoff:`

去掉高於給定值的頻率。 使用0-130之間的值。

{% highlight ruby %}
play :c2, cutoff: 80
{% endhighlight %}

### `attack:` 和 `release:`

擊打和釋放節拍的時長。

{% highlight ruby %}
play :c2, attack: 1, release: 1 #這個音符時值是兩拍
{% endhighlight %}

<img src="{{ "/assets/img/attackrelease_ch.png" | prepend: site.baseurl }}">

### `use_synth_defaults` 和 `use_sample_defaults`

如果你不想在循環裡面每次演奏或采樣都設置一次選項，你可以用`use_synth_defaults` 和 `use_sample_defaults` 來設置循環裡面所有演奏和采樣。

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

### 額外福利： `beat_stretch:` 和 `rate:`

好用到無法忽視。趕快試試：

{% highlight ruby %}
live_loop :amen_break do
  sample :loop_amen
  sleep 2
end 
{% endhighlight %}

結尾的時候有討厭的空白。這個采樣長度為1.753310657596372拍，也就是説你把它跟任何東西放在一起都很彆扭。好在你還可以用 `beat_stretch: 2`來延伸或壓縮采樣使它變成兩拍長。


{% highlight ruby %}
live_loop :amen_break do
  sample :loop_amen, beat_stretch:2
  sleep 2
end
{% endhighlight %}

很好！現在到了`rate` 指令這個選項了。Rate控制了采樣的演奏速度。1是原始速度，0.5是半速，2是兩倍速。改變速度的時候音高也會隨之變化。不僅如此（此處應有掌聲……），你還可以輸入負值！負值能讓采樣倒放。試試改變這個循環的速率和休止時長：


{% highlight ruby %}
live_loop :amen_break do
  sample :loop_amen, beat_stretch:2, rate: -1
  sleep 2
end
{% endhighlight %}

