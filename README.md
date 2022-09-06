<img width="1268" alt="tf1_interview_integration" src="https://user-images.githubusercontent.com/37420129/188679937-2bac6eab-4f07-4371-933e-d201c2bb7a73.png">



# Questions sur l’implémentation

### Le code est-il prêt pour être déployé en production ?

Non car il manque encore beaucoup de contexte pour faire l’implémentation correctement et il faut s’assurer de la qualité du délivrable. Il manque tout d’abord les tests. Je serai parti sur la librairie React Testing Library avec comme stratégie de test celle du trophée comme préconisée par Kent C. Dodds. Il faut ensuite passer par une phase de code review et de QA. Enfin s’assurer que tout est bon au niveau de la pipeline CI/CD afin de pouvoir mettre en production.

### Problématiques ou remarques sur le test ?

Implémenter une maquette Figma sans discussion au préalable avec un PM, des designers et d’autres développeurs abouti rarement à ce qui est vraiment attendu. En amont, il faut une Design Review puis c’est un échange constant jusqu’à la mise en production. 

Mes questions sur l’impémentation:

- Qu’est-ce qu’un “programme” d’un point de vue métier ?
- Il y a t’il un Design System en place ?
- Le carousel sera surement une composante d’une page ou d’un écran, quelle est cette page ?
- Quel programme charger et de quelle manière doit-on charger les programmes ? Par exemple du plus récent au plus ancien ?
- Il n’y a pas de format mobile à la maquette ?
- Quel est l’attendu au niveau du responsive du carousel ? Breakpoint design ou fluid design ?
- Le texte en dessous de l’image d’un programme est-il le titre ou une courte description ?
- Quel est le comportement voulu lors du click sur un des chevrons ? Doit-on charger une toute nouvelle liste ou faire un décalage ?
- Il y a t’il un système de défilement automatique ?
- Est-ce possible de ne pas avoir 6 items ?
- Comment sont gérés les différents états des composants ? (Loading et Error)
- Qu’en est t’il des intéractions sur les boutons cliquables ? Le hover, effet d’animation ?
- Que se passe t-il si on click sur le bouton + ?
- Quel niveau du WCAG doit-on respecter lors de l’implémentation de la maquette ?
- Dans le jeu de données, il y a des images qui ne fonctionnent pas, des alt trop long ou vide. Le jeu de données est peut-être trop loin de la réalité qui peut soit créer des problèmes non existants comme un alt trop long ou sinon ne pas avoir assez confiance en ce qu’on test
- Autre remarque: J'ai eu un peu de mal à utiliser le jeu de données et m'y retrouver dedans

### Choix des technos

Je suis parti sur un CRA avec TS. Puis j’ai installé graphql et apollo (première utilisation de ces libs). Je n’ai pas ressenti le besoin de plus, j’ai utilisé du CSS classique.

Si je devais pousser beaucoup plus loin, je serai surement parti sur une lib CSS in JS et une librairie qui gère des problématiques d'accessibilité comme Reach UI ou Radix.

Pour les tests, un Jest avec RTL + MSW.

J’aurai tenté de séparer la couche graphql de mes composants pour les rendre plus flexibles.

D’expérience il est souvent difficile de convaincre tout le monde sur une architecture de dossier React, je m’inspire de React bulletproof. (https://github.com/alan2207/bulletproof-react)

Quelques fois l’API est en erreur car trop de requêtes: “hasura cloud limit of 60 requests/minute exceeded”.

----
----


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
