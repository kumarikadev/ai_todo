# Todo App

A simple todo list built with plain HTML, CSS and JavaScript. No frameworks or build step.

## Features

- **Add tasks:** type a task and press Enter or click **Add**. Blank entries are ignored.
- **Mark tasks done:** tick the checkbox to strike a task through; untick to undo.
- **Remove tasks:** click the red **✕** next to a task.
- **Task count:** shows how many tasks are still remaining.
- **Saved automatically:** tasks are stored in the browser's `localStorage`, so they survive a page refresh.

## Project structure

| File         | Purpose                                      |
| ------------ | -------------------------------------------- |
| `index.html` | Page markup: input form and task list        |
| `style.css`  | Styling for the card, form and task items    |
| `script.js`  | Adding, toggling, removing and saving tasks  |

## Running it

Open `index.html` directly in a browser, or serve the folder locally:

```bash
python -m http.server 5500
```

Then visit http://localhost:5500.
