---
chapter: 声音微调
title: 效果
lang: chs
layout: exercise
---

这个关子卖了太久了，是时候公开了：用`with_fx`指令！

这是为你的作品添加不同效果的强大工具。我们先从`:reverb`入手。基本上所有声音加上混响都错不了。在你的代码前添加`with_fx :reverb`然后结束嵌段。

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

听起来大气多了是吧？跟合成器与采样相同，效果也有选项。`mix:`是设置效果和原声强弱的选项。`mix:0`指令演奏的都是原始声音，`mix:1`只演奏FX。混响也有一个`:room`选项。用0到1的数值试试各种不同大小的room选项。打开帮助窗口里面的Fx栏，你能找到FX可用的选项。


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

太多的可选FX，你不必在一棵树上吊死：把他们构建成森林啊！（确实有一天你电脑里资源会耗尽，但是现在不是担心的时候。）

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

放飞自我并把FX加到每个角落来创作新声音！
