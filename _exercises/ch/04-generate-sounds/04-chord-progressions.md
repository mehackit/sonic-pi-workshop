---
chapter: 聲音生成
title: 和弦進程
lang: ch
layout: exercise
---


之前的例子都是C小調。這個例子用了所有循環都可以使用的和弦環。所有循環都會在同一個和弦上演奏，一個循環會幫其他所有循環改變和弦。你可以用<a href="{{ "/exercises/en/09-keys-chords-and-scales/01-piano.html" | prepend: site.baseurl }}">和弦進化表</a> 來選擇最適合的。

{% highlight ruby %}
chords = [(chord :C, :minor7), (chord :Ab, :major7), (chord :Eb, :major7), (chord :Bb, "7")].ring
c = chords[0] #取環中的第一個和弦並保存到變量中
#這將被用在所有live_loop裡面。還會被: bass loop勾選


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
    play c[0] #演奏和弦的第一個音符
    sleep 1
  end
  play c[2] #演奏和弦的第三個音符
  sleep 0.5
  play c[1] #演奏和弦的第二個音符
  sleep 0.5
  c = chords.tick
end
{% endhighlight %}
