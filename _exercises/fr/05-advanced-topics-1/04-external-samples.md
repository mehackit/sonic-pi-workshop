---
chapter: Techniques avancées 1
title: Samples externes
lang: fr
layout: exercise
---

Sonic Pi vient avec approximativement 164 samples que tu peux utiliser librement, mais il sait aussi jouer des samples externes. Par exemple, tu pourrais enregistrer quelque chose (comme ta propre voix ou des accords de guitare) et l'intégrer dans Sonic Pi pour l'insérer à ton morceau.

Premièrement, tu dois avoir des fichiers audio au format WAV placés dans un répertoire de ton disque dur. Dans les exemples suivants, nous utilisons un pack d'échantillons gratuits de *Mehackit*. Ce lot se nomme *Solenoid Samples 1* et tu peux le <a href="{{ "/assets/files/solenoid_samples_1.zip" | prepend: site.baseurl }}">télécharger ici</a>. Il contient 14 samples de sons et boucles qui ont été enregistrés à partir d'une installation sonore réalisée lors d'un atelier début 2016.

Après avoir téléchargé le pack et extrait les fichiers dans un répertoire, tu dois récupérer le chemin complet de ce répertoire. Par exemple, si tu as extrait les fichiers dans un répertoire nommé 'Samples' sur ton Bureau le chemin est certainement quelque chose comme&nbsp;:

* Windows: "C:/Users/sam/Desktop/Samples"
* Raspberry Pi, Linux et Mac: "/Users/sam/Desktop/Samples"

Rappelle-toi juste de remplacer 'sam' par ton propre nom d'utilisateur. Le pack d'échantillons contient les fichiers suivants&nbsp;: de `hit_1.wav` à `hit_7.wav` (coups de percussion) et de `loop_1.wav` à `loop_7.wav` (boucles rythmiques qu'il est recommandé de jouer avec l'option `beat_stretch`).

Tu peux les jouer directement avec la commande `sample` en spécifiant le bon chemin&nbsp;:

{% highlight ruby %}
sample "/Users/sam/Desktop/Samples/loop_1.wav", amp: 1.5
{% endhighlight %}

Si le chemin du sample était correct, tu dois pouvoir écouter le son `loop_1.wav`. Utilise juste ton propre chemin de fichier au lieu de celui indiqué dans ces exemples&nbsp;! C'est une façon simple et directe d'accéder et de jouer des samples. Mais tu aimerais probablement n'écrire qu'une seule fois dans ton code le chemin du répertoire et jouer les samples en ne précisant que leur nom. Tu peux déclarer une variable pour le chemin et l'utiliser avec la commande `sample`. Après `sample` tu saisis le nom de la variable contenant le chemin et puis le nom du fichier sample. Dans l'exemple ci-dessous, nous allons déclarer une variable nommée 'solenoids' pour stocker le chemin du répertoire contenant les samples. Quand tu vas le lancer, le sample `loop_4.wav` doit commencer à jouer et boucler&nbsp;:

{% highlight ruby %}
solenoids = "/Users/sam/Desktop/Samples/"
use_bpm 110

live_loop :solenoid1 do
  sample solenoids, "loop_4", beat_stretch: 4, amp: 2
  sleep 4
end
{% endhighlight %}

Maintenant tu peux utiliser des samples externes et des samples internes à Sonic Pi dans tes productions. Essaie de jouer l'exemple ci-dessous qui utilise quatre `live_loop` différentes pour jouer des samples externes et aussi un de Sonic Pi. Remarque aussi que dans la live_loop `:solenoid2` nous utilisons une variable `nomsample` pour choisir au hasard un des samples entre `hit_1.wav` et `hit_7.wav`.

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
  nomsample = ["hit_1", "hit_2", "hit_3", "hit_4", "hit_5", "hit_6", "hit_7"].choose
  time = [0.25, 0.5, 0.75].choose
  sample solenoids, nomsample, amp: 1.5, rate: 2, pan: rrand(-0.8, 0.8)
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
