import chechNumInputs from "./checkNumInputs";

const changeModalState = (state) => {
    const windowForm = document.querySelectorAll(".balcon_icons_img"),
          windowWidth = document.querySelectorAll("#width"),
          windowHeight = document.querySelectorAll("#height"),
          windowType = document.querySelectorAll("#view_type"),
          windowProfile = document.querySelectorAll(".checkbox");

    chechNumInputs("#width");
    chechNumInputs("#height");

    function bindActionToElems (event, element, prop) {
        element.forEach((item, i) => {
            item.addEventListener(event, () => {
                if (element.length > 1) {
                    state[prop] = i;
                } else {
                    state[prop] = item.value;
                }
                console.log(state);
            });
        });
    };

    bindActionToElems("click", windowForm, "form");
    bindActionToElems("input", windowWidth, "width");
    bindActionToElems("input", windowHeight, "height");
    bindActionToElems("change", windowType, "type");
    bindActionToElems("change", windowProfile, "profile");

};
export default changeModalState;