import React from 'react';
const Datatable = () => {
    return (
        <div className="">
            <div className="col-span-12">
                <div className="overflow-auto lg:overflow-visible ">
                    <table className="table space-y-2 text-sm text-gray-400 border-separate">
                        <thead className="text-gray-500 bg-gray-800">
                            <tr>
                                <th className="p-3">Brand</th>
                                <th className="p-3 text-left">Category</th>
                                <th className="p-3 text-left">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-gray-800">
                                <td className="p-3">
                                    Technology
                                </td>
                                <td className="p-3 font-bold">
                                    200.00$
                                </td>
                                <td className="p-3">
                                    <span className="px-2 bg-green-400 rounded-md text-gray-50">available</span>
                                </td>
                            </tr>
                            <tr className="bg-gray-800">
                                <td className="p-3">
                                    Technology
                                </td>
                                <td className="p-3 font-bold">
                                    200.00$
                                </td>
                                <td className="p-3">
                                    <span className="px-2 bg-red-400 rounded-md text-gray-50">no stock</span>
                                </td>
                            </tr>
                            <tr className="bg-gray-800">
                                <td className="p-3">
                                    Technology
                                </td>
                                <td className="p-3 font-bold">
                                    200.00$
                                </td>
                                <td className="p-3">
                                    <span className="px-2 bg-yellow-400 rounded-md text-gray-50">start sale</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
export default Datatable;