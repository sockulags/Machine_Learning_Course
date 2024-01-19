# No black box learning

**Table of content:**
- [Data Collection](#data-collection)
  - [Data Creator - SketchPad](#data-creator-drawing)
    - [How to Use](#how-to-use)
    - [Code Explanation](#code-explanation)
  - [Working with Data](#dataset-generation)
    - [Code Insights](#code-explanation-2)
  - [Data Visualizer](#data-visualizer)
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
  It's the party planner for the sketch pad, adding listeners for mouse and touch events to keep things smooth – drawing, undoing, and redrawing.

- `#redraw()`
  Redraws the canvas with the current paths, updating the undo button's state.

- `#getMouse(evt)`
  Converts mouse or touch event to coordinates relative to the canvas.


<a id=dataset-generation></a>
## Data Crafting

The dataset generation script is the maestro orchestrating raw data files into a comprehensive dataset for machine learning. Here's a breakdown of its symphony:

1. **Data Retrieval:**
     Collects raw data files from the designated directory (`constants.RAW_DIR`).
  
2. **Data Parsing:**
     Parses each file to extract essential information about sessions, students, and their drawings.
  
3. **JSON Mastery:**
     Crafts individual JSON files for each drawing, neatly stored in the `constants.JSON_DIR` repository.
  
4. **Visual Artistry:**
     Creates PNG images for each drawing, elegantly residing in the `constants.IMG_DIR` gallery.
  
5. **Sample Documentation:**
    Generates a comprehensive `samples.json` file detailing insights about each sample within the dataset.
  
6. **JavaScript Scripting:**
     Composes a JavaScript file (`samples.js`) to encapsulate the essence of the dataset.

<a id=code-explanation-2></a>
### Code Insight

#### Constants Module
The `constants` module serves as the compass, defining the paths and directories crucial to the dataset generation process.

#### Draw Module
The Draw module is the versatile artist's toolkit. It gracefully handles sketching duties in both the browser on an HTML canvas and the Node.js environment (with the addition of the `canvas` dependency).

#### Utils Module
The `utils` module introduces practicality into the script. Noteworthy functions include `formatPercent` for refining percentage displays and `printProgress` for keeping the console informed.

#### Dependency Installation

Before launching the dataset generation script, ensure the necessary dependencies, including the `canvas` module, are in place. Node.js lacks inherent canvas support, so the `canvas` module bridges the gap and facilitates interactions with the HTML canvas API.

Install the dependencies by executing the following command in your project directory:

```bash
npm install canvas
```

This command handles the installation of the canvas module and its dependencies, empowering your Node.js script with canvas-related capabilities.

### Running the Script

Post-dependency installation, execute the script with the following command:

```bash
node path/to/dataset_generator.js
```

The script meticulously processes raw data files, unveiling the dataset in the designated directories. For the dataset I utilized, refer to [this repository](https://github.com/gniziemazity/drawing-data).🚀✨


## Data Visualizer

Added this `groupBy` function in the `utils.js` file. The groups each sample by id, meaning one group contains drawings from the one person. Here is the code for it: 
```js
utils.groupBy=(objArray,key)=>{
    const groups={};
    for(let obj of objArray){
        const val=obj[key];
        if(groups[val]==null){
            groups[val]=[];
        }
groups[val].push(obj);
    }
    return groups;
}
```

As you can we are grouping them by a key, in this case _"student_id"_ grouping each drawing by that key. Next up we are creating a table. 

### Adding a disply-file.

In this step we created another js-file, which we can re-use for later when showing other data. This file has a function that creates rows in a container, and it takes `container`, `name` and `samples` as parameters. 

Each row will start with a name, an then each column of that row after the name will have samples in it. Like this: 

![Image of samples](/readme_img/screenshot_dataviewer.png)

