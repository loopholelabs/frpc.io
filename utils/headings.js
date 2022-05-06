export function GetHeadings(source) {
    const headingLines = source.split('\n').filter((line) => {
        return line.match(/^#+\s/);
    })

    return headingLines.map((raw) => {
        const text = raw.replace(/^#+\s/, '');
        const level = raw.slice(0, 3) === '###' ? 3 : raw.slice(0, 2) === '##' ? 2 : 1;
        return {
            text,
            level,
        };
    });
}