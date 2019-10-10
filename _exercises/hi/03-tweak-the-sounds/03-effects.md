---
chapter: आवाजों को गूंथें
title: प्रभाव
lang: hi
layout: exercise
---

हम इसे बहुत लंबे समय से बंद कर रहे हैं, इसलिए यहाँ यह आता है: `with_fx`! 

आपकी संरचना में विभिन्न प्रभावों को जोड़ने के लिए यह एक शक्तिशाली उपकरण है। चलो शुरू करते हैं `:reverb` बहुत ज्यादा सब कुछ एक reverb के साथ अच्छा लगता है। अपने कोड को `with_fx :reverb do` और `end` ब्लॉक के साथ शुरू करें:

{% highlight ruby %}
live_loop :effects do
  with_fx :reverb do
    play 50
    sleep 0.5
    sample :elec_plip
    sleep 0.5
    play 62
  end
end
{% endhighlight %}

बड़ा लगता है, यह नहीं है? Synths और samples की तरह, प्रभाव भी विकल्प हैं। `mix:` एक विकल्प है जो सेट करता है कि कितना प्रभाव और मूल ध्वनि सुनाई देती है। `mix: 0`  केवल मूल ध्वनि बजाता है, `mix: 1`  केवल  FX  खेलता है। Reverb में एक `:room` का विकल्प भी है। 0-1 के बीच के मानों के साथ अलग कमरे के आकार का प्रयास करें। यदि आप सहायता मेनू पर ‘Fx’ टैब खोलते हैं, तो आप पा सकते हैं कि किस FX के लिए विकल्प उपलब्ध हैं।

{% highlight ruby %}
live_loop :effects do
  with_fx :reverb, mix: 0.5, room: 0.9 do
    play 50
    sleep 0.5
    sample :elec_plip
    sleep 0.5
    play 62
  end
end
{% endhighlight %}

से चुनने के लिए बहुत सारे FX हैं। और आपको एक के लिए भी समझौता नहीं करना है: आप उन्हें घोंसला बना सकते हैं! (कुछ बिंदु पर आप कंप्यूटर संसाधनों से बाहर चला सकते हैं लेकिन उसके बारे में चिंता करें।)

{% highlight ruby %}
live_loop :effects do
  with_fx :wobble do
    with_fx :slicer do
      with_fx :reverb do
        play 50
        sleep 0.5
        sample :elec_plip
        sleep 0.5
        play 62
      end
    end
  end
end
{% endhighlight %}

अब पागल हो जाओ और हर जगह कुछ अद्भुत नई ध्वनियों के लिए FX जोड़ें!
