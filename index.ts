import express from "express";
import cors from "cors";
import { houses, residents } from "./data";

const app = express();
const port = 3333;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/residents", (req, res) => {
  let showResidents = residents.map((resident) => {
    let house = houses.find((house) => house.id === resident.houseId);
    return { ...resident, house };
  });

  res.send(showResidents);
});

app.get("/residents/:id", (req, res) => {
  const id = Number(req.params.id);
  const resident = residents.find((resident) => resident.id === id);
  let house = houses.find((house) => house.id === resident?.houseId);
  if (resident) res.send({ resident, house });
  else res.status(404).send({ error: "Resident not found" });
});

app.get("/houses", (req, res) => {
  let showHouses = houses.map((house) => {
    let eachResident = residents.filter(
      (resident) => resident.houseId === house.id
    );
    return { ...house, eachResident };
  });

  res.send(showHouses);
});

app.get("/houses/:id", (req, res) => {
  const id = Number(req.params.id);
  const house = houses.find((house) => house.id === id);
  let eachResident = residents.filter((resident) => resident.houseId === id);
  if (house) res.send({ house, eachResident });
  else res.status(404).send({ error: "House not found" });
});

app.patch("/residents/:id", (req, res) => {
  let id = Number(req.params.id);
  let match = residents.find((resident) => resident.id === id);

  if (match) {
    if (req.body.name) {
      match.name = req.body.name;
    }

    if (req.body.age) {
      match.age = Number(req.body.age);
    }
    if (req.body.gender) {
      match.gender = req.body.gender;
    }

    if (req.body.houseId) {
      match.houseId = Number(req.body.houseId);
    }

    res.send(match);
  } else {
    res.status(404).send({ error: "Resident not found." });
  }
});

app.patch("/houses/:id", (req, res) => {
  let id = Number(req.params.id);
  let match = houses.find((house) => house.id === id);

  if (match) {
    if (req.body.address) {
      match.address = req.body.address;
    }

    if (req.body.type) {
      match.type = req.body.type;
    }

    res.send(match);
  } else {
    res.status(404).send({ error: "House not found." });
  }
});

app.listen(port, () => {});
