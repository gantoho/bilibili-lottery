import React, {useEffect, useState} from "react";
import type {Winner} from "../types";
import LotteryForm from "../components/LotteryForm";
import LotteryResult from "../components/LotteryResult";

export default function Lottery() {
    const [winners, setWinners] = useState<Winner[]>([]);

    return (
        <div className="mt-8 mx-auto max-w-xl">
            {winners.length === 0 ? (
                <LotteryForm setWinners={setWinners} />
            ) : (
                <LotteryResult winners={winners} setWinners={setWinners} />
            )}
        </div>
    );
}
