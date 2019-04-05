---
chapter: 声音生成
title: 和弦进行
lang: chs
layout: exercise
---


之前的例子都是C小调。这个例子用了所有循环都可以使用的和弦环。所有循环都会在同一个和弦上演奏，一个循环会帮其他所有循环改变和弦。你可以用<a href="{{ "/exercises/en/09-keys-chords-and-scales/01-piano.html" | prepend: site.baseurl }}">和弦进化表</a>来选择最适合的。


{% highlight ruby %}
#和弦循环
chords = [(chord :C, :minor7), (chord :Ab, :major7), (chord :Eb, :major7), (chord :Bb, "7")].ring
c = chords[0] #取环中的第一个和弦并保存到变量中
#这将被用在所有live_loop里面。还会被: bass loop勾选


live_loop :melody do
  use_synth :blade
  r = [0.25, 0.25, 0.5, 1].choose
  play c.choose, attack: 0, release: r
  sleep r
end

live_loop :keys do
  use_synth :blade
  play c
  sleep 1
end

live_loop :bass do
  use_synth :fm
  use_octave -2
  3.times do
    play c[0] #演奏和弦的第一个音符
    sleep 1
  end
  play c[2] #演奏和弦的第三个音符
  sleep 0.5
  play c[1] #演奏和弦的第二个音符
  sleep 0.5
  c = chords.tick
end
{% endhighlight %}
