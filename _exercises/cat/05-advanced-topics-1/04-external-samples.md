---
chapter: Temes avançats 1
title: Samples externs
lang: cat
layout: exercise
---

Sonic Pi ve amb aproximadament 73 mostres sonores que podeu usar i reproduir lliurement, però també té suport per a usar samples externs. Per exemple, potser us agradaria gravar alguna cosa (com la pròpia veu o una guitarra) i tenir-ho en Sonic Pi per a usar-ho en la cançó.

Primer, haureu de tenir alguns samples d'àudio en format WAV localitzats en una carpeta en el disc dur. En els següents exemples, estem usant un paquet de samples lliures de *Mehackit*. Es diuen *Solenoid Samples 1* i podeu descarregar-ho <a href="{{ "/assets/files/solenoid_samples_1.zip" | prepend: site.baseurl }}">ací</a>. Conté 14 samples de reproducció única i bucles que van ser guardats d'una instal·lació de so cinètic que vam crear en un taller a principis de 2016.
Una vegada que hageu descarregat i extret els arxius de la carpeta, haureu de comprovar la ruta d'aquest arxiu. Per exemple, si extraieu els arxius a una carpeta anomenada ‘Samples’ en l’Escriptori, la ruta d'arxiu serà segurament la següent:


* Windows: "C:/Users/sam/Desktop/Samples" 
* Raspberry Pi, Linux ja Mac: "/Users/sam/Desktop/Samples" 

Muistathan korvata käyttäjänimen 'sam' omalla käyttäjänimelläsi, jos käytit ylläolevan näköistä hakemistopolkua. Samplepaketti sisältää seuraavat äänitiedostot: `hit_1.wav` ... `hit_7.wav` (perkussioiskuja) ja `loop_1.wav` ... `loop_7.wav` (luuppaavia rumpubiittejä, joita suositellaan käytettäväksi samplerin parametrin `beat_stretch` kanssa).

Aneu amb compte d’escriure el vostre nom d'usuari en comptes de ‘sam’. El paquet del sample conté els següents arxius: de `hit_1.wav` a `hit_7.wav` (percussió) i de `loop_1.wav` a `loop_7.wav` (ritmes en bucle que es recomanen per a reproduir-los amb l’opció `beat_stretch` del sample).
Ara podeu tocar-los directament amb l’ordre `sample` usant la ruta d'arxiu correcta:

{% highlight ruby %}
sample "/Users/sam/Desktop/Samples/loop_1.wav", amp: 1.5
{% endhighlight %}

Si la ruta d'arxiu està configurada correctament per l’ordre `sample` hauríeu d'escoltar ara el so `loop_1.wav`. Només cal que recordeu que heu d’utilitzar la ruta correcta de l'arxiu en lloc de la que es mostra en els exemples! És una forma directa d'accedir i tocar samples. No obstant açò, probablement vulgueu escriure la ruta d'arxiu una sola vegada en el codi i tocar els samples només referint-vos als seus noms d'arxius. Podeu nomenar una variable per a la ruta d'arxiu i usar-la conjuntament amb el comando sample. Després de `sample` podeu introduir el nom de la variable que conté la ruta d'arxiu i després el nom del `sample`. Nomenarem una variable per a la ruta de l'arxiu anomenada solenoids en l'exemple d'a baix. Quan ho executeu, el sample `loop_4.wav` ha de començar a tocar i fer un bucle:

{% highlight ruby %}
solenoids = "/Users/sam/Desktop/Samples/"
use_bpm 110

live_loop :solenoid1 do
  sample solenoids, "loop_4", beat_stretch: 4, amp: 2
  sleep 4
end
{% endhighlight %}

Ara sou capaços d'usar samples externs i samples de la pròpia llibreria de Sonic Pi en les produccions. Intenteu tocar l'exemple de més avall que usa quatre exemples diferents de `live_loop` per a tocar samples externs i propis de Sonic Pi. Tingueu en compte que en el `live_loop :solenoid2` estem usant una variable samplename per a seleccionar de forma aleatòria un arxiu dels samples des de `hit_1.wav` fins a `hit_7.wav`.


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
