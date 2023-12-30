import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ChangeDAta from "./ChangeDAta";
import { SingleDataUrl } from "../../Urls/Urlpath";
export default function Table({ values,setSimValue }) {

  const [error, setError] = useState();
  const navigate = useNavigate();
  const handelDelete = async (id) => {
 
    const conf = confirm("do you want to delete?");

    if (conf) {
       try {
        await ChangeDAta(SingleDataUrl + id, "DELETE");
        const filteredData = values.filter((items) => items.id !== id);
          setSimValue(filteredData);
      } catch (err) {
        setError("sorry!! error occured while deleting the record" + err);
      }
    }
  };
  return (
    <div>
      <div>
       {error&& <div className="alert alert-error">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{error}</span>
        </div>}
        <div className="h-[75vh] lg:h-[87vh] overflow-y-scroll">
          <div className="overflow-x-auto ">
            <table className="table table-zebra">
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
                {values.map((obj, index) => (
                  <tr
                    className="hover cursor-pointer "
                    key={obj.id}
                    onDoubleClick={() => {
                      navigate(`/Staff/${obj.id}`);
                    }}
                  >
                    <th className="text-xl">{index + 1}</th>
                    <td>
                      <div className="flex space-x-3">
                        {/* image  */}
                        <div
                          className={`avatar ${
                            obj.data.status == "active" ? "online" : "offline"
                          } w-12 h-12`}
                        >
                          <div className="w-12 h-12 rounded-full border border-gray-400">
                            <img src={obj.data.image} alt="image" />
                          </div>
                        </div>
                        {/* name  */}
                        <div>
                          <div className="font-bold capitalize text-lg">
                            {obj.data.name}
                          </div>
                          <div className="text-sm opacity-50 capitalize">
                            {obj.data.address}
                          </div>
                        </div>
                      </div>
                    </td>
                    {/* post  */}
                    <td>
                      <div className="font-bold text-xl capitalize">
                        {obj.data.post}
                      </div>
                    </td>
                    <td>
                      <div>{obj.data.status}</div>
                    </td>
                    <td>
                      <div className="flex">
                        {/* details  */}
                        <Link to={`/Staff/${obj.id}`}>
                          <button className="btn btn-ghost">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 1024 1024"
                              className="icon w-7 "
                              version="1.1"
                            >
                              <path
                                d="M917.251764 802.39026L786.571232 671.643176c-2.964148-2.993841-10.321788 0.260067-18.916281 6.447406l-10.6781-10.6781c54.596637-70.942966 51.407234-171.245844-8.531013-239.190875v-36.821988l0.130034 0.456653c0-70.649111-67.455613-136.867871-103.689891-172.419217l-8.270946-8.204393C529.76441 104.382037 485.22847 95.460924 448.830371 95.460924l-12.371606-0.063481H150.778377c-16.995473 0-47.336266 12.89174-47.336267 38.675221v756.025661c0 21.3562 17.31902 38.741773 38.675221 38.741773h567.587758c21.3562 0 38.741773-17.385573 38.741773-38.741773V753.360488c37.278641 37.308333 108.900443 108.934231 108.900443 108.934231 12.958293 12.89174 72.926232-46.882685 59.904459-59.904459z"
                                fill="#27323A"
                              />
                              <path
                                d="M707.231382 652.173997c-54.856704 54.890492-144.259299 54.957045-199.149791 0-54.887421-54.953973-54.887421-144.352473 0-199.242965 26.566753-26.566753 61.924584-41.151999 99.559537-41.151999 37.698434 0 73.022477 14.585246 99.58923 41.151999 54.891516 54.953973 54.891516 144.288992 0.001024 199.242965z"
                                fill="#FFFFFF"
                              />
                              <path
                                d="M603.214872 244.570368l8.657974 8.527941c15.171933 14.848385 36.464652 35.944518 54.53418 59.447806-35.521654-13.28184-75.11018-15.8221-110.333882-17.252468-1.10682-23.442878-5.600653-71.299278-21.486234-112.841378 18.683859 14.651799 41.14688 34.57456 68.627962 62.118099z"
                                fill="#79CCBF"
                              />
                              <path
                                d="M150.648343 881.633865V142.800262c0.130033-0.066553 0.650167-0.263139 0.650168-0.263138h285.03022l12.371607 0.066552c6.25082 0 14.518694 0.130033 26.436719 4.100661l5.990753 6.25082c32.36092 31.970819 44.015806 111.604524 44.015806 157.377318 0 8.400979 6.64092 15.368519 15.10538 15.692066l6.510887 0.263139c48.899739 1.887021 109.844465 4.230694 146.863039 37.764986l3.383941 3.383941c2.377462 7.487673 3.940935 14.911866 4.201002 22.269506-72.045691-41.412066-165.287856-32.100853-226.853057 29.497112-73.642952 73.642952-73.642952 193.058697 0 266.70165 61.597965 61.594893 154.84013 70.972659 226.886845 29.49404v166.23495H150.648343z"
                                fill="#F4CE73"
                              />
                            </svg>
                          </button>
                        </Link>
                        {/* edit btn  */}
                        <Link to={`/Staff/Update/${obj.id}`}>
                          <button className="btn btn-ghost">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-7 "
                              viewBox="0 0 48 48"
                            >
                              <path
                                fill="#E57373"
                                d="M42.583,9.067l-3.651-3.65c-0.555-0.556-1.459-0.556-2.015,0l-1.718,1.72l5.664,5.664l1.72-1.718C43.139,10.526,43.139,9.625,42.583,9.067"
                              ></path>
                              <path
                                fill="#FF9800"
                                d="M4.465 21.524H40.471999999999994V29.535H4.465z"
                                transform="rotate(134.999 22.469 25.53)"
                              ></path>
                              <path
                                fill="#B0BEC5"
                                d="M34.61 7.379H38.616V15.392H34.61z"
                                transform="rotate(-45.02 36.61 11.385)"
                              ></path>
                              <path
                                fill="#FFC107"
                                d="M6.905 35.43L5 43 12.571 41.094z"
                              ></path>
                              <path
                                fill="#37474F"
                                d="M5.965 39.172L5 43 8.827 42.035z"
                              ></path>
                            </svg>
                          </button>
                        </Link>

                        {/* delete btn  */}
                        <button
                          className="btn btn-ghost"
                          onClick={() => handelDelete(obj.id)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            className="w-7 "
                            viewBox="0 0 48 48"
                          >
                            <path
                              fill="#9575CD"
                              d="M34,12l-6-6h-8l-6,6h-3v28c0,2.2,1.8,4,4,4h18c2.2,0,4-1.8,4-4V12H34z"
                            ></path>
                            <path
                              fill="#7454B3"
                              d="M24.5 39h-1c-.8 0-1.5-.7-1.5-1.5v-19c0-.8.7-1.5 1.5-1.5h1c.8 0 1.5.7 1.5 1.5v19C26 38.3 25.3 39 24.5 39zM31.5 39L31.5 39c-.8 0-1.5-.7-1.5-1.5v-19c0-.8.7-1.5 1.5-1.5l0 0c.8 0 1.5.7 1.5 1.5v19C33 38.3 32.3 39 31.5 39zM16.5 39L16.5 39c-.8 0-1.5-.7-1.5-1.5v-19c0-.8.7-1.5 1.5-1.5l0 0c.8 0 1.5.7 1.5 1.5v19C18 38.3 17.3 39 16.5 39z"
                            ></path>
                            <path
                              fill="#B39DDB"
                              d="M11,8h26c1.1,0,2,0.9,2,2v2H9v-2C9,8.9,9.9,8,11,8z"
                            ></path>
                          </svg>
                        </button>
                      </div>
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
