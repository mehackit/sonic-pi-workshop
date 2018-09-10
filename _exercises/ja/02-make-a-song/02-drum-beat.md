---
chapter: Make a song
title: ドラムビート
lang: ja
layout: exercise
---

キックドラム、スネアドラム、ハイハットで構成される簡単なドラムビートを作る方法を見ていきましょう。ここでは2つの新しい事柄、`live_loop`と`sample`について知ることになります。

空のBufferから始めて、`:drums`と名前を付けた`live_loop`を作ってみましょう。名前は、そのループが何であるかすぐに識別されるためのものなので、どんなものでも構いません。`live_loop`は、無限に繰り返すループで、他のlive_loopと同期可能です（そしてそれは少なくとも1つのsleepを持っている必要があります）:

{% highlight ruby %}
live_loop :drums do
  sample :drum_heavy_kick
  sleep 1
end
{% endhighlight %}

**Run** を押して、はじめての`live_loop`が良い感じのキックドラムを1拍ごとに鳴らすのを聞いてみてください。

1、3拍でキックドラム、2、4拍でスネアドラムを鳴らして簡単なバックビートを作ってみましょう。playを使って音を鳴らすかわりに、サンプルをトリガーしてみます。それは`sample :sample_name`と書くだけです。次は、ドラムビートのサンプルプログラムです:

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
{% endhighlight %}

着実なバックビートですね。`:drums`ループはキックで始まり、スネアが2拍目、キックが3拍目、スネアが4拍目で鳴り、そこでループが再び始まります:

<img src="{{ "/assets/img/live_loop.png" | prepend: site.baseurl}}">

では、テンポ（`use_bpm`の後の数字）を変えたり、サンプルで遊んでみましょう。サンプルの名前を入力しようとすると、オートコンプリートの機能により異なるサンプルの一覧をブラウズできるでしょう。異なるサンプルを試して、どんな音がするか聞いてみてください。このときに、Stopボタンを押す必要がないことに注意してください。Sonic Piでは、コードを変更して再度 **Run** を押せば、ビートが途切れること無く次のループで自動的に音が変更されるのです！

## ハイハットを追加する

では、ハイハットを追加してみましょう。`:hihat`という名前の別なlive_loopを作って、ハイハットのサンプルを追加してみてください。ストレートな8分音符、16分音符は同じように作れます（次の例は16分音符です）:

{% highlight ruby %}
live_loop :hihat do
  sample :drum_cymbal_closed
  sleep 0.25
end
{% endhighlight %}

しかし、あまり固い感じにする必要はありません。次のように、もう少しファンキーな感じにもできます:

{% highlight ruby %}
live_loop :hihat do
  sample :drum_cymbal_closed
  sleep 0.25
  sample :drum_cymbal_pedal
  sleep 1
end
{% endhighlight %}

このポリリズミックなハイハットのパターンは最初は"間違え"でした。このループの長さは、想定していた1拍ではなく1.25拍です。しかし、とてもかっこよく聞こえますね！たくさん間違えることで、あなたが全く探していなかった何かを発見することができることは、覚えておくと良いでしょう。

ここまでで曲は次のようになったでしょう:

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
{% endhighlight %}

ここで、皆さんはlive_loopが一般的な音楽制作アプリケーションでどのようなシーケンスになるか疑問に思うかもしれません。次のビデオがその関係を理解するのに役立つかもしれません。

<iframe width="640" height="360" src="https://www.youtube.com/embed/iFMNOb33_KM?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>

では、異なるサンプルやリズムで遊んでみましょう。また、パーカッションや他のエフェクトのための3つめの`live_loop`を追加することもできます。次の節では、ベーストラックを作成することになります。
