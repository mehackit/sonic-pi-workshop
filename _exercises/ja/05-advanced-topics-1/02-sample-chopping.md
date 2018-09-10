---
chapter: Advanced Topics 1
title: サンプルスライス
lang: ja
layout: exercise
---

少し戻ってサンプルについて再び見てみましょう。サンプルループの再生がどのような振舞いか理解するために、次のビデオを見てみましょう。

{% include videoplayer.html filepath="/assets/video/amen_loop" %}

これは、`:loop_amen`のサンプルを次のコードで再生したものです:

{% highlight ruby %}
sample :loop_amen
{% endhighlight %}

では、このビートを再生し続けるように、`live_loop`を作ってみましょう。`sample`コマンドには、サンプルを特定の拍数に合わせるようピッチを変更する`beat_stretch`オプションがあったのを覚えていますか？それは、"音を調整する"の章で簡単に紹介しました。では、このオプションを使い、`loop_amen`のサンプルを4拍に伸ばして、ループし続けるようにしてみましょう:

{% highlight ruby %}
use_bpm 145

live_loop :drumloop do
  sample :loop_amen, beat_stretch: 4
  sleep 4
end
{% endhighlight %}

次に、`loop_amen`の各部分を様々な順序で再生する方法を見ていきましょう。`sample`コマンドは、異なる開始時点と終了時点を`start`オプションと`end`オプションで指定可能です。どちらのオプションも`0`から`1`の値を設定可能で、それぞれサンプルの始めと終わりを示しています。例えば、`0`はサンプルの始め、`0.5`はサンプルの真ん中、`1`はサンプルの終わりです。次の例で実際に動かしてみましょう:

{% highlight ruby %}
use_bpm 145

live_loop :drumloop do
  sample :loop_amen, beat_stretch: 4, start: 0, finish: 0.125
  sleep 0.5
  sample :loop_amen, beat_stretch: 4, start: 0, finish: 0.125
  sleep 0.5
  sample :loop_amen, beat_stretch: 4, start: 0.5, finish: 0.75
  sleep 1
  sample :loop_amen, beat_stretch: 4, start: 0.25, finish: 0.5
  sleep 1
  sample :loop_amen, beat_stretch: 4, start: 0.75, finish: 0.875
  sleep 0.5
  sample :loop_amen, beat_stretch: 4, start: 0.25, finish: 0.375
  sleep 0.5
end
{% endhighlight %}

下のビデオは（Ableton Liveのサンプラーで作ったものですが）、`live_loop`の実行の際にどの部分が再生されるかビジュアライズしたものです:

{% include videoplayer.html filepath="/assets/video/amen_slicing" %}

サンプルの様々な部分を全く異なる順序で再生するのは、楽しいと思いませんか？`sample`コマンドのオプションで色々実験してみましょう。例えば、`rate: -1`を`loop_amen`の再生の1つに追加すると、逆再生します。

`sample`コマンドのオプション（`rate`, `pan`, `amp`, `attack`, `release`, `start`, `finish`といったもの）で実験し始めると、あるサンプル音源がほとんどどんな音にも加工することができるでしょう。以下の例では、これらのオプションをランダムな値と使用することで、2つのサンプル音源から一意な<a href="https://en.wikipedia.org/wiki/Microsound">マイクロサウンド</a>を再生しています:

{% highlight ruby %}
use_bpm 180

with_fx :reverb, mix: 0.2, room: 1 do
  live_loop :grain1 do
    s = rrand(0, 0.7)
    t = rrand(0.03, 0.3)
    e = s + t
    a = rrand(0.5, 1.0)
    sample :guit_e_fifths, rate: -1.5, start: s, finish: e, attack: t/6.0, sustain: t/2.0, pan: rrand(-0.5, 0.5)
    sleep t
  end

  live_loop :grain2 do
    s = rrand(0, 0.7)
    t = rrand(0.03, 0.2)
    e = s + t
    a = rrand(0.5, 1.0)
    sample :guit_em9, rate: 1.5, start: s, finish: e, attack: t/6.0, sustain: t/2.0, pan: rrand(-0.5, 0.5)
    sleep t
  end
end
{% endhighlight %}

{% include player.html filepath="/assets/audio/granular_1.mp3" %}

また、このテクニックは、<a href="https://en.wikipedia.org/wiki/Granular_synthesis">グラニュラーサンプラーやグラニュラーシンセサイザー</a>で広く使われています。
