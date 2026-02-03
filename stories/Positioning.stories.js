import "../styles/layouts/positioning.css"

export default {
  title: 'Layout/Positioning',
};

export const AbsoluteInsideRelative = () => `
  <div class="container">
    Container
    <div class="absolute-box">Absolute</div>
  </div>
`;
export const fixedInsideRelative = () => `
  <div class="container">
    Container
    <div class="fixed-box">Fixed</div>
  </div>
`;
export const relativeInsideRelative = () => `
  <div class="container">
    Container
    <div class="relative-box">relative</div>
  </div>
`;
export const stickyInsideRelative = () => `
  <div class="container">
    Container
    <div class="sticky-box">sticky</div>
  </div>
`;
export const staticInsideRelative = () => `
  <div class="container">
    Container
    <div class="static-box">static</div>
  </div>
`;
