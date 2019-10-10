---
chapter: उन्नत विषय १
title: बाहरी नमूने
lang: hi
layout: exercise
---

Sonic Pi लगभग 164 नमूनों के साथ आता है जिन्हें आप स्वतंत्र रूप से उपयोग कर सकते हैं और इसके साथ खेल सकते हैं, लेकिन यह बाहरी नमूनों का उपयोग करने में भी पूरी तरह से समर्थन करता है। उदाहरण के लिए, हो सकता है कि आप कुछ रिकॉर्ड करना चाहें (जैसे कि आपकी खुद की आवाज या गिटार) और आपके गाने में उपयोग करने के लिए यह Sonic Pi में है।

सबसे पहले, आपको अपनी हार्ड ड्राइव पर एक फ़ोल्डर में WAV प्रारूप में कुछ ऑडियो नमूने रखने होंगे। निम्नलिखित उदाहरणों में, हम _Mehackit_ द्वारा एक नि: शुल्क नमूने के पैक का उपयोग कर रहे हैं। इसे _Solenoid Sample 1_ कहा जाता है और आप इसे <a href="{{ "/assets/files/solenoid_samples_1.zip" | prepend: site.baseurl }}">यहाँ</a> से डाउनलोड कर सकते हैं। इसमें 14 एक-शॉट और looping samples शामिल हैं जो कि 2016 की शुरुआत में एक कार्यशाला में बनाए गए काइनेटिक साउंड इंस्टॉलेशन से रिकॉर्ड किए गए थे।

एक बार जब आप पैक डाउनलोड कर लेते हैं और फ़ाइलों को किसी फ़ोल्डर में निकाल लेते हैं, तो आपको उस फ़ोल्डर का पूरा रास्ता देखना होगा। उदाहरण के लिए, यदि आपने फ़ाइलों को अपने डेस्कटॉप पर ‘Samples’ नामक एक फ़ोल्डर में निकाला है, तो मार्ग निम्नलिखित की संभावना है:

* Windows: "C:/Users/sam/Desktop/Samples" 
* Raspberry Pi, Linux and Mac: "/Users/sam/Desktop/Samples" 

बस ‘sam’ के बजाय अपने स्वयं के उपयोगकर्ता नाम का उपयोग करना याद रखें। सैंपल पैक में निम्न फाइलें होती हैं: `hit_1.wav` से `hit_7.wav` (पर्क्युसिव हिट्स) और `loop_1.wav` से `loop_7.wav` (looping बीट्स जिन्हें सैंपलर `beat_stretch` के साथ खेलने की सलाह दी जाती है)।

अब आप उन्हें सही फ़ाइल पथ का उपयोग करके सीधे `sample` आदेश के साथ खेल सकते हैं:

{% highlight ruby %}
sample "/Users/sam/Desktop/Samples/loop_1.wav", amp: 1.5
{% endhighlight %}

यदि पथ `sample` आदेश के लिए सही ढंग से सेट किया गया था, तो आपको अब ध्वनि `loop_1.wav`. सुनना चाहिए। बस इन उदाहरणों में दिखाए गए के बजाय अपने खुद के फ़ाइल पथ का उपयोग करना याद रखें! यह नमूनों तक पहुंचने और खेलने के लिए बहुत सरल तरीका है। हालाँकि, आप शायद कोड में केवल एक बार फ़ोल्डर पथ लिखना चाहते हैं और केवल उनके फ़ाइलनाम का संदर्भ देकर नमूने खेलते हैं। आप फ़ाइल पथ के लिए एक चर घोषित कर सकते हैं और `sample` कमांड के साथ संयोजन में उपयोग कर सकते हैं। `sample` के बाद आप फ़ाइल पथ वाले चर नाम और फिर नमूने का नाम दर्ज कर सकते हैं। हम नमूना फ़ोल्डर फ़ाइल पथ के लिए एक चर घोषित करेंगे जिसे नीचे उदाहरण में solenoids कहा गया है। जब आप इसे चलाते हैं, तो नमूना `loop_4.wav`  खेलना और looping शुरू करना चाहिए:

{% highlight ruby %}
solenoids = "/Users/sam/Desktop/Samples/"
use_bpm 110

live_loop :solenoid1 do
  sample solenoids, "loop_4", beat_stretch: 4, amp: 2
  sleep 4
end
{% endhighlight %}

अब आप अपने प्रोडक्शंस में Sonic Pi की अपनी लाइब्रेरी से बाहरी नमूनों और नमूनों का उपयोग करने में सक्षम हैं। नीचे दिए गए उदाहरण को खेलने का प्रयास करें जो बाहरी और Sonic Pi के स्वयं के नमूनों को चलाने के लिए `live_loop` के चार अलग-अलग उदाहरणों का उपयोग करता है। कृपया ध्यान दें कि `live_loop :solenoid2` में हम एक `samplename` ढंग से एक नमूने का उपयोग करके `hit_1.wav` से `hit_7.wav` तक का चयन करते हैं।

{% highlight ruby %}
solenoids = "/Users/sam/Desktop/Samples/"
use_bpm 110

live_loop :solenoid1 do
  sample solenoids, "loop_4", beat_stretch: 4, amp: 2
  sleep 4
end

live_loop :kick do
  sample :bd_haus, rate: 0.8, amp: 2
  sleep 1
end

live_loop :solenoid2 do
  samplename = ["hit_1", "hit_2", "hit_3", "hit_4", "hit_5", "hit_6", "hit_7"].choose
  time = [0.25, 0.5, 0.75].choose
  sample solenoids, samplename, amp: 1.5, rate: 2, pan: rrand(-0.8, 0.8)
  sleep time
end

with_fx :reverb do
  live_loop :solenoid3 do
    sleep 2
    sample solenoids, "hit_6", rate: (ring 0.5, 0.55, 0.6, 0.65).tick, amp: 1.5
    sleep 2
  end
end
{% endhighlight %}

{% include player.html filepath="/assets/audio/solenoid_1.mp3" %}
