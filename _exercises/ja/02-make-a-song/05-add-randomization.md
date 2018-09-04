---
chapter: Make a song
title: ランダマイズを追加する
lang: ja
layout: exercise
---

すごい！ここまでで、あなたの曲は着実なビートとベースの上にメロディーが乗って、良い感じにできたのではないでしょうか。では次に、とてもクールなことをやって、Sonic Piの真の潜在能力を解放していきたいと思います。トラックにジェネラティブな要素を追加して、我々のために作曲してもらうようにコンピュータにプログラムしてみましょう。

## ダイスを振ってメロディーをトランスポーズする

トランスポーズとは、ピッチを上げたり下げたりして変更することです。所々でランダムにメロディーを少しトランスポーズすると、トラックに変化を加えられそうです。あなたは、ダイスを振ってメロディーのピッチを上げるかを決定することができるでしょう。以下が例です:

{% highlight ruby %}
live_loop :melody do
  if one_in(6)
    use_transpose 2
  else
    use_transpose 0
  end
  play_pattern_timed [:c4, :e4, :f4, :g4, :f4, :e4, :f4, :g4, :f4, :e4, :f4], [0.25, 0.25, 0.25, 1.5, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25], attack: 0, release: 0.2
end
{% endhighlight %}

## ランダムなアシッドベースのトラックを作る

ベースのループで何か面白いことをしましょう。`.choose`は、あるリストからその要素を1つランダムに選択する手軽なメソッドです。こんな感じです:

{% highlight ruby %}
play [:c, :e, :g].choose
{% endhighlight %}

`[:c, :e, :g]`は、音のリストです（この例ではCメジャーの和音です）。`.choose`はそれらの音からランダムに1つを選択します。音でなく何でもリストに入れることができます。例えば、sleepの値です:

{% highlight ruby %}
loop do
  use_octave [0, 1].choose
  play [:c, :e, :g].choose
  sleep [0.25, 0.25, 0.5, 1].choose
end
{% endhighlight %}

あなたは、どの和音にどの音が含まれているか覚えている必要はありません。Sonic Piがあなたに代わって何とかしてくれます。`[:c, :e, :g]`と書くかわりに、`(chord :C, :major)`を使うことができます。この記述が適切な音のリストを自動的に作ってくれます。次が例です:

{% highlight ruby %}
loop do
  play (chord :c, :major).choose
  sleep [0.25, 0.25, 0.5, 1].choose
end
{% endhighlight %}

この魔法を使って、バブルなベーストラックを作ってみましょう。あなたの書いた`:bass`ループは、後で使いたくなるときのために、別のBufferにコピーしましょう。そして次の`:bass`ループのために現在のループの内容を削除しましょう。次の例のように、クラシックな`:tb303`シンセを使って、Cメジャーの和音からランダムな16分音符の音を鳴らしましょう:

{% highlight ruby %}
live_loop :bass do
  use_synth :tb303
  play (chord :C2, :major).choose
  sleep 0.25
end
{% endhighlight %}

うわっ！そうではないですね。次のように、`, release: 0.125`をplayコマンドの末尾に追加してみましょう:

{% highlight ruby %}
live_loop :bass do
  use_synth :tb303
  play (chord :C2, :major).choose, release: 0.125
  sleep 0.25
end
{% endhighlight %}

良くなりました。でもまだ良くできそうです。これまでに、あなたはplayコマンドの`attack:`と`release:`パラメータを使っているはずです。使用するシンセによりますが、利用可能なパラメータは非常にたくさんあります。例としてtb303シンセの場合は、45の異なるオプションを調整可能です。ここでは、`cutoff`というパラメータを使ってみましょう。カットオフはカットオフ周波数より上の周波数をすべて削除します。0から130までの数字を指定可能です。

せっかくランダムな値を使えるようになったので、固定のカットオフを使わずにやってみましょう！`rrand(min, max)`を使えば、範囲内のランダムな数を生成できます。試してみましょう:

{% highlight ruby %}
live_loop :bass do
  use_synth :tb303
  play (chord :C2, :major).choose, release: 0.125, cutoff: rrand(60, 110)
  sleep 0.25
end
{% endhighlight %}

すごいね！いろんなことを試したり探索したりすることを忘れないでください。ここまでにやってきたことを総括した例が以下です:

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
  use_synth :tb303
  play (chord :C2, :major).choose, release: 0.125, cutoff: rrand(60, 110)
  sleep 0.25
end


live_loop :melody do
  if one_in(6)
    use_transpose 2
  else
    use_transpose 0
  end
  play_pattern_timed [:c4, :e4, :f4, :g4, :f4, :e4, :f4, :g4, :f4, :e4, :f4], [0.25, 0.25, 0.25, 1.5, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25], attack: 0, release: 0.2
end
{% endhighlight %}
