/**
 * Consumes a single temperature in Fahrenheit (a number) and converts to Celsius
 * using this formula:
 *      C = (F - 32) * 5/9
 */
export function fahrenheitToCelius(temperature: number): number {
    let Celsius: number = 0;
    Celsius = ((temperature - 32) * 5) / 9;

    return Celsius;
}

/**
 * Consumes three numbers and produces their sum. BUT you should only add a number
 * if the number is greater than zero.
 */
export function add3(first: number, second: number, third: number): number {
    let Sum: number = 0;

    if (first > 0) {
        Sum += first;
    }

    if (second > 0) {
        Sum += second;
    }

    if (third > 0) {
        Sum += third;
    }

    return Sum;
}

/**
 * Consumes a string and produces the same string in UPPERCASE and with an exclamation
 * mark added to the end.
 */
export function shout(message: string): string {
    let Upper = message.toUpperCase();

    return `${Upper}!`;
}

/**
 * Consumes a string (a message) and returns a boolean if the string ends in a question
 * mark. Do not use an `if` statement in solving this question.
 */
export function isQuestion(message: string): boolean {
    let question = false;
    let last = message.at(-1);
    question = last === "?";
    return question;
}

/**
 * Consumes a word (a string) and returns either `true`, `false`, or `null`. If the string
 * is "yes" (upper or lower case), then return `true`. If the string is "no" (again, either
 * upper or lower case), then return `false`. Otherwise, return `null`.
 */
export function convertYesNo(word: string): boolean | null {
    let YesNo = null;

    if (word === "yes" || word === "Yes" || word === "YES") {
        YesNo = true;
    }

    if (word === "no" || word === "No" || word === "NO") {
        YesNo = false;
    }

    return YesNo;
}
