---
chapter: Generate sounds
title: 変数
lang: ja
layout: exercise
---

下の例を見てください。何が起きているでしょう？

{% highlight ruby %}
live_loop :melody do
  use_synth :blade
  r = [0.25, 0.25, 0.5, 1].choose
  play (chord :c, :minor).choose, attack: 0, release: r
  sleep r
end
{% endhighlight %}

`r`という変数があって、ループが再生される度に特定の値を受け取り、playコマンドのreleaseオプションの値として使われ、またsleepの長さの値として使われています。変数は箱に少し似ていて、そこに何か入れたり出したりできます。変数の使い方は簡単で、`variable_name = variable_value`とするだけです。これで、variable_valueがvariable_nameに格納されます。値を取得するには、variable_nameとタイプするだけです。

先程の例にシンセとベースを追加して変数を試してみましょう。`:keys`のループはシンプルで何も新しいことは起こりませんが、`:bass`ループは少しトリッキーです:

{% highlight ruby %}
live_loop :melody do
  use_synth :blade
  r = [0.25, 0.25, 0.5, 1].choose
  play (chord :c, :minor).choose, attack: 0, release: r
  sleep r
end

live_loop :keys do
  use_synth :blade
  play chord(:c, :minor)
  sleep 1
end

live_loop :bass do
  use_synth :fm
  n = (chord :c2, :minor).tick
  3.times do
    play n
    sleep 1
  end
  play n
  sleep 0.5
  play (chord :c2, :minor).tick
  sleep 0.5
end
{% endhighlight %}

`n = (chord :c2, :minor).tick`は、Cマイナーの和音から音を1つ取得して、`n`という名前の変数に格納します。`.tick`は、それが呼ばれた後に次の値に進みます。`play n`は、nに格納された音を鳴らします。続いて、ループの頭に戻ったとき、`.tick`は前に居た位置から再開されます。
