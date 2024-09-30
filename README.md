# Memory Game

This project is a Memory Game designed to help users improve their memory in a fun, engaging, and interactive way. It offers users a variety of game modes, themes, and difficulty levels, encouraging both casual and competitive play. The game is built for accessibility, ease of use, and is designed to be enjoyed on multiple platforms.

## Table of Contents

1. [UX (User Experience)](https://www.notion.so/Learning-67110c3bede5480fa9c0ac8292686399?pvs=21)
2. [Features](https://www.notion.so/Learning-67110c3bede5480fa9c0ac8292686399?pvs=21)
    - [Existing Features](https://www.notion.so/Learning-67110c3bede5480fa9c0ac8292686399?pvs=21)
    - [Planned Features](https://www.notion.so/Learning-67110c3bede5480fa9c0ac8292686399?pvs=21)
3. [Technologies Used](https://www.notion.so/Learning-67110c3bede5480fa9c0ac8292686399?pvs=21)
4. [Testing](https://www.notion.so/Learning-67110c3bede5480fa9c0ac8292686399?pvs=21)
5. [Bugs and Issues](https://www.notion.so/Learning-67110c3bede5480fa9c0ac8292686399?pvs=21)
6. [Future Enhancements](https://www.notion.so/Learning-67110c3bede5480fa9c0ac8292686399?pvs=21)
7. [Credits](https://www.notion.so/Learning-67110c3bede5480fa9c0ac8292686399?pvs=21)
    - [Media](https://www.notion.so/Learning-67110c3bede5480fa9c0ac8292686399?pvs=21)
    - [Acknowledgements](https://www.notion.so/Learning-67110c3bede5480fa9c0ac8292686399?pvs=21)
8. [License](https://www.notion.so/Learning-67110c3bede5480fa9c0ac8292686399?pvs=21)

## UX

### Target Audience

This game is aimed at:

- Individuals who want to improve their memory in an enjoyable, gamified environment.
- Casual gamers looking for a simple and fun challenge.
- Competitive players who want to challenge others in real-time memory battles.

### Design Goals

- **Accessibility**: The game is designed to be easily playable on all platforms, including desktop, mobile, and tablet.
- **Casual Gaming**: A relaxed, intuitive design ensures that players can quickly jump into the game without a steep learning curve.
- **Competitive Edge**: A multiplayer mode is planned, allowing users to challenge each other in real time, adding a competitive aspect to the memory challenge.
- **Themes and Customization**: Various themes like colors and emojis are included, with options to unlock new levels as players progress.

### User Stories

- **As a casual player**, I want to be able to start the game easily, without having to sign up or log in.
- **As a competitive player**, I want to challenge my friends in real time and see who has the better memory.
- **As a player with accessibility needs**, I want the game to have features like colorblind modes and larger text to enhance my gameplay experience.
- **As a frequent player**, I want daily challenges and achievements to keep me engaged and coming back.

## Features

### Existing Features

- **Game Page**: A visually appealing interface where users can play the memory game.
- **Menu Options**: Players can choose from different game modes and themes (e.g., colors, emojis).
- **JavaScript Logic**: Handles game functionality such as randomizing the board, tracking time, and score.
- **Single-player Mode**: Players can play the game offline and challenge themselves with different difficulty levels.

### Planned Features

- **Real-time Multiplayer Mode**: A competitive mode where two players can compete to finish the game faster while tracking their wrong guesses.
- **Scoring System**: Rewards based on speed, accuracy, and the number of incorrect guesses during a game.
- **Leaderboard**: A global leaderboard where players can compare their scores, as well as a friends-only leaderboard.
- **Sound Effects and Music**: Background music and sound effects for match success and failure, with an option to mute.
- **Offline Play**: Single-player mode can be played offline.
- **Daily/Weekly Challenges**: New challenges to keep players engaged and returning to the game.
- **Unlockable Levels**: As players progress, more levels and themes are unlocked.

## Technologies Used

- **HTML**:
    - Provides the structure for the game’s interface, ensuring the game is accessible and easy to use.
- **CSS**:
    - Responsible for the layout and styling of the game, including making it responsive on different devices.
- **JavaScript**:
    - Handles the core functionality of the game, including gameplay mechanics (e.g., randomizing cards, tracking score and time).
- **WebSockets/Firebase (Planned)**:
    - Will be used for real-time multiplayer mode to synchronize gameplay between players.
- **Responsive Design**:
    - The game is built to work on different devices (desktops, tablets, smartphones).

## Testing

### Manual Testing

The following tests have been conducted:

1. **Pop-up Menu**:
    - Verified that the pop-up menu correctly displays different game modes and themes.
    - Verified that instructions are clear and concise.
2. **Single-player Gameplay**:
    - Checked that cards are randomized and can be flipped.
    - Verified that the score updates correctly when matches are made or when the user makes a mistake.
    - Tested the timer functionality to ensure it starts and stops as intended.
3. **Responsiveness**:
    - Ensured that the game layout adjusts appropriately on different screen sizes (desktop, tablet, mobile).
4. **Sound and Mute Option**:
    - Verified that the mute option works and that background music and sound effects can be turned off.

### Further Testing

- **Multiplayer Mode**: Will be tested once real-time functionality is implemented.
- **Leaderboard and Scoring System**: These features will be tested after full backend integration.

## Bugs and Issues

- An issue with loading settings file: `file:///workspace/Memory-game/.vscode/settings.json`. This needs further investigation.
- Occasional lag on mobile devices when flipping cards quickly. Optimization for mobile devices is underway.

## Future Enhancements

1. **Power-ups**:
    - Future versions will include power-ups such as hints or the ability to reshuffle cards mid-game.
2. **Accessibility**:
    - A colorblind mode and larger text options will be implemented to make the game more accessible to a broader audience.
3. **App Development**:
    - After refining the web version, the game will be developed as a mobile app using frameworks like **Flutter** or **React Native** to make it available on both Android and iOS.
4. **Monetization**:
    - The game will feature non-intrusive ads with the option for a one-time purchase to remove ads permanently.

## Credits

### Media

- All emojis and colors used in the game are coded directly using Unicode and CSS, eliminating the need for external image loading.

### Acknowledgements

- Special thanks to the various online resources and communities that helped guide this project, including documentation for HTML, CSS, and JavaScript, as well as helpful tutorials on multiplayer game development.

## License

This project is open-source and licensed under the MIT License. You are free to modify and distribute it, provided that appropriate credit is given.