import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface ValueProps {
    dhValue: number;
    setValue: React.Dispatch<React.SetStateAction<number>>;
}

function Doubler({ dhValue, setValue }: ValueProps): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setValue(2 * dhValue);
            }}
        >
            Double
        </Button>
    );
}

function Halver({ dhValue, setValue }: ValueProps): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setValue(0.5 * dhValue);
            }}
        >
            Halve
        </Button>
    );
}

export function DoubleHalf(): React.JSX.Element {
    const [dhValue, setValue] = useState<number>(10);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler dhValue={dhValue} setValue={setValue} />
            <Halver dhValue={dhValue} setValue={setValue} />
        </div>
    );
}
