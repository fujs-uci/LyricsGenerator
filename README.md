# Lyrics Generator
## Goal
Launch a web app where users can use machine learning to generate unique song lyrics.

## Approach
Launch a single page web app with React.js onto Firebase.
Launch a Django backend service on Heroku.
Launch a RNN notebook on AWS Sagemaker

The React.js app will send requests to the Django API. The Django API will then send the parameters to the RNN notebook. Responses from the RNN notebook will be stored to a Cloud Firestore instance when it passes through the Django API and before it is served to the React.js app. The dataset will be stored on AWS S3 for the RNN notebook to access.

The Django backend will act as a buffer as well as give admin capabilities to the entire system.

## Features

1. Generate lyrics with a character seed and the option selection of musical genres and artists
2. Admin console to collect generated lyrics and view metadata about the site.


## Future Features

1. Implement a second machine learning algorithm.
