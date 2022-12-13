import React, {Component} from 'react';

class ItemEdit extends Component {
    render() {
        return(
            <tr>
                <td className="text-center">6</td>
                <td><input type="text" className="form-control" defaultValue="F1 muốn tổ chức giải đua xe tại Việt Nam vào năm 2020" /></td>
                <td className="text-center">
                    <select className="form-control">
                        <option>Small</option>
                        <option>Medium</option>
                        <option>High</option>
                    </select>
                </td>
                <td>
                    <button type="button" className="btn btn-default btn-sm">Cancel</button>
                    <button type="button" className="btn btn-success btn-sm">Save</button>
                </td>
            </tr>
        )
    }
}

export default ItemEdit;
