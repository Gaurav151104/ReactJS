# Job Cards – React

A simple React project that displays job listings using **reusable components, props, and the `map()` function**.

## Features

* Displays multiple job cards
* Reusable `Card` component
* Uses React **Props** to pass job data
* Uses `map()` to render multiple cards
* Company logos
* Job title, level, salary and location
* Save and Apply buttons
* Bookmark icon using `lucide-react`

## Technologies Used

* React.js
* JavaScript
* JSX
* CSS
* Lucide React

## Project Structure

```text
src/
│
├── components/
│   └── Card.jsx
│
├── App.jsx
└── main.jsx
```

## How It Works

The job details are stored in an array inside `App.jsx`.

```jsx
const jobs = [
  {
    brandLogo: "...",
    name: "Google",
    datePosted: "10 weeks ago",
    post: "Software Engineer",
    tag: "Junior Level",
    pay: "$35/hour",
    location: "Mumbai, India"
  }
];
```

The `map()` function loops through the array and sends each job's data to the `Card` component using **props**.

```jsx
{jobs.map(function(elem) {
  return (
    <Card
      company={elem.name}
      pos={elem.post}
      tag1={elem.tag}
      tag2={elem.datePosted}
      pr={elem.pay}
      loc={elem.location}
      logo={elem.brandLogo}
    />
  );
})}
```

The `Card` component receives the data through `props`:

```jsx
<h3>{props.company}</h3>
<h2>{props.pos}</h2>
<img src={props.logo} />
```

### Data Flow

```text
jobs array
     ↓
   map()
     ↓
  Card Component
     ↓
    Props
     ↓
 Display Job Card
```

## Installation

Clone the project and install dependencies:

```bash
npm install
```

Install Lucide React:

```bash
npm install lucide-react
```

Start the development server:

```bash
npm run dev
```

## Key React Concepts

1. **Components** – Creates reusable UI.
2. **Props** – Passes data from parent to child.
3. **map()** – Renders multiple components from an array.
4. **JSX** – Writes HTML-like syntax inside JavaScript.
5. **Array of Objects** – Stores multiple job details.

## Author

Gaurav Nalavade
