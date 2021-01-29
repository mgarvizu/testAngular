const faker = require('faker');
module.exports = () => {
  const data = {
    users: [],
    persons: []
  }
  for (let id = 0; id < 1000; id++) {
      data.users.push({
        "id": id,
        "address": faker.address.streetAddress(),
        "latitude": faker.address.latitude(),
        "longitude": faker.address.longitude(),
        "first_name": faker.name.firstName(),
        "phone": faker.phone.phoneNumber('########')
      });
    }

  for (let id = 0; id < 1000; id++) {
    data.persons.push({
      "id": id,
      "address": faker.address.streetAddress(),
      "latitude": faker.address.latitude(),
      "longitude": faker.address.longitude(),
      "first_name": faker.name.firstName()
    });
  }

    return data

}



