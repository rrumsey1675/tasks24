import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [type, change] = useState<QuestionType>("short_answer_question");

    function changeQType(): void {
        change(
            type === "multiple_choice_question" ?
                "short_answer_question"
            :   "multiple_choice_question",
        );
    }

    return (
        <div>
            Current Question Type:{" "}
            <span>
                {type === "short_answer_question" ?
                    "Short Answer"
                :   "Multiple Choice"}
            </span>
            <div>
                <Button onClick={changeQType}>Change Type</Button>
            </div>
        </div>
    );
}
