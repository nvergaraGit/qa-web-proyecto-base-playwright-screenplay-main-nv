import { test } from "@playwright/test";
export class Anotations {
    public static given(text) {
        test.info().annotations.push({ type: 'GIVEN', description: text });
    }
    public static when(text) {
        test.info().annotations.push({ type: 'WHEN', description: text });
    }
    public static then(text) {
        test.info().annotations.push({ type: 'THEN', description: text });
    }

    public static log(text) {
        test.info().annotations.push({ type: 'LOG', description: text });
    }

    public static warning(text) {
        test.info().annotations.push({ type: 'WARNING', description: text });
    }

    public static step(text) {
        test.info().annotations.push({ type: 'STEP', description: text });
    }

    public static link(text) {
        test.info().annotations.push({ type: 'LINK', description: text });
    }

}