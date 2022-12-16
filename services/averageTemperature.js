export const averageTemperature = (max, min) => {
    return Math.round(((max.reduce((a, b) => a + b, 0) / max.length) + (min.reduce((a, b) => a + b, 0) / min.length)) / 2)
}
