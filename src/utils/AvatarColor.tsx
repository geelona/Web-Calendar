const colors = [
    "#FF5733",
    "#33FF57",
    "#3357FF",
    "#FF33A1",
    "#A133FF",
    "#FF8C33",
    "#33FFA1",
    "#8C33FF",
    "#FF3357",
    "#33FF8C",
    "#33A1FF",
    "#57FF33",
    "#A1FF33",
    "#5733FF",
];

export function getAvatarColor(char: string) {
    const index = char.charCodeAt(0) % colors.length;
    return colors[index];
}
