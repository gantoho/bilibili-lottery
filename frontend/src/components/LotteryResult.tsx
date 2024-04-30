import React from "react";
import type { Winner} from "../types";

export default function LotteryResult({
    winners,
    setWinners,
}: {
    winners: Winner[];
    setWinners: (winners: Winner[]) => void;
}) {
    return (
        <div className="space-y-8 divide-y divide-gray-200">
            <div className="px-6 lg:px-8">
                <div className="mt-8 flow-root">
                    <div className="-my-2 -mx-6 overflow-x-auto lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">
                                中奖名单
                            </h3>
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead>
                                <tr>
                                    <th
                                        scope="col"
                                        className="py-3.5 pl-6 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                                    >
                                        ID
                                    </th>
                                    <th
                                        scope="col"
                                        className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
                                    >
                                        昵称
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                {winners.map((winner) => (
                                    <tr key={String(winner.uid)}>
                                        <td className="whitespace-nowrap py-4 pl-6 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                            {String(winner.uid)}
                                        </td>
                                        <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                                            {winner.name}
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                            <button
                                type="button"
                                className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                onClick={() => {
                                    setWinners([]);
                                }}
                            >
                                重新开始
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
