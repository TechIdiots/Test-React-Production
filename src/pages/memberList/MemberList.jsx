import "./memberList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../user/user.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
      marginRight: "20px",
    },
  },
}));

export default function MemberList() {
  const classes = useStyles();
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    // <div style={{display: 'flex', flexDirection: 'row'}}>

    <div className="userList">
      <div className="wrapper">
      <input className="id" placeholder="ID"></input>
      <input className="id" placeholder="Search Field"></input>
      <Button
        class="add"
        variant="contained"
        color="primary"
        style={{ marginLeft: "20px", marginBottom: "20px" }}
      >
        Filter
      </Button>
      <Link to="/newUser">
        <Button
          class="add"
          variant="contained"
          color="primary"
          style={{ marginLeft: "20px", marginBottom: "20px" }}
        >
          Add
        </Button>
      </Link>
      </div>
      <div className="grid">
      <DataGrid
        // style={{ marginLeft: "20px", marginRight: "20px", backdropFilter: "blur(35px)", backgroundColor: "rgba(255, 255, 255, 0.8)"}}
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={7}
        checkboxSelection
      />
      </div>
    </div>
  );
}
