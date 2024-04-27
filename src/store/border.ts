import { createEvent, createStore } from "effector";

export const $idActiveBorder = createStore<number>(0)

export const setIdActiveBorder = createEvent<number>();

$idActiveBorder.on(setIdActiveBorder, (_, newId) => newId)