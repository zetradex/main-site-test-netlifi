export const SpreadCalculate = (spread: number): number => {
    const spreadString = spread.toString();
    const decimalCount = spreadString.split('.')[1]?.length || 0;

    if (decimalCount === 2 || decimalCount === 3) {
        const roundedSpread = spread * 100;
        return Number(roundedSpread.toFixed(2));
    } else if (decimalCount === 4 || decimalCount === 5) {
        const roundedSpread = spread * 10000;
        return Number(roundedSpread.toFixed(2));
    } else if (decimalCount === 1) {
        const roundedSpread = spread * 10;
        return Number(roundedSpread.toFixed(2));
    } else {
        return spread;
    }
};