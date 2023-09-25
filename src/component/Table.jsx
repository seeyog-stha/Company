import React from "react";

export default function Table({ data }) {
  return (
    <div>
      <div>
        <div className="h-[83vh]">
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr className="text-base">
                  <th className="w-3"></th>
                  <th>Name</th>
                  <th>Job</th>
                  <th>status</th>
                  <th>&nbsp;</th>
                </tr>
              </thead>
              <tbody>
                {data.map((obj, index) => (
                  <tr className="hover cursor-pointer" key={obj.id}>
                    <th className="text-xl">{index + 1}</th>
                    <td>
                      <div className="flex space-x-3">
                        {/* image  */}
                        <div className={`avatar ${obj.status=="active"?"online":"offline"}`}>
                          <div className="w-14 h-14 rounded-full border border-gray-400">
                            <img src={obj.image} alt="image" />
                          </div>
                        </div>
                        {/* name  */}
                        <div>
                          <div className="font-bold capitalize text-lg">
                            {obj.name}
                          </div>
                          <div className="text-sm opacity-50 capitalize">
                            {obj.address}
                          </div>
                        </div>
                      </div>
                    </td>
                    {/* post  */}
                    <td>
                      <div className="font-bold text-xl capitalize">{obj.post}</div>
                    </td>
                    <td>
                      <div>{obj.status}</div>
                    </td>
                    {/* details  */}
                    <td>
                      <button className="btn btn-ghost btn-xs">details</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
