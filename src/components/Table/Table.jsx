import React, { useEffect, useState } from 'react';
import apiService from '../../store/actionsCreators/TableActionCreator';
import classes from './Table.module.css'
export const ThemeContext = React.createContext("null");
import ReactSwitch from "react-switch";
import ButtonRegistration from '../UI/Buttons/ButtonRegistration';
import { Grid } from '@mui/material';

const Table = () => {

  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"))
  }

  useEffect(() => {
    fetchDataFromAPI();
  }, [])

  const fetchDataFromAPI = async () => {
    try {
      const fetchedData = await apiService.getData();
      setData(fetchedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSave = async (editedData) => {
    try {
      await apiService.updateData(editedData);
      setData((prevData) =>
        prevData.map((item, index) => (index === editIndex ? editedData : item))
      );
      setEditIndex(null);
      fetchDataFromAPI();

    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
  };

  const handleDelete = async (id) => {
    try {
      await apiService.deleteData(id);
      setData((prevData) => prevData.filter((item) => item.id !== id));
      fetchDataFromAPI();

    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={classes.container} id={theme}>
        <div className={classes.switch} >
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ marginTop: 100, width: "100%" }}>
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Password</th>
                <th>Phonenumber</th>
                <th>Country</th>
                <th className={classes.th} >Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={item.id}>
                  <td>
                    {item.id}
                  </td>
                  <td>
                    {editIndex === index ? (
                      <input
                        style={{ width: 90 }}
                        value={item.first_Name}
                        onChange={(e) =>
                          setData((prevData) =>
                            prevData.map((dataItem) =>
                              dataItem.id === item.id ? { ...dataItem, first_Name: e.target.value } : dataItem
                            )
                          )
                        }
                      />
                    ) : (
                      item.first_Name
                    )}
                  </td>
                  <td>
                    {editIndex === index ? (
                      <input
                        style={{ width: 90 }}
                        value={item.last_Name}
                        onChange={(e) =>
                          setData((prevData) =>
                            prevData.map((dataItem) =>
                              dataItem.id === item.id ? { ...dataItem, last_Name: e.target.value } : dataItem
                            )
                          )
                        }
                      />
                    ) : (
                      item.last_Name
                    )}
                  </td>
                  <td>
                    {editIndex === index ? (
                      <input
                        style={{ width: 90 }}
                        value={item.username}
                        onChange={(e) =>
                          setData((prevData) =>
                            prevData.map((dataItem) =>
                              dataItem.id === item.id ? { ...dataItem, username: e.target.value } : dataItem
                            )
                          )
                        }
                        disabled />
                    ) : (
                      item.username
                    )}
                  </td>
                  <td>

                    {editIndex === index ? (
                      <input
                        style={{ width: 120 }}
                        value={item.email}
                        onChange={(e) =>
                          setData((prevData) =>
                            prevData.map((dataItem) =>
                              dataItem.id === item.id ? { ...dataItem, email: e.target.value } : dataItem
                            )
                          )
                        }
                      />
                    ) : (
                      item.email
                    )}
                  </td>
                  <td>
                    {editIndex === index ? (
                      <input
                        type="password"
                        value={item.password}
                        onChange={(e) =>
                          setData((prevData) =>
                            prevData.map((dataItem) =>
                              dataItem.id === item.id ? { ...dataItem, password: e.target.value } : dataItem
                            )
                          )
                        }
                        disabled />
                    ) : (
                      item.password
                    )}
                  </td>
                  <td>
                    {editIndex === index ? (
                      <input
                        style={{ width: 100 }}
                        value={item.phone_Number}
                        onChange={(e) =>
                          setData((prevData) =>
                            prevData.map((dataItem) =>
                              dataItem.id === item.id ? { ...dataItem, phone_Number: e.target.value } : dataItem
                            )
                          )
                        }
                      />
                    ) : (
                      item.phone_Number
                    )}
                  </td>
                  <td>
                    {editIndex === index ? (
                      <input
                        style={{ width: 30 }}
                        value={item.country}
                        onChange={(e) =>
                          setData((prevData) =>
                            prevData.map((dataItem) =>
                              dataItem.id === item.id ? { ...dataItem, country: e.target.value } : dataItem
                            )
                          )
                        }
                      />
                    ) : (
                      item.country
                    )}
                  </td>
                  <td>
                    {editIndex === index ? (
                      <>
                        <Grid container >
                          <Grid item sm={6} md={6}>
                            <ButtonRegistration className={classes.button1} onClick={() => handleSave({ ...item })}>Save</ButtonRegistration>
                          </Grid>
                          <Grid item sm={6} md={6}>
                            <ButtonRegistration className={classes.button1} onClick={() => setEditIndex(null)}>Cancel</ButtonRegistration>
                          </Grid>
                        </Grid>
                      </>
                    ) : (
                      <>
                        <Grid container >
                          <Grid item sm={6} md={6}>
                            <ButtonRegistration className={classes.button1} onClick={() => handleEdit(index)}>Edit</ButtonRegistration>
                          </Grid>
                          <Grid item sm={6} md={6}>
                            <ButtonRegistration className={classes.button1} onClick={() => handleDelete(item.id)}>Delete</ButtonRegistration>
                          </Grid>
                        </Grid>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </ThemeContext.Provider >
  );
};

export default Table;
