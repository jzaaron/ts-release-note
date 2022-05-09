/**
 * Template Literal Types
 */
type VerticalAlignment = "top" | "middle" | "bottom";
type HorizontalAlignment = "left" | "center" | "right";

type Alignment = `${VerticalAlignment}-${HorizontalAlignment}`;

/**
 * New type aliases Uppercase, Lowercase, Capitalize and Uncapitalize
 * 
 * Key Remapping in Mapped Types
 */
type Keys = 'area' | 'height' | 'width';

type Infos = {
    [K in Keys]: number;
}

type Utils = {
    [K in Keys as `get${Capitalize<string & K>}`]: () => Infos[K]
}

/**
 * New type aliases Uppercase, Lowercase, Capitalize and Uncapitalize
 * 
 * Key Remapping in Mapped Types
 */
new Promise<void>((resolve) => {
    resolve();
});
