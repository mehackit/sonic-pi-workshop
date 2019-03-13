---
chapter: 聲音生成
title: 變量
lang: ch
layout: exercise
---

看一下這個例子，到底怎麼了？


{% highlight ruby %}
live_loop :melody do
  use_synth :blade
  r = [0.25, 0.25, 0.5, 1].choose
  play (chord :c, :minor).choose, attack: 0, release: r
  sleep r
end
{% endhighlight %}

有一個變量r在每次播放循環時都會得到一個確定的值，該值被用作播放的釋放選項，且與休眠時長一樣。變量就像能儲存並取出東西的箱子一樣。輸入`variable_name = variable_value`. 即可使用變量。現在variable_value就儲存在variable_name，你輸入variable_name就能得到數值。

我們在例子裡面加一個合成器和一個低音來試試變量。`:keys`循環很簡單沒什麼問題，只是`:bass`循環有點麻煩。

{% highlight ruby %}
live_loop :melody do
  use_synth :blade
  r = [0.25, 0.25, 0.5, 1].choose
  play (chord :c, :minor).choose, attack: 0, release: r
  sleep r
end

live_loop :keys do
  use_synth :blade
  play chord(:c, :minor)
  sleep 1
end

live_loop :bass do
  use_synth :fm
  n = (chord :c2, :minor).tick
  3.times do
    play n
    sleep 1
  end
  play n
  sleep 0.5
  play (chord :c2, :minor).tick
  sleep 0.5
end
{% endhighlight %}

`n = (chord :c2, :minor).tick` 指令從C小調和弦中選取一個音符並保存成名為`n`的變量。`.tick`被命名後總是移動向下一個變量。`play n` 表示演奏已儲存的音符。然後`.tick`再從和弦裡面選取一個音符。當循環再次開始的時候`.tick` 從原處繼續。
