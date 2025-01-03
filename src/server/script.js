import { gs } from '@servicenow/glide'

export function showStateUpdate(current, previous) {
    const currentState = current.getValue('state')
    const previousState = previous.getValue('state')

    gs.addInfoMessage(`state was just carefully updated from "${previousState}" to "${currentState}"`)
}
