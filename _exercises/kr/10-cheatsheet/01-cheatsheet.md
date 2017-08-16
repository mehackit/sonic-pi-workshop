---
chapter: 요약 모음
title: 요약 모음
lang: kr
layout: exercise
---

## 음 연주하기

{% highlight ruby %}
use_bpm 100
# 내용 설명
play 50
sleep 1
play :C3
sleep 1
play_pattern_timed [:c2, :d2, :e2, :d2], [0.5, 0.25, 0.75, 0.5]
{% endhighlight %}

<img src="{{ "/assets/img/midi_notes_kr.png" | prepend: site.baseurl }}">


## 루프 (Loop)

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

## 신디사이저와 옵션들

<img src="{{ "/assets/img/adsr_KR.png" | prepend: site.baseurl }}">

{% highlight ruby %}
use_synth :fm
use_transpose 0
use_octave 0

play :c, attack 1, decay: 0, sustain: 0, release: 1, amp: 0.5, pan: rrand(-0.5,0.5)
{% endhighlight %}

## 샘플들과 옵션들

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

## 무작위로 선택하기

{% highlight ruby %}
rrand(60, 110)

if one_in(6)
  # 연주하기
else
  # 다른 것을 연주하기
end

sleep [0, 1, 2].choose
play [:c, :e, :g].choose
{% endhighlight %}

## FX

{% highlight ruby %}
with_fx :reverb, mix: 0.5 do
  # do something
end
{% endhighlight %}

## 음계와 코드

{% highlight r %}
scale(:c2, :major) # ring of :c2, :d2, :e2, :f2, :g2, :a2, :b2
chord(:c2, :major, , num_octaves: 2) # ring of :c2, :e2, :g2 :c3, :e3, :g3
{% endhighlight %}

<img src="{{ "/assets/img/play_scale_1_en.png" | prepend: site.baseurl }}">
<img src="{{ "/assets/img/play_scale_2_en.png" | prepend: site.baseurl }}">
<img src="{{ "/assets/img/play_scale_3_en.png" | prepend: site.baseurl }}">
<img src="{{ "/assets/img/chords.png" | prepend: site.baseurl }}">

## 틱(Tick), 링(Ring) 그리고 변수들

{% highlight ruby %}
play scale(:e3, :minor_pentatonic).tick, release: 0.1

play [:c, :e, :d, :f].ring.tick

r = [0.25, 0.25, 0.5, 1].choose
play chord(:c, :minor).choose, attack: 0, release: r
sleep r

chords = [chord(:C, :minor7), chord(:Ab, :major7)].ring 
# 코드들에 ring을 적용
c = chords.tick #’c’변수에 다음 코드를 저장
c[0] #코드의 첫번째 음 택하기
{% endhighlight %}

## 그 외

코드 연주가 점점 느려진다면, 코드 시작점에 use_debug false를 입력해 보세요. 이는 Sonic Pi가 생성하는 로그 메세지를 줄여서 코드를 빠르게 인식하도록 도와줍니다.
