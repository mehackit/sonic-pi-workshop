---
chapter: 介紹
title: 旋律反復
lang: ch
layout: exercise
---

O不錯，你已經寫出一段優美的旋律了。我們接下來試試反復或反復部分旋律若干次。儘管你可以用複製粘貼的方式，但是反復次數太多還是很麻煩的。好在我們還能用 **repetition**指令。這個神奇的單詞在電腦術語中叫做“迭代”，就是重複的意思

在旋律最開端輸入 `2.times do` ，末尾輸入 `end` 來結束旋律。（音符使用音名為了方便舉例，你也可以輸入MIDI數值。）

{% highlight ruby %}
2.times do
  play :c4
  sleep 0.5
  play :d4
  sleep 0.5
  play :e4
  sleep 0.5
  play :c4
  sleep 0.5
end
{% endhighlight %}

除了輸入 `2.times do`，你可以自行決定重複次數。比如 `4.times do` 或 `99.times do`。

有必要的話你也可以在重複指令裡面嵌套重複。

{% highlight ruby %}
4.times do
  4.times do
    play :c4
    sleep 0.25
  end
  play :d4
  sleep 0.5
  play :f4
  sleep 0.5
end
{% endhighlight %}

{% include player.html filepath="/assets/audio/looping-melody.mp3" description="聽一下之前的例子" %}