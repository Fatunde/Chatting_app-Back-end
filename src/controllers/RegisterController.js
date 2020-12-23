const User = require('../models/User');
const bcrypt = require('bcrypt')

module.exports = {
     async store(req, res){
         try {
           const {firstName, lastName, password, email} = req.body
            const existedUser = await User.findOne({email});
            if(!existedUser){
                const hashedPassword = await bcrypt.hash(password, 10)

               const user = await User.create({
               firstName,
               lastName,
               password: hashedPassword,
               email
           });
           return res.json(user)
            }
          return res.status(400).json({ message: "Email already exist"})
         } catch (error) {
             throw Error(`Error while trying to register user: ${error}`)
         }
     }
}