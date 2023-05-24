function roundToTwoDecimals(value: number): number {
    if (!isNaN(value)) {
        return Math.round(value * 100) / 100;
    }
    return value;
}
export default roundToTwoDecimals;