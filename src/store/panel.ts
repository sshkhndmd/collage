import { createEvent, createStore } from "effector";
import { PANELS } from "../types/panels";

export const $activePanel = createStore<PANELS>(PANELS.HOME);

export const setActivePanel = createEvent<PANELS>();

$activePanel.on(setActivePanel, (_, newPanel) => newPanel)