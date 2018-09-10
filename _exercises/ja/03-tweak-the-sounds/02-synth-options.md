---
chapter: Tweak the sounds
title: オプション
lang: ja
layout: exercise
---

ここまでで、playコマンドの`attack`, `release`, `cutoff`オプションを使ってきました。playコマンドに渡すオプション（options, 短くoptsと書くこともあります）は、音の様々な面を変更・コントロールします。シンセは、その音を適切に調整するために、それぞれ独自のオプションのセットを持っています。その一方で、多くの音で共通のオプションも存在します。ここでは、あなたの音をより表現豊かにするために、いくつかのオプションについて知識を深めていくことにします。

これらのオプションのいくつかは、sampleコマンドでも利用できることに注意してください！

### `amp:`

振幅（amplitude）は、音の大きさです。0は無音（何も聞こえません）で、1は正常な音量です。振幅は2や10, 100に上げることもできますが、これによりしばしば奇妙な音や歪んだ音になったりするでしょう。したがって、例えば0から0.5といった低い値を使って音の圧縮を避けるようにしましょう。

{% highlight ruby %}
play :c2, amp: 0.5
{% endhighlight %}

### `pan:`

パン（pan）は、ステレオサウンドにおける左右の定位をコントロールします。-1は、左側のスピーカーから音が聞こえることを意味し、1は右側のスピーカー、0は真ん中を意味しています。-1から1の値を使うことができます。ランダムなパンの値をハイハットに使って、何らかのテキスチャーを表現できるでしょう。

{% highlight ruby %}
play :c2, amp: 0.5, pan: -1 #left speaker
play :c2, amp: 0.5, pan: 0 #center
play :c2, amp: 0.5, pan: 1 #right speaker

sample :drum_cymbal_closed, pan: rrand(-0.7, 0.7)
{% endhighlight %}

### `cutoff:`

指定された値より高い周波数を取り除きます。0から130の値を使ってください。

{% highlight ruby %}
play :c2, cutoff: 80
{% endhighlight %}

### `attack:`と`release:`

attackとreleaseを拍で指定します。

{% highlight ruby %}
play :c2, attack: 1, release: 1 #the note is two beats long
{% endhighlight %}

<img src="{{ "/assets/img/attackrelease.png" | prepend: site.baseurl }}">

### `use_synth_defaults`と`use_sample_defaults`

個々のplayコマンドやsampleコマンドで毎回オプションを設定したくない場合は、`use_synth_defaults`や`use_sample_defaults`を使うでその設定内容が次のplayやsampleで反映させることができます:

{% highlight ruby %}
live_loop :melody do
  use_synth :mod_fm
  use_synth_defaults attack: 0.25, release: 0.5, pan: rrand(-0.5, 0.5), cutoff: 50
  play 72
  sleep 0.25
  play 76
  sleep 0.25
  play 76
  sleep 0.25
end
{% endhighlight %}

### おまけ: `beat_stretch:`と`rate:`

とてもかっこよくて見逃せないですよ。試してみてください:

{% highlight ruby %}
live_loop :amen_break do
  sample :loop_amen
  sleep 2
end
{% endhighlight %}

サンプルループの終わりに厄介な空白時間があります。このサンプルは、1.753310657596372拍の長さで、他のものと一緒に鳴らそうとすると便利ではありません。幸運にも`beat_stretch: 2`を使うと、サンプルの長さがちょうど2拍になるように伸縮してくれるのです:

{% highlight ruby %}
live_loop :amen_break do
  sample :loop_amen, beat_stretch:2
  sleep 2
end
{% endhighlight %}

できましたね！次は`rate`オプションです。rateはサンプル音源の再生レート（どれだけ早く再生するか）をコントロールします。1はオリジナルのスピードで、0.5は半分のスピード、2は倍のスピードです。また、rateを変更すると、サンプルの音が高くなったり低くなったりするのが聞き取れたと思います。そして、（ドラムロール…）rateはマイナスの値も取ることができるのです！マイナスの値の場合、_逆回転で_ サンプルが再生されます。rateとsleepの値を変更して遊んでみましょう:

{% highlight ruby %}
live_loop :amen_break do
  sample :loop_amen, beat_stretch:2, rate: -1
  sleep 2
end
{% endhighlight %}
