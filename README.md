# Pinching Pennies - AWS Cloud Expense Tracker

Pinching Pennies is a user and mobile friendly expense tracker app designed for users between the ages of 16-25. The app is built using React Native, with a clean, elegant, and classy design. It leverages AWS Amplify and DynamoDB for user authentication and data management, making it both user-friendly and powerful for real-world usage.

## Table of Contents

- [Features](#features)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Setup and Installation](#setup-and-installation)
- [Amplify Configuration](#amplify-configuration)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication**: Sign up, log in, and third-party sign-in support with AWS Cognito.
- **Expense Tracking**: Add, view, and manage expenses stored in DynamoDB.
- **Responsive Design**: Clean and user-friendly UI, tailored for youth.
- **Cloud-Powered**: Leveraging AWS services for robust backend support.

## Architecture

The project is designed with a serverless architecture using AWS services:

- **AWS Amplify**: Manages user authentication, API, and interaction with DynamoDB.
- **AWS Cognito**: Provides user authentication and authorization.
- **AWS DynamoDB**: NoSQL database for storing expense data.
- **React Native**: Frontend for mobile user experience.

## Tech Stack

- **Frontend**: React Native
- **Backend**: AWS Amplify, AWS Cognito, AWS DynamoDB
- **Languages**: JavaScript, Node.js

## Setup and Installation

Follow these steps to set up and run the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/pinching-pennies.git
   cd pinching-pennies
   ```

