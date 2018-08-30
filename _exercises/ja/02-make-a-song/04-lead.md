---
chapter: Make a song
title: リードトラック
lang: ja
layout: exercise
---

さて、メロディーを書く時間になりました。膨大な`play`と`sleep`を書くかわりに、`play_pattern_timed`というショートカットを使っていきます。

以下のように書くかわりに:

{% highlight ruby %}
play :c2
sleep 0.5
play :d2
sleep 0.25
play :e2
sleep 0.75
play :d2
sleep 0.5
{% endhighlight %}

次のように書くことができます:

{% highlight ruby %}
play_pattern_timed [:c2, :d2, :e2, :d2], [0.5, 0.25, 0.75, 0.5]
{% endhighlight %}

最初の`[:c2, :d2, :e2, :d2]`というリストは、音のグループで、2つめの`[0.5, 0.25, 0.75, 0.5]`は音と音の間の休みのグループです。

## メロディー

`:melody`という名前の`live_loop`を作って、曲のリードテーマを作りましょう。簡単に思えたら、`play_pattern_timed`関数を使ってみましょう。また、ブラウザ上で好きな音を選択するのに、<a href="{{ "/exercises/en/09-keys-chords-and-scales/01-piano.html" | prepend: site.baseurl }}">ピアノ</a>が使えます。次が追加するlive_loopの例です:

{% highlight ruby %}
live_loop :melody do
  play_pattern_timed [:c4, :e4, :f4, :g4, :f4, :e4, :f4, :g4, :f4, :e4, :f4], [0.25, 0.25, 0.25, 1.5, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25]
end
{% endhighlight %}

ここまでで曲の全体は以下のようになっているでしょう:

{% highlight ruby %}
use_bpm 120

live_loop :drums do
  sample :drum_heavy_kick
  sleep 1
  sample :drum_snare_hard
  sleep 1
  sample :drum_heavy_kick
  sleep 1
  sample :drum_snare_hard
  sleep 1
end

live_loop :hihat do
  sample :drum_cymbal_closed
  sleep 0.25
  sample :drum_cymbal_pedal
  sleep 1
end

live_loop :bass do
  use_synth :fm
  play :c2, attack: 0, release: 0.25
  sleep 0.25
  play :c2, attack: 0, release: 0.3
  sleep 2
  play :e2
  sleep 0.75
  play :f2
  sleep 1
end

live_loop :melody do
  play_pattern_timed [:c4, :e4, :f4, :g4, :f4, :e4, :f4, :g4, :f4, :e4, :f4], [0.25, 0.25, 0.25, 1.5, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25], attack: 0, release: 0.2
end
{% endhighlight %}

やりましたね、良いスタートです！メロディー、シンセ、`attack:`と`release:`の値を変更して探索してみましょう。
