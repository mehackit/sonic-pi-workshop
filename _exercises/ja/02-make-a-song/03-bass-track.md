---
chapter: Make a song
title: ベーストラック
lang: ja
layout: exercise
---

ベースのためのlive_loopを1つ追加しましょう。シンプルで着実なベースを作ってみましょう。ブラウザ上で好きな音を選択するのに、<a href="{{ "/exercises/en/09-keys-chords-and-scales/01-piano.html" | prepend: site.baseurl }}">ピアノ</a>を使えるので、助けになるかもしれません。次が追加するlive_loopの例です:

{% highlight ruby %}
live_loop :bass do
  play :c2
  sleep 0.25
  play :c2
  sleep 2
  play :e2
  sleep 0.75
  play :f2
  sleep 1
end
{% endhighlight %}

## シンセを変更する

では曲をより面白いものにする時が来ました！それはこの曲が使っているシンセサイザーの音を変更することで実現されます。デフォルトでは、Sonic Piで使用するシンセは`beep`と呼ばれているものです。他のシンセを使うには、そのシンセを使いたいコードの前に`use_synth :name_of_synth`というコードを追加する必要があります。

次の例では、fmがシンセの名前です:

{% highlight ruby %}
live_loop :bass do
  use_synth :fm
  play :c2
  sleep 0.25
  play :c2
  sleep 2
  play :e2
  sleep 0.75
  play :f2
  sleep 1
end
{% endhighlight %}

Sonic Piにはかっこいい音のシンセがたくさんあります。シンセの名前を探すには、画面上部のヘルプアイコンをクリックし、ヘルプドキュメントのウィンドウを表示します。次にヘルプウィンドウの左側にあるタブからシンセを選択します。シンセの名前をクリックすると、更にそのシンセの使い方に関する情報を得ることができます。

## 音の長さを変更する

場合によっては、長い時間や異なるレートで音を再生したいことがあるかもしれません。そんなときは、コードのオプションパラメータを変更すると実現できます。`attack`と`release`は、時間にそって音量を制御します:

<img src="{{ "/assets/img/attackrelease.png" | prepend: site.baseurl }}">

attackとreleaseを使うと以下のようになります。音は4拍の長さになりました。

{% highlight ruby %}
play 60, attack: 1, release: 3
{% endhighlight %}

attackを0にし、releaseをとても短い値にすると短いスタッカートの音を作ることができます:

{% highlight ruby %}
play :c4, attack: 0, release: 0.2
{% endhighlight %}

シンセや音の長さを探索して、ベーストラックを広げていきましょう。

ここまでで曲は次のようになっているでしょう:

{% highlight ruby %}
use_bpm 100

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
{% endhighlight %}
