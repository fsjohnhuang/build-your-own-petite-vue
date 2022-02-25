export { createApp } from './app'
export { nextTick } from './scheduler'
export { reactive} from '@vue/reactivity'

import { createApp } from './app'

/**
 * Get the current running HTMLScriptElement instance, if there is an init property, call petite-vue to work.
 */
const s = document.currentScript
if (s && s.hasAttribute('init')) {
  createApp().mount()
}
