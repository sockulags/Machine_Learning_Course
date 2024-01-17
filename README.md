# No black box learning

**Table of content:**
- [Data Collection](#data-collection)
  - [Data Creator - SketchPad](#data-creator-drawing)
    - [How to Use](#how-to-use)
    - [Code Explanation](#code-explanation)
  - [Working with Data](#working-with-data)
---

<a id=data-collection></a>
## Data Collection

<a id=data-creator-drawing></a>
### Data Creator - SketchPad
Drawing application is designed to facilitate the collection of labeled drawing data for machine learning tasks. It provides a simple sketch pad interface for users to draw various objects, helping to build a diverse dataset for training models.

<a id=how-to-use></a>
### How to Use
1. Enter your name in the provided input field.
2. Click the "START" button to begin the drawing session.
3. Follow the instructions to draw an object indicated by the label.
4. Click "NEXT" to proceed to the next object. Repeat until all objects are drawn.
5. After completing all drawings, the "SAVE" button will allow you to download the collected data in a JSON file.

<a id=code-explanation></a>
### Code Explanation
The JavaScript code is organized into methods for better clarity and modularity. Here's a breakdown of the key methods:

#### `start()`
This method is called when the user clicks the "START" button. It checks if the user has entered their name, hides the name input field, makes the sketch pad visible, and sets up the drawing instructions for the first object. It also handles the transition to the next object when the user clicks "NEXT."

#### `next()`
Triggered by the "NEXT" button, this method checks if the user has drawn anything, saves the paths of the current drawing in the data object, resets the sketch pad, and updates the instructions for the next object. If all objects are drawn, it hides the sketch pad and prepares for saving.

#### `save()`
This method is called when the user clicks the "SAVE" button. It creates a downloadable JSON file containing the collected data, such as the student's name, session timestamp, and the drawings of different objects.

#### `draw.path(ctx, path, color)`
A utility function in `draw.js` for drawing a single path on the canvas with a specified color.

#### `draw.paths(ctx, paths, color)`
A utility function in `draw.js` for drawing multiple paths on the canvas with a specified color.

#### `SketchPad` class
- `constructor(container, size)`
  Initializes the SketchPad class with a canvas of the specified size, a background color, and a shadow. It also adds an undo button to the provided container.

- `reset()`
  Resets the sketch pad by clearing paths and redrawing the canvas.

- `#addEventListeners()`
  Adds event listeners for mouse and touch events to handle drawing, undoing, and redrawing.

- `#redraw()`
  Redraws the canvas with the current paths, updating the undo button's state.

- `#getMouse(evt)`
  Converts mouse or touch event coordinates relative to the canvas.

<a id="working-with-data"></a>
### Working with Data
