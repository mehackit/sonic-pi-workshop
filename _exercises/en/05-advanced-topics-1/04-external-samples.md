---
chapter: Advanced Topics 1
title: External Samples
lang: en
layout: exercise
---

Sonic Pi comes with approximately 73 samples that you can freely use and play around with, but it also fully supports using external samples. For example, maybe you would like to record something (like your own voice or guitar) and have it in Sonic Pi to use in your song.

First, you'll have to have some audio samples in WAV format placed in a folder on your hard drive. In the following examples, we're using a free sample pack by *Mehackit*. It is called *Solenoid Samples 1* and you can download it from <a href="{{ "/assets/files/solenoid_samples_1.zip" | prepend: site.baseurl }}">here</a>. It contains 14 one-shot and looping samples that were recorded from a kinetic sound installation we created in a workshop in early 2016.

Once you have downloaded the pack and extracted the files to a folder, you'll have to check the full path to that folder. For example, if you extracted the files to a folder called 'Samples' on your Desktop the path is most likely following:

* Windows: "C:/Users/sam/Desktop/Samples" 
* Raspberry Pi, Linux and Mac: "/Users/sam/Desktop/Samples" 

Just remember to use your own username instead of 'sam'. The sample pack contains following files: `hit_1.wav` to `hit_7.wav` (percussive hits) and `loop_1.wav` to `loop_7.wav` (looping beats that are recommended to be played with the sampler opt `beat_stretch`).

Now you can play them directly with the `sample` command by using the right file path:

{% highlight ruby %}
sample "/Users/sam/Desktop/Samples/loop_1.wav", amp: 1.5
{% endhighlight %}

If the path was set correctly for the `sample` command you should now hear the sound `loop_1.wav`. Just remember to use your own file path instead of the one shown in these examples! That is pretty straightforward way to access and play samples. However, you would probably like to write the folder path only once in the code and play the samples by only referring to their filenames. You can use the command `use_sample_pack` to set a folder path for the samples and then use `sample :filename` to play a sample from the folder. The example below should start playing and looping the sample `loop_4.wav`:

{% highlight ruby %}
use_sample_pack "/Users/sam/Desktop/Samples"
use_bpm 110

live_loop :solenoid1 do
  sample :loop_4, beat_stretch: 4, amp: 2
  sleep 4
end
{% endhighlight %}

But what happens now if you try to play a sample from Sonic Pi's own sample library, for example `:bd_haus`? It can't be accessed as `use_sample_pack` overrides all the other sample directories and paths for Sonic Pi. So if you want to use multiple sample directories (including Sonic Pi's own samples), you'll need to use the command `use_sample_pack_as` instead of `use_sample_pack`. With the `use_sample_pack_as` you'll need to specify the path of the sample directory and a name for the sample pack (which can be anything, just like naming a `live_loop`). 

Let's use the following command:

{% highlight ruby %}
use_sample_pack_as "/Users/sam/Desktop/Samples", :mySamples
{% endhighlight %}
...to name the sample pack as `:mySamples`. Now you can use the command: 
{% highlight ruby %}
sample :mySamples__loop_1
{% endhighlight %}
...to play the sample `loop_1.wav` from the folder. Please note that you have to use double underscore (__) in the syntax to tell the `sample` command you're referring to an external sample. 

Now you're free to mix external samples and samples from Sonic Pi's own library. Try playing the example below that uses four different instances of `live_loop` to play external and Sonic Pi's own samples. Please note that in the live_loop `:solenoid2` we're using a variable `samplename` to randomly select one of the samples from `hit_1.wav` to `hit_7.wav`.

{% highlight ruby %}
use_sample_pack_as "/Users/sam/Desktop/Samples", :mySamples
use_bpm 110

live_loop :solenoid1 do
  sample :mySamples__loop_4, beat_stretch: 4, amp: 2
  sleep 4
end

live_loop :kick do
  sample :bd_haus, rate: 0.8, amp: 2
  sleep 1
end

live_loop :solenoid2 do
  samplename = [:mySamples__hit_1, :mySamples__hit_2, :mySamples__hit_3, :mySamples__hit_4, :mySamples__hit_5, :mySamples__hit_6, :mySamples__hit_7].choose
  time = [0.25, 0.5, 0.75].choose
  sample samplename, amp: 1.5, rate: 2, pan: rrand(-0.8, 0.8)
  sleep time
end

with_fx :reverb do
  live_loop :solenoid3 do
    sleep 2
    sample :mySamples__hit_6, rate: (ring 0.5, 0.55, 0.6, 0.65).tick, amp: 1.5
    sleep 2
  end
end
{% endhighlight %}

{% include player.html filepath="/assets/audio/solenoid_1.mp3" %}
