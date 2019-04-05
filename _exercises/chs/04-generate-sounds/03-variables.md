---
chapter: 声音生成
title: 变量
lang: chs
layout: exercise
---

看一下这个例子，到底怎么了？


{% highlight ruby %}
live_loop :melody do
  use_synth :blade
  r = [0.25, 0.25, 0.5, 1].choose
  play (chord :c, :minor).choose, attack: 0, release: r
  sleep r
end
{% endhighlight %}

有一个变量r在每次播放循环时都会得到一个确定的值，该值被用作播放的释放选项，且与休眠时长一样。变量就像能储存并取出东西的箱子一样。输入`variable_name = variable_value`即可使用变量。现在variable_value就储存在variable_name，你输入variable_name就能得到数值。

我们在例子里面加一个合成器和一个低音来试试变量。`:keys`循环很简单没什么问题，只是`:bass`循环有点麻烦。

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

`n = (chord :c2, :minor).tick`指令从C小调和弦中选取一个音符并保存成名为n的变量。.tick被命名后总是移动向下一个变量。`play n`表示演奏已储存的音符。然后`.tick`再从和弦里面选取一个音符。当循环再次开始的时候`.tick`从原处继续。
