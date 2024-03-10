require("./Database/Config")
const express = require("express");
const app = express();
const cors = require("cors");
const multer = require('multer');
const Users = require("./Database/Users");
// const languages=require("./Database/Language");
const Language = require("./Database/Language");
// const { check, validationResult } = require("express-validator");
const Jwt = require("jsonwebtoken")

const jwtKey = "CodeBud"


app.use(cors());
app.use(express.json());

const storage = multer.memoryStorage();
const upload = multer({ storage });

// app.post('/signup', upload.single('image'), async (req, res) => {
//   try {
//     const { name, email, username, password, profession, bio } = req.body;

//     const existingUser = await Users.findOne({ $or: [{ username }] });
//     if (existingUser) {
//       return res.status(400).json({ error: 'User with the same email or username already exists' });
//     }

//     const image = {
//       data: req.file.buffer,
//       contentType: req.file.mimetype,
//     };

//     const newUser = new Users({
//       name,
//       email,
//       username,
//       password,
//       profession,
//       bio,
//       image
//     });

//     await newUser.save();

//     res.status(201).send(newUser);
//   } catch (error) {
//     console.error('Error signing up user:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

app.post('/setQues', async (req, res) => {
  try {
    const { userId, languageName, topicName, questions } = req.body;

    // Check if user exists
    let user = await Users.findOne({ _id: userId });

    // If user not found, create new user
    if (!user) {
      user = new Users({ _id: userId });
    }

    // Check if the language exists, if not, create it
    let language = user.language.find(lang => lang.languageName === languageName);
    if (!language) {
      // Create new language with specified topic and questions
      language = { languageName: languageName, topics: [{ topicName: topicName, questions: questions }] };
      user.language.push(language);
    } else {
      // Check if the topic exists, if not, create it
      let topic = language.topics.find(tpc => tpc.topicName === topicName);
      if (!topic) {
        // Create new topic with specified questions
        topic = { topicName: topicName, questions: questions };
        language.topics.push(topic);
      } else {
        // Merge the new questions with existing ones
        topic.questions = [...topic.questions, ...questions];
      }
    }

    await user.save();

    res.status(200).json({ message: "User updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/signup", async (req, res) => {
  let user = new Users(req.body);
  let result = await user.save();
  res.send(result);
  // result = result.toObject();
})

app.post("/login", async (req, res) => {
  let CUsername = req.body.username;
  let user = await Users.findOne({ username: CUsername });
  if (user) {
    let CPassword = req.body.password;
    let SPassword = user.password

    const UserId={
      user:{
        id:user._id
      }
    }
    // let SUsername=user.username
    const authToken= Jwt.sign(UserId,jwtKey,{expiresIn:'3s'})



    if (CPassword === SPassword) {
      res.status(200).send({ user,authToken })

    } else {
      res.status(409).send("enter valid Password")
    }
  }
  else {
    res.status(404).send("User Not Found");
  }
});

app.get("/getUsers", async (req, res) => {
  let users = await Users.find()
  res.send(users)

})

app.post('/setQuestions', async (req, res) => {
  const { userId, languageName, topicName, questions } = req.body;

  // Find the user
  const user = await Users.findById(userId);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  // Find the language
  const language = user.language.find(lang => lang.languageName === languageName);

  if (language) {
    const topic = language.topics.find(topic => topic.topicName === topicName);
    if (topic) {
      return res.json(topic.questions);
    }
    else {

      return res.send(questions);
    }

  }
  else {

    return res.send(questions);
  }

  // Return questions
});

app.post('/addLanguage', async (req, res) => {
  try {
    const { userId, languageName } = req.body;

    // Check if the userId and languageName are provided in the request body
    if (!userId || !languageName) {
      return res.status(400).json({ error: 'userId and languageName are required' });
    }

    // Find the user by userId
    const user = await Users.findById(userId);

    // If user not found, return error
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Check if the languageName is already present in the user's language array
    if (user.language.some(lang => lang.languageName === languageName)) {
      return res.status(400).json({ error: 'Language already exists for this user' });
    }

    // Add the new language to the user's language array
    user.language.push({ languageName, topics: [] });
    await user.save();

    res.status(201).json({ message: 'Language added successfully', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get("/getLanguage/:id", async (req, res) => {
  const userId = req.params.id; // Get the user's ID from the request parameter

  try {
    const user = await Users.findById(userId, "language");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user.language);
  } catch (err) {
    res.status(500).send("Error fetching mycart data");
  }
});

app.get("/getProfile/:id", async (req, res) => {
  const userId = req.params.id; // Get the user's ID from the request parameter

  try {
    const user = await Users.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (err) {
    res.status(500).send("Error fetching mycart data");
  }
});

app.post('/getTopics', async (req, res) => {
  const { userId, languageName } = req.body;

  try {
    // Find user by userId
    const user = await Users.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Find language by languageName
    const language = user.language.find(lang => lang.languageName === languageName);

    if (language) {
      // return res.status(404).json({ error: 'Language not found for the user' });
      const topicNames = language.topics.map(topic => topic.topicName);
      res.send(topicNames );
    }
    else {
      const topicNames = []
      res.send(topicNames)
    }
    // Extract topic names

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post("/updateProfile/:id", upload.single('image'), async (req, res) => {
  try {
    const userId = req.params.id;
    const userData = req.body;
    const imageFile = req.file;

    // Find the user by ID
    let user = await Users.findById(userId);

    // If user not found, return 404
    if (!user) {
      return res.status(404).send('User not found.');
    }

    // Update user profile data if provided
    if (userData) {
      await Users.updateOne({ _id: userId }, { $set: userData });
    }

    // Upload image if provided
    if (imageFile) {
      // Store the image data and content type in the user document
      user.image = {
        data: imageFile.buffer,
        contentType: imageFile.mimetype
      };
      await user.save(); // Save the user with the image data
    }

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/uploadImage/:id', upload.single('image'), async (req, res) => {
  if (!req.file) {
      return res.status(400).send('No image uploaded.');
  }

  try {
      const { userId } = req.params.id;
      const user = await Users.findById(userId);

      if (!user) {
          return res.status(404).send('User not found.');
      }

      // Store the image data and content type in the user document
      if(req.file){
        user.image = {
          data: req.file.buffer,
          contentType: req.file.mimetype
      };

      await user.save(); // Save the user with the image data

      res.send('Image uploaded successfully.');  
      }
else{
  user.image={}
}

      
  } catch (error) {
      console.error(error);
      res.status(500).send('Error saving the image.');
  }
});

app.get('/userImage/:id', async (req, res) => {
  try {
      const user = await Users.findById(req.params.id);
      if (!user || !user.image.data) {
          return res.send({})
      }
      res.set('Content-Type', user.image.contentType);
      res.send(user.image.data);
  } catch (error) {
      console.error(error);
      res.status(500).send('Server error');
  }
});

app.post('/fetchTopicDetails', async (req, res) => {
  const { userId, languageName, topicName } = req.body;

  try {
    // Find the user by userId
    const user = await Users.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Find the language by languageName
    const language = user.language.find(lang => lang.languageName === languageName);

    if (!language) {
      return res.status(404).json({ message: 'Language not found' });
    }

    // Find the topic by topicName
    const topic = language.topics.find(topic => topic.topicName === topicName);

    if (!topic) {
      return res.json({ complete: null }); // Topic not found
    }

    res.json({ complete: topic.complete }); // Return the 'complete' value
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


app.get("/getLanguages", async (req, res) => {
  let languages = await Language.find();
  res.send(languages)
})

app.get('/usernames', async (req, res) => {
  try {
      const users = await Users.find({}, 'username -_id'); // Select only the username field and exclude the id
      const usernames = users.map(user => user.username);
      res.json(usernames);
  } catch (error) {
      res.status(500).send(error);
  }
});

app.get("/search/:key", async (req, res) => {
  let result = await Language.find({
    $or: [
      { name: { $regex: req.params.key, $options: "i" } },
    ],
  });
  res.send(result);
});

// { description: { $regex: req.params.key, $options: "i" } },

app.listen(5000, () => {
  console.log(`Server is running on port 5000`);
});
