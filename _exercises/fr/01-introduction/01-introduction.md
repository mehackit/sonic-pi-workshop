---
chapter: Introduction
title: Introduction
lang: fr
layout: exercise
---

Sonic Pi est un environnement de programmation open-source, conçu pour découvrir et apprendre les concepts de la programmation en créant de nouveaux sons. C'est un synthétiseur dédié au live coding, gratuit et pour tous créé par Sam Aaron du Laboratoire d'Informatique de l'Université de Cambridge. Tu peux utiliser Sonic Pi pour programmer, composer et jouer différents styles de musique, classique ou contemporaine, allant du Canon au Dubstep.

Ce tutoriel t'apprend les bases de Sonic Pi et même un peu plus. A la fin tu seras capable de créer quelque chose comme ça&nbsp;:

{% include player.html filepath="/assets/audio/groove.mp3" %}

Ou quelque chose comme ça&nbsp;:

{% include player.html filepath="/assets/audio/amen.mp3" %}

Sonic Pi est un outil d'exploration. Il n'y a pas d'erreur, il n'y a que des découvertes. Et surtout, c'est du plaisir. Donc souviens-toi de ceci&nbsp;: prends du plaisir, explore et bidouille&nbsp;!

## Démarrer Sonic Pi

Si tu n'as pas Sonic Pi installé, va sur <a href="http://sonic-pi.net/">sonic-pi.net</a>, télécharge et installe Sonic Pi. Il est disponible pour Windows, OS X et les systèmes d'exploitation Linux.

Ensuite, lance Sonic Pi ! Regardons à quoi il ressemble.

Voici l'interface de Sonic Pi; il y a trois fenêtres principales. La plus grande est pour écrire ton code, et nous l'appelerons la Zone d'Edition. Il y a aussi une zone de trace qui affiche des informations sur le programme lorsqu'il tourne. Quand tu cliques sur le bouton Help en haut de la fenêtre, la troisième zone apparait en bas pour afficher la documentation. Elle contient des informations sur le langage de programmation de Sonic Pi ainsi que sur les différents synthétiseurs, les samples, et bien plus. Il y a aussi plein d'exemples prêts à l'emploi que tu peux essayer et utiliser&nbsp;!

<img src="{{ "/assets/img/interface_fr.png" | prepend: site.baseurl}}">
<p class="center"><small><i>L'écran de Sonic Pi</i></small></p>

## Jouer une note de musique

Commençons à programmer Sonic Pi pour jouer une note. Sélectionne l'onglet `Buffer 0` et tape&nbsp;:

{% highlight ruby %}
play 60
{% endhighlight %}

Appuis sur **Run** dans le coin en haut à gauche. Entends-tu un bip&nbsp;?

Essaie d'autres valeurs. Par exemple, écris `play 50` ou `play 70`. Comment le son est-il modifié&nbsp;?

Maintenant essais d'écrire `pley 60` et clique sur Run. Que se passe-t-il&nbsp;?

> C'est un exemple de bug dans ton code. Par la suite, si la zone d'erreur affiche un texte tu sauras que tu as un bug qu'il faut que tu corriges. Il se peut que tu aies mal écrit un mot comme `play`.

Les nombres que tu as utilisés sont des _notes MIDI_. Le MIDI facilite la composition et c'est un outil rapide pour tester tes notes et les ajuster en diminuant leurs valeurs (les notes seront plus basses) ou en les augmentant (la tonalité sera plus haute). Sonic Pi utilise aussi bien les nombres des notes MIDI (entre `0` et `127`) que la notation anglaise de la musique (comme `:C4`, `:Eb3` ou `:G5`).
