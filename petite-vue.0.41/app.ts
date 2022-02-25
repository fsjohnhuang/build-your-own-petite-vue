
export const createApp = (initialData?: any) => {
  const ctx = createContext()
  if (initialData) {
    ctx.scope = reactive(initialData)
    bindContextMethods(ctx.scope)

    // handle custom delimiters ......
  }

  // global internal helpers ......

  let rootBlock: Block

  return {
    // directive function for custom directives
    mount(el: Element) {
      rootBlocks = new Block(el, ctx, true)

      return this
    },
    unmount() {
      rootBlock.teardown()
    }
  }
}