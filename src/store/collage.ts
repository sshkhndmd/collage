import { createEvent, createStore } from "effector";

export const $idActiveCollage = createStore<number>(0)

export const setIdActiveCollage = createEvent<number>();

$idActiveCollage.on(setIdActiveCollage, (_, newId) => newId)