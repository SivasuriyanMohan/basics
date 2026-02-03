export default {
  title: 'Layout / Display Types',
  tags:["autodocs"],
  argTypes: {
    display: {
      control: 'radio',
      options: ['block', 'inline', 'inline-block'],
    },
    width: {
      control: { type: 'range', min: 50, max: 300, step: 25 },
    },
    height: {
      control: { type: 'range', min: 30, max: 150, step: 10 },
    },
  },
};

export const Playground = ({ display, width, height }) => {
  return `
    <div class="display-wrapper">
      <div class="display-container">
        <div
          class="display-box"
          style="
            --display: ${display};
            --width: ${width}px;
            --height: ${height}px;
          "
        >
          Display Box
        </div>

        <span class="display-sibling">
          Sibling Element
        </span>
      </div>
    </div>
  `;
};

Playground.args = {
  display: 'block',
  width: 200,
  height: 80,
};
