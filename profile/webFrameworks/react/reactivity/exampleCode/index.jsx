import React from 'react';
import ReactDOM from 'react-dom/client';

// --------------------------------------------
// ## Naive React

// class NaiveReact {
//   static stateTable = [];
//   static initialRender = true;
//   static statePos = 0;
//   static dirtyState = false;

//   static useState(defaultState) {
//     let state;
//     if (this.initialRender) {
//       state = {
//         value: defaultState,
//         newValue: defaultState,
//         updateValue: (newState) => {
//           state.newValue = newState;
//           this.dirtyState = true;
//         },
//       };
//       this.stateTable.push(state);
//     } else {
//       state = this.stateTable[this.statePos++];
//     }

//     return [state.value, state.updateValue];
//   }

//   static render(component, root) {
//     root.render(component());
//     setInterval(() => {
//       if (this.dirtyState) {
//         this.initialRender = false;
//         this.statePos = 0;
//         this.updateState();
//         root.render(component());
//         this.dirtyState = false;
//       }
//     }, 100);
//   }

//   static updateState() {
//     this.stateTable.forEach((state) => {
//       if (state.value !== state.newValue) {
//         state.value = state.newValue;
//       }
//     });
//   }
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// NaiveReact.render(ColorPicker, root);

// --------------------------------------------
// ## Simple React

// let color;
// let colorNext;

// setInterval(() => {
//   if (colorNext && color !== colorNext) {
//     color = colorNext;
//     root.render(ColorPicker());
//   }
// }, 50);

// React.useState = (defaultValue) => {
//   color = color || defaultValue;
//   const updateColor = (newColor) => (colorNext = newColor);
//   return [color, updateColor];
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(ColorPicker());

// --------------------------------------------
// ## Normal React

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ColorPicker />);

function ColorPicker() {
  const [color, updateColor] = React.useState('#737AB0');

  function onChange(e) {
    updateColor(e.target.value);
  }

  return (
    <div>
      <h1>Pick a color</h1>
      <Result selectedColor={color} />

      <p>
        <span>Pick a color: </span>
        <input type="color" onChange={onChange} value={color} />
      </p>
    </div>
  );
}

function Result({ selectedColor }) {
  return (
    <div>
      <p>
        Your color: <span style={{ color: selectedColor }}>{selectedColor}</span>
      </p>
    </div>
  );
}
