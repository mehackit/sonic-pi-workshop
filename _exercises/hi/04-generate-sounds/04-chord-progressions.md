---
chapter: नाद उत्पन्न करो
title: राग की प्रगति
lang: hi
layout: exercise
---


पिछला उदाहरण C Minor में ही चल रहा था। यहाँ एक उदाहरण है कि सभी loops का उपयोग करने वाले जीवा की एक ring का उपयोग किया जाता है। सभी loop एक ही कॉर्ड के चारों ओर खेलेंगे और एक loop सभी के लिए कॉर्ड बदल रहा है। यह काफी जटिल है, लेकिन यदि आप चाहें तो इसे प्रेरणा के लिए देखें। यदि आप चाहें तो <a href="{{ "/exercises/en/09-keys-chords-and-scales/01-piano.html" | prepend: site.baseurl }}">कॉर्ड प्रोग्रेस चार्ट</a> का उपयोग अच्छे कॉर्ड्स को चुनने के लिए कर सकते हैं।

{% highlight ruby %}
chords = [(chord :C, :minor7), (chord :Ab, :major7), (chord :Eb, :major7), (chord :Bb, "7")].ring
c = chords[0] # ring का पहला हिस्सा ले लो और इसे एक चर के लिए बचाओ
# सभी live_loops में इसका उपयोग होने जा रहा है। यह :bass loop द्वारा tick किया जाएगा

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
    play c[0] # कॉर्ड का पहला नोट
    sleep 1
  end
  play c[2] # कॉर्ड का तीसरा नोट
  sleep 0.5
  play c[1] # कॉर्ड का दूसरा नोट
  sleep 0.5
  c = chords.tick
end
{% endhighlight %}
