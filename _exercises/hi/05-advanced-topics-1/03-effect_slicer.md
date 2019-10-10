---
chapter: उन्नत विषय १
title: स्लाइसर
lang: hi
layout: exercise
---

पिछले विषय में प्रस्तुत नमूना टुकड़ा करने की क्रिया के अलावा, आप ऑडियो प्रभाव का उपयोग भी कर सकते हैं: अपने संगीत में कुछ "लयबद्ध और चॉप" जोड़ने के लिए `:slicer` यह मूल रूप से समय के साथ ध्वनि की मात्रा को बदल देता है (और इस प्रभाव को अक्सर आयाम मॉडुलन कहा जाता है)। अब खाली बफर में एक नया `live_loop` बनाकर इस प्रयोग के साथ अपने प्रयोग को शुरू करते हैं और नमूने का उपयोग करते हैं: हमारे बिल्डिंग ब्लॉक के रूप में `:loop_breakbeat`

{% highlight ruby %}
use_bpm 120

live_loop :breakbeat do
  sample :loop_breakbeat, beat_stretch: 4, amp: 2
  sleep 4
end
{% endhighlight %}

Loop को अब नीचे दिए गए वीडियो की तरह ही ध्वनि देना चाहिए। हम ध्वनि की मात्रा को इंगित करने के लिए लाल रंग का उपयोग कर रहे हैं और इस उदाहरण में यह अधिकतम होना चाहिए।  

{% include videoplayer.html filepath="/assets/video/breakbeat_dry" %}

अब परिचित `with_fx` कमांड का उपयोग करके `live_loop` में स्लाइसर प्रभाव जोड़ते हैं। यदि आपको याद नहीं है या यह पता नहीं है कि Sonic Pi में प्रभावों का उपयोग कैसे किया जाता है, तो आप उनके बारे में पिछले अध्याय में पढ़ सकते हैं जिन्हें <a href="{{ "/exercises/en/03-tweak-the-sounds/03-effects.html" | prepend: site.baseurl }}">प्रभाव (Effects)</a> कहा जाता है।

{% highlight ruby %}
use_bpm 120

live_loop :breakbeat do
  with_fx :slicer do
    sample :loop_breakbeat, beat_stretch: 4, amp: 2
    sleep 4
  end
end
{% endhighlight %}

{% include player.html filepath="/assets/audio/breakbeat_slicer.mp3" %}

अब नया जोड़ा गया स्लाइसर प्रभाव बहुत कठोर लगता है और हमें इसे थोड़ा ट्यून करने की आवश्यकता है। स्लाइसर प्रभाव के मुख्य विकल्प `phase`, `wave` और `mix` हैं। आप आयाम मॉडुलन को नियंत्रित करने के लिए उनका उपयोग कर सकते हैं। विकल्प `phase` वह आवृत्ति है जो आयाम मॉड्यूलेशन कितनी तेज या धीमी गति से होती है। `phase 0.25`  के लिए डिफ़ॉल्ट मान जिसका अर्थ है कि प्रभाव हर 1/16 नोट पर होता है। इस वजह से पिछले उदाहरण बल्कि व्यस्त लग रहा था।

स्लाइसर प्रभाव चार अलग-अलग तरंगों का उपयोग करके आयाम को नियंत्रित कर सकता है: `0` (देखा - saw), `1` (पल्स - pulse), `2` (त्रिकोण - triangle) और `3` (सिनएव - sinewave)। डिफ़ॉल्ट रूप से, `wave` को `1` पर सेट किया जाता है, जिसका अर्थ है कि आयाम को संशोधित करने के लिए पल्स (जिसे स्क्वायर भी कहा जाता है) तरंग का उपयोग करता है। नीचे दी गई तस्वीरें बताती हैं कि समय के साथ तरंगें कैसी दिखती हैं और वे कैसे बढ़ जाती हैं या कम हो जाती हैं।

<img src="{{ "/assets/img/slicer_waveforms.png" | prepend: site.baseurl }}" width="100%">

अब तरंग को आरा में बदलने की कोशिश करते हैं (`wave: 0`)। इससे प्रभाव थोड़ा हल्का और कम अचानक होना चाहिए।

{% highlight ruby %}
use_bpm 120

live_loop :breakbeat do
  with_fx :slicer, phase: 0.25, wave: 0, mix: 1.0 do
    sample :loop_breakbeat, beat_stretch: 4, amp: 2
    sleep 4
  end
end
{% endhighlight %}

{% include videoplayer.html filepath="/assets/video/fx_slicer_wave_0" %}

चरण की अवधि को दोगुना करें (`phase: 0.5`) और तरंग को पल्स पर स्विच करें (`wave: 1`):

{% include videoplayer.html filepath="/assets/video/fx_slicer_wave_1" %}

अब क्या होता है अगर हम निम्नलिखित विकल्पों का उपयोग करते हैं (`phase: 0.5`, `wave: 1`) प्रभाव के साथ:

{% include videoplayer.html filepath="/assets/video/fx_slicer_wave_2" %}

इस तरह ड्रम loops में कुछ लय, विचरण और गतिकी जोड़ना आसान है। याद रखें कि आप Sonic Pi में सिंथेसाइज़र के साथ भी इसका उपयोग कर सकते हैं!

यहां अंतिम स्लाइसर प्रभाव उदाहरण दिया गया है जो स्लाइसर प्रभाव के साथ लंबे समय तक उपयोग करता है:

{% highlight ruby %}
use_bpm 120

live_loop :breakbeat do
  with_fx :slicer, phase: 1.75, wave: 0, mix: 1.0 do
    sample :loop_garzul, beat_stretch: 16, amp: 1
    sleep 16
  end
end

live_loop :beep do
  with_fx :reverb, room: 0.9 do
    with_fx :slicer, phase: 1, wave: 1, mix: 1.0 do
      synth :hoover, note: [:Db4, :G3, :Bb3, :F4].ring.tick, attack: 2, release: 4, amp: 0.5
      sleep 6
    end
  end
end

live_loop :kick do
  sample :bd_haus
  sleep 4
end
{% endhighlight %}

{% include player.html filepath="/assets/audio/industrial_slicer.mp3" %}
