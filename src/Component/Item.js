import React, {Component} from 'react';

class Item extends Component {
    render() {
        return(
            <tr>
                <td className="text-center">1</td>
                <td>Tìm thấy mảnh vỡ máy bay rơi ở Iran làm 66 người chết</td>
                <td className="text-center"><span className="label label-danger">High</span></td>
                <td>
                    <button type="button" className="btn btn-warning btn-sm">Edit</button>
                    <button type="button" className="btn btn-danger btn-sm">Delete</button>
                </td>
            </tr>
        )
    }
}

export default Item;
