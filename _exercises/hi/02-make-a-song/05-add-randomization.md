---
chapter: एक गीत बनाओ
title: यादृच्छिकरण जोड़ें
lang: hi
layout: exercise
---

बढ़िया! अब आप अपने गाने को एक स्थिर बीट और शीर्ष पर राग हुक के साथ एक बास के साथ अच्छी तरह से चला रहे हैं अब हम वास्तव में कुछ अच्छा करने जा रहे हैं और Sonic Pi की वास्तविक क्षमता को उजागर करेंगे। आइए हम ट्रैक करने के लिए कुछ सामान्य तत्वों को जोड़ दें और कंप्यूटर को हमारे लिए लिखें!

## एक पासा फेंको और माधुर्य को स्थानांतरित करो

ट्रांसपोज़िंग का मतलब है पिच को ऊपर या नीचे बदलना। हम रैंडम को हर बार थोड़ा बदल सकते हैं और फिर ट्रैक में कुछ मसाला जोड़ सकते हैं। आप माधुर्य के लिए पिच को शिफ्ट करने का निर्णय लेने के लिए पासा फेंक सकते हैं। यहाँ एक उदाहरण है:

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

## एक यादृच्छिक Acid Bass ट्रैक बनाएँ

आइए करते हैं बेस  loop के लिए कुछ दिलचस्प। `.choose` एक आसान विधि है जो किसी सूची से एक तत्व को बेतरतीब ढंग से चुनती है। ऐशे ही:

{% highlight ruby %}
play [:c, :e, :g].choose
{% endhighlight %}

`[:c, :e, :g]` नोटों की एक सूची है (इस मामले में C major  कॉर्ड के नोट्स)। `.choose` उन नोटों में से एक को यादृच्छिक रूप से चुनता है। नोटों के बजाय आपके पास सूची में कुछ भी हो सकता है। उदाहरण के लिए sleep मूल्यों की तरह:

{% highlight ruby %}
loop do
  use_octave [0, 1].choose
  play [:c, :e, :g].choose
  sleep [0.25, 0.25, 0.5, 1].choose
end
{% endhighlight %}

आपको यह भी याद रखना होगा कि कौन सी चीज़ों में क्या नोट्स हैं। Sonic Pi आपके लिए संभाल सकती है। लिखने के बजाय `[:c, :e, :g]`, आप बस इस्तेमाल कर सकते हैं `(chord :C, :major)`। यह स्वचालित रूप से आपके लिए सही नोटों की एक सूची बनाता है। यहाँ एक उदाहरण है:

{% highlight ruby %}
loop do
  play (chord :c, :major).choose
  sleep [0.25, 0.25, 0.5, 1].choose
end
{% endhighlight %}

इस शर्बत को बुदबुदाते हुए बास ट्रैक के लिए उपयोग करें। अपने काम को बचाएं और अपने करंट को कॉपी करें: किसी अन्य बफर में `:bass` loop, अगर आप इसमें वापस आना चाहते हैं। फिर हमारे नए बास ट्रैक के लिए जगह बनाएं और loop की सामग्री को हटा दें। आज्ञा देना क्लासिक का उपयोग करें `:tb303` synth और C major राग से यादृच्छिक 16 नोट्स खेलें:

{% highlight ruby %}
live_loop :bass do
  use_synth :tb303
  play (chord :C2, :major).choose
  sleep 0.25
end
{% endhighlight %}

Ough! बिलकुल ठीक नहीं। जोड़ें`, release: 0.125` पैरामीटर play कमांड के अंत में, इस तरह:


{% highlight ruby %}
live_loop :bass do
  use_synth :tb303
  play (chord :C2, :major).choose, release: 0.125
  sleep 0.25
end
{% endhighlight %}

यह बेहतर है, लेकिन अभी भी थोड़ा पॉलिश करना बाकी है। अब तक आपने `attack:`का उपयोग किया है: और `release:` एक play कमांड के लिए पैरामीटर। आपके द्वारा उपयोग किए जा रहे synth के आधार पर, उपयोग करने के लिए बहुत अधिक पैरामीटर हैं। उदाहरण के लिए tb303 synth में ट्विक करने के लिए 45 अलग-अलग विकल्प हैं। आइए बास के लिए `cutoff` नामक एक पैरामीटर का उपयोग करें। Cutoff आवृत्ति के ऊपर की सभी आवृत्तियों को हटा देता है। आप 0-130 के बीच मूल्यों का उपयोग कर सकते हैं

लेकिन जब आप रैंडम मूल्य रख सकते हैं तो केवल एक निश्चित cutoff मान का उपयोग न करें! `rrand(min, max)` के साथ आप किसी दिए गए रेंज में यादृच्छिक संख्या उत्पन्न कर सकते हैं। कोशिश करें कि:

{% highlight ruby %}
live_loop :bass do
  use_synth :tb303
  play (chord :C2, :major).choose, release: 0.125, cutoff: rrand(60, 110)
  sleep 0.25
end
{% endhighlight %}

Grrreat! अलग-अलग चीजों का पता लगाने और आज़माना याद रखें। एक पुनरावृत्ति के रूप में, यहाँ एक उदाहरण है कि आप इस बिंदु पर क्या कर सकते हैं:

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
