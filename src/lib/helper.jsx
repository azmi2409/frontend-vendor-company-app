import axios from "axios";

const SERVER = `https://vendor-company.herokuapp.com`;

const getToken = () => {
  const { token } = JSON.parse(localStorage.getItem("token")) || {};
  if (token) {
    return token;
  }
  return null;
};

export async function login(type, data) {
  const server = `${SERVER}/${type}/login`;
  const response = await axios.post(server, data);
  return response.data;
}

//Get all event names from server
export async function getAllVendor() {
  const server = `${SERVER}/company/vendor`;
  const token = getToken();
  const response = await axios.get(server, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

//Get All Appointment
export async function getAllAppointment() {
  const server = `${SERVER}/company/appointment`;
  const token = getToken();
  const response = await axios.get(server, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

//Get Appointment by ID
export async function getAppointmentById(id) {
  const server = `${SERVER}/company/appointment/${id}`;
  const token = getToken();
  const response = await axios.get(server, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

//Create appointment
export async function createAppointment(data = {}) {
  const server = `${SERVER}/company/appointment`;
  const token = getToken();
  const date = data.proposed_date;

  //Convert Date
  date.forEach((v, i) => {
    const formattedDate = convertDate(v);
    date[i] = formattedDate;
  });

  const response = await axios.post(server, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

//Convert YYYY-MM-DD to JS Date
function convertDate(date) {
  const dateArray = date.split("-");
  const newDate = new Date(
    parseInt(dateArray[0]),
    parseInt(dateArray[1]) - 1,
    parseInt(dateArray[2])
  );
  return newDate;
}

//Convert JS Date to YYYY-MM-DD
export function convertToLocale(input) {
  const date = new Date(input);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const formattedDate = `${day}-${month}-${year}`;
  return formattedDate;
}

export const getStatus = (status) => {
  let style;

  switch (status) {
    case "pending": {
      style = "text-info text-capitalize";
      break;
    }
    case "confirmed": {
      style = "text-success text-capitalize";
      break;
    }
    case "rejected": {
      style = "text-danger text-capitalize";
      break;
    }
  }

  return <span className={style}>{status}</span>;
};
