---
chapter: 备忘单
title: 备忘单
lang: chs
layout: exercise
---

## 演奏一个音符


{% highlight ruby %}
use_bpm 100
#这是一个注解
play 50
sleep 1
play :C3
sleep 1
play_pattern_timed [:c2, :d2, :e2, :d2], [0.5, 0.25, 0.75, 0.5]
{% endhighlight %}

<img src="{{ "/assets/img/midi_notes_chs.png" | prepend: site.baseurl }}">


## 循环

{% highlight ruby %}
live_loop :drums do
  sample :drum_heavy_kick
  sleep 1
end

2.times do
  play_pattern_timed [:E5, :Eb5], [0.25]
end
play_pattern_timed [:e5, :b4, :d5, :c5], [0.25]
play :a4
sleep 1
{% endhighlight %}

## 合成器和选项


<img src="{{ "/assets/img/adsr_chs.png" | prepend: site.baseurl }}">

{% highlight ruby %}
use_synth :fm
use_transpose 0
use_octave 0

play :c, attack 1, decay: 0, sustain: 0, release: 1, amp: 0.5, pan: rrand(-0.5,0.5)
{% endhighlight %}

## 采样和选项

{% highlight ruby %}
sample :bd_haus, amp: 0.5
sleep 1
sample :drum_cymbal_open, attack: 0.01, sustain: 0, release: 0.1 
sleep 1
live_loop :amen_break do
  sample :loop_amen, beat_stretch:2, rate: -1
  sleep 2
end
{% endhighlight %}

## 随机

{% highlight ruby %}
rrand(60, 110)

if one_in(6)
  #执行代码
else
  #执行其他代码
end

sleep [0, 1, 2].choose
play [:c, :e, :g].choose
{% endhighlight %}

## 效果（fx指令）

{% highlight ruby %}
with_fx :reverb, mix: 0.5 do
  #执行代码
end
{% endhighlight %}

## 音阶及和弦


{% highlight r %}
scale(:c2, :major) # ring of :c2, :d2, :e2, :f2, :g2, :a2, :b2
chord(:c2, :major, num_octaves: 2) # ring of :c2, :e2, :g2 :c3, :e3, :g3
{% endhighlight %}

<img src="{{ "/assets/img/play_scale_1_en.png" | prepend: site.baseurl }}">
<img src="{{ "/assets/img/play_scale_2_en.png" | prepend: site.baseurl }}">
<img src="{{ "/assets/img/play_scale_3_en.png" | prepend: site.baseurl }}">
<img src="{{ "/assets/img/chords.png" | prepend: site.baseurl }}">

## 勾选，有条件循环和变量

{% highlight ruby %}
play scale(:e3, :minor_pentatonic).tick, release: 0.1

play [:c, :e, :d, :f].ring.tick

r = [0.25, 0.25, 0.5, 1].choose
play chord(:c, :minor).choose, attack: 0, release: r
sleep r

chords = [chord(:C, :minor7), chord(:Ab, :major7)].ring #和弦循环
c = chords.tick #将下一个和弦存为变量c
c[0] #获取和弦的第一个音
{% endhighlight %}

## 其他


如果你的代码变慢了，在开头使用`use_debug false`。这样可以减少Sonic Pi生成的日志消息，并且可以加速代码。