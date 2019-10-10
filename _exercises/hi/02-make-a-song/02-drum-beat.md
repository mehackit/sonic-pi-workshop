---
chapter: एक गीत बनाओ
title: ड्रम की आवाज
lang: hi
layout: exercise
---

आइए एक साधारण ड्रम बीट बनाने का तरीका देखें, जिसमें किक ड्रम (kick drum), स्नेयर (snare) और हाय-हैट (hi-hat) शामिल हैं। आपको दो नई चीजें पता चलेंगी: `live_loop` और `sample`।

एक खाली बफ़र से शुरू करें और एक `live_loop` बनाएं जिसका नाम है `:drums`। इसे कुछ भी नाम दिया जा सकता है, नाम सिर्फ यह जानने के लिए है कि loop क्या करता है। `live_loop` एक अंतहीन दोहराई जाने वाली loop है जिसे अन्य live_loops के साथ सिंक्रनाइज़ किया जा सकता है (एक `live_loop` में कम से कम एक `sleep` होनी चाहिए):

{% highlight ruby %}
live_loop :drums do
  sample :drum_heavy_kick
  sleep 1
end
{% endhighlight %}

हिट **Run** अपने पहले `live_loop` को हर बीट में एक अच्छा किक ड्रम खेलते हुए सुनें।

आइए 1 और 3 पर किक ड्रम के साथ एक साधारण बैकबीट करें, 2 और 4 पर झपकी लें। नोट खेलने के बजाय, आपको नमूने ट्रिगर करने होंगे। यह `sample` लिखने के रूप में सरल है `:sample_name` यहाँ एक उदाहरण नशे में है:

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

यह एक स्थिर बैकबीट है। `:drums` loop एक किक के साथ शुरू होता है, दो पर स्नेल खेलता है, तीन पर किक करता है, फिर चार पर एक फंदा। फिर loop  से शुरू होता है:

<img src="{{ "/assets/img/live_loop.png" | prepend: site.baseurl}}">

अब, tempo (`use_bpm` के बाद का नंबर) बदलने की कोशिश करें और नमूनों के साथ खेलें। जब आप नमूना नाम लिखना शुरू करते हैं, तो आप ऑटो-पूर्ण (auto-complete) सुविधा के साथ विभिन्न नमूनों को ब्राउज़ कर सकते हैं। अलग-अलग सैंपल आज़माएं और देखें कि उन्हें क्या अच्छा लगता है। ध्यान दें कि आपको ध्वनि को बदलने के लिए stop हिट नहीं करना है - बस कोड को बदल दें और **Run** को फिर से चलाएं - ध्वनि बिना किसी हार को खोए अगले loop पर स्वचालित रूप से बदल जाएगी!

## Hi-hat जोड़ें

अब एक hi-hat लगाएं। एक और live loop  बनाएं जिसे कहा जाता है `:hihat` और अपने hi-hat नमूने जोड़ें। आप इस तरह से सीधे 8 वें या 16 वें नोटों के लिए कर सकते हैं (यह 16 वां नोट है):

{% highlight ruby %}
live_loop :hihat do
  sample :drum_cymbal_closed
  sleep 0.25
end
{% endhighlight %}

लेकिन यह इतना वर्गाकार नहीं होगा। तुम भी इस तरह से एक और अधिक कायरता के लिए जा सकते हैं:

{% highlight ruby %}
live_loop :hihat do
  sample :drum_cymbal_closed
  sleep 0.25
  sample :drum_cymbal_pedal
  sleep 1
end
{% endhighlight %}

Polyrhythmic hi-hat  पैटर्न एक "गलती" मुट्ठी थी। loop 1 माना जाता है के बजाय 1.25 बीट लंबा है, लेकिन यह अच्छा लगता है! तो कुछ गलतियाँ करने के लिए याद रखें जो आप ढूंढ रहे थे।

अब गाना कुछ इस तरह दिखता है:

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

आप सोच रहे होंगे कि लोकप्रिय संगीत बनाने वाले ऐप्स में live_loops कैसे संगीत अनुक्रमों में अनुवाद करेंगे? निम्नलिखित वीडियो आपको उनके संबंध को समझने में मदद कर सकते हैं।

<iframe width="640" height="360" src="https://www.youtube.com/embed/iFMNOb33_KM?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>

अब विभिन्न नमूनों और लय के साथ खेलते हैं। आप टक्कर या अन्य प्रभावों के लिए एक तीसरा `live_loop` भी जोड़ सकते हैं। आगे आप अपनी रचना के लिए एक बास ट्रैक बनाएंगे।
