---
chapter: एक गीत बनाओ
title: लीड ट्रैक
lang: hi
layout: exercise
---

अब माधुर्य का समय है। बार-बार `play` और `sleep` कमांड का एक बड़ा गुच्छा लिखने के बजाय, हम शॉर्टकट का उपयोग करने जा रहे हैं:  `play_pattern_timed`।

लिखने के बजाय:

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

तुम लिख सकते हो:

{% highlight ruby %}
play_pattern_timed [:c2, :d2, :e2, :d2], [0.5, 0.25, 0.75, 0.5]
{% endhighlight %}

पहली सूची `[:c2, :d2, :e2, :d2]` नोटों का एक समूह है और दूसरी सूची `[0.5, 0.25, 0.75, 0.5]` नोटों के बीच में विराम का एक समूह है।

## राग

एक नया `live_loop` बनाएं जिसका नाम है `:melody` आपके गीत के लिए एक मुख्य थीम बनाता है। यदि यह आसान लगता है, तो राग लिखने के लिए `play_pattern_timed`  फ़ंक्शन का उपयोग करें। यदि आप मदद करता है तो भी आप <a href="{{ "/exercises/en/09-keys-chords-and-scales/01-piano.html" | prepend: site.baseurl }}">piano</a> का उपयोग कर सकते हैं। यहाँ एक उदाहरण है:

{% highlight ruby %}
live_loop :melody do
  play_pattern_timed [:c4, :e4, :f4, :g4, :f4, :e4, :f4, :g4, :f4, :e4, :f4], [0.25, 0.25, 0.25, 1.5, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25]
end
{% endhighlight %}

अब पूरा गाना कुछ इस तरह हो सकता है:

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

Yay, यह एक शानदार शुरुआत है! अब जाओ और विभिन्न धुनों के साथ अन्वेषण करो, synths करें और `attack:`और `release:` मान। 