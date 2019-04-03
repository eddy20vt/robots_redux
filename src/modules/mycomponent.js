export const CARGA_ROBOTS = 'CARGA_ROBOTS'

const robotsInicial = []

export function robots (state = robotsInicial, { type, payload }) {
    if (type === CARGA_ROBOTS) {
        console.log(type)
        return [ ...state, payload ]
    }

    return state
}

export const addRobot = robot => ({ type: CARGA_ROBOTS, payload: robot })
