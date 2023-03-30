Projet Task Turtle
(aka task rabbit but slower)

A rendre avant le 15/5/2023

Projet à réaliser en binôme

On veut mettre en œuvre un système de mise en relation entre des personnes capables de réaliser certaines tâches ou travaux et d’autres qui ont besoin de services. 

V1

Dans un premier temps, on peut implanter l’application comme une application web normale, sans blockchain. On utilisera ReactJS pour le front et Flask pour le back (ou NodeJS si vous préférez).

Une personne peut enregistrer une tâche à effectuer avec sa description et le prix offert.
Une autre personne peut accepter la tâche.
Lorsque la tâche est réalisée, le paiement est réalisé en dehors de la plateforme. Vous n’avez pas à le prendre en compte (sauf pour valider éventuellement qu’il a été fait)

Le demandeur et l’exécuteur peuvent noter la transaction ce qui permettra de construire une réputations aux participants. 

Dans une première version, vous pouvez vous passer d’authentification. Il suffit de donner son nom pour poster une tache et proposer son aide, sans vérification. 

Si ça vous amuse, vous pouvez mettre en place un mécanisme d’authentification simple par la suite.

V2

On veut utiliser une blockchain pour s’assurer que les transactions sont bien valides et ne sont pas modifiées après coup. Ecrivez une première version d’un contrat solidity gérant la mise en relation, sans vous préoccuper du paiement.

V3

On veut maintenant utiliser une crypto-monnaie pour assurer les paiements. Au moment où une personne accepte une tâche, on débite le porte monnaie de la personne demandeuse du montant de la transaction et on met ce montant dans un porte monnaie spécial (escrow wallet). Lorsque la tâche est réalisée, l’argent est transféré dans le porte monnaie de la personne qui a réalisé le travail. Il faut pour cela que celui qui a demandé le travail libère l’argent en validant le fait que la tâche à été réalisée.

V4

La V3 suppose que tout se passe bien. Proposez maintenant des solutions pour gérer les problèmes qui peuvent arriver (tâche non réalisée, tâche mal réalisée).


