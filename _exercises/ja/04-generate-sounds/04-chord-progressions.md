---
chapter: Generate sounds
title: コード進行
lang: ja
layout: exercise
---

先程の例は、Cマイナーのみを使っていました。次の例は、和音のリングを全てのループで使用する例です。全てのlive_loopは同じ和音を使い、1つのlive_loopで和音が変更されています。かなり複雑になっていますが、インスピレーションのためにチェックしてみてください。もしお望みであれば、良い和音を選択するために<a href="{{ "/exercises/en/09-keys-chords-and-scales/01-piano.html" | prepend: site.baseurl }}">コード進行の表</a>を使ってみてください。

{% highlight ruby %}
chords = [(chord :C, :minor7), (chord :Ab, :major7), (chord :Eb, :major7), (chord :Bb, "7")].ring
c = chords[0] # リング内の最初の和音を取得して変数に格納しています
# これは全てのlive_loopで使われ、:bassのlive_loopでtickされます

live_loop :melody do
  use_synth :blade
  r = [0.25, 0.25, 0.5, 1].choose
  play c.choose, attack: 0, release: r
  sleep r
end

live_loop :keys do
  use_synth :blade
  play c
  sleep 1
end

live_loop :bass do
  use_synth :fm
  use_octave -2
  3.times do
    play c[0] # play the first note of the chord
    sleep 1
  end
  play c[2] # play the third note of the chord
  sleep 0.5
  play c[1] # # play the second note of the chord
  sleep 0.5
  c = chords.tick
end
{% endhighlight %}
