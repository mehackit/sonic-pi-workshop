---
chapter: एक गीत बनाओ
title: बास ट्रैक
lang: hi
layout: exercise
---

अपने बास के लिए एक और live loop जोड़ें। एक ठोस और सरल बास नाली लिखें। यदि यह मदद करता है, तो आप अपने ब्राउज़र पर <a href="{{ "/exercises/en/09-keys-chords-and-scales/01-piano.html" | prepend: site.baseurl }}">पियानो</a> का उपयोग उन नोटों को चुनने के लिए कर सकते हैं जो आपको पसंद हैं। यहाँ एक उदाहरण है


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

## Synth को बदलें

आपकी धुन को और अधिक रोचक बनाने का समय आ गया है! हम सिंथेसाइज़र ध्वनियों को बदलकर इसका उपयोग कर सकते हैं। डिफ़ॉल्ट Sonic Pi synth को `:beep` कहा जाता है। किसी भिन्न synth का उपयोग करने के लिए, आपको कोड का उपयोग करना `use_synth :name_of_synth`  उस कोड के अनुक्रम से ऊपर जिसे आप इसका उपयोग करना चाहते हैं।


इस उदाहरण में, synth का नाम fm है:

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

Sonic Pi के साथ बहुत सारे शांत-ध्वनि वाले synths शामिल हैं। उनके नाम खोजने के लिए, स्क्रीन के शीर्ष पर स्थित सहायता आइकन पर क्लिक करें, ताकि मदद दस्तावेज़ विंडो दिखाई दे। फिर मदद विंडो के बाएं हाथ के साथ टैब से Synths का चयन करें। उपयोग करने के तरीके के बारे में अधिक जानकारी प्राप्त करने के लिए किसी भी synth नाम पर क्लिक करें।

## नोटों की लंबाई बदलें

अवसर पर, आप ध्वनि को लंबे समय तक या अलग दर पर बजाना पसंद कर सकते हैं। यह आपके द्वारा उपयोग किए जा रहे कोड के वैकल्पिक मापदंडों को संशोधित करके प्राप्त किया जा सकता है। समय के साथ एक नोट के आयाम पर `attack` और `release` पर नियंत्रण:

<img src="{{ "/assets/img/attackrelease_hi.png" | prepend: site.baseurl }}">

Attack और release का उपयोग करना निम्न की तरह दिखता है। अब नोट 4 बीट लंबा होगा।

{% highlight ruby %}
play 60, attack: 1, release: 3
{% endhighlight %}

आप attack को शून्य और release को बहुत ही कम मूल्य पर सेट करके एक छोटा staccato नोट बना सकते हैं

{% highlight ruby %}
play :c4, attack: 0, release: 0.2
{% endhighlight %}

अलग-अलग synths और नोट की लंबाई का पता लगाएं और अपने बास ट्रैक को रोल करें।

अब गीत कुछ इस तरह हो सकता है:

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
