User.destroy_all

User.create(name: "Joshua Kappers", email: "jkappers@kalkomey.com", password: "1.kalkomey.1", votes: 100)
User.create(name: "Jay Sparks", email: "jsparks@kalkomey.com", password: "1.kalkomey.1", votes: 100)
User.create(name: "Bradley Griffith", email: "bgriffith@kalkomey.com", password: "1.kalkomey.1", votes: 100)

Card.create(votes: 10, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam imperdiet tempus lorem euismod dictum. Etiam eu nullam.")
Card.create(votes: 5, description: "Phasellus faucibus, risus sed rhoncus eleifend, ligula purus hendrerit mauris, sit amet vulputate sapien arcu at nullam.")
Card.create(votes: 1, description: "Nunc tempus nunc sit amet mi venenatis venenatis. Nulla eu nisl tincidunt, elementum elit ut, lobortis neque massa nunc.")
