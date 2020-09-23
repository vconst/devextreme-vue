import vue2Stategy from "./strategy/vue2";
import vue3Stategy from "./strategy/vue3";
import { isVue3 } from "./version";

const strategy = isVue3() ? vue3Stategy : vue2Stategy;

export const createComponent = strategy.createComponent;

export const createConfigurationComponent = strategy.createConfigurationComponent;

export const createExtensionComponent = strategy.createExtensionComponent;
