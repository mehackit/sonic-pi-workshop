---
chapter: 聲音微調
title: 效果
lang: ch
layout: exercise
---

這個關子賣了太久了，是時候公開了：用`with_fx`指令！

這是為你的作品添加不同效果的強大工具。我們先從 `:reverb`.入手。基本上所有聲音加上混響都錯不了。在你的代碼前添加 `with_fx :reverb`然後結束嵌段。

{% highlight ruby %}
live_loop :effects do
  with_fx :reverb do
    play 50
    sleep 0.5
    sample :elec_plip
    sleep 0.5
    play 62
  end
end
{% endhighlight %}

聽起來大氣多了是吧？跟合成器與采樣相同，效果也有選項。`mix:`是設置效果和原聲強弱的選項。`mix: 0` 指令演奏的都是原始聲音， `mix: 1` 只演奏FX。混響也有一個:room選項。用0到1的數值試試各種不同大小的`room`選項。打開説明視窗裡面的Fx欄，你能找到FX可用的選項。


{% highlight ruby %}
live_loop :effects do
  with_fx :reverb, mix: 0.5, room: 0.9 do
    play 50
    sleep 0.5
    sample :elec_plip
    sleep 0.5
    play 62
  end
end
{% endhighlight %}

太多的可選FX，你不必在一棵樹上吊死：把他們構建成森林啊！（確實有一天你電腦裡資源會耗盡，但是現在不是擔心的時候。）

{% highlight ruby %}
live_loop :effects do
  with_fx :wobble do
    with_fx :slicer do
      with_fx :reverb do
        play 50
        sleep 0.5
        sample :elec_plip
        sleep 0.5
        play 62
      end
    end
  end
end
{% endhighlight %}

放飛自我並把FX加到每個角落來創作新聲音！
