import {
  effect as rawEffect,
  reactive,
  ReactiveEffectRunner
} from '@vue/reactivity'


export interface Context {
  key?: any
  /* Execution scope as the same as that of JavaScript or other programming language.
   * And the scopes will assemble a scope chain as the prototype chain for JavaScript.
   */
  scope: Record<string, any>
  // Refers to the blocks belong to this context
  blocks: Block[]
  // A function used to add effect function to this context.
  effect: typeof rawEffect
  effects: ReactiveEffectRunner[]
  cleanups: (()=>void)[]
}

export const createContext = (parent? Context): Context => {
  const ctx: Context = {
    ...parent,
    scope: parent ? parent.scope : reactive({}),
    effects: [],
    blocks: [],
    cleanups: [],
    effect: fn => {
      // when the parent element or current one has v-once property, do not track the state change.
      if (inOnce) {
        queueJob(fn)
        return fn as any
      }
      

    }
  }
}