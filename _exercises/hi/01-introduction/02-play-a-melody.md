---
chapter: परिचय
title: एक राग बजाओ
lang: hi
layout: exercise
---

निम्नलिखित को बफर (buffer) में टाइप करें और run दबाएँ:

{% highlight ruby %}
play 60
play 67
play 69
{% endhighlight %}

यह एक राग की तरह नहीं था, यह किया था? एक अनुक्रम खेलने के बजाय, Sonic Pi ने एक ही बार में सभी नोट चलाए (और यह है कि आप वास्तव में chords कैसे लिख सकते हैं)।

यदि आप चाहते हैं कि Sonic Pi प्रत्येक नोट को एक अनुक्रम में बजाए, तो आपको सॉफ्टवेयर को हर हाल में ब्रेक लेना होगा। प्रत्येक नोट के नीचे `sleep 1` में टाइपिंग का प्रयास करें, जैसे:

{% highlight ruby %}
play 60
sleep 1
play 67
sleep 1
play 69
{% endhighlight %}

`sleep 1` बताती है कि Sonic Pi एक बीट का इंतजार करे। आप छोटी और बड़ी संख्या की कोशिश कर सकते हैं। sleep वैल्यू जितना छोटा होता है, उतनी ही छोटी अवधि, कमांड कमांड और इसके विपरीत होती है। यदि आप संगीत संकेतन से परिचित हैं, , यह अलग-अलग नोट्स Sonic Pi में कैसा दिखता है:

<img src="{{ "/assets/img/Notes_hi.png" | prepend: site.baseurl }}"> 
<img src="{{ "/assets/img/Rests_hi.png" | prepend: site.baseurl }}">

जैसा कि पहले उल्लेख किया गया है, आप MIDI में नोट लिख सकते हैं, जो मूल रूप से 0 और 127 (`67`, `80`, `22`) या संगीत नोटों में होता है (`:G4`, `:Ab5`, `:Bb`), यह आपके ऊपर है। यहाँ एक चार्ट है जिसमें नोट और MIDI मूल्य प्रदर्शित होते हैं:

<img src="{{ "/assets/img/midi_notes_hi.png" | prepend: site.baseurl }}">

## कोशिश करके देखो

एक राग बनाने के लिए C- Major स्केल (`72, 74, 76, 77, 79, 81, 83` या `:C5 :D5 :E5 :F5 :G5 :A5 :B5`) से नोटों का उपयोग करें। लय को अलग-अलग करने के लिए विभिन्न मूल्यों के साथ `sleep` का उपयोग करें। आप अपनी धुन को तेज़ या धीमा करने के लिए शुरुआत में `use_bpm` का उपयोग कर सकते हैं। _Beats Per Minute_  संक्षिप्त BPM का मतलब है। यहाँ एक उदाहरण है:

{% highlight ruby %}
use_bpm 120

play 72
sleep 0.25
play 76
sleep 0.25
play 76
sleep 0.25
play 72
sleep 0.5
play 83
sleep 0.25
play 74
sleep 0.25
play 83
sleep 0.25
play 79
play 84
{% endhighlight %}

{% include player.html filepath="/assets/audio/c-major-melody.mp3" description="Listen to the previous example" %}

अब अपना राग बनाओ!