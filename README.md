# Simon Game Project Overview

## Project Description
The Simon game is a classic electronic memory game where players must replicate a sequence of colored buttons that are randomly generated. It challenges players' memory and pattern recognition skills.

## Technologies Used
- **HTML**: Provides the structure and content of the game interface.
- **CSS**: Styles the HTML elements for a visually appealing user interface.
- **JavaScript**: Implements the game logic and handles user interactions.
- **jQuery**: Used for DOM manipulation and event handling in JavaScript.

## Files and Structure
- **index.html**: Contains the main structure of the webpage.
  - Defines the game title and includes the necessary CSS and JavaScript files.
  - Uses `div` elements styled as colored buttons (`green`, `red`, `yellow`, `blue`) for user interaction.
  
- **styles.css**: Defines the visual appearance of the game interface.
  - Sets the background color, text alignment, and font styles.
  - Styles the colored buttons with specific colors and border radius.
  - Implements animations for button press (`pressed` class) and game-over state (`game-over` class).

- **game.js**: Implements the game logic and user interactions using JavaScript.
  - Generates a random sequence of button presses (`gamePattern`) for players to mimic.
  - Handles user clicks on buttons (`btn` class) and compares them against `gamePattern`.
  - Plays sound effects (`playsound` function) corresponding to each button press.
  - Manages game flow, including starting a new game (`nextSequence` function), checking user input (`checkAnswer` function), and restarting after game-over (`startover` function).

## Responsive Design
- **Media Queries**: Adjusts the game layout for different screen sizes.
  - Increases button size and adjusts font size for smaller screens (`@media (max-width: 380px)`).
  - Enlarges button size further for larger screens (`@media (min-width: 520px)`).

## Fonts
- **Press Start 2P**: Google Font used for the game title to evoke a retro gaming aesthetic.

## Game Flow
1. **Initial State**: Displays "Press Any Key to Start" (`h1` with id `level-title`).
2. **Gameplay**: Generates a sequence of button flashes and sounds (`gamePattern`) for the player to replicate.
3. **User Interaction**: Allows players to click on colored buttons to match the sequence.
4. **Feedback**: Provides visual and auditory feedback for correct and incorrect sequences.
5. **Game Over**: Displays "Game Over, Press Any Key to Restart" and restarts the game upon keypress.
