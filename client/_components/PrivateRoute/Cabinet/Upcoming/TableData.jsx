import React from 'react';

const TableData = ({booking, removeItem}) => (

                        <tr>
                            <td>{booking.id}</td>
                            <td>{booking.firstName}</td>
                            <td>{booking.date.time}</td>
                            <td>{booking.date.date}</td>
                            <td>{booking.specialist}</td>
                            <td className="text-danger" onClick={() => (removeItem(booking._id))}>DELETE</td>
                        </tr>

);

export default TableData;