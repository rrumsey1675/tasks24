import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [leftValue, setLeftValue] = useState<number>(4);
    const [rightValue, setRightValue] = useState<number>(1);

    function rollLeft(): void {
        setLeftValue(d6());
    }
    function rollRight(): void {
        setRightValue(d6());
    }

    return (
        <div>
            Left Die: <span data-testid="left-die">{leftValue}</span>
            <div>
                Right Die: <span data-testid="right-die">{rightValue}</span>
            </div>
            <div>
                <Button onClick={rollLeft}>Roll Left</Button>
                <Button onClick={rollRight}>Roll Right</Button>
                <div>
                    {leftValue === rightValue && leftValue === 1 ?
                        <span>You Lose</span>
                    : leftValue === rightValue && leftValue != 1 ?
                        <span>You Win</span>
                    :   <span>Roll Again</span>}
                </div>
            </div>
        </div>
    );
}
