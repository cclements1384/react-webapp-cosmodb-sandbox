import React from "react";

export const Admin = () => (
    <div>
        <h1>Todo List:</h1>
       <br/>    
            <table>
                <tr>
                    <td> Id: </td>
                    <td> <input id="id" type="text" /></td>
                </tr>
                <tr>
                    <td> Category:</td>
                    <td>  <select id="category">
                        <option value="0" >Personal</option>
                        <option value="1" >Work</option>
                    </select></td>
                </tr>
                <tr>
                    <td>Name:</td>
                    <td> <input id="name" type="text" /></td>
                </tr>
                <tr>
                    <td> Description:</td>
                    <td> <input id="description" type="text" /></td>
                </tr>
                <tr>
                    <td colSpan="2"> <input type="submit" text="Save"></input></td>
                </tr>
            </table>
    </div>
);



