import { addBtnhandlers, alertTestBtnHandler } from "./handlers";
import { addBtn, alertTestBtn } from "./selectors";

const listener = () => {

    addBtn.addEventListener("click", addBtnhandlers);
    alertTestBtn.addEventListener("click", alertTestBtnHandler);
}

export default listener;