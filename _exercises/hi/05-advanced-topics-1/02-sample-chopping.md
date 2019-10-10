---
chapter: उन्नत विषय १
title: नमूना टुकड़ा करने की क्रिया
lang: hi
layout: exercise
---

आइए एक कदम पीछे हटें और फिर से नमूने देखें। Looping सैंपल का प्लेबैक कैसे व्यवहार करता है, यह समझने के लिए नीचे दिए गए वीडियो देखें।

{% include videoplayer.html filepath="/assets/video/amen_loop" %}

It shows the playback of the `:loop_amen` sample with the following code:

{% highlight ruby %}
sample :loop_amen
{% endhighlight %}

अब एक `live_loop` बनाते हैं जो हमारे लिए बीट खेलता रहता है। क्या आपको नमूना कमांड के लिए `beat_stretch` का विकल्प याद है जो धड़कन में वांछित लंबाई से मिलान करने के लिए `sample` की पिच को बदल देता है? हमने इसे "ट्विक द साउंड्स" अध्याय में संक्षेप में पेश किया। इसके बाद हम नमूना `loop_amen` को 4 बीट्स तक फैलाने के लिए इसका उपयोग करने जा रहे हैं और इसे loop करते रहेंगे:

{% highlight ruby %}
use_bpm 145

live_loop :drumloop do
  sample :loop_amen, beat_stretch: 4
  sleep 4
end
{% endhighlight %}

आगे हम एक नज़र लेने जा रहे हैं कि आप एक अलग क्रम में Amen loop के कुछ हिस्सों को कैसे खेल सकते हैं। `sample` कमांड के साथ आप पैरामीटर `start` और `finish` का उपयोग करके नमूने के लिए एक अलग शुरुआत और समाप्ति बिंदु सेट कर सकते हैं। दोनों पैरामीटर `0` और `1`  के बीच मूल्यों को स्वीकार करते हैं और नमूना प्लेबैक के शुरुआती और परिष्करण बिंदुओं को दर्शाते हैं। उदाहरण के लिए: `0` नमूने की शुरुआत है, `0.5` नमूना का मध्य बिंदु है और `1` नमूना का अंतिम बिंदु है। निम्न उदाहरण के साथ कार्रवाई में इसे आजमाएँ:

{% highlight ruby %}
use_bpm 145

live_loop :drumloop do
  sample :loop_amen, beat_stretch: 4, start: 0, finish: 0.125
  sleep 0.5
  sample :loop_amen, beat_stretch: 4, start: 0, finish: 0.125
  sleep 0.5
  sample :loop_amen, beat_stretch: 4, start: 0.5, finish: 0.75
  sleep 1
  sample :loop_amen, beat_stretch: 4, start: 0.25, finish: 0.5
  sleep 1
  sample :loop_amen, beat_stretch: 4, start: 0.75, finish: 0.875
  sleep 0.5
  sample :loop_amen, beat_stretch: 4, start: 0.25, finish: 0.375
  sleep 0.5
end
{% endhighlight %}

नीचे दिया गया वीडियो (Ableton Live में Simpler की मदद से बनाया गया है) यह दर्शाता है कि `live_loop` के प्रत्येक रन में `loop_amen` सैंपल के किन हिस्सों को चलाया जा रहा है:

{% include videoplayer.html filepath="/assets/video/amen_slicing" %}

अब क्या नमूने के विभिन्न भागों को पूरी तरह से अलग क्रम में चलाना मजेदार नहीं है? कमांड `sample` के लिए विकल्पों के साथ प्रयोग करने का प्रयास करें। उदाहरण के लिए, एक विकल्प `rate: -1` को एक `loop_amen` हिट में जोड़ने से यह पीछे की ओर खेलता है।

एक बार जब आप `sample` विकल्पों (जैसे दर,  `rate`, `pan`, `amp`, `attack`, `release`, `start` और `finish`) के साथ प्रयोग करना शुरू करते हैं, तो एक नमूना लगभग किसी भी चीज में तराशा जा सकता है। निम्नलिखित उदाहरण दो नमूनों से अनूठे सूक्ष्म ध्वनि खेलने के लिए यादृच्छिक मूल्यों के साथ इन विकल्पों का उपयोग करता है:

{% highlight ruby %}
use_bpm 180

with_fx :reverb, mix: 0.2, room: 1 do
  live_loop :grain1 do
    s = rrand(0, 0.7)
    t = rrand(0.03, 0.3)
    e = s + t
    a = rrand(0.5, 1.0)
    sample :guit_e_fifths, rate: -1.5, start: s, finish: e, attack: t/6.0, sustain: t/2.0, pan: rrand(-0.5, 0.5)
    sleep t
  end

  live_loop :grain2 do
    s = rrand(0, 0.7)
    t = rrand(0.03, 0.2)
    e = s + t
    a = rrand(0.5, 1.0)
    sample :guit_em9, rate: 1.5, start: s, finish: e, attack: t/6.0, sustain: t/2.0, pan: rrand(-0.5, 0.5)
    sleep t
  end
end
{% endhighlight %}

{% include player.html filepath="/assets/audio/granular_1.mp3" %}

इस तकनीक का व्यापक रूप से <a href="https://en.wikipedia.org/wiki/Granular_synthesis">दानेदार नमूने और सिंथेसाइज़र</a> में भी उपयोग किया जाता है।
