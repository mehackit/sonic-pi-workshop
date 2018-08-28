---
chapter: Introduction
title: Introduction
lang: en
layout: exercise
---

Sonic Pi is an open-source programming environment, designed to explore and teach programming concepts through the process of creating new sounds. It's a free live coding synth for everyone created by Sam Aaron at the University of Cambridge Computer Laboratory. You can use Sonic Pi to program, compose and perform in classical and contemporary styles ranging from Canons to Dubstep.

This tutorial guides you through the basics and more of Sonic Pi. At the end of this tutorial you'll be able to create something like this:

{% include player.html filepath="/assets/audio/groove.mp3" %}

Or something like this:

{% include player.html filepath="/assets/audio/amen.mp3" %}

Sonic Pi is all about exploring. There are no mistakes, there are only discoveries. And most of all, it's about having fun. So remember this: have fun, explore and hack away!

## Open Sonic Pi

If you don't have Sonic Pi installed, go to <a href="http://sonic-pi.net/">sonic-pi.net</a>, download and install Sonic Pi. It is available for Windows, OS X and Linux operating systems.

Next, fire up Sonic Pi! Let's see how it looks like.

This is the Sonic Pi interface; it has three main windows. The largest one is for writing your code, and we call it the Programming Panel. There is also an log panel that displays information about your program as it runs. When you click on the help button at the top of the window, the third panel appears along the bottom displaying help documentation. This contains information about the language for programming Sonic Pi as well as different synth sounds, samples, and much more. There are also plenty of ready-to-go examples that you can try and use!

<img src="{{ "/assets/img/interface.png" | prepend: site.baseurl}}">
<p class="center"><small><i>Sonic Pi interface</i></small></p>

## Play a note

Let’s start with programming Sonic Pi to play a note. Select the `Buffer 0` tab and type:

{% highlight ruby %}
play 60
{% endhighlight %}

Press **Run** from the upper left corner. Can you hear a beep?

Try different values. Write for example `play 50` or `play 70`. How does the sound change?

Now try to write `pley 60` and click run. What happens?

> This is an example of a bug in your code. In later activities, if the error panel displays text you will know that you have a bug that you need to fix. It could be that you have misspelt a word like `play`.

The numbers you used are _MIDI notes_. MIDI is a useful way to compose and is a useful tool for quickly
testing your notes and adjusting them by lowering their value (making your note lower) or increasing it, (making
the pitch higher). Sonic Pi is familiar with both MIDI note numbers (values between `0` and `127`) and traditional musical notation (such as `:C4`, `:Eb3` or `:G5`).
