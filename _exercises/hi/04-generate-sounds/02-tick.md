---
chapter: नाद उत्पन्न करो
title: Tick (टिक)
lang: hi
layout: exercise
---

`chord` याद है? Chord फ़ंक्शन आपको एक निश्चित कॉर्ड के नोट्स देता है:

{% highlight ruby %}
play (chord :c, :major).choose 
# C major  तार का यादृच्छिक नोट (:c, :e या :g)
{% endhighlight %}

एक फ़ंक्शन भी है जिसे `scale` कहा जाता है। Scale एक पैमाने में सभी नोटों को वापस करता है, न कि केवल एक कॉर्ड में

{% highlight ruby %}
play (scale :c, :major).choose 
# C major पैमाने का एक यादृच्छिक नोट (:c , :d, :e, :f, :g, :a या :b)
{% endhighlight %}

`choose`  के साथ आप एक सूची से एक यादृच्छिक तत्व प्राप्त कर सकते हैं। यदि आप अधिक संरचित तरीके से मूल्यों के माध्यम से जाना चाहते हैं, तो Sonic Pi में एक बहुत शक्तिशाली कार्य है जिसे `tick` कहा जाता है:

{% highlight ruby %}
live_loop :arp do
  play (scale :e3, :minor_pentatonic).tick, release: 0.1
  sleep 0.125
end
{% endhighlight %}

यहां, हम बस E3 minor pentatonic को स्केल कर रहे हैं और प्रत्येक तत्व के माध्यम से tick कर रहे हैं। यह पैमाने की घोषणा के अंत में `.tick`  को जोड़कर किया जाता है। यह tick  live loop के लिए स्थानीय है, इसलिए प्रत्येक live loop का अपना स्वतंत्र tick हो सकता है:

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

## Rings (रिंगों)

आप किसी भी चीज के माध्यम से tick कर सकते हैं जो कि एक _ring_ है (ठीक है, आप सूचियों के माध्यम से भी tick कर सकते हैं लेकिन अंत में पहुंचने पर यह बंद हो जाएगा)। Ring एक विशेष सूची है, जो अंत में आने पर शुरू होती है। पिछले उदाहरण की तरह पैमाना अंतिम नोट तक पहुंचने के बाद फिर से शुरू हुआ। `scale` और `chord` दोनों एक ring लौटाते हैं। कभी-कभी आप एक सूची बनाना चाहते हैं और `.ring` क्रिएटर का उपयोग करके या कॉल करके `ring` में बदल सकते हैं:

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

यहाँ थोड़ा और अधिक जटिल उदाहरण है। यहां आपके पास एक सूची या तार है जिसे एक ring में बदल दिया गया है और इसके माध्यम से tick किया गया है:

{% highlight ruby %}
live_loop :keys do
  use_synth :blade
  play [(chord :Ab, :major7), (chord :Db, :major7), (chord :Bb, :minor7), (chord :Eb, '7')].ring.tick, attack: 0.1, release: 1
  sleep 1
end
{% endhighlight %}

और फिर इसे एक प्रमुख 'मेलोडी' के साथ बंद करें:

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

Ticking शुरू करो, रचनात्मक बनो!
