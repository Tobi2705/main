 // JavaScript
 const createCube = () => {
    const template = document.getElementById("cube-template");
    const fragment = document.importNode(template.content, true);
    return fragment;
    }
    const getDistance = (state, rotate) =>
    ["x", "y"].reduce((object, axis) => {
      object[axis] = Math.abs(state[axis] + rotate[axis]);
      return object;
    }, {});
  
  const getRotation = (state, size, rotate) => {
    const axis = rotate.x ? "Z" : "Y";
    const direction = rotate.x > 0 ? -1 : 1;
  
    return `
      rotateX(${state.x + rotate.x}deg)
      rotate${axis}(${direction * (state.y + rotate.y)}deg)
      translateZ(${size / 2}px)
    `;
  };