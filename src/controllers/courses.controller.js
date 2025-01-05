import fs from "fs/promises";
const getCourse =async (req, res) => {
  try {
    let id = parseInt(req.params.id);
    const data = JSON.parse(await fs.readFile("./courses.json", "utf-8"));
    if (id) {
      const serachData = data.filter((x) => x.id == id);
      if (serachData.length > 0) {
        return res.status(200).json(serachData);
      } else {
        return res.status(404).send("data not found!");
      }
    }
    return res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
}


const serachCourseData=async (req, res) => {
    try {
      const { search } = req.query;
      const data = JSON.parse(await fs.readFile("./courses.json", "utf-8"));
  
      if (search) {
        const searchData = data.filter((x) => x.available == search);
  
        if (searchData.length > 0) {
          return res.status(200).send(searchData);
        } else {
          return res.status(404).send("Data Not Found!");
        }
      }
      return res.status(200).send(data);
    } catch (error) {
      res.json({ message: error });
    }
  }


  export {getCourse,serachCourseData}