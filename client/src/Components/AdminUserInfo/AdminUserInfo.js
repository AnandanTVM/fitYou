import React from 'react';
import './AdminUserInfo';

function AdminUserInfo() {
  return (
    <div className="container">
      <div className="row mt-4">
        <h1> User Informations</h1>
      </div>
      <div className="row">
        <div>
          <table class="table" >
            <thead >
              <tr className="table-warning" style={{backgroundColor:"#ef553b"}}>
                <th scope="col" style={{backgroundColor:"#ef553b"}}>#</th>
                <th scope="col" style={{backgroundColor:"#ef553b"}}>First</th>
                <th scope="col" style={{backgroundColor:"#ef553b"}}>Last</th>
                <th scope="col" style={{backgroundColor:"#ef553b"}}>Handle</th>
              </tr>
            </thead>
            <tbody style={{color:"#e6e6e6"}} >
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminUserInfo;
