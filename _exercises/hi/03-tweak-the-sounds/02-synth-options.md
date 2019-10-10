---
chapter: आवाजों को गूंथें
title: विकल्प
lang: hi
layout: exercise
---

अब तक आपने एक play कमांड के बाद `attack`, `release`, और `cutoff` विकल्पों का उपयोग किया है। विकल्प (या शॉर्ट के लिए ऑप्स) आपके द्वारा play जाने वाले नियंत्रण को नियंत्रित करते हैं जो आपके द्वारा सुनी जाने वाली ध्वनि के पहलुओं को संशोधित और नियंत्रित करते हैं। प्रत्येक ध्वनि को ठीक से ट्यूनिंग करने के लिए प्रत्येक synth का अपना सेट होता है। हालांकि, कई ध्वनियों द्वारा साझा किए गए ऑप्स के सामान्य सेट हैं। अब आपको अपनी ध्वनियों में और अधिक अभिव्यक्ति जोड़ने के लिए कुछ और विकल्प जानने को मिलेंगे।

ध्यान दें कि आप नमूनों में से कुछ विकल्पों का भी उपयोग कर सकते हैं!

### `amp:`

ध्वनि (Amplitude) की ऊँच-नीच का आभास होता है। 0 मौन है (आप कुछ भी नहीं सुनेंगे), 1 सामान्य मात्रा है। आप 2, 10 या 100 के आयाम को क्रैंक कर सकते हैं। हालांकि, यह अक्सर ध्वनि को मैला और अजीब बना सकता है। इसलिए कम आयाम का उपयोग करने का प्रयास करें, अर्थात संपीड़न से बचने के लिए 0 से 0.5 की सीमा में। 

{% highlight ruby %}
play :c2, amp: 0.5
{% endhighlight %}

### `pan:`

पान (pan) स्टीरियो में एक ध्वनि के पैनिंग (panning) को नियंत्रित करता है। -1 का मतलब है कि आप इसे बाएं स्पीकर से सुनते हैं, 1 का मतलब है कि आप इसे अपने दाहिने स्पीकर से सुनते हैं और 0 केंद्र है। आप -1 और 1. के बीच किसी भी मूल्य का उपयोग कर सकते हैं। आप कुछ बनावट के लिए अपने hi-hats के लिए यादृच्छिक पान मूल्य का उपयोग करने की कोशिश कर सकते हैं।

{% highlight ruby %}
play :c2, amp: 0.5, pan: -1 # लेफ्ट स्पीकर
play :c2, amp: 0.5, pan: 0 # केंद्र
play :c2, amp: 0.5, pan: 1 # सही वक्ता

sample :drum_cymbal_closed, pan: rrand(-0.7, 0.7)
{% endhighlight %}

### `cutoff:`

दिए गए मान से अधिक आवृत्तियों को निकालें। 0-130 के बीच मान का उपयोग करें।

{% highlight ruby %}
play :c2, cutoff: 80
{% endhighlight %}

### `attack:` और `release:`

attack और release के लिए धड़कन में समय।  

{% highlight ruby %}
play :c2, attack: 1, release: 1 #नोट दो बीट लंबा है
{% endhighlight %}

<img src="{{ "/assets/img/attackrelease.png" | prepend: site.baseurl }}">

### `use_synth_defaults` और `use_sample_defaults`

यदि आप अपने loop पर प्रत्येक play या sample के लिए अपना ऑप्स सेट नहीं करना चाहते हैं, तो आप loop में अगले सभी plays और samples के ऑप्स सेट करने के लिए  `use_synth_defaults` और `use_sample_defaults` का उपयोग कर सकते हैं:

{% highlight ruby %}
live_loop :melody do
  use_synth :mod_fm
  use_synth_defaults attack: 0.25, release: 0.5, pan: rrand(-0.5, 0.5), cutoff: 50
  play 72
  sleep 0.25
  play 76
  sleep 0.25
  play 76
  sleep 0.25
end
{% endhighlight %}

### बोनस: `beat_stretch:` और `rate:`

ये स्किप करने के लिए बहुत अच्छे हैं। इसे आज़माएं:

{% highlight ruby %}
live_loop :amen_break do
  sample :loop_amen
  sleep 2
end 
{% endhighlight %}

अंत में एक कष्टप्रद अंतराल है। नमूना 1.753310657596372 लंबा है, जो उस समय तक काम नहीं करता जब आप इसे हमारे द्वारा चलाए जा रहे अन्य सभी सामान के साथ खेलना चाहते हैं। सौभाग्य से आप उपयोग कर सकते हैं `beat_stretch: 2` स्ट्रेच / सिकोड़ने के लिए इसे बिल्कुल 2 बीट लंबा करने के लिए सैंपल को सिकोड़ें:

{% highlight ruby %}
live_loop :amen_break do
  sample :loop_amen, beat_stretch:2
  sleep 2
end
{% endhighlight %}

अच्छा! अब `rate` ऑप्शन पर जाएं। Rate नियंत्रित करता है कि एक नमूना कितनी तेजी से खेला जाता है। 1 मूल गति में है, 0.5 आधी गति में है और 2 दोहरी गति में है। जब आप दर बदलते हैं तो नमूना भी उच्च और निम्न पिच लगता है। और (ढोलक ...) आप नकारात्मक मान भी सकते हैं! नकारात्मक मूल्य नमूनों को _पीछे की_ ओर खेलते हैं। इस loop को खेलने की कोशिश करें और rate और sleep वैल्यू को बदल दें:

{% highlight ruby %}
live_loop :amen_break do
  sample :loop_amen, beat_stretch:2, rate: -1
  sleep 2
end
{% endhighlight %}

