import "../styles/layouts/box-model.css"
export default {
  title: 'Layout / Box Model',
   tags:  ["autodocs"],
  argTypes: {
    boxSizing: {
      control: 'radio',
      options: ['content-box', 'border-box'],
    },
    padding: {
      control: { type: 'range', min: 0, max: 40, step: 4 },
    },
    borderWidth: {
      control: { type: 'range', min: 0, max: 20, step: 2 },
    },
    margin: {
      control: { type: 'range', min: 0, max: 40, step: 4 },
    },
  },
};

export const Playground = ({
  boxSizing,
  padding,
  borderWidth,
  margin,
}) => {
  return `
    <div class="box-model-wrapper">
      <div class="box-model-container">
        <div class="box-model-label">Demo Box</div>
        <div
          class="box-model-box"
          style="
            --box-sizing: ${boxSizing};
            --padding: ${padding}px;
            --border-width: ${borderWidth}px;
            --margin: ${margin}px;
          "
        >
          200 × 120
        </div>
      </div>
    </div>
  `;
};

Playground.args = {
  boxSizing: 'content-box',
  padding: 16,
  borderWidth: 4,
  margin: 16,
};
