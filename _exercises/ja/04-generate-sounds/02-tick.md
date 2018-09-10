---
chapter: Generate sounds
title: tick
lang: ja
layout: exercise
---

`chord`を覚えているでしょうか？chord関数は、ある和音の音を返します:

{% highlight ruby %}
play (chord :c, :major).choose
# Cメジャーの和音（:c, :e, :g）のいずれかをランダムに鳴らします
{% endhighlight %}

また、`scale`という関数もあります。scaleは、和音の音だけでなく、_スケール_ 内の全ての音を返します:

{% highlight ruby %}
play (scale :c, :major).choose
# Cメジャーのスケール（:c, :d, :e, :f, :g, :a, :b）のいずれかをランダムに鳴らします
{% endhighlight %}

`choose`を使うとリストからランダムに要素を1つ取得することができます。よりリストの構造に沿って要素を取得していきたい場合、Sonic Piには`tick`と呼ばれる非常に強力な関数があります:

{% highlight ruby %}
live_loop :arp do
  play (scale :e3, :minor_pentatonic).tick, release: 0.1
  sleep 0.125
end
{% endhighlight %}

ここでは、E3マイナーペンタトニックスケールを取得して順に要素を取得しています。これはscaleの宣言の末尾に`.tick`を追加することで実現されています。tickはlive_loop内でローカルなので、複数のlive_loopがそれぞれ独立したtickを持つことができます。

{% highlight ruby %}
live_loop :arp do
  play (scale :e3, :minor_pentatonic).tick, release: 0.1
  sleep 0.125
end

live_loop :arp2 do
  use_synth :dsaw
  play (scale :e2, :minor_pentatonic, num_octaves: 3).tick, release: 0.25
  sleep 0.25
end
{% endhighlight %}

## リング

何かをtickしたとき、それは _リング_ と呼ばれるものです（ええ、もちろんリストもtickできますが、その場合末尾で止まってしまいます）。リングは特殊なリストで、末尾に到達すると先頭に戻ってきます。先程の例では、スケールは末尾の音まで到達したところで先頭に戻って、再び順に要素を見ていっています。`scale`と`chord`はどちらもリングを返します。リストを作成してその後リングが欲しくなった場合には、`.ring`をつけるか`ring`関数を呼ぶとリングに変更できます:

{% highlight ruby %}
puts [1, 2, 3, 4].ring #=> (ring 1, 2, 3, 4)
puts (ring 1, 2, 3, 4) #=> (ring 2, 2, 3, 4)
{% endhighlight %}

{% highlight ruby %}
live_loop :arp do
  play [:c, :e, :d, :f].ring.tick, release: 0.1
  sleep 0.125
end
{% endhighlight %}

次の例は、少し複雑なものです。ここではchordのリストがリングになり、順にtickされていきます:

{% highlight ruby %}
live_loop :keys do
  use_synth :blade
  play [(chord :Ab, :major7), (chord :Db, :major7), (chord :Bb, :minor7), (chord :Eb, '7')].ring.tick, attack: 0.1, release: 1
  sleep 1
end
{% endhighlight %}

そして、次にそれをリード'メロディー'に引き上げましょう:

{% highlight ruby %}
live_loop :keys do
  use_synth :blade
  play [(chord :Ab, :major7), (chord :Db, :major7), (chord :Bb, :minor7), (chord :Eb, "7")].ring.tick, attack: 0.1, release: 1
  sleep 1
end

live_loop :lead do
  use_synth :dsaw
  play (scale :Ab, :major, num_octaves: 3).mirror.tick, attack: 0.05, release: 0.25, cutoff: rrand(80, 110), amp: 0.5
  sleep 0.25
end
{% endhighlight %}

tickして、ワイルドに行ってみよう！
